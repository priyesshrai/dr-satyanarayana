import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import { randomInt } from "crypto"
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import { sendMail } from "@/lib/sendMail";
import { Prisma } from "@/app/generated/prisma/client";
import { otpTemplate } from "@/lib/otp_templet";


const LoginSchema = z.object({
    email: z
        .email({ error: "Please enter a valid email address" })
        .trim()
        .min(5, { error: "Email must be at least 5 characters" })
        .max(100, { error: "Email too long" }),
})


export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { success, error, data } = LoginSchema.safeParse(body);

        if (!success) {
            return NextResponse.json({ error: z.prettifyError(error) }, { status: 400 })
        }

        const email = data.email.trim().toLowerCase();

        const user = await prisma.user.findUnique({ where: { email } })
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 403 })
        }

        const otp = randomInt(100000, 999999).toString();
        const otpHash = await bcrypt.hash(otp, 10)

        await prisma.emailOTP.create({
            data: {
                email,
                otpHash,
                userData: Prisma.JsonNull,
                expiresAt: new Date(Date.now() + 10 * 60 * 1000)
            }
        })

        const mail = await sendMail({
            title: "Login Verification Code",
            to: [email],
            subject: "Login Verification Code",
            html: otpTemplate(otp)
        });

        if (!mail) {
            return NextResponse.json({ error: mail }, { status: 500 })
        }

        return NextResponse.json({ message: "OTP sent is sent if you email is registered" }, { status: 200 })

    } catch (error) {
        console.log("Error while sending otp!!", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
    }
}

