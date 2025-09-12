import { ButtonPrimary, Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function About() {
    return (
        <Section>
            <Wrapper>
                <div className='w-full relative grid md:grid-cols-2 grid-cols-1 gap-5'>

                    {/*** 
                    <div className="w-full h-full relative flex items-start md:justify-start justify-center">
                        <Image src='/images/about/about.png' width={520} height={500} alt='About dr satyanarayana'
                            className='w-full h-auto max-w-[520px]' />
                    </div>
                    ***/} 
                    <div className="w-full h-full relative flex flex-col justify-center">
                        <span className='!font-open-sans flex items-center justify-between px-4 py-2 border border-light-blue text-light-blue text-base w-max rounded-lg'>More About Me</span>

                        <Heading className='mt-4 lg:!text-4xl md:!text-[28px] !text-xl'>
                            Trusted <span className='!font-open-sans text-light-blue'>Nephrology Specialist</span> with Extensive Clinical Expertise
                        </Heading>
                        <Subheading className='mt-2 text-left max-w-md'>
                            Expert in all aspects of nephrology—from dialysis to transplant care and advanced procedures.
                        </Subheading>

                        <Subheading className='mt-4 text-left font-normal'>
                            Dr. Satyanarayana Garre is a distinguished Nephrologist based in Hyderabad, Telangana, with over 6 years of experience in the field of kidney health and renal treatments. As a highly qualified medical professional, he holds an MBBS, MD, and DNB in Nephrology, ensuring that he possesses an in-depth understanding of the complexities associated with kidney diseases.
                        </Subheading>
                        <Subheading className='mt-2 text-left font-normal'>
                            Dr. Garre&apos;s dedication to patient care is reflected in his ability to communicate effectively in multiple languages, including English, Hindi, Telugu, and Kannada, making him accessible to a diverse patient population.
                        </Subheading>
                        <div className='mt-8 flex items-center gap-3 justify-start max-[420px]:flex-col'>
                            <ButtonPrimary>
                                Make an Appointment
                            </ButtonPrimary>
                            <Link href='/about'
                                className='rounded-full md:text-base text-sm font-semibold px-5 py-2 !font-montserrat text-dark-navy border border-dark-navy'>
                                Know More
                            </Link>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
