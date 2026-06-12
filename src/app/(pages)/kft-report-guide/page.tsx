import { Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
    HelpCircle,
    Activity,
    AlertCircle,
    ShieldCheck,
    Droplets,
    HeartPulse,
    Stethoscope,
    CheckCircle,
    Clock,
} from 'lucide-react'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
    title: "Understand Your KFT Report and Kidney Health – Dr. Satyanarayana Garre",
    description: "Confused about your KFT report? Understand what KFT means, normal ranges, why reports become abnormal, symptoms to watch for, and how to keep your kidneys healthy — guidance by Dr. Satyanarayana Garre, Nephrologist in Hyderabad.",
    alternates: {
        canonical: "https://www.drsatyanarayanagarre.in/kft-report-guide",
    },
}

const kftReasons = [
    "Diabetes",
    "High blood pressure",
    "Swelling in the body",
    "Kidney stone problems",
    "Frequent urine infections",
    "Family history of kidney disease",
]

const normalRangePoints = [
    {
        title: "Creatinine & Gender",
        desc: "Creatinine levels are slightly higher in men compared to women.",
    },
    {
        title: "Healthy Range",
        desc: "Kidney function is generally considered healthy when the reports stay within the normal range advised by the doctor.",
    },
    {
        title: "Temporary Changes",
        desc: "A slightly high or low number does not always mean something serious. Dehydration, less water intake, heavy exercise, or certain medicines can temporarily affect the report.",
    },
    {
        title: "Doctors Look at the Bigger Picture",
        desc: "Doctors usually do not depend on one test alone. They look at your complete health condition, symptoms, and previous reports before deciding if there is a kidney problem.",
    },
]

const abnormalCauses = [
    {
        title: "Dehydration",
        desc: "When the body does not get enough water, the kidneys may not work properly for some time.",
        icon: Droplets,
    },
    {
        title: "Diabetes",
        desc: "If left uncontrolled for many years, diabetes can slowly damage the kidneys.",
        icon: Activity,
    },
    {
        title: "High Blood Pressure",
        desc: "Uncontrolled high blood pressure over time is a major cause of kidney problems.",
        icon: HeartPulse,
    },
    {
        title: "Kidney Stones",
        desc: "Kidney stones, urine infections, or frequent use of painkillers may also affect kidney health.",
        icon: AlertCircle,
    },
    {
        title: "Lifestyle Factors",
        desc: "Unhealthy eating habits, too much salt, smoking, or lack of physical activity can also put pressure on the kidneys over time.",
        icon: ShieldCheck,
    },
    {
        title: "Long-Term Painkiller Use",
        desc: "Frequent use of painkillers over long periods may also affect kidney health.",
        icon: Stethoscope,
    },
]

const symptoms = [
    "Swelling in the feet or face",
    "Feeling tired all the time",
    "Changes in urine",
    "Loss of appetite",
    "Nausea or vomiting",
    "Difficulty sleeping",
    "Weakness",
    "Shortness of breath",
]

const healthyHabits = [
    "Drinking enough water every day helps the kidneys remove waste from the body properly",
    "Eating fresh and balanced food with less salt and packaged items also supports kidney health",
    "People with diabetes or high blood pressure should regularly monitor and control their condition",
    "Avoid taking medicines without medical advice, especially painkillers for long periods",
    "Regular exercise, proper sleep, and routine health check-ups are also important",
    "Never ignore abnormal KFT reports or symptoms related to kidney problems",
]

