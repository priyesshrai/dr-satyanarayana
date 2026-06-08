import { Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import type { Metadata } from 'next'
import { CheckCircle, Stethoscope, AlertCircle, Clock, FlaskConical, HelpCircle, Activity, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
    title: "Kidney Function Test (KFT): Purpose, Types, Procedure & Normal Range – Dr. Satyanarayana Garre",
    description: "Learn everything about Kidney Function Tests (KFT) — what they check, normal ranges, procedure, and when to get tested. Expert guidance by Dr. Satyanarayana Garre, Nephrologist in Hyderabad.",
    alternates: {
        canonical: "https://www.drsatyanarayanagarre.in/blogs/kidney-function-test",
    },
}

const kftTests = [
    {
        name: "Serum Creatinine Test",
        desc: "Creatinine is a waste product produced by muscles. Healthy kidneys remove it from the blood. High creatinine levels may suggest reduced kidney function.",
        icon: "🧪",
    },
    {
        name: "Blood Urea Nitrogen (BUN) Test",
        desc: "Measures the amount of waste in the blood. Increased levels may indicate kidney problems or dehydration.",
        icon: "🩸",
    },
    {
        name: "eGFR (Estimated Glomerular Filtration Rate)",
        desc: "Helps doctors understand how well the kidneys are filtering blood. Commonly used to detect chronic kidney disease in its early stages.",
        icon: "📊",
    },
    {
        name: "Urine Test",
        desc: "Checks for protein, blood, infection, or sugar in urine. Protein in urine can sometimes be an early sign of kidney damage.",
        icon: "🔬",
    },
    {
        name: "Electrolyte Levels",
        desc: "Sodium and potassium levels are checked because kidney problems can affect the body's fluid and mineral balance.",
        icon: "⚡",
    },
]

const normalRanges = [
    {
        test: "Serum Creatinine (Men)",
        range: "0.74 – 1.35 mg/dL",
        note: "Muscle waste filtered by kidneys",
    },
    {
        test: "Serum Creatinine (Women)",
        range: "0.59 – 1.04 mg/dL",
        note: "Slightly lower due to muscle mass",
    },
    {
        test: "Blood Urea Nitrogen (BUN)",
        range: "7 – 20 mg/dL",
        note: "Reflects protein metabolism waste",
    },
    {
        test: "eGFR",
        range: "> 90 mL/min/1.73m²",
        note: "Healthy filtration rate",
    },
    {
        test: "Sodium",
        range: "136 – 145 mEq/L",
        note: "Fluid balance regulation",
    },
    {
        test: "Potassium",
        range: "3.5 – 5.1 mEq/L",
        note: "Critical for heart and muscle function",
    },
]

const symptoms = [
    "Swelling in the legs, feet, or face",
    "Tiredness or weakness",
    "Frequent urination",
    "Burning or pain while passing urine",
    "Blood in urine",
    "Loss of appetite",
    "Nausea or vomiting",
    "High blood pressure or diabetes",
]

const lifestyleTips = [
    "Drink enough water daily to keep kidneys hydrated",
    "Control blood sugar and blood pressure consistently",
    "Eat healthy food and reduce salt intake",
    "Avoid unnecessary use of painkillers",
    "Get regular kidney checkups after age 40",
]

export default function KidneyFunctionTestPage() {
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
                            Kidney Function Test (KFT):<br className='hidden md:block' /> Purpose, Types, Procedure<br className='hidden md:block' /> & Normal Range
                        </h1>

                        <p className='text-zinc-500 text-sm italic mb-6'>
                            By Dr. Satyanarayana Garre, Nephrologist, Hyderabad
                        </p>

                        {/* Hero image */}
                        <div className='relative w-full rounded-2xl overflow-hidden'>
                            <Image
                                src='/images/blog/kft.png'
                                width={900}
                                height={480}
                                alt='Kidney Function Test (KFT) – Purpose, Types, Procedure & Normal Range by Dr. Satyanarayana Garre'
                                className='w-full object-cover'
                                priority
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-transparent to-transparent' />
                            <div className='absolute bottom-0 left-0 right-0 px-6 py-5 flex flex-wrap gap-6'>
                                {[
                                    { label: 'Test Type', value: 'Blood & Urine' },
                                    { label: 'Specialist', value: 'Nephrologist' },
                                    { label: 'Result Time', value: 'Within 24 hrs' },
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
                                Your kidneys work like natural filters for the body — removing waste, balancing fluids, controlling blood pressure, and maintaining overall health. But many kidney problems develop slowly, and in the early stages, people may not notice any symptoms. This is why a Kidney Function Test (KFT) is essential. With kidney disease becoming increasingly common due to diabetes, high blood pressure, and unhealthy lifestyles, a simple renal function test can help find problems early and prevent serious complications.
                            </p>
                        </div>

                        {/* What is KFT */}
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-3 flex items-center gap-2'>
                                <HelpCircle className='w-6 h-6 text-blue-500 shrink-0' />
                                What is a Kidney Function Test?
                            </h2>
                            <Subheading className='text-left'>
                                A Kidney Function Test (KFT) is a group of blood and urine tests that check how well your kidneys are working. These tests help doctors understand whether the kidneys are properly filtering waste and maintaining the body's balance. Doctors usually recommend a KFT for people with symptoms related to kidney problems or health conditions like diabetes and high blood pressure. Regular testing also helps monitor existing kidney disease and track treatment progress.
                            </Subheading>
                        </div>

                        {/* What does KFT check */}
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-5 flex items-center gap-2'>
                                <FlaskConical className='w-6 h-6 text-blue-500 shrink-0' />
                                What Does a Kidney Function Test Check?
                            </h2>
                            <Subheading className='text-left mb-5'>
                                A Kidney Function Test checks several markers related to kidney health. Here are the key tests involved:
                            </Subheading>
                            <div className='flex flex-col gap-3'>
                                {kftTests.map((test, i) => (
                                    <div
                                        key={test.name}
                                        className='flex items-start gap-4 p-4 rounded-xl border border-zinc-200 bg-zinc-50'
                                    >
                                        <span className='text-xl shrink-0 mt-0.5'>{test.icon}</span>
                                        <div>
                                            <p className='font-semibold text-dark-navy text-sm mb-0.5'>{test.name}</p>
                                            <p className='text-zinc-500 text-sm leading-relaxed'>{test.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Normal Range Table */}
                        <div className='border border-zinc-200 rounded-2xl overflow-hidden'>
                            <div className='bg-dark-navy px-6 py-4'>
                                <h2 className='text-xl md:text-2xl font-bold text-white flex items-center gap-2'>
                                    <Activity className='w-5 h-5 text-blue-400 shrink-0' />
                                    KFT Test Normal Range
                                </h2>
                                <p className='text-blue-300 text-sm mt-0.5'>
                                    Reference values may vary slightly between laboratories
                                </p>
                            </div>
                            <div className='divide-y divide-zinc-100'>
                                {normalRanges.map((row, i) => (
                                    <div
                                        key={row.test}
                                        className={`flex flex-col sm:flex-row sm:items-center justify-between gap-1 px-5 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-zinc-50/60'}`}
                                    >
                                        <div>
                                            <p className='font-semibold text-dark-navy text-sm'>{row.test}</p>
                                            <p className='text-zinc-400 text-xs mt-0.5'>{row.note}</p>
                                        </div>
                                        <span className='inline-block text-sm font-bold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full whitespace-nowrap'>
                                            {row.range}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className='px-5 py-3 bg-blue-50 border-t border-blue-100'>
                                <p className='text-xs text-blue-700'>
                                    If any result is higher or lower than normal, your doctor may advise further tests or treatment. Always discuss results with a kidney specialist.
                                </p>
                            </div>
                        </div>

                        {/* Procedure */}
                        <div className='bg-blue-50 rounded-2xl p-6 md:p-8'>
                            <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-3 flex items-center gap-2'>
                                <Stethoscope className='w-6 h-6 text-blue-500 shrink-0' />
                                How is the Kidney Function Test Done?
                            </h2>
                            <Subheading className='text-left mb-5'>
                                The KFT procedure is simple, safe, and usually completed within a few minutes.
                            </Subheading>
                            <div className='grid sm:grid-cols-3 gap-4'>
                                {[
                                    {
                                        step: "01",
                                        title: "Blood Sample",
                                        desc: "A small blood sample is taken from your arm to check creatinine, urea, and electrolytes.",
                                    },
                                    {
                                        step: "02",
                                        title: "Urine Sample",
                                        desc: "In some cases, a urine sample may also be required. Some patients fast a few hours beforehand.",
                                    },
                                    {
                                        step: "03",
                                        title: "Results & Review",
                                        desc: "Reports are typically available within 24 hours. A specialist explains whether kidney function is normal or needs further attention.",
                                    },
                                ].map((s) => (
                                    <div key={s.step} className='bg-white rounded-xl p-4 border border-blue-100'>
                                        <span className='text-xs font-bold text-blue-400 tabular-nums'>{s.step}</span>
                                        <p className='font-semibold text-dark-navy text-sm mt-1 mb-1'>{s.title}</p>
                                        <p className='text-zinc-500 text-sm leading-relaxed'>{s.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* When to get tested */}
                        <div className='rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8'>
                            <div className='flex items-center gap-2 mb-4'>
                                <AlertCircle className='w-5 h-5 text-amber-600 shrink-0' />
                                <h2 className='text-xl md:text-2xl font-bold text-dark-navy'>
                                    When Should You Get a Kidney Function Test?
                                </h2>
                            </div>
                            <Subheading className='text-left mb-5'>
                                A renal function test is important if you notice any of the following symptoms. People above 40 with diabetes, BP issues, obesity, or a family history of kidney disease should get regular checkups.
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
                                Early testing is key — kidney disease is often called a "silent problem" because symptoms may not appear until the condition is serious.
                            </p>
                        </div>

                        {/* Why early testing matters */}
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-3 flex items-center gap-2'>
                                <ShieldCheck className='w-6 h-6 text-blue-500 shrink-0' />
                                Why Early Kidney Testing Matters
                            </h2>
                            <Subheading className='text-left mb-5'>
                                Early diagnosis through a Kidney Function Test can help prevent kidney failure, dialysis, or other major complications. Simple lifestyle changes go a long way in protecting kidney health:
                            </Subheading>
                            <div className='flex flex-col gap-2.5'>
                                {lifestyleTips.map((tip) => (
                                    <div key={tip} className='flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50'>
                                        <CheckCircle className='w-4 h-4 text-blue-500 shrink-0' />
                                        <span className='text-zinc-700 text-sm'>{tip}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Conclusion */}
                        <div className='rounded-2xl bg-dark-navy px-6 md:px-10 py-8 text-center'>
                            <Clock className='w-8 h-8 text-blue-400 mx-auto mb-4' />
                            <h2 className='text-2xl md:text-3xl font-bold text-white mb-3'>
                                Conclusion
                            </h2>
                            <p className='text-zinc-300 leading-relaxed max-w-2xl mx-auto text-sm md:text-base'>
                                A Kidney Function Test (KFT) is one of the most important tests for checking kidney health. It helps identify kidney problems early and supports timely treatment before conditions become serious. Regular kidney testing is especially important for people with diabetes, high blood pressure, kidney stones, or a family history of kidney disease. For expert guidance and diagnosis, consult Dr. Satyanarayana Garre — taking care of your kidneys today can help you avoid major health problems in the future.
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