import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import { randomInt } from "crypto"
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import { userSchema } from "@/types/user";
import { sendMail } from "@/lib/sendMail";
import { otpTemplate } from "@/lib/otp_templet";


export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { success, error, data } = userSchema.safeParse(body);

        if (!success) {
            return NextResponse.json({ error: z.prettifyError(error) }, { status: 400 })
        }

        const email = data.email.trim().toLowerCase();

        const existingUser = await prisma.user.findUnique({ where: { email } })
        if (existingUser) {
            return NextResponse.json({ error: "This email is already in use, try different email." }, { status: 403 })
        }

        const otp = randomInt(100000, 999999).toString();
        const otpHash = await bcrypt.hash(otp, 10)

        await prisma.emailOTP.create({
            data: {
                email,
                otpHash,
                userData: {
                    ...data
                },
                expiresAt: new Date(Date.now() + 10 * 60 * 1000)
            }
        })

        const mail = await sendMail({
            title: "Verification Code",
            to: [email],
            subject: "Please verify your Email",
            html: otpTemplate(otp)
        });

        if (!mail) {
            return NextResponse.json({ error: mail }, { status: 500 })
        }

        return NextResponse.json({ message: "OTP sent to you email" }, { status: 200 })

    } catch (error) {
        console.log("Error while sending otp!!", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
    }
}

