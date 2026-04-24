import { Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import type { Metadata } from 'next'
import { CheckCircle, Stethoscope, AlertCircle, Clock } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
    title: "Best Nephrologist in Hyderabad – Dr. Satyanarayana Garre",
    description: "Looking for the best nephrologist in Hyderabad? Dr. Satyanarayana Garre offers expert kidney care including CKD, dialysis, and transplant management with 10+ years of experience.",
    alternates: {
        canonical: "https://www.drsatyanarayanagarre.in/blogs/best-nephrologist-in-hyderabad",
    },
}

const expertise = [
    "Dialysis care including hemodialysis and peritoneal dialysis",
    "Kidney transplant management and post-treatment care",
    "Treatment of chronic kidney disease (CKD)",
    "Managing critical kidney conditions",
    "Advanced procedures for dialysis access",
]

const symptoms = [
    "Swelling in legs, face, or hands",
    "Frequent urination or pain while passing urine",
    "Blood in urine",
    "High blood pressure",
    "Constant tiredness or weakness",
    "Abnormal kidney test reports",
]


export default function Page() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full max-w-4xl mx-auto'>

                    <div className='mb-8'>
                        {/* Eyebrow */}
                        <span className='inline-block text-xs font-semibold tracking-[0.18em] uppercase text-blue-600 mb-4'>
                            Nephrology Care · Hyderabad
                        </span>

                        <h1 className='text-3xl md:text-5xl font-bold text-dark-navy leading-tight mb-3'>
                            Best Nephrologist<br className='hidden md:block' /> in Hyderabad
                        </h1>

                        <p className='text-zinc-500 text-sm italic mb-6'>
                            By Dr. Satyanarayana Garre, Nephrologist, Hyderabad
                        </p>

                        {/* Hero image with caption overlay */}
                        <div className='relative w-full rounded-2xl overflow-hidden'>
                            <Image
                                src='/images/blog/best-nephrologist.jpeg'
                                width={900}
                                height={480}
                                alt='Best Nephrologist in Hyderabad – Dr. Satyanarayana Garre'
                                className='w-full object-cover'
                                priority
                            />
                            {/* Gradient overlay with stat strip */}
                            <div className='absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-transparent to-transparent' />
                            <div className='absolute bottom-0 left-0 right-0 px-6 py-5 flex flex-wrap gap-6'>
                                {[
                                    { label: 'Experience', value: '10+ Years' },
                                    { label: 'Qualification', value: 'MBBS, MD, DNB' },
                                    { label: 'Speciality', value: 'Nephrology' },
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
                                Kidneys play a very important role in keeping your body healthy. They remove waste, balance fluids, and help control blood pressure. When kidneys do not work properly, it can affect your overall health in many ways. This is where a nephrologist comes in.
                            </p>
                        </div>

                        {/* What does a nephrologist do */}
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-3 flex items-center gap-2'>
                                <Stethoscope className='w-6 h-6 text-blue-500 shrink-0' />
                                What Does a Nephrologist Do?
                            </h2>
                            <Subheading className='text-left'>
                                A nephrologist is a doctor who treats kidney-related problems. They help manage conditions like chronic kidney disease (CKD), kidney infections, kidney failure, and high blood pressure related to kidneys. They also guide patients who need treatments like dialysis or kidney transplant.
                            </Subheading>
                            <Subheading className='text-left mt-3'>
                                Many people ignore early signs of kidney problems such as swelling, tiredness, or changes in urine. A good kidney specialist can identify these issues early and help prevent serious complications.
                            </Subheading>
                        </div>

                        {/* Why choose */}
                        <div className='bg-blue-50 rounded-2xl p-6 md:p-8'>
                            <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-3'>
                                Why Choose the Best Nephrologist in Hyderabad?
                            </h2>
                            <Subheading className='text-left'>
                                Hyderabad is known for its advanced healthcare facilities and experienced doctors. Choosing the top nephrologist ensures proper diagnosis, timely treatment, and long-term care. An experienced doctor not only treats the disease but also helps you understand your condition — guiding you on diet, lifestyle changes, and regular monitoring.
                            </Subheading>
                        </div>

                        {/* Dr. Garre profile card */}
                        <div className='border border-zinc-200 rounded-2xl overflow-hidden'>
                            <div className='bg-dark-navy px-6 py-4'>
                                <h2 className='text-xl md:text-2xl font-bold text-white'>
                                    Dr. Satyanarayana Garre
                                </h2>
                                <p className='text-blue-300 text-sm mt-0.5'>
                                    Trusted Kidney Specialist in Hyderabad · MBBS, MD, DNB (Nephrology)
                                </p>
                            </div>

                            <div className='p-6 md:p-8'>
                                <Subheading className='text-left mb-6'>
                                    With more than 10 years of experience in kidney care, Dr. Satyanarayana Garre provides complete and personalized treatment. He is highly qualified and has strong knowledge in handling different kidney conditions. He focuses on patient comfort and explains every treatment in simple language, also communicating in multiple languages.
                                </Subheading>

                                <h3 className='text-base font-semibold text-dark-navy mb-4 uppercase tracking-wide'>
                                    Key Areas of Expertise
                                </h3>
                                <ul className='grid sm:grid-cols-2 gap-3'>
                                    {expertise.map((item) => (
                                        <li key={item} className='flex items-start gap-2.5'>
                                            <CheckCircle className='w-4 h-4 text-blue-500 shrink-0 mt-0.5' />
                                            <span className='text-zinc-600 text-sm leading-relaxed'>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* When to visit — alert style */}
                        <div className='rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8'>
                            <div className='flex items-center gap-2 mb-4'>
                                <AlertCircle className='w-5 h-5 text-amber-600 shrink-0' />
                                <h2 className='text-xl md:text-2xl font-bold text-dark-navy'>
                                    When Should You Visit a Nephrologist?
                                </h2>
                            </div>
                            <Subheading className='text-left mb-5'>
                                You should consult a nephrologist if you notice any of the following symptoms:
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
                                Early consultation can help prevent serious kidney damage and improve your quality of life.
                            </p>
                        </div>

                        {/* Conclusion */}
                        <div className='rounded-2xl bg-dark-navy px-6 md:px-10 py-8 text-center'>
                            <Clock className='w-8 h-8 text-blue-400 mx-auto mb-4' />
                            <h2 className='text-2xl md:text-3xl font-bold text-white mb-3'>
                                Conclusion
                            </h2>
                            <p className='text-zinc-300 leading-relaxed max-w-2xl mx-auto text-sm md:text-base'>
                                Finding the best nephrologist in Hyderabad is important for proper kidney care. Dr. Satyanarayana Garre is one of the trusted names in nephrology, offering complete care from early diagnosis to advanced treatment. If you are facing any kidney-related issues, do not delay — early treatment can make a big difference in your health.
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
        </Section >
    )
}