import { Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Hematuria: What It Means | Causes, Diagnosis & Treatment",
    description:
        "Hematuria means blood in urine. Learn about visible and microscopic hematuria, causes, diagnosis, treatment options, and when to see a doctor.",
    alternates: {
        canonical: "https://www.drsatyanarayanagarre.in/blogs/what-is-hematuria",
    },
}

export default function Page() {
    return (
        <Section>
            <Wrapper>
                <div className="relative w-full max-w-4xl mx-auto">
                    <h1 className="md:text-4xl text-dark-navy font-bold">
                        Hematuria: What It Means
                    </h1>
                    <span className="text-sm italic font-normal text-zinc-700 block mt-2">
                        By Dr. Satyanarayana Garre, Nephrologist, Hyderabad
                    </span>

                    <Image
                        src="/images/blog/blog-10.png"
                        width={500}
                        height={400}
                        alt="Hematuria blood in urine"
                        className="mt-7 w-full rounded-2xl"
                    />

                    {/* Content */}
                    <div className="mt-5 flex flex-col gap-4">

                        <Subheading className="text-left">
                            Hematuria is the presence of blood in the urine. It can appear as
                            red or pink urine, which is known as gross or visible hematuria.
                            In some cases, blood may be present but not visible to the naked eye.
                            This is called microscopic hematuria and is detected only through
                            urine testing.
                        </Subheading>

                        <Subheading className="text-left">
                            Detecting blood in the urine can be an early warning sign of kidney,
                            bladder, or urinary tract problems. Understanding hematuria, its
                            causes, and treatment options is important for maintaining urinary
                            and kidney health.
                        </Subheading>

                        <h2 className="md:text-3xl font-semibold text-dark-navy">
                            Causes of Hematuria
                        </h2>

                        <Subheading className="text-left">
                            There are many reasons why blood may appear in the urine. While many
                            causes are mild, some may require immediate medical attention.
                        </Subheading>

                        <ul className="flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal font-montserrat">
                            <li>Urinary tract infection (UTI)</li>
                            <li>Kidney or bladder stones</li>
                            <li>Enlarged prostate in older men</li>
                            <li>Prostate infection</li>
                            <li>Kidney disease or trauma</li>
                            <li>Menstrual blood in women</li>
                            <li>Cancer of the bladder, kidney, or urinary tract</li>
                            <li>Use of certain medicines for joint pain or swelling</li>
                            <li>Vigorous physical exercise</li>
                        </ul>

                        <Subheading className="text-left">
                            Although cancer is a less common cause, it can be life-threatening.
                            This is why any episode of blood in the urine should always be
                            evaluated by a doctor.
                        </Subheading>

                        <h2 className="md:text-3xl font-semibold text-dark-navy">
                            Diagnosis and Testing
                        </h2>

                        <Subheading className="text-left">
                            Doctors begin by reviewing medical history and performing a physical
                            examination. Diagnostic tests are then recommended to identify the
                            underlying cause of hematuria.
                        </Subheading>

                        <ul className="flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal font-montserrat">
                            <li>Urine tests to detect blood or abnormal cells</li>
                            <li>Cystoscopy to examine the bladder using a small camera</li>
                            <li>Imaging tests such as ultrasound or CT scans</li>
                        </ul>

                        <Subheading className="text-left">
                            Patients may be classified as low, intermediate, or high risk based
                            on factors such as age, smoking history, family history, workplace
                            exposures, and other health conditions.
                        </Subheading>

                        <Subheading className="text-left">
                            Low-risk patients may only require repeat urine testing and monitoring.
                            Intermediate-risk patients may need ultrasound and cystoscopy.
                            High-risk patients usually require CT scans and cystoscopy to detect
                            small abnormalities.
                        </Subheading>

                        <h2 className="md:text-3xl font-semibold text-dark-navy">
                            Hematuria Treatment
                        </h2>

                        <Subheading className="text-left">
                            Treatment depends entirely on the underlying cause. Not all patients
                            require extensive treatment, especially if the cause is mild or
                            temporary.
                        </Subheading>

                        <ul className="flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal font-montserrat">
                            <li>Medications for infections or inflammation</li>
                            <li>Procedures to remove kidney or bladder stones</li>
                            <li>Surgery or specialised care for tumours or kidney disease</li>
                            <li>Lifestyle changes such as proper hydration</li>
                        </ul>

                        <Subheading className="text-left">
                            Early diagnosis and appropriate treatment help prevent serious
                            complications and protect kidney function.
                        </Subheading>

                        <h2 className="md:text-3xl font-semibold text-dark-navy">
                            When to See a Doctor
                        </h2>

                        <Subheading className="text-left">
                            It is important to consult a doctor if blood is seen in the urine
                            or if symptoms such as pain, swelling, fever, or urinary difficulties
                            occur.
                        </Subheading>

                        <Subheading className="text-left">
                            Regular checkups and urine tests are especially important for people
                            with kidney disease, recurrent urinary infections, or a family
                            history of urinary tract cancers.
                        </Subheading>

                        <h2 className="md:text-3xl font-semibold text-dark-navy">
                            Conclusion
                        </h2>

                        <Subheading className="text-left">
                            Hematuria, or blood in the urine, can result from many conditions,
                            ranging from minor infections to serious kidney or urinary tract
                            diseases. While most causes are not life-threatening, identifying
                            the underlying reason is essential.
                            <br /><br />
                            With proper testing, timely treatment, and regular monitoring,
                            hematuria can be managed effectively while protecting long-term
                            kidney and urinary health.
                        </Subheading>

                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}