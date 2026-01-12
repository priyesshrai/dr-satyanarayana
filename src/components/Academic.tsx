import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import React from 'react'

export default function Academic() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Professional Profile & Expertise
                        </Heading>
                        <Subheading className='mx-auto max-w-3xl'>
                            Highlighting Dr. Satyanarayana Garre&apos;s journey of scholarly achievements, pioneering research, and impactful clinical work in the field of nephrology.
                        </Subheading>
                    </div>

                    <div className='flex-1 relative grid lg:grid-cols-2 grid-cols-1 gap-6'>
                        <div className="w-full h-full flex flex-col gap-6">
                            <div className="flex-1 p-6 relative bg-[#F9FAFB] rounded-3xl">
                                <div className='relative w-max px-3 py-3 bg-[#DBEAFE] rounded-2xl'>
                                    <Image src={'/images/academic/icon-1.svg'} width={56} height={56} alt='Icon' />
                                </div>

                                <h3 className='mt-4 font-semibold text-lg text-dark-navy'>
                                    Education & Specialized Training
                                </h3>
                                <Subheading className='mt-2 text-left !text-sm font-normal'>
                                    Completed advanced medical education in nephrology and general medicine, with fellowships and training in interventional nephrology.
                                </Subheading>

                                <ul className='relative w-full mt-3 flex flex-col gap-1.5'>
                                    <li className='text-sm text-zinc-500'>
                                        <strong className='text-dark-navy'>DNB Nephrology (2016 - 2019):</strong> Sri Venkateshwara Institute of Medical Sciences (SVIMS), Tirupati, Andhra Pradesh
                                    </li>
                                    <li className='text-sm text-zinc-500'>
                                        <strong className='text-dark-navy'>MD General Medicine (2012 - 2015):</strong> M.S. Ramaiah Medical College, Bangalore
                                    </li>
                                    <li className='text-sm text-zinc-500'>
                                        <strong className='text-dark-navy'>MBBS (2005 - 2010):</strong> JJM Medical College, Davangere
                                    </li>
                                </ul>
                            </div>

                            <div className="flex-1 p-6 relative bg-[#F9FAFB] rounded-3xl">
                                <div className='relative w-max px-3 py-3 bg-[#DBEAFE] rounded-2xl'>
                                    <Image src={'/images/academic/icon-3.svg'} width={56} height={56} alt='Icon' />
                                </div>

                                <h3 className='mt-4 font-semibold text-lg text-dark-navy'>
                                    Conferences, Posters & Case Reports
                                </h3>
                                <Subheading className='mt-2 text-left !text-sm font-normal'>
                                    Active participation in national nephrology forums and rare case presentations.
                                </Subheading>

                                <ul className='relative w-full mt-3 flex flex-col gap-1.5'>
                                    <li className='text-sm text-zinc-500'>
                                        <strong className='text-dark-navy'>Poster:</strong> A Rare Case of Methemoglobinemia - KAPICON 2014.
                                    </li>
                                    <li className='text-sm text-zinc-500'>
                                        <strong className='text-dark-navy'>Poster:</strong> Atypical HUS Recurrence Post-Transplant - Apollo Medicine, 2023.
                                    </li>
                                    <li className='text-sm text-zinc-500'>
                                        <strong className='text-dark-navy'>Case:</strong> PGNIMD in a Young Male Patient - ISN 2017, ISPNCON.
                                    </li>
                                    <li className='text-sm text-zinc-500'>
                                        <strong className='text-dark-navy'>Case:</strong> Amlodipine Poisoning in 32-week Pregnant Woman.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full h-full flex flex-col gap-6">
                            <div className="flex-1 p-6 relative bg-[#F9FAFB] rounded-3xl">
                                <div className='relative w-max px-3 py-3 bg-[#DBEAFE] rounded-2xl'>
                                    <Image src={'/images/academic/icon-2.svg'} width={56} height={56} alt='Icon' />
                                </div>

                                <h3 className='mt-4 font-semibold text-lg text-dark-navy'>
                                    Certifications & Medical Training
                                </h3>
                                <Subheading className='mt-2 text-left !text-sm font-normal'>
                                    Professionally trained and certified in life-saving and nephrology-related emergency skills.
                                </Subheading>

                                <ul className='relative w-full mt-3 flex flex-col gap-1.5'>
                                    <li className='text-sm text-zinc-500'>
                                        <strong className='text-dark-navy'>Certified:</strong> Basic Life Support (BLS)
                                    </li>
                                    <li className='text-sm text-zinc-500'>
                                        <strong className='text-dark-navy'>Certified:</strong> Advanced Cardiovascular Life Support (ACLS).
                                    </li>
                                </ul>
                            </div>

                            <div className="flex-1 p-6 relative bg-[#F9FAFB] rounded-3xl">
                                <div className='relative w-max px-3 py-3 bg-[#DBEAFE] rounded-2xl'>
                                    <Image src={'/images/academic/icon-4.svg'} width={56} height={56} alt='Icon' />
                                </div>

                                <h3 className='mt-4 font-semibold text-lg text-dark-navy'>
                                    Research & Medical Publications
                                </h3>
                                <Subheading className='mt-2 text-left !text-sm font-normal'>
                                    Published in reputed journals on nephrology, renal transplant, and critical care topics.
                                </Subheading>

                                <ul className='relative w-full mt-3 flex flex-col gap-1.5'>
                                    <li className='text-sm text-zinc-500'>
                                        <strong className='text-dark-navy'>Serum Procalcitonin:</strong> As a Marker in CKD on Hemodialysis - IOSR Journal, 2015.
                                    </li>
                                    <li className='text-sm text-zinc-500'>
                                        <strong className='text-dark-navy'>Atypical Hemolytic Uremic Syndrome:</strong> Apollo Medicine, 2023.
                                    </li>
                                    <li className='text-sm text-zinc-500'>
                                        <strong className='text-dark-navy'>Tacrolimus Pharmacogenomics:</strong> In Renal Transplantation.
                                    </li>
                                    <li className='text-sm text-zinc-500'>
                                        <strong className='text-dark-navy'>Comparison of SLED and CRRT in ICU-AKI Cases:</strong> Critical Care Innovations, 2025.
                                    </li>
                                    <li className='text-sm text-zinc-500'>
                                        <strong className='text-dark-navy'>AKI Severity & Recovery Post PCI vs CABG:</strong> Indian Journal of Applied Research, 2025.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}