import { Role } from "@/app/generated/prisma/enums";
import { authorize } from "@/lib/authorize";
import { getUser } from "@/lib/get-user";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import z from "zod";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY!,
    key_secret: process.env.RAZORPAY_API_SECRET!,
});

const PENDING_PAYMENT_TTL_MS = 15 * 60 * 1000; // adjust to your checkout window

const DocumentType = z.enum([
    "PRESCRIPTION",
    "LAB_REPORT",
    "SCAN_XRAY",
    "DISCHARGE_SUMMARY",
    "OTHER",
]);

const ContextFileSchema = z.object({
    fileName: z.string().min(1),
    fileUrl: z.url("Invalid file URL"),
    fileType: z.string().min(1),
    fileSize: z.number().int().positive(),
    documentType: DocumentType,
});

const CreateOrderSchema = z.object({
    patientName: z.string(),
    slotId: z.cuid({ error: "Invalid Slot Selection" }).trim(),
    reason: z.string().min(1, "Reason is required").max(1000).trim(),
    symptoms: z.string().max(1000).trim().optional(),
    notes: z.string().max(1000).trim().optional(),
    files: z.array(ContextFileSchema).max(10).optional().default([]),
});

export async function POST(req: NextRequest) {
    try {
        const user = getUser(req);
        if (!user || !user.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { success, message, status } = authorize(req, [Role.PATIENT, Role.DOCTOR]);
        if (!success) {
            return NextResponse.json({ error: message }, { status });
        }

        const body = await req.json();
        const parsed = CreateOrderSchema.safeParse(body);
        if (!parsed.success) {
            return NextResponse.json(
                { error: z.prettifyError(parsed.error) },
                { status: 400 }
            );
        }

        const { slotId, reason, symptoms, notes, files, patientName } = parsed.data;

        const slot = await prisma.timeSlot.findUnique({ where: { id: slotId } });
        if (!slot) {
            return NextResponse.json({ error: "Slot not found" }, { status: 404 });
        }

        // Pull ALL active payments for this slot — not just the current user's —
        // since an abandoned PENDING from anyone can otherwise block the slot.
        const activePayments = await prisma.payment.findMany({
            where: { slotId, status: { in: ["PENDING", "SUCCESS"] } },
        });

        const successPayment = activePayments.find((p) => p.status === "SUCCESS");
        if (successPayment) {
            return NextResponse.json(
                {
                    error:
                        successPayment.userId === user.id
                            ? "You have already booked this slot"
                            : "Slot not available",
                },
                { status: 409 }
            );
        }

        const now = Date.now();
        const isExpired = (p: { createdAt: Date }) =>
            now - p.createdAt.getTime() > PENDING_PAYMENT_TTL_MS;

        const pending = activePayments.filter((p) => p.status === "PENDING");
        const expiredPending = pending.filter(isExpired);
        const livePending = pending.filter((p) => !isExpired(p));

        // Auto-expire stale pending payments instead of leaving them stuck forever.
        if (expiredPending.length > 0) {
            await prisma.payment.updateMany({
                where: { id: { in: expiredPending.map((p) => p.id) } },
                data: { status: "FAILED" }, // use your enum's "expired/failed" value
            });
        }

        const myLivePending = livePending.find((p) => p.userId === user.id);
        const othersLivePending = livePending.find((p) => p.userId !== user.id);

        if (othersLivePending) {
            return NextResponse.json(
                { error: "This slot is currently being booked by someone else. Please try again shortly." },
                { status: 409 }
            );
        }

        if (myLivePending) {
            if (myLivePending.contextId) {
                await prisma.appointmentContext.update({
                    where: { id: myLivePending.contextId },
                    data: {
                        reason,
                        symptoms,
                        notes,
                        patientName,
                        contextDocuments: {
                            deleteMany: {},
                            create: files.map((f) => ({
                                uploadedById: user.id!,
                                fileName: f.fileName,
                                fileUrl: f.fileUrl,
                                fileType: f.fileType,
                                fileSize: f.fileSize,
                                documentType: f.documentType,
                            })),
                        },
                    },
                });
            }

            return NextResponse.json({
                name: user.name,
                email: user.email,
                orderId: myLivePending.razorpayOrderId,
                amount: myLivePending.amount,
                key: process.env.RAZORPAY_API_KEY,
            });
        }

        // No live payment is blocking this slot — safe to create a fresh order.
        const amount = 1800;
        const order = await razorpay.orders.create({
            amount: amount * 100,
            currency: "INR",
            receipt: `receipt_${slotId}}`,
        });

        await prisma.$transaction(async (tx) => {
            const context = await tx.appointmentContext.create({
                data: {
                    userId: user.id!,
                    reason,
                    symptoms,
                    notes,
                    patientName,
                    contextDocuments: {
                        create: files.map((f) => ({
                            uploadedById: user.id!,
                            fileName: f.fileName,
                            fileUrl: f.fileUrl,
                            fileType: f.fileType,
                            fileSize: f.fileSize,
                            documentType: f.documentType,
                        })),
                    },
                },
            });

            await tx.payment.create({
                data: {
                    amount,
                    status: "PENDING",
                    razorpayOrderId: order.id,
                    slotId,
                    userId: user.id!,
                    contextId: context.id,
                },
            });
        });

        return NextResponse.json({
            name: user.name,
            email: user.email,
            orderId: order.id,
            amount,
            key: process.env.RAZORPAY_API_KEY,
        });
    } catch (error) {
        console.error("Error while creating order:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}