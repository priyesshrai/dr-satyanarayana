import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const AppointmentData = z.object({
    pname: z.string(),
    email: z.string().email(),
    phone: z.string(),
    date: z.string(),
    message: z.string(),
});

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        const appointment_data = {
            pname: formData.get('pname'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            date: formData.get('date'),
            message: formData.get('message'),
        };

        const parsed = AppointmentData.safeParse(appointment_data);

        if (!parsed.success) {
            return NextResponse.json(
                { success: false, message: 'Please provide valid data' },
                { status: 411 }
            );
        }

        const files: File[] = formData.getAll('report') as unknown as File[];

        const attachments = await Promise.all(
            files.map(async (file) => {
                const buffer = Buffer.from(await file.arrayBuffer());
                return {
                    filename: file.name,
                    content: buffer.toString('base64'),
                };
            })
        );

        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: 'info@drsatyanarayanagarre.in',
            subject: 'New Appointment Request',
            html: `
        <h2>New Appointment</h2>
        <p><strong>Name:</strong> ${appointment_data.pname}</p>
        <p><strong>Email:</strong> ${appointment_data.email}</p>
        <p><strong>Phone:</strong> ${appointment_data.phone}</p>
        <p><strong>Date:</strong> ${appointment_data.date}</p>
        <p><strong>Message:</strong> ${appointment_data.message}</p>
      `,
            attachments,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: 'Something went wrong' },
            { status: 500 }
        );
    }
}
