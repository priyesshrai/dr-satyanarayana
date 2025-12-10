import { Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import type { Metadata } from 'next'
import FAQ from './FAQ'

export const metadata: Metadata = {
    title: "Blood Urea Nitrogen (BUN) – Complete Patient Guide",
    description: "A complete guide for patients to understand Blood Urea Nitrogen (BUN), normal ranges, causes of high or low BUN, symptoms, FAQ, and when to consult a nephrologist.",
    alternates: {
        canonical: "https://www.drsatyanarayanagarre.in/blogs/bun-complete-guide",
    },
}

export default function page() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full max-w-4xl mx-auto'>
                    <h1 className='md:text-4xl text-dark-navy font-bold'>
                        Blood Urea Nitrogen (BUN) – Complete Patient Guide
                    </h1>
                    <span className='text-sm italic font-normal text-zinc-700 block mt-2'>
                        By Dr. Satyanarayana Garre, Nephrologist, Hyderabad
                    </span>

                    <Image
                        src='/images/blog/blog-6.jpg'
                        width={1920}
                        height={1080}
                        alt='Blood Urea Nitrogen (BUN) guide'
                        className='mt-7 w-full rounded-2xl'
                    />

                    <div className='mt-5 flex flex-col gap-4'>

                        <Subheading className='text-left'>
                            Most patients know their creatinine value, but very few understand the importance of BUN — an equally critical kidney parameter. This guide explains what BUN means, why it matters, and when to consult your doctor.
                        </Subheading>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            What Is Blood Urea Nitrogen (BUN)?
                        </h2>
                        <Subheading className='text-left'>
                            BUN measures the amount of urea nitrogen in your blood. Urea forms when the body breaks down proteins. The liver converts toxic ammonia into urea, and the kidneys filter it out through urine.
                            <br /><br />
                            This means BUN reflects:
                            <br />• How well the liver is processing protein waste
                            <br />• How efficiently the kidneys are removing it
                        </Subheading>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            Normal BUN Range
                        </h2>
                        <ul className='flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal'>
                            <li>7–20 mg/dL (commonly used)</li>
                            <li>2.5–7.5 mmol/L</li>
                        </ul>
                        <Subheading className='text-left'>
                            Most patients search for BUN values in mg/dL, which is the more clinically used unit.
                        </Subheading>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            How Is Urea Formed?
                        </h2>
                        <Subheading className='text-left'>
                            When proteins break down into amino acids, ammonia is produced. Since ammonia is toxic, the liver converts it into urea. Urea then enters the bloodstream and is filtered by the kidneys.
                            <br />
                            Therefore, BUN reflects both liver and kidney health.
                        </Subheading>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            What Does a High BUN Mean?
                        </h2>
                        <Subheading className='text-left'>
                            High BUN (above 20 mg/dL) may occur due to:
                        </Subheading>

                        <ul className='flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal'>
                            <li>Kidney disease or reduced filtration</li>
                            <li>Severe dehydration</li>
                            <li>Urinary blockage or stones</li>
                            <li>Heart failure / low blood flow to kidneys</li>
                            <li>High-protein diet</li>
                            <li>Internal bleeding</li>
                            <li>Fever, infections, burns (high catabolism)</li>
                        </ul>

                        <Subheading className='text-left'>
                            Symptoms may include nausea, poor appetite, confusion, headaches, metallic breath, or swelling.
                        </Subheading>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            What Does a Low BUN Mean?
                        </h2>

                        <Subheading className='text-left'>
                            Low BUN (below 7 mg/dL) may be caused by:
                        </Subheading>

                        <ul className='flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal'>
                            <li>Liver disease (cirrhosis, hepatitis)</li>
                            <li>Malnutrition or low protein intake</li>
                            <li>Pregnancy</li>
                            <li>SIADH (excess water retention)</li>
                            <li>Overhydration or excessive IV fluids</li>
                        </ul>

                        <Subheading className='text-left'>
                            Low BUN is usually mild but may indicate liver or nutritional issues.
                        </Subheading>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            When Should You Worry?
                        </h2>

                        <Subheading className='text-left'>
                            Consult your nephrologist if:
                        </Subheading>

                        <ul className='flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal'>
                            <li>BUN is above 25 mg/dL</li>
                            <li>You experience swelling, nausea, or vomiting</li>
                            <li>You have reduced urine output</li>
                            <li>You feel fatigued or confused</li>
                        </ul>

                        <Subheading className='text-left'>
                            These symptoms may indicate dehydration or early kidney impairment.
                        </Subheading>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            Can BUN Alone Diagnose Kidney Disease?
                        </h2>

                        <Subheading className='text-left'>
                            No. BUN must be interpreted along with:
                        </Subheading>

                        <ul className='flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal'>
                            <li>Serum creatinine</li>
                            <li>eGFR</li>
                            <li>Hydration status</li>
                            <li>Medications</li>
                            <li>Clinical symptoms</li>
                        </ul>

                        <Subheading className='text-left'>
                            A high BUN does not always mean kidney failure — dehydration and diet can also raise it.
                        </Subheading>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            Frequently Asked Questions (FAQ)
                        </h2>

                        <FAQ/>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            Final Thoughts
                        </h2>

                        <Subheading className='text-left'>
                            Understanding BUN helps detect kidney, liver, and hydration problems early. If your BUN levels are abnormal, consult a kidney specialist. Early evaluation can prevent serious complications.
                            <br /><br />
                            For expert kidney care in Hyderabad, you can reach out to Dr. Satyanarayana Garre for accurate diagnosis and personalized treatment.
                        </Subheading>

                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
