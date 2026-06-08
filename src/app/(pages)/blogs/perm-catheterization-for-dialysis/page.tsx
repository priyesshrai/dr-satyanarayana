import { Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Perm Catheterization (Permcath Insertion) for Dialysis Access",
    description:
        "Perm catheterization, also called tunneled cuffed catheter insertion, is a safe dialysis access procedure used when AV fistula is not available.",
    alternates: {
        canonical: "https://www.drsatyanarayanagarre.in/blogs/perm-catheterization-for-dialysis",
    },
}

export default function PermCathBlogPage() {
    return (
        <Section>
            <Wrapper>
                <div className="relative w-full max-w-4xl mx-auto">
                    <h1 className="md:text-4xl text-dark-navy font-bold">
                        Perm Catheterization for Dialysis: A Nephrologist&apos;s Practical Guide
                    </h1>

                    <span className="text-sm italic font-normal text-zinc-700 block mt-2">
                        By Dr. Satyanarayana Garre, Nephrologist, Hyderabad
                    </span>

                    <Image
                        src="/images/blog/blog-8.jpg"
                        width={500}
                        height={400}
                        alt="Perm Catheterization for Dialysis"
                        className="mt-7 w-full rounded-2xl"
                    />

                    <div className="mt-5 flex flex-col gap-4">
                        <Subheading className="text-left">
                            When kidney function becomes severely reduced, the kidneys can no longer clean the blood and remove waste.
                            In such situations, dialysis is required. To perform dialysis safely and regularly, a reliable blood
                            access is needed. One such access is perm catheterization, medically known as tunneled cuffed catheter insertion.
                        </Subheading>

                        <h2 className="md:text-3xl font-semibold text-dark-navy">
                            What Exactly Is a Perm Catheter?
                        </h2>

                        <Subheading className="text-left">
                            A Permcath is a soft, flexible tube placed into a large vein, usually in the neck. The correct medical term
                            for this is tunneled cuffed catheter insertion. It has two channels — one to take blood to the dialysis
                            machine and the other to return cleaned blood to the body.
                            <br /><br />
                            The catheter is tunneled under the skin and has a cuff that helps keep it in place and reduces the risk
                            of infection, making it suitable for medium- to long-term dialysis use.
                        </Subheading>

                        <h2 className="md:text-3xl font-semibold text-dark-navy">
                            Who Needs Perm Catheterization?
                        </h2>

                        <Subheading className="text-left">
                            Perm catheterization is commonly advised for patients who:
                        </Subheading>

                        <ul className="flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal">
                            <li>Require urgent dialysis</li>
                            <li>Do not have a functioning AV fistula</li>
                            <li>Have a failed or blocked fistula</li>
                            <li>Are waiting for a newly created fistula to mature</li>
                            <li>Are not suitable candidates for fistula surgery</li>
                        </ul>

                        <Subheading className="text-left">
                            It provides immediate and dependable access for dialysis treatment.
                        </Subheading>

                        <h2 className="md:text-3xl font-semibold text-dark-navy">
                            Perm Catheterization Procedure – Before, During & After
                        </h2>

                        <Subheading className="text-left font-semibold">Before the Procedure</Subheading>
                        <Subheading className="text-left">
                            Blood tests are done to check clotting and infection risk. Patients are asked to fast for a few hours.
                            The nephrologist explains the procedure and informed consent is taken.
                        </Subheading>

                        <Subheading className="text-left font-semibold">During the Procedure</Subheading>
                        <Subheading className="text-left">
                            The procedure is done under local anesthesia using ultrasound and X-ray guidance. A tunnel is created
                            under the skin of the chest through which the catheter is passed. It usually takes 30–45 minutes.
                        </Subheading>

                        <Subheading className="text-left font-semibold">After the Procedure</Subheading>
                        <Subheading className="text-left">
                            A sterile dressing is applied. The permcath can be used immediately for dialysis and most patients
                            go home the same day.
                        </Subheading>

                        <h2 className="md:text-3xl font-semibold text-dark-navy">
                            Is Perm Catheter Really Permanent?
                        </h2>

                        <Subheading className="text-left">
                            Despite the name, a permcath is not permanent for life. It is meant for medium-term use and can remain
                            for months if cared for properly. It is usually removed once a permanent access like an AV fistula is ready.
                        </Subheading>

                        <h2 className="md:text-3xl font-semibold text-dark-navy">
                            Permcath vs AV Fistula
                        </h2>

                        <Subheading className="text-left">
                            An AV fistula is the best long-term dialysis access because it lasts longer and has a lower infection risk.
                            A permcath is used when dialysis must start immediately or when a fistula is not yet ready.
                        </Subheading>

                        <h2 className="md:text-3xl font-semibold text-dark-navy">
                            Possible Complications
                        </h2>

                        <Subheading className="text-left">
                            Mild soreness is normal. However, seek medical attention if you notice:
                        </Subheading>

                        <ul className="flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal">
                            <li>Fever with chills</li>
                            <li>Redness, swelling, or pus at the catheter site</li>
                            <li>Severe pain or bleeding</li>
                            <li>Difficulty during dialysis due to blockage</li>
                        </ul>

                        <h2 className="md:text-3xl font-semibold text-dark-navy">
                            When to Consult a Nephrologist
                        </h2>

                        <Subheading className="text-left">
                            If kidney function is declining or dialysis is planned, consult a nephrologist early. Proper planning
                            ensures safer dialysis and avoids emergency procedures.
                        </Subheading>

                        <h2 className="md:text-3xl font-semibold text-dark-navy">
                            Conclusion
                        </h2>

                        <Subheading className="text-left">
                            Perm catheterization plays a crucial role in providing immediate and safe dialysis access. With proper
                            care and timely medical guidance, it helps patients receive life-saving dialysis until a permanent access
                            is established.
                            <br /><br />
                            If you need dialysis access or have concerns, consult Dr. Satyanarayana Garre, Nephrologist, Hyderabad,
                            for expert guidance and care.
                        </Subheading>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
