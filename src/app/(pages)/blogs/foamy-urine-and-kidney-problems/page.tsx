import { Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import type { Metadata } from 'next'
import { AlertCircle, Droplets, FlaskConical, Clock, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
    title: "Foamy Urine and Kidney Problems – Dr. Satyanarayana Garre",
    description: "Persistent foamy urine can be an early warning sign of kidney disease. Learn about causes, symptoms, when to see a nephrologist, and treatment options from Dr. Satyanarayana Garre.",
    alternates: {
        canonical: "https://www.drsatyanarayanagarre.in/blogs/foamy-urine-and-kidney-problems",
    },
}

const causes = [
    {
        title: "Dehydration",
        body: "When the body lacks enough fluids, urine becomes concentrated and may appear foamy. Drinking more water often helps resolve the problem.",
    },
    {
        title: "Excess Protein in Urine",
        body: "Healthy kidneys prevent important proteins from leaving the body through urine. When the kidneys are damaged, protein may leak into the urine, causing persistent foam — often one of the earliest signs of kidney disease.",
    },
    {
        title: "Diabetes and Kidney Damage",
        body: "Poorly controlled diabetes can damage the kidneys over time. This condition, known as diabetic kidney disease, may lead to protein leakage and foamy urine.",
    },
    {
        title: "Chronic Kidney Disease",
        body: "CKD develops gradually and often shows very few symptoms in the early stages. Foamy urine can sometimes be one of the first visible warning signs.",
    },
    {
        title: "Other Causes",
        body: "Other possible causes include urinary tract infections, certain medications, lupus, and rare conditions that affect protein levels in the body.",
    },
]

const associatedSymptoms = [
    "Swelling in the feet, ankles, or face",
    "Tiredness and weakness",
    "High blood pressure",
    "Changes in urination",
    "Loss of appetite",
    "Nausea",
]

const whenToSee = [
    "Foamy urine continues for several days",
    "The foam becomes more noticeable over time",
    "You have swelling in your legs, feet, or face",
    "You have diabetes or high blood pressure",
    "You notice blood in the urine",
    "You feel unusually tired or weak",
]

const treatments: { condition: string; action: string }[] = [
    { condition: "Dehydration", action: "Increasing water intake" },
    { condition: "Diabetes", action: "Better blood sugar control" },
    { condition: "High blood pressure", action: "Proper medication and lifestyle changes" },
    { condition: "Chronic kidney disease", action: "Kidney-friendly diet, medications, and regular monitoring" },
    { condition: "Urinary tract infections", action: "Appropriate treatment to clear the infection" },
]

export default function Page() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full max-w-4xl mx-auto'>

                    {/* ── Header ── */}
                    <div className='mb-8'>
                        <span className='inline-block text-xs font-semibold tracking-[0.18em] uppercase text-blue-600 mb-4'>
                            Kidney Health · Hyderabad
                        </span>

                        <h1 className='text-3xl md:text-5xl font-bold text-dark-navy leading-tight mb-3'>
                            Foamy Urine<br className='hidden md:block' /> and Kidney Problems
                        </h1>

                        <p className='text-zinc-500 text-sm italic mb-6'>
                            By Dr. Satyanarayana Garre, Nephrologist, Hyderabad
                        </p>

                        {/* Hero image */}
                        <div className='relative w-full rounded-2xl overflow-hidden'>
                            <Image
                                src='/images/blog/blog-11.png'
                                width={900}
                                height={480}
                                alt='Foamy Urine and Kidney Problems – Dr. Satyanarayana Garre'
                                className='w-full object-cover'
                                priority
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-transparent to-transparent' />
                            <div className='absolute bottom-0 left-0 right-0 px-6 py-5 flex flex-wrap gap-6'>
                                {[
                                    { label: 'Topic', value: 'Foamy Urine' },
                                    { label: 'Condition', value: 'Proteinuria / CKD' },
                                    { label: 'Specialist', value: 'Nephrologist' },
                                ].map((s) => (
                                    <div key={s.label}>
                                        <p className='text-white/60 text-[10px] uppercase tracking-widest'>{s.label}</p>
                                        <p className='text-white font-semibold text-sm'>{s.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Body ── */}
                    <div className='flex flex-col gap-10'>

                        {/* Intro */}
                        <div className='border-l-4 border-blue-500 pl-5'>
                            <p className='text-zinc-600 leading-relaxed text-base md:text-lg'>
                                Foamy urine is something many people notice from time to time. In most cases, it may not be a serious problem — the force of urination, dehydration, or even cleaning products in the toilet can cause bubbles. However, if foamy urine happens regularly, it may be a sign of an underlying kidney problem that should not be ignored.
                            </p>
                        </div>

                        {/* Quote callout */}
                        <blockquote className='bg-blue-50 border border-blue-100 rounded-2xl px-6 py-5'>
                            <p className='text-blue-800 text-sm md:text-base leading-relaxed italic'>
                                "Persistent foamy urine can sometimes be an early warning sign of kidney disease and should be evaluated by a kidney specialist."
                            </p>
                            <footer className='mt-3 text-blue-600 text-xs font-semibold tracking-wide uppercase'>
                                — Dr. Satyanarayana Garre, Nephrologist, Hyderabad
                            </footer>
                        </blockquote>

                        {/* What is foamy urine */}
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-3 flex items-center gap-2'>
                                <Droplets className='w-6 h-6 text-blue-500 shrink-0' />
                                What is Foamy Urine?
                            </h2>
                            <Subheading className='text-left'>
                                Foamy urine — also called bubbly or frothy urine — refers to urine that creates a large amount of foam or bubbles when passed. Occasional bubbles are normal and usually harmless.
                            </Subheading>
                            <Subheading className='text-left mt-3'>
                                However, if urine frequently appears very foamy, similar to the foam on a soft drink, it may indicate that excess protein is leaking into the urine. This condition is known as <strong>proteinuria</strong> and can be related to kidney damage.
                            </Subheading>
                        </div>

                        {/* Causes */}
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-5 flex items-center gap-2'>
                                <FlaskConical className='w-6 h-6 text-blue-500 shrink-0' />
                                What Causes Foamy Urine?
                            </h2>
                            <div className='grid gap-4'>
                                {causes.map((cause, i) => (
                                    <div key={cause.title} className='flex gap-4 p-5 rounded-xl border border-zinc-100 bg-zinc-50 hover:border-blue-200 hover:bg-blue-50/40 transition-colors duration-200'>
                                        <span className='flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center mt-0.5'>
                                            {i + 1}
                                        </span>
                                        <div>
                                            <p className='font-semibold text-dark-navy text-sm mb-1'>{cause.title}</p>
                                            <p className='text-zinc-600 text-sm leading-relaxed'>{cause.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Is it kidney disease */}
                        <div className='bg-blue-50 rounded-2xl p-6 md:p-8'>
                            <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-3'>
                                Is Foamy Urine a Sign of Kidney Disease?
                            </h2>
                            <Subheading className='text-left mb-5'>
                                Not always — but it can be. When kidneys are healthy, they filter waste while keeping important substances like protein in the bloodstream. Damaged kidneys may allow protein to pass into the urine, leading to foamy urine.
                            </Subheading>

                            <p className='text-sm font-semibold text-dark-navy mb-3 uppercase tracking-wide'>
                                People with kidney disease may also experience:
                            </p>
                            <ul className='grid sm:grid-cols-2 gap-3'>
                                {associatedSymptoms.map((s) => (
                                    <li key={s} className='flex items-start gap-2.5'>
                                        <CheckCircle className='w-4 h-4 text-blue-500 shrink-0 mt-0.5' />
                                        <span className='text-zinc-700 text-sm leading-relaxed'>{s}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className='mt-5 text-sm text-blue-700 font-medium'>
                                If foamy urine occurs along with these symptoms, medical evaluation is important.
                            </p>
                        </div>

                        {/* When to see a doctor */}
                        <div className='rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8'>
                            <div className='flex items-center gap-2 mb-4'>
                                <AlertCircle className='w-5 h-5 text-amber-600 shrink-0' />
                                <h2 className='text-xl md:text-2xl font-bold text-dark-navy'>
                                    When Should You See a Doctor?
                                </h2>
                            </div>
                            <Subheading className='text-left mb-5'>
                                You should consult a nephrologist if you experience any of the following:
                            </Subheading>
                            <ul className='grid sm:grid-cols-2 gap-3'>
                                {whenToSee.map((s) => (
                                    <li key={s} className='flex items-start gap-2.5'>
                                        <span className='w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2' />
                                        <span className='text-zinc-700 text-sm leading-relaxed'>{s}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className='mt-5 text-sm text-amber-700 font-medium'>
                                Early diagnosis can help prevent further kidney damage and improve long-term kidney health.
                            </p>
                        </div>

                        {/* Diagnosis & Treatment */}
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-3'>
                                Diagnosis and Treatment
                            </h2>
                            <Subheading className='text-left mb-5'>
                                To find the cause of foamy urine, doctors usually recommend urine and blood tests to check protein levels and evaluate kidney function. The treatment depends on the underlying cause:
                            </Subheading>
                            <div className='border border-zinc-200 rounded-2xl overflow-hidden divide-y divide-zinc-100'>
                                {treatments.map(({ condition, action }) => (
                                    <div key={condition} className='flex items-start gap-4 px-5 py-4'>
                                        <span className='w-2 h-2 rounded-full bg-blue-400 shrink-0 mt-2' />
                                        <div className='flex flex-wrap gap-x-2 items-baseline'>
                                            <span className='text-sm font-semibold text-dark-navy'>{condition}:</span>
                                            <span className='text-sm text-zinc-600 leading-relaxed'>{action}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className='mt-4 text-sm text-zinc-500 leading-relaxed'>
                                Treating the underlying condition often helps reduce or eliminate foamy urine.
                            </p>
                        </div>

                        {/* Conclusion */}
                        <div className='rounded-2xl bg-dark-navy px-6 md:px-10 py-8 text-center'>
                            <Clock className='w-8 h-8 text-blue-400 mx-auto mb-4' />
                            <h2 className='text-2xl md:text-3xl font-bold text-white mb-3'>
                                Conclusion
                            </h2>
                            <p className='text-zinc-300 leading-relaxed max-w-2xl mx-auto text-sm md:text-base'>
                                Foamy urine is not always a reason to panic, but it should not be ignored if it happens regularly. Persistent foamy urine may be an early sign of protein leakage and kidney disease. Recognising the problem early allows timely treatment and helps protect kidney function. If you frequently notice foamy urine or have other symptoms related to kidney health, consult Dr. Satyanarayana Garre for proper evaluation and treatment.
                            </p>
                            <Link
                                href='/contact'
                                className='inline-block mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-full transition-colors duration-200'
                            >
                                Book a Consultation
                            </Link>
                        </div>

                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}