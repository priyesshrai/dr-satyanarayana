import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { createGoogleMeet } from "@/lib/create_meeting";
import { sendMail } from "@/lib/sendMail";
import { doctorAppointmentEmailTemplate, patientAppointmentEmailTemplate } from "@/lib/appointmentEmailTemplate";
import { generateICS } from "@/lib/generateICS";
import { Prisma } from "@/app/generated/prisma/client";

interface RazorpayPaymentEntity {
    id: string;
    order_id: string;
    amount: number;
    currency: string;
    status: string;
}


function verifyWebhookSignature(body: string, signature: string): boolean {
    const expected = crypto
        .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET!)
        .update(body)
        .digest("hex");
    return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}


export async function POST(req: NextRequest) {
    try {
        const rawBody = await req.text();
        const signature = req.headers.get("x-razorpay-signature");

        // CHANGE: Guard against missing signature header before passing to verify.
        if (!signature) {
            console.warn("[webhook] Missing x-razorpay-signature header");
            return new NextResponse("Missing signature", { status: 400 });
        }

        if (!verifyWebhookSignature(rawBody, signature)) {
            console.warn("[webhook] Signature mismatch — possible spoofed request");
            return new NextResponse("Invalid signature", { status: 400 });
        }

        const event = JSON.parse(rawBody);
        console.log(`[webhook] Received event: ${event.event}`);

        if (event.event !== "payment.captured") {
            // CHANGE: Log which events are being skipped so you can see them in dev.
            console.log(`[webhook] Skipping unhandled event: ${event.event}`);
            return NextResponse.json({ received: true });
        }

        await handlePaymentCaptured(event.payload.payment.entity as RazorpayPaymentEntity);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("[webhook] Unhandled error:", error);
        return new NextResponse("Webhook error", { status: 500 });
    }
}


