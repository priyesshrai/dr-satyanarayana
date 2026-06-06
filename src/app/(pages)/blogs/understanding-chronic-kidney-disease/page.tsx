import { Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Understanding Chronic Kidney Disease (CKD)",
    description: "Our kidneys do a lot of important work every day. They remove waste and extra fluid from the blood, balance minerals, control blood pressure, and keep the body healthy.",
    alternates: {
        canonical: "https://www.drsatyanarayanagarre.in/blogs/understanding-chronic-kidney-disease",
    },
}

export default function page() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full max-w-4xl mx-auto'>
                    <h1 className='md:text-4xl text-dark-navy font-bold'>
                        Understanding Chronic Kidney Disease (CKD)
                    </h1>
                    <span className='text-sm italic font-normal text-zinc-700 block mt-2'>
                        By Dr. Satyanarayana Garre, Nephrologist, Hyderabad
                    </span>
                    <Image src='/images/blog/blog-5.jpg'
                        width={1920}
                        height={1080}
                        alt='Understanding Chronic Kidney Disease (CKD)'
                        className='mt-7 w-full rounded-2xl'
                    />

                    <div className='mt-5 flex flex-col gap-4'>
                        <Subheading className='text-left'>
                            Our kidneys do a lot of important work every day. They remove waste and extra fluid from the blood, balance minerals, control blood pressure, and keep the body healthy. When kidneys stop working properly over time, it is called Chronic Kidney Disease (CKD).
                            <br />
                            CKD means the kidneys slowly lose their ability to clean the blood. This happens over months or even years. At first, you may not notice any signs because the body adjusts, but as damage increases, symptoms appear and the risk of kidney failure grows.
                        </Subheading>
                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            What is Chronic Kidney Disease?
                        </h2>
                        <Subheading className='text-left'>
                            Chronic Kidney Disease, or CKD, is a long-term condition where the kidneys are damaged and cannot filter blood as well as they should. When this happens, waste and fluid start to build up in the body.
                            <br />
                            In the early stages, there may be no symptoms at all. Many people come to know about CKD only when it becomes serious. Early testing and regular monitoring can help slow down kidney damage and prevent complications.
                            <br />
                            If kidney damage continues, it can lead to kidney failure, where the kidneys stop working completely. In such cases, dialysis or a kidney transplant becomes necessary.
                        </Subheading>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            Common Causes of CKD
                        </h2>
                        <Subheading className='text-left'>
                            CKD usually develops because of other health problems that harm the kidneys over time. The most common causes are:
                        </Subheading>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            Common Symptoms of Kidney Stones
                        </h2>
                        <Subheading className='text-left'>
                            Here are the symptoms people often experience. It&apos;s good to know them so you can consult early if they show up.
                        </Subheading>
                        <ul className='flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal'>
                            <li>
                                <strong>Diabetes:</strong> High blood sugar damages the tiny blood vessels in the kidneys.
                            </li>
                            <li>
                                <strong>High blood pressure:</strong> Constant high pressure weakens and scars kidney tissue.
                            </li>
                            <li>
                                <strong>Heart disease:</strong> Poor heart health can affect blood flow to the kidneys.
                            </li>
                            <li>
                                <strong>Obesity and family history:</strong> Both increase the risk of kidney problems.
                            </li>
                            <li>
                                <strong>Long-term use of painkillers or certain medications</strong> can also harm kidneys if not used properly.
                            </li>
                        </ul>
                        <Subheading className='text-left'>
                            If you have diabetes, high blood pressure, or a family history of kidney problems, it&apos;s important to get your kidneys checked regularly.
                        </Subheading>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            Symptoms of Chronic Kidney Disease
                        </h2>
                        <Subheading className='text-left'>
                            In the early stages, CKD usually causes no symptoms. As the condition worsens, you might notice changes such as:
                        </Subheading>
                        <ul className='flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal'>
                            <li>
                                Feeling tired or weak all the time
                            </li>
                            <li>
                                Swelling in your feet, ankles, or face
                            </li>
                            <li>
                                Nausea, vomiting, or loss of appetite
                            </li>
                            <li>
                                Trouble sleeping or concentrating
                            </li>
                            <li>
                                Dry or itchy skin
                            </li>
                            <li>
                                Foamy urine (a sign of protein leakage)
                            </li>
                            <li>
                                Urinating more or less than usual
                            </li>
                            <li>
                                Shortness of breath or chest pain (when fluid builds up in lungs or around the heart)
                            </li>
                            <li>
                                High blood pressure that is hard to control
                            </li>
                        </ul>
                        <Subheading className='text-left'>
                            Because these symptoms can also appear in other illnesses, many people don&apos;t realize they have kidney disease until it&apos;s advanced. That&apos;s why regular check-ups are so important.
                        </Subheading>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            How CKD is Diagnosed
                        </h2>
                        <Subheading className='text-left'>
                            Doctors usually diagnose CKD through simple tests:
                        </Subheading>
                        <ul className='flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal'>
                            <li>Blood test (creatinine and eGFR): shows how well your kidneys are filtering waste.</li>
                            <li>Urine test: checks for protein or albumin, which can be an early sign of damage.</li>
                            <li>Blood pressure measurement: high readings may indicate or worsen CKD.</li>
                            <li>Ultrasound or imaging: helps see kidney size and structure.</li>
                        </ul>
                        <Subheading className='text-left'>
                            If you&apos;re at risk, your doctor—like Dr. Satyanarayana Garre, a kidney specialist in Hyderabad—may suggest routine tests to catch kidney damage early.
                        </Subheading>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            Treatment and Management
                        </h2>
                        <Subheading className='text-left'>
                            There&apos;s no complete cure for CKD, but it can be managed and its progress slowed down. Treatment focuses on controlling the cause and protecting kidney function.
                        </Subheading>
                        <span>
                            Here are some important steps:
                        </span>
                        <ul className='flex flex-col gap-1 list-decimal pl-6 text-zinc-600 text-normal'>
                            <li>Control diabetes and blood pressure: Keeping these in check prevents further damage.</li>
                            <li>Eat a kidney-friendly diet: Reduce salt and processed foods. Eat more fresh fruits and vegetables (as advised by your doctor).</li>
                            <li>Stay hydrated: Drink enough water, but not too much if your doctor restricts fluids.</li>
                            <li>Avoid painkillers and harmful drugs: Overuse of certain medicines (like NSAIDs) can damage kidneys.</li>
                            <li>Quit smoking and limit alcohol: Both can worsen kidney and heart problems.</li>
                            <li>Stay active: Light exercise helps maintain blood pressure and overall health.</li>
                            <li>Regular follow-ups: Keep in touch with your nephrologist for ongoing care and test monitoring.</li>
                        </ul>
                        <Subheading className='text-left'>
                            In advanced stages, when kidneys cannot filter blood properly, treatments like dialysis or kidney transplant may be needed. These treatments replace lost kidney function and help patients live longer, healthier lives.
                        </Subheading>

                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            When to See a Doctor
                        </h2>
                        <Subheading className='text-left'>
                            You should see a doctor or nephrologist if you:
                        </Subheading>
                        <ul className='flex flex-col gap-1 list-disc pl-6 text-zinc-600 text-normal'>
                            <li>Have diabetes or high blood pressure</li>
                            <li>Notice swelling, tiredness, or changes in urination</li>
                            <li>Have a family history of kidney disease</li>
                            <li>Experience persistent high blood pressure despite medication</li>
                        </ul>
                        <Subheading className='text-left'>
                            Early care can make a big difference. A kidney specialist like Dr. Satyanarayana Garre can help diagnose CKD early, guide you on lifestyle changes, and start treatment to protect your kidneys.
                        </Subheading>
                        <h2 className='md:text-3xl font-semibold text-dark-navy'>
                            Conclusion
                        </h2>
                        <Subheading className='text-left'>
                            Chronic Kidney Disease grows slowly but can cause serious health problems if ignored. The best way to protect your kidneys is to stay aware, get tested regularly, and manage your health conditions properly.
                            <br />
                            <br />
                            With early diagnosis and proper care, you can live a normal, active life even with CKD. If you are in Hyderabad and want expert kidney care, consult Dr. Satyanarayana Garre, a trusted nephrologist dedicated to helping patients prevent and manage kidney diseases effectively.

                        </Subheading>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}