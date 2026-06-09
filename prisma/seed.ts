import { Role } from "@/app/generated/prisma/enums";
import prisma from "@/lib/prisma";
import bcrypt from 'bcryptjs'

async function Seed() {
    try {
        console.log("Seeding Data to db!!");

        const docEmail = "info@drsatyanarayanagarre.in";
        const docPass = "Priyeshrai1@";

        const hashedPassword = await bcrypt.hash(docPass, 10);

        const doc = await prisma.user.create({
            data: {
                name: "Doctor Satyanarayana Garre",
                email: docEmail,
                phone: "+91 1234567890",
                password: hashedPassword,
                role: Role.DOCTOR,

                doctorProfile: {
                    create: {
                        specialization: "Nephrologist",
                        experience: 15,
                        consultationFee: 699,
                        bio: "Expert care for kidney disorders, dialysis management, and long-term renal health by Dr. Satyanarayana Garre in Jubilee Hills, Hyderabad.",
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
