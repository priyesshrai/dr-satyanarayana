import { Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import type { Metadata } from 'next'
import { CheckCircle, Stethoscope, AlertCircle, Clock, Layers, HelpCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
    title: "Kidney Cysts: Causes, Types, Symptoms & Treatment – Dr. Satyanarayana Garre",
    description: "Learn about kidney cysts — what causes them, their types (simple, complex, PKD), symptoms, and treatment options. Expert guidance by Dr. Satyanarayana Garre, Nephrologist in Hyderabad.",
    alternates: {
        canonical: "https://www.drsatyanarayanagarre.in/blogs/what-are-kidney-cycts",
    },
}

const cystTypes = [
    {
        name: "Simple Kidney Cysts",
        desc: "The most common type. Harmless, fluid-filled, and usually do not cause symptoms.",
    },
    {
        name: "Complex Kidney Cysts",
        desc: "May have thick walls or solid parts. Need closer monitoring as there may be a risk of complications.",
    },
    {
        name: "Polycystic Kidney Disease (PKD)",
        desc: "A genetic condition where multiple cysts form in both kidneys and can affect kidney function over time.",
    },
    {
        name: "Acquired Kidney Cysts",
        desc: "Develop later in life, often in people with long-term kidney problems or those on dialysis.",
    },
    {
        name: "Parapelvic & Dermoid Cysts",
        desc: "Rare types that may need medical attention depending on size and symptoms.",
    },
]

const causes = [
    "Ageing — kidney cysts are more common as people get older",
    "Genetic factors — conditions like PKD run in families",
    "Kidney injury or past infections may lead to cyst formation",
    "Long-term kidney disease or chronic kidney issues",
]

const symptoms = [
    "Pain in the side or lower back",
    "Blood in urine",
    "Frequent urination",
    "High blood pressure",
    "Discomfort in the abdomen",
]

const treatments = [
    {
        name: "Monitoring",
        desc: "If small and symptom-free, regular scans and check-ups with no active treatment.",
    },
    {
        name: "Drainage",
        desc: "Removing fluid from the cyst using a needle under imaging guidance.",
    },
    {
        name: "Sclerotherapy",
        desc: "Injecting a solution after drainage to prevent the cyst from filling again.",
    },
    {
        name: "Surgery",
        desc: "In rare cases, large or complicated cysts may need surgical removal.",
    },
    {
        name: "Advanced Care",
        desc: "If cysts affect kidney function significantly, treatments like dialysis may be required.",
    },
]

const whenToSee = [
    "Severe or continuous back pain",
    "Blood in urine",
    "Fever with kidney discomfort",
    "Sudden increase in blood pressure",
]

export default function KidneyCystsPage() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full max-w-4xl mx-auto'>

                    {/* ── Header ── */}
                    <div className='mb-8'>
                        <span className='inline-block text-xs font-semibold tracking-[0.18em] uppercase text-blue-600 mb-4'>
                            Nephrology Care · Hyderabad
                        </span>

                        <h1 className='text-3xl md:text-5xl font-bold text-dark-navy leading-tight mb-3'>
                            Kidney Cysts: Causes,<br className='hidden md:block' /> Types, Symptoms & Treatment
                        </h1>

                        <p className='text-zinc-500 text-sm italic mb-6'>
                            By Dr. Satyanarayana Garre, Nephrologist, Hyderabad
                        </p>

                        {/* Hero image */}
                        <div className='relative w-full rounded-2xl overflow-hidden'>
                            <Image
                                src='/images/blog/kidney-cyst.jpeg'
                                width={900}
                                height={480}
                                alt='Kidney Cysts – Causes, Types, Symptoms and Treatment by Dr. Satyanarayana Garre'
                                className='w-full object-cover'
                                priority
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-transparent to-transparent' />
                            <div className='absolute bottom-0 left-0 right-0 px-6 py-5 flex flex-wrap gap-6'>
                                {[
                                    { label: 'Condition', value: 'Kidney Cysts' },
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
                                Kidney cysts are a common condition and many people may have them without even knowing. In most cases, these cysts are harmless and do not affect kidney function. However, in some cases, they can cause discomfort or lead to complications. Understanding kidney cysts — what causes them, their types, and treatment options — can help you manage the condition better and seek timely care.
                            </p>
                        </div>

                        {/* What are kidney cysts */}
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-3 flex items-center gap-2'>
                                <HelpCircle className='w-6 h-6 text-blue-500 shrink-0' />
                                What Are Kidney Cysts?
                            </h2>
                            <Subheading className='text-left'>
                                Kidney cysts are fluid-filled sacs that develop on or inside the kidneys. They usually have thin walls and can vary in size. Most kidney cysts are non-cancerous and do not cause serious problems. Many people discover kidney cysts during routine health check-ups or scans done for other reasons. In simple cases, they do not interfere with the normal working of the kidneys.
                            </Subheading>
                        </div>

                        {/* Types */}
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-5 flex items-center gap-2'>
                                <Layers className='w-6 h-6 text-blue-500 shrink-0' />
                                Types of Kidney Cysts
                            </h2>
                            <Subheading className='text-left mb-5'>
                                There are different types of kidney cysts, and understanding them is important for proper management and treatment.
                            </Subheading>
                            <div className='flex flex-col gap-3'>
                                {cystTypes.map((type, i) => (
                                    <div
                                        key={type.name}
                                        className='flex items-start gap-4 p-4 rounded-xl border border-zinc-200 bg-zinc-50'
                                    >
                                        <span className='text-xs font-bold tabular-nums text-blue-400 w-5 shrink-0 mt-0.5'>
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <div>
                                            <p className='font-semibold text-dark-navy text-sm mb-0.5'>{type.name}</p>
                                            <p className='text-zinc-500 text-sm leading-relaxed'>{type.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Causes */}
                        <div className='bg-blue-50 rounded-2xl p-6 md:p-8'>
                            <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-3 flex items-center gap-2'>
                                <Stethoscope className='w-6 h-6 text-blue-500 shrink-0' />
                                What Causes Kidney Cysts?
                            </h2>
                            <Subheading className='text-left mb-5'>
                                Many people often ask, what causes kidney cysts? In most cases, the exact reason is not clear, but some common factors include:
                            </Subheading>
                            <ul className='grid sm:grid-cols-2 gap-3'>
                                {causes.map((cause) => (
                                    <li key={cause} className='flex items-start gap-2.5'>
                                        <CheckCircle className='w-4 h-4 text-blue-500 shrink-0 mt-0.5' />
                                        <span className='text-zinc-600 text-sm leading-relaxed'>{cause}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Symptoms */}
                        <div className='rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8'>
                            <div className='flex items-center gap-2 mb-4'>
                                <AlertCircle className='w-5 h-5 text-amber-600 shrink-0' />
                                <h2 className='text-xl md:text-2xl font-bold text-dark-navy'>
                                    Symptoms of Kidney Cysts
                                </h2>
                            </div>
                            <Subheading className='text-left mb-5'>
                                Most kidney cysts do not show symptoms. However, if the cyst grows bigger, you may notice:
                            </Subheading>
                            <ul className='grid sm:grid-cols-2 gap-3'>
                                {symptoms.map((s) => (
                                    <li key={s} className='flex items-start gap-2.5'>
                                        <span className='w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2' />
                                        <span className='text-zinc-700 text-sm leading-relaxed'>{s}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className='mt-5 text-sm text-amber-700 font-medium'>
                                If you experience these symptoms, consult a kidney specialist for proper evaluation.
                            </p>
                        </div>

                        {/* Treatment */}
                        <div className='border border-zinc-200 rounded-2xl overflow-hidden'>
                            <div className='bg-dark-navy px-6 py-4'>
                                <h2 className='text-xl md:text-2xl font-bold text-white'>
                                    Kidney Cysts Treatment Options
                                </h2>
                                <p className='text-blue-300 text-sm mt-0.5'>
                                    Treatment depends on size, type, and symptoms of the cyst
                                </p>
                            </div>
                            <div className='p-6 md:p-8'>
                                <Subheading className='text-left mb-6'>
                                    In many cases, kidney cysts treatment is not required if the cyst is small and not causing any symptoms. Doctors may monitor the condition with regular check-ups. If treatment is needed, options may include:
                                </Subheading>
                                <ul className='grid sm:grid-cols-2 gap-3'>
                                    {treatments.map((t) => (
                                        <li key={t.name} className='flex items-start gap-2.5'>
                                            <CheckCircle className='w-4 h-4 text-blue-500 shrink-0 mt-0.5' />
                                            <span className='text-zinc-600 text-sm leading-relaxed'>
                                                <span className='font-semibold text-dark-navy'>{t.name} — </span>
                                                {t.desc}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* When to see a doctor */}
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-3'>
                                When Should You See a Doctor?
                            </h2>
                            <Subheading className='text-left mb-5'>
                                You should consult a nephrologist if you have any of the following:
                            </Subheading>
                            <div className='flex flex-col gap-2.5'>
                                {whenToSee.map((w) => (
                                    <div key={w} className='flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50'>
                                        <span className='w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0' />
                                        <span className='text-zinc-700 text-sm'>{w}</span>
                                    </div>
                                ))}
                            </div>
                            <p className='mt-4 text-sm text-blue-700 font-medium pl-1'>
                                Early diagnosis helps in managing kidney cysts easily and prevents complications.
                            </p>
                        </div>

                        {/* Conclusion */}
                        <div className='rounded-2xl bg-dark-navy px-6 md:px-10 py-8 text-center'>
                            <Clock className='w-8 h-8 text-blue-400 mx-auto mb-4' />
                            <h2 className='text-2xl md:text-3xl font-bold text-white mb-3'>
                                Conclusion
                            </h2>
                            <p className='text-zinc-300 leading-relaxed max-w-2xl mx-auto text-sm md:text-base'>
                                Kidney cysts are usually harmless, but it is important to understand their types, causes, and treatment options. Regular health check-ups and early diagnosis can help avoid serious problems. If you are looking for expert care, Dr. Satyanarayana Garre, a specialist in nephrology in Hyderabad, provides proper guidance, diagnosis, and treatment for all kidney-related conditions. Taking the right steps at the right time can help you maintain good kidney health.
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