export default function UnderstandKFTReportPage() {
    return (
        <>
            <NavBar />
            <main>
                <Section>
                    <Wrapper>
                        <div className='relative w-full max-w-4xl mx-auto'>

                            {/* ── Header ── */}
                            <div className='mb-8'>
                                <span className='inline-block text-xs font-semibold tracking-[0.18em] uppercase text-blue-600 mb-4'>
                                    Nephrology Care · Hyderabad
                                </span>

                                <h1 className='text-3xl md:text-5xl font-bold text-dark-navy leading-tight mb-3'>
                                    Understand Your KFT Report<br className='hidden md:block' /> and Kidney Health
                                </h1>

                                {/* Hero image */}
                                <div className='relative w-full rounded-2xl overflow-hidden'>
                                    <Image
                                        src='/images/kft-report.jpeg'
                                        width={900}
                                        height={480}
                                        alt='Understand Your KFT Report and Kidney Health'
                                        className='w-full object-cover'
                                        priority
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-transparent to-transparent' />
                                    <div className='absolute bottom-0 left-0 right-0 px-6 py-5 flex flex-wrap gap-6'>
                                        {[
                                            { label: 'Test Type', value: 'Blood & Urine' },
                                            { label: 'Specialist', value: 'Nephrologist' },
                                            { label: 'Checked For', value: 'Kidney Function' },
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
                                        Many people feel worried after seeing their KFT report because of unfamiliar words and numbers like creatinine or eGFR. It is completely normal to feel confused at first. But understanding your KFT report can actually help you take better care of your kidneys and overall health. Our kidneys work silently every day — they clean the blood, remove waste from the body, balance fluids, and help control blood pressure. When the kidneys are not working properly, the body may start showing signs slowly. A Kidney Function Test, also called KFT, helps doctors understand whether the kidneys are healthy and working properly.
                                    </p>
                                    <p className='text-zinc-600 leading-relaxed text-base md:text-lg mt-4'>
                                        At Dr. Satyanarayan Garre&rsquo;s clinic, patients receive proper care and guidance for kidney-related problems, including abnormal KFT reports, high creatinine levels, kidney disease, and dialysis support.
                                    </p>
                                </div>

                                {/* What is KFT */}
                                <div>
                                    <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-3 flex items-center gap-2'>
                                        <HelpCircle className='w-6 h-6 text-blue-500 shrink-0' />
                                        What Is a KFT Report?
                                    </h2>
                                    <Subheading className='text-left mb-5'>
                                        KFT stands for Kidney Function Test. It is a simple test that checks how well your kidneys are working. This test usually includes a blood test and sometimes a urine test. It helps doctors understand whether the kidneys are properly removing waste from the body.
                                    </Subheading>

                                    <div className='rounded-2xl border border-zinc-200 bg-zinc-50 p-5'>
                                        <p className='font-semibold text-dark-navy text-sm mb-3'>
                                            Many people are advised to get a KFT done if they have:
                                        </p>
                                        <ul className='grid sm:grid-cols-2 gap-3'>
                                            {kftReasons.map((item) => (
                                                <li key={item} className='flex items-start gap-2.5'>
                                                    <span className='w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2' />
                                                    <span className='text-zinc-700 text-sm leading-relaxed'>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <p className='text-zinc-600 leading-relaxed text-sm md:text-base mt-5'>
                                        Sometimes, people may not have any symptoms at all, but the test can still detect early kidney problems. That is why regular health check-ups are important.
                                    </p>
                                </div>

                                {/* Normal Range */}
                                <div className='border border-zinc-200 rounded-2xl overflow-hidden'>
                                    <div className='bg-dark-navy px-6 py-4'>
                                        <h2 className='text-xl md:text-2xl font-bold text-white flex items-center gap-2'>
                                            <Activity className='w-5 h-5 text-blue-400 shrink-0' />
                                            KFT Report Normal Range
                                        </h2>
                                        <p className='text-blue-300 text-sm mt-0.5'>
                                            The normal range may differ slightly from person to person depending on age, body type, and overall health
                                        </p>
                                    </div>
                                    <div className='divide-y divide-zinc-100'>
                                        {normalRangePoints.map((row, i) => (
                                            <div
                                                key={row.title}
                                                className={`px-5 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-zinc-50/60'}`}
                                            >
                                                <p className='font-semibold text-dark-navy text-sm mb-1'>{row.title}</p>
                                                <p className='text-zinc-500 text-sm leading-relaxed'>{row.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='px-5 py-3 bg-blue-50 border-t border-blue-100'>
                                        <p className='text-xs text-blue-700'>
                                            If the numbers stay abnormal for a long time, then further treatment or tests may be needed.
                                        </p>
                                    </div>
                                </div>

                                {/* Why abnormal */}
                                <div className='bg-blue-50 rounded-2xl p-6 md:p-8'>
                                    <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-3 flex items-center gap-2'>
                                        <Stethoscope className='w-6 h-6 text-blue-500 shrink-0' />
                                        Why KFT Reports Become Abnormal
                                    </h2>
                                    <Subheading className='text-left mb-5'>
                                        There are many reasons why kidney test reports may become abnormal. Some causes are temporary, while others may need proper medical care.
                                    </Subheading>
                                    <div className='grid sm:grid-cols-2 gap-4'>
                                        {abnormalCauses.map((item) => (
                                            <div key={item.title} className='bg-white rounded-xl p-4 border border-blue-100'>
                                                <item.icon className='w-5 h-5 text-blue-500 mb-2' />
                                                <p className='font-semibold text-dark-navy text-sm mb-1'>{item.title}</p>
                                                <p className='text-zinc-500 text-sm leading-relaxed'>{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <p className='mt-5 text-sm text-blue-700 font-medium'>
                                        Sometimes the problem is mild and improves with treatment and lifestyle changes. But if kidney problems are ignored for a long time, the condition can slowly become serious. That is why early testing and timely treatment are very important.
                                    </p>
                                </div>

                                {/* Symptoms */}
                                <div className='rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8'>
                                    <div className='flex items-center gap-2 mb-4'>
                                        <AlertCircle className='w-5 h-5 text-amber-600 shrink-0' />
                                        <h2 className='text-xl md:text-2xl font-bold text-dark-navy'>
                                            Symptoms You Should Not Ignore
                                        </h2>
                                    </div>
                                    <Subheading className='text-left mb-5'>
                                        Kidney problems often develop slowly. In the beginning, many people may not notice any symptoms. As the kidneys become weaker, some common signs may start appearing, such as:
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
                                        Some people may also notice high blood pressure or frequent urination during the night. These symptoms should not be ignored, especially if they continue for a long time. Early treatment can help prevent further kidney damage.
                                    </p>
                                </div>

                                {/* Healthy habits */}
                                <div>
                                    <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-3 flex items-center gap-2'>
                                        <ShieldCheck className='w-6 h-6 text-blue-500 shrink-0' />
                                        Simple Ways to Keep Your Kidneys Healthy
                                    </h2>
                                    <Subheading className='text-left mb-5'>
                                        Taking care of your kidneys does not always require major changes. Small healthy habits can make a big difference.
                                    </Subheading>
                                    <div className='flex flex-col gap-2.5'>
                                        {healthyHabits.map((tip) => (
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
                                        Kidney Care with Dr. Satyanarayan Garre
                                    </h2>
                                    <p className='text-zinc-300 leading-relaxed max-w-2xl mx-auto text-sm md:text-base'>
                                        Understanding your KFT report should not feel stressful. With proper guidance and timely treatment, many kidney problems can be managed successfully. Dr. Satyanarayan Garre provides complete care for patients dealing with kidney-related conditions, including abnormal KFT reports, high creatinine levels, chronic kidney disease, and dialysis care. If your kidney test reports are abnormal or you are experiencing symptoms related to kidney health, consulting an experienced kidney specialist at the right time can help protect your kidneys and improve your overall health.
                                    </p>
                                    <Link
                                        href='/appointment'
                                        className='inline-block mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-full transition-colors duration-200'
                                    >
                                        Book a Consultation
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </Wrapper>
                </Section>
            </main>
            <ContactForm />
            <Footer />
        </>
    )
}