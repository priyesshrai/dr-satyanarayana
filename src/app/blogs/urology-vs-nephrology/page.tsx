import { Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Difference Between Urology and Nephrology",
    description:
        "Understand the difference between urology and nephrology, what each specialist treats, and how to choose the right doctor.",
    alternates: {
        canonical:
            "https://www.drsatyanarayanagarre.in/blogs/urology-vs-nephrology",
    },
}

export default function Page() {
    return (
        <Section>
            <Wrapper>
                <div className="relative w-full max-w-4xl mx-auto">

                    {/* TITLE */}
                    <h1 className="md:text-4xl text-3xl text-dark-navy font-bold leading-tight">
                        Difference Between Urology and Nephrology
                    </h1>

                    {/* AUTHOR */}
                    <span className="text-sm italic text-zinc-600 block mt-2">
                        By Dr. Satyanarayana Garre, Nephrologist, Hyderabad
                    </span>

                    {/* IMAGE */}
                    <Image
                        src="/images/blog/difference-between-urology-&-nephrology.png"
                        width={800}
                        height={500}
                        alt="Difference between urology and nephrology"
                        className="mt-7 w-full rounded-2xl shadow-sm"
                    />

                    {/* CONTENT */}
                    <div className="mt-6 flex flex-col gap-5">

                        <Subheading className='text-left'>
                            Many people often get confused between urology and nephrology. The names sound similar, and both are related to the urinary system.
                        </Subheading>

                        <Subheading className='text-left'>
                            In simple words, both deal with urinary health, but they focus on different parts and problems. Knowing the difference helps you choose the right doctor when needed.
                        </Subheading>

                        {/* SECTION */}
                        <h2 className="md:text-3xl text-2xl font-semibold text-dark-navy">
                            What Does a Urologist Treat?
                        </h2>

                        <Subheading className='text-left'>
                            A urologist treats problems related to the urinary tract in both men and women and also handles the male reproductive system.
                        </Subheading>

                        <ul className="list-disc pl-6 text-zinc-600 space-y-1">
                            <li>Urinary tract infections (UTIs)</li>
                            <li>Difficulty in passing urine or leakage</li>
                            <li>Kidney or bladder stones</li>
                            <li>Prostate problems</li>
                            <li>Erectile dysfunction</li>
                            <li>Bladder-related issues</li>
                        </ul>

                        <Subheading className='text-left'>
                            If your problem is related to urine flow, bladder, or male health, a urologist is the right specialist.
                        </Subheading>

                        {/* SECTION */}
                        <h2 className="md:text-3xl text-2xl font-semibold text-dark-navy">
                            What Does a Nephrologist Treat?
                        </h2>

                        <Subheading className='text-left'>
                            A nephrologist focuses on kidney health and how well your kidneys function.
                        </Subheading>

                        <ul className="list-disc pl-6 text-zinc-600 space-y-1">
                            <li>Chronic kidney disease (CKD)</li>
                            <li>Kidney infections</li>
                            <li>Complicated UTIs</li>
                            <li>High blood pressure related to kidneys</li>
                            <li>Abnormal kidney test results</li>
                            <li>Electrolyte imbalance</li>
                        </ul>

                        <Subheading className='text-left'>
                            If your issue is related to kidney function, a nephrologist is the right doctor.
                        </Subheading>

                        {/* SECTION */}
                        <h2 className="md:text-3xl text-2xl font-semibold text-dark-navy">
                            Main Difference Between Urology and Nephrology
                        </h2>

                        <Subheading className='text-left'>
                            The easiest way to understand the difference:
                        </Subheading>

                        <ul className="list-disc pl-6 text-zinc-600 space-y-1">
                            <li><b>Urology:</b> urine flow, bladder, and male reproductive system</li>
                            <li><b>Nephrology:</b> kidney health and kidney function</li>
                        </ul>

                        <Subheading className='text-left'>
                            One focuses on structure and urine passage, while the other focuses on how well kidneys function internally.
                        </Subheading>

                        {/* SECTION */}
                        <h2 className="md:text-3xl text-2xl font-semibold text-dark-navy">
                            Which Doctor Should You Choose?
                        </h2>

                        <Subheading className='text-left'>
                            Choosing between a urologist and a nephrologist can feel confusing, but here’s a simple guide:
                        </Subheading>

                        <ul className="list-disc pl-6 text-zinc-600 space-y-1">
                            <li>Visit a urologist for urine blockage, burning urination, or bladder issues</li>
                            <li>Visit a nephrologist for kidney problems or abnormal test results</li>
                        </ul>

                        <Subheading className='text-left'>
                            In some cases, both specialists may work together, especially for conditions like kidney stones.
                        </Subheading>

                        {/* SECTION */}
                        <h2 className="md:text-3xl text-2xl font-semibold text-dark-navy">
                            Why This Difference Matters
                        </h2>

                        <Subheading className='text-left'>
                            Understanding the difference helps avoid delays in treatment. Many people go to the wrong specialist or ignore early symptoms.
                        </Subheading>

                        <Subheading className='text-left'>
                            Some urinary problems may actually start from the kidneys, and a nephrologist can identify the root cause early.
                        </Subheading>

                        {/* SECTION */}
                        <h2 className="md:text-3xl text-2xl font-semibold text-dark-navy">
                            Conclusion
                        </h2>

                        <Subheading className='text-left'>
                            Urologists deal with urinary tract and male reproductive issues, while nephrologists focus on kidney health and function.
                            <br /><br />
                            If you are facing any kidney-related issue, it is best to consult a specialist early.
                            <br /><br />
                            Dr. Satyanarayana Garre, a nephrology specialist in Hyderabad, provides expert guidance and treatment for kidney diseases.
                        </Subheading>

                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}