async function handlePaymentCaptured(payment: RazorpayPaymentEntity) {
    const orderId = payment.order_id;
    const paymentId = payment.id;

    console.log(`[webhook] Processing payment.captured — orderId=${orderId}, paymentId=${paymentId}`);

    // Fetch payment row

    const dbPayment = await prisma.payment.findUnique({
        where: { razorpayOrderId: orderId },
        include: {
            context: {
                include: { contextDocuments: true },
            },
        },
    });

    if (!dbPayment) {
        console.error(`[webhook] No payment row found for orderId=${orderId}`);
        return;
    }

    if (dbPayment.status === "SUCCESS") {
        console.log(`[webhook] Already processed (idempotency guard) — orderId=${orderId}`);
        return;
    }

    console.log(`[webhook] Payment row found — id=${dbPayment.id}, status=${dbPayment.status}`);

    // Fetch slot 
    const slot = await prisma.timeSlot.findUnique({
        where: { id: dbPayment.slotId },
        include: { doctor: { include: { user: true } } },
    });

    if (!slot) {
        console.error(`[webhook] Slot not found — slotId=${dbPayment.slotId}`);
        return;
    }

    console.log(`[webhook] Slot found — slotId=${slot.id}, status=${slot.status}`);

    // Guard: slot already taken by someone else

    if (slot.status === "BOOKED") {
        console.warn(`[webhook] Slot already BOOKED — marking payment FAILED for orderId=${orderId}`);
        await prisma.payment.update({
            where: { id: dbPayment.id },
            data: { status: "FAILED" },
        });
        return;
    }

    // Guard: active appointment already exists

    const existingActive = await prisma.appointment.findFirst({
        where: {
            slotId: dbPayment.slotId,
            status: { in: ["CONFIRMED", "COMPLETED", "PENDING"] },
        },
    });

    if (existingActive) {
        console.warn(`[webhook] Active appointment already exists for slotId=${dbPayment.slotId} — skipping`);
        return;
    }

    // Resolve appointment (re-use cancelled or create new)

    const cancelledByThisUser = await prisma.appointment.findFirst({
        where: {
            slotId: dbPayment.slotId,
            patientId: dbPayment.userId,
            status: "CANCELLED",
        },
        orderBy: { createdAt: "desc" },
    });

    console.log(
        cancelledByThisUser
            ? `[webhook] Re-activating cancelled appointment id=${cancelledByThisUser.id}`
            : `[webhook] Creating new appointment for slotId=${dbPayment.slotId}`
    );

    let appointment: Prisma.AppointmentGetPayload<{ include: { patient: true } }>;

    if (cancelledByThisUser) {
        await prisma.payment.updateMany({
            where: {
                appointmentId: cancelledByThisUser.id,
                status: "REFUNDED",
            },
            data: { appointmentId: null },
        });

        appointment = await prisma.appointment.update({
            where: { id: cancelledByThisUser.id },
            data: {
                patientId: dbPayment.userId,
                status: "CONFIRMED",
                reminder1Sent: false,
                reminder2Sent: false,
            },
            include: { patient: true },
        });
    } else {
        try {
            appointment = await prisma.appointment.create({
                data: {
                    patientId: dbPayment.userId,
                    slotId: dbPayment.slotId,
                    status: "CONFIRMED",
                },
                include: { patient: true },
            });
        } catch (err) {
            console.error("[webhook] Appointment creation failed — marking payment FAILED:", err);
            await prisma.payment.update({
                where: { id: dbPayment.id },
                data: { status: "FAILED" },
            });
            throw err;
        }
    }

    console.log(`[webhook] Appointment resolved — id=${appointment.id}`);

    const patient = appointment.patient;

    //Link context to appointment

    if (dbPayment.contextId) {
        await prisma.appointmentContext.update({
            where: { id: dbPayment.contextId },
            data: { appointmentId: appointment.id },
        });
        console.log(`[webhook] Context linked — contextId=${dbPayment.contextId}`);
    }

    // Mark payment SUCCESS + lock slot — atomically 
    await prisma.$transaction([
        prisma.payment.update({
            where: { id: dbPayment.id },
            data: {
                status: "SUCCESS",
                transactionId: paymentId,
                appointmentId: appointment.id,
            },
        }),
        prisma.timeSlot.update({
            where: { id: dbPayment.slotId },
            data: { status: "BOOKED" },
        }),
    ]);

    console.log(`[webhook] Payment marked SUCCESS and slot marked BOOKED`);

    // Create Google Meet
    let meetLink = "";

    try {
        const existingMeeting = await prisma.meeting.findUnique({
            where: { appointmentId: appointment.id },
        });

        if (existingMeeting) {
            meetLink = existingMeeting.meetingLink;
            console.log(`[webhook] Reusing existing meet link — ${meetLink}`);
        }
        else {
            const doctorEmail = slot.doctor.user.email;

            const meet = await createGoogleMeet({
                startTime: slot.startTime.toISOString(),
                endTime: slot.endTime.toISOString(),
                patientEmail: patient.email,
                doctorEmail,
                otherDocEmail: "satyakishoregarre@gmail.com "
            });

            meetLink = meet.meetLink!;

            await prisma.meeting.create({
                data: {
                    appointmentId: appointment.id,
                    meetingLink: meetLink,
                    googleEventId: meet.eventId!,
                    startTime: slot.startTime,
                    endTime: slot.endTime,
                },
            });

            console.log(`[webhook] Meet created — ${meetLink}`);
        }
    } catch (err) {
        console.error("[webhook] ⚠ Google Meet creation failed (non-fatal):", err);
    }


    const context = dbPayment.context;
    const emailDocuments = (context?.contextDocuments ?? []).map((d) => ({
        fileName: d.fileName,
        fileUrl: d.fileUrl,
        documentType: d.documentType as any,
    }));

    const icsAttachment = {
        filename: "invite.ics",
        content: generateICS({
            doctorName: slot.doctor.user.name,
            startTime: slot.startTime,
            endTime: slot.endTime,
            meetLink,
        }),
        contentType: "text/calendar; method=REQUEST",
    };

    try {
        await sendMail({
            title: `${slot.doctor.user.name} Online Consultation`,
            to: [patient.email],
            subject: "Appointment Confirmed",
            html: patientAppointmentEmailTemplate({
                patientName: patient.name,
                doctorName: slot.doctor.user.name,
                startTime: slot.startTime,
                endTime: slot.endTime,
                meetLink,
            }),
            attachments: [icsAttachment],
        });
        console.log(`[webhook] Patient email sent to ${patient.email}`);
    } catch (err) {
        console.error("[webhook] ⚠ Patient email failed (non-fatal):", err);
    }

    // Doctor email
    const doctorEmail = slot.doctor.user.email;

    try {
        await sendMail({
            title: `${slot.doctor.user.name} Online Consultation`,
            to: [doctorEmail, "satyakishoregarre@gmail.com"],
            subject: "New Appointment Confirmed",
            html: doctorAppointmentEmailTemplate({
                patientName: context?.patientName ?? patient.name,
                doctorName: slot.doctor.user.name,
                startTime: slot.startTime,
                endTime: slot.endTime,
                meetLink,
                reason: context?.reason,
                symptoms: context?.symptoms ?? undefined,
                notes: context?.notes ?? undefined,
                documents: emailDocuments,
            }),
            attachments: [icsAttachment],
        });
        console.log(`[webhook] Doctor email sent to ${doctorEmail}`);
    } catch (err) {
        console.error("[webhook] ⚠ Doctor email failed (non-fatal):", err);
    }

    console.log(`[webhook] ✓ Done — appointmentId=${appointment.id}`);
}