import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactData = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    message: z.string(),
});


export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        const body = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
        }

        const parsed = ContactData.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                { success: false, message: 'Please provide valid data' },
                { status: 411 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'Dr. Satyanarayana Garre <info@drsatyanarayanagarre.in>',
            to: 'info@drsatyanarayanagarre.in',
            subject: 'New Contact Request',
            html: `
             <h2>New Appointment</h2>
             <p><strong>Name:</strong> ${body.name}</p>
             <p><strong>Email:</strong> ${body.email}</p>
             <p><strong>Phone:</strong> ${body.phone}</p>
             <p><strong>Message:</strong> ${body.message}</p>
           `
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