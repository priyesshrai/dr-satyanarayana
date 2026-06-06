import { Role } from "@/app/generated/prisma/enums";
import prisma from "@/lib/prisma";
import bcrypt from 'bcryptjs'

async function Seed() {
    try {
        console.log("Seeding Data to db!!");

        const docEmail = "priyesh@gmail.com";
        const docPass = "Priyeshrai1@";

        const hashedPassword = await bcrypt.hash(docPass, 10);

        const doc = await prisma.user.create({
            data: {
                name: "Priyesh Rai",
                email: docEmail,
                phone: "+91 9569719493",
                password: hashedPassword,
                role: Role.DOCTOR,

                doctorProfile: {
                    create: {
                        specialization: "Gynecologist",
                        experience: 10,
                        consultationFee: 699,
                        bio: "Experienced gynecologist specializing in women's health and pregnancy care.",
                    },
                },
            },

            include: {
                doctorProfile: true,
            },
        })
        console.log("Doctor created:", doc);

    } catch (error) {
        console.log("Error while seedin data", error);
        return new Error("Error!!")
    }
}

Seed()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
