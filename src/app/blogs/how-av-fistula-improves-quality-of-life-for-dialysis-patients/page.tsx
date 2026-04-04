import { Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "How AV Fistula Improves Quality of Life for Dialysis Patients",
    description:
        "Learn how AV fistula improves dialysis outcomes, reduces complications, and enhances quality of life for kidney patients.",
    alternates: {
        canonical:
            "https://www.drsatyanarayanagarre.in/blogs/av-fistula-dialysis-benefits",
    },
}

export default function Page() {
    return (
        <Section>
            <Wrapper>
                <div className="relative w-full max-w-4xl mx-auto">

                    {/* TITLE */}
                    <h1 className="md:text-4xl text-3xl text-dark-navy font-bold leading-tight">
                        How AV Fistula Improves Quality of Life for Dialysis Patients
                    </h1>

                    {/* AUTHOR */}
                    <span className="text-sm italic text-zinc-600 block mt-2">
                        By Dr. Satyanarayana Garre, Nephrologist, Hyderabad
                    </span>

                    {/* IMAGE */}
                    <Image
                        src="/images/blog/how-av-fistula-improves-quality-of-life-for-dialysis-patients.jpeg"
                        width={800}
                        height={500}
                        alt="AV fistula for dialysis"
                        className="mt-7 w-full rounded-2xl shadow-sm"
                    />

                    {/* CONTENT */}
                    <div className="mt-6 flex flex-col gap-5">

                        <Subheading className='text-left'>
                            Chronic kidney disease (CKD) is becoming a major health concern worldwide. Many patients progress to end-stage kidney disease (ESKD), where dialysis becomes necessary to survive.
                        </Subheading>

                        <Subheading className='text-left'>
                            For dialysis to work effectively, a reliable vascular access is required. One of the best and most recommended options is an <b>AV fistula (arteriovenous fistula)</b>.
                        </Subheading>

                        {/* SECTION */}
                        <h2 className="md:text-3xl text-2xl font-semibold text-dark-navy">
                            What is an AV Fistula and Why is it Important?
                        </h2>

                        <Subheading className='text-left'>
                            An AV fistula is a small surgical connection made between an artery and a vein, usually in the arm. Over time, the vein becomes stronger and wider, allowing better blood flow for dialysis.
                        </Subheading>

                        <Subheading className='text-left'>
                            Compared to other access methods like catheters, an AV fistula is the safest and most effective long-term option.
                        </Subheading>

                        {/* SECTION */}
                        <h2 className="md:text-3xl text-2xl font-semibold text-dark-navy">
                            Better Dialysis and Improved Health
                        </h2>

                        <Subheading className='text-left'>
                            One of the biggest benefits of an arteriovenous fistula is improved dialysis performance.
                        </Subheading>

                        <ul className="list-disc pl-6 text-zinc-600 space-y-1">
                            <li>Improved energy levels</li>
                            <li>Less toxin buildup</li>
                            <li>Better overall health</li>
                        </ul>

                        <Subheading className='text-left'>
                            When dialysis works efficiently, patients feel more stable and experience fewer complications.
                        </Subheading>

                        {/* SECTION */}
                        <h2 className="md:text-3xl text-2xl font-semibold text-dark-navy">
                            Lower Risk of Infection and Complications
                        </h2>

                        <Subheading className='text-left'>
                            Unlike catheters, an AV fistula uses the patient’s own blood vessels, reducing risks significantly.
                        </Subheading>

                        <ul className="list-disc pl-6 text-zinc-600 space-y-1">
                            <li>Lower infection risk</li>
                            <li>Reduced blood clots</li>
                            <li>Fewer hospital admissions</li>
                        </ul>

                        {/* SECTION */}
                        <h2 className="md:text-3xl text-2xl font-semibold text-dark-navy">
                            Long-Lasting and Reliable Option
                        </h2>

                        <Subheading className='text-left'>
                            Once matured, an AV fistula can last for many years with minimal maintenance.
                        </Subheading>

                        <ul className="list-disc pl-6 text-zinc-600 space-y-1">
                            <li>Long-term durability</li>
                            <li>Fewer repeated procedures</li>
                            <li>Less treatment stress</li>
                        </ul>

                        {/* SECTION */}
                        <h2 className="md:text-3xl text-2xl font-semibold text-dark-navy">
                            Better Lifestyle and Daily Comfort
                        </h2>

                        <Subheading className='text-left'>
                            Since there are no external tubes, patients can live more freely and comfortably.
                        </Subheading>

                        <ul className="list-disc pl-6 text-zinc-600 space-y-1">
                            <li>Easier bathing</li>
                            <li>Safer daily movements</li>
                            <li>Reduced hospital visits</li>
                        </ul>

                        {/* SECTION */}
                        <h2 className="md:text-3xl text-2xl font-semibold text-dark-navy">
                            A Cost-Effective Long-Term Solution
                        </h2>

                        <Subheading className='text-left'>
                            Though the initial procedure has a cost, AV fistula reduces long-term expenses by minimizing complications and hospital visits.
                        </Subheading>

                        {/* SECTION */}
                        <h2 className="md:text-3xl text-2xl font-semibold text-dark-navy">
                            Conclusion
                        </h2>

                        <Subheading className='text-left'>
                            An AV fistula is not just a procedure—it is a long-term solution that improves dialysis efficiency, reduces complications, and enhances quality of life.
                            <br /><br />
                            Choosing the right dialysis access can significantly impact both health outcomes and daily comfort.
                            <br /><br />
                            If you or your loved one requires dialysis, consult a specialist. Dr. Satyanarayana Garre, a nephrology expert in Hyderabad, provides advanced care and guidance for AV fistula and dialysis management.
                        </Subheading>

                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}