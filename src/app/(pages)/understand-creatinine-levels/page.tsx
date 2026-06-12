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
    Pill,
    Dumbbell,
    CheckCircle,
    Clock,
} from 'lucide-react'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

export const metadata: Metadata = {
    title: "Understanding Creatinine Levels: Normal Range, Causes & Symptoms – Dr. Satyanarayana Garre",
    description: "Learn what creatinine is, normal creatinine levels by age, why creatinine levels increase, symptoms of high creatinine, and how to manage it. Expert guidance by Dr. Satyanarayana Garre, Nephrologist in Hyderabad.",
    alternates: {
        canonical: "https://www.drsatyanarayanagarre.in/understand-creatinine-levels",
    },
}

const checkReasons = [
    "Diabetes",
    "High blood pressure",
    "Kidney problems",
    "A family history of kidney disease",
]

const normalRanges = [
    {
        test: "Adult Men",
        range: "0.7 – 1.3 mg/dL",
        note: "Slightly higher due to greater muscle mass",
    },
    {
        test: "Adult Women",
        range: "0.6 – 1.1 mg/dL",
        note: "Typically lower than men",
    },
    {
        test: "Older Adults",
        range: "May be lower",
        note: "Due to reduced muscle mass with age",
    },
    {
        test: "Children",
        range: "Lower than adults",
        note: "Varies depending on growth and development",
    },
]

const increaseCauses = [
    {
        title: "Kidney Disease",
        desc: "Long-term kidney problems are one of the main causes. When the kidneys slowly lose their ability to filter waste properly, creatinine starts building up in the blood.",
        icon: ShieldCheck,
    },
    {
        title: "Dehydration",
        desc: "Not drinking enough water can sometimes increase creatinine levels. When the body is dehydrated, the kidneys may not work as efficiently.",
        icon: Droplets,
    },
    {
        title: "Diabetes & High Blood Pressure",
        desc: "Uncontrolled diabetes and high blood pressure can damage the kidneys over time, which is why kidney tests are very important for these patients.",
        icon: HeartPulse,
    },
    {
        title: "Kidney Stones or Infections",
        desc: "Kidney stones and infections may affect how the kidneys work and can lead to a rise in creatinine levels if not treated on time.",
        icon: AlertCircle,
    },
    {
        title: "Heavy Exercise or High Protein Intake",
        desc: "Very intense exercise or eating too much protein may temporarily increase creatinine levels in some people.",
        icon: Dumbbell,
    },
    {
        title: "Certain Medicines",
        desc: "Some painkillers or medicines can affect kidney function, especially if taken regularly without medical advice.",
        icon: Pill,
    },
]

const symptoms = [
    "Swelling in the feet, face, or ankles",
    "Feeling tired all the time",
    "Loss of appetite",
    "Nausea or vomiting",
    "Shortness of breath",
    "Changes in urine",
    "Difficulty sleeping",
    "Weakness or low energy",
]

const managementTips = [
    "Drinking enough water",
    "Eating a balanced kidney-friendly diet",
    "Reducing too much salt and processed food",
    "Managing blood sugar and blood pressure properly",
    "Avoiding unnecessary medicines or painkillers",
    "Going for regular health check-ups",
]

export default function UnderstandingCreatinineLevelsPage() {
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
                                    Understanding Creatinine<br className='hidden md:block' /> Levels
                                </h1>

                                {/* Hero image */}
                                <div className='relative w-full rounded-2xl overflow-hidden'>
                                    <Image
                                        src='/images/creatinine-levels.jpeg'
                                        width={900}
                                        height={480}
                                        alt='Understanding Creatinine Levels'
                                        className='w-full object-cover'
                                        priority
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-transparent to-transparent' />
                                    <div className='absolute bottom-0 left-0 right-0 px-6 py-5 flex flex-wrap gap-6'>
                                        {[
                                            { label: 'Test Type', value: 'Blood Test' },
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
                                        Our kidneys quietly work every day to keep the body healthy. They remove waste, balance fluids, and help the body function properly. One important way to check how well the kidneys are working is by looking at creatinine levels. Creatinine is a waste product made by the muscles during daily activities. Healthy kidneys remove it from the blood and pass it out through urine. But when the kidneys are not working properly, creatinine can start building up in the body.
                                    </p>
                                    <p className='text-zinc-600 leading-relaxed text-base md:text-lg mt-4'>
                                        Many people search for terms like &ldquo;creatinine levels,&rdquo; &ldquo;normal creatinine levels,&rdquo; &ldquo;high creatinine levels,&rdquo; or &ldquo;why creatinine levels increase&rdquo; after seeing their blood test reports. Understanding these levels can help detect kidney problems early and protect long-term kidney health.
                                    </p>
                                    <p className='text-zinc-600 leading-relaxed text-base md:text-lg mt-4'>
                                        At Dr. Satyanarayan Garre&rsquo;s clinic, patients receive proper guidance and treatment for kidney-related conditions, including high creatinine levels, kidney disease, and dialysis care.
                                    </p>
                                </div>

                                {/* What is Creatinine */}
                                <div>
                                    <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-3 flex items-center gap-2'>
                                        <HelpCircle className='w-6 h-6 text-blue-500 shrink-0' />
                                        What Is Creatinine?
                                    </h2>
                                    <Subheading className='text-left mb-5'>
                                        Creatinine is a natural waste product that forms when the muscles use energy. Our body makes creatinine every day, and the kidneys filter it from the blood before removing it through urine. Doctors often check creatinine levels through a simple blood test to understand how well the kidneys are working. If the kidneys slow down or become damaged, creatinine levels may rise in the blood. In some cases, a urine test may also be advised to check kidney function more closely.
                                    </Subheading>

                                    <div className='rounded-2xl border border-zinc-200 bg-zinc-50 p-5'>
                                        <p className='font-semibold text-dark-navy text-sm mb-3'>
                                            Checking creatinine levels is especially important for people who have:
                                        </p>
                                        <ul className='grid sm:grid-cols-2 gap-3'>
                                            {checkReasons.map((item) => (
                                                <li key={item} className='flex items-start gap-2.5'>
                                                    <span className='w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2' />
                                                    <span className='text-zinc-700 text-sm leading-relaxed'>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <p className='text-zinc-600 leading-relaxed text-sm md:text-base mt-5'>
                                        Regular testing can help find kidney problems early, even before symptoms appear.
                                    </p>
                                </div>

                                {/* Normal Range Table */}
                                <div className='border border-zinc-200 rounded-2xl overflow-hidden'>
                                    <div className='bg-dark-navy px-6 py-4'>
                                        <h2 className='text-xl md:text-2xl font-bold text-white flex items-center gap-2'>
                                            <Activity className='w-5 h-5 text-blue-400 shrink-0' />
                                            Normal Creatinine Levels by Age
                                        </h2>
                                        <p className='text-blue-300 text-sm mt-0.5'>
                                            Values may vary slightly depending on age, gender, body size, and muscle mass
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
                                            A single abnormal reading may not always indicate a serious problem, but persistently high creatinine levels require proper medical evaluation.
                                        </p>
                                    </div>
                                </div>

                                {/* Why creatinine increases */}
                                <div className='bg-blue-50 rounded-2xl p-6 md:p-8'>
                                    <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-3 flex items-center gap-2'>
                                        <Stethoscope className='w-6 h-6 text-blue-500 shrink-0' />
                                        Why Creatinine Levels Increase
                                    </h2>
                                    <Subheading className='text-left mb-5'>
                                        One of the most common questions patients ask is &ldquo;why creatinine levels increase.&rdquo; There are many possible reasons behind high creatinine levels.
                                    </Subheading>
                                    <div className='grid sm:grid-cols-2 gap-4'>
                                        {increaseCauses.map((item) => (
                                            <div key={item.title} className='bg-white rounded-xl p-4 border border-blue-100'>
                                                <item.icon className='w-5 h-5 text-blue-500 mb-2' />
                                                <p className='font-semibold text-dark-navy text-sm mb-1'>{item.title}</p>
                                                <p className='text-zinc-500 text-sm leading-relaxed'>{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <p className='mt-5 text-sm text-blue-700 font-medium'>
                                        Finding the exact cause of high creatinine is important because early treatment can help prevent further kidney damage.
                                    </p>
                                </div>

                                {/* Symptoms */}
                                <div className='rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8'>
                                    <div className='flex items-center gap-2 mb-4'>
                                        <AlertCircle className='w-5 h-5 text-amber-600 shrink-0' />
                                        <h2 className='text-xl md:text-2xl font-bold text-dark-navy'>
                                            Symptoms of High Creatinine Levels
                                        </h2>
                                    </div>
                                    <Subheading className='text-left mb-5'>
                                        In the beginning, high creatinine levels may not cause any noticeable symptoms. That is why many kidney problems are discovered during routine blood tests. As kidney function becomes weaker, some people may experience:
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
                                        Some people may also notice reduced urine output or puffiness around the eyes. If these symptoms are ignored, kidney problems can become more serious over time. Early treatment is always better and safer.
                                    </p>
                                </div>

                                {/* How to manage */}
                                <div>
                                    <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-3 flex items-center gap-2'>
                                        <ShieldCheck className='w-6 h-6 text-blue-500 shrink-0' />
                                        How to Manage High Creatinine Levels
                                    </h2>
                                    <Subheading className='text-left mb-5'>
                                        In many cases, creatinine levels can be managed with the right treatment and healthy lifestyle habits. Doctors may suggest simple changes such as:
                                    </Subheading>
                                    <div className='flex flex-col gap-2.5'>
                                        {managementTips.map((tip) => (
                                            <div key={tip} className='flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50'>
                                                <CheckCircle className='w-4 h-4 text-blue-500 shrink-0' />
                                                <span className='text-zinc-700 text-sm'>{tip}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className='text-zinc-600 leading-relaxed text-sm md:text-base mt-5'>
                                        Some patients may also need medicines or further treatment depending on the cause of the problem. The most important thing is not to ignore rising creatinine levels. Regular monitoring helps doctors understand whether the kidneys are stable or need more care.
                                    </p>
                                </div>

                                {/* Conclusion */}
                                <div className='rounded-2xl bg-dark-navy px-6 md:px-10 py-8 text-center'>
                                    <Clock className='w-8 h-8 text-blue-400 mx-auto mb-4' />
                                    <h2 className='text-2xl md:text-3xl font-bold text-white mb-3'>
                                        Kidney Care with Dr. Satyanarayan Garre
                                    </h2>
                                    <p className='text-zinc-300 leading-relaxed max-w-2xl mx-auto text-sm md:text-base'>
                                        Kidney problems should never be ignored, especially when creatinine levels start increasing. Early care and proper treatment can help protect kidney function and improve overall health. At Dr. Satyanarayan Garre&rsquo;s clinic, patients receive complete care for kidney-related conditions, including high creatinine levels, chronic kidney disease, dialysis support, and kidney health management. If your creatinine levels are high or you are experiencing symptoms related to kidney problems, consulting an experienced kidney specialist can help you understand the cause and start the right treatment at the right time.
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