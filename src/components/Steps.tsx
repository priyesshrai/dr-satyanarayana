import { ButtonPrimary, Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Steps() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full rounded-2xl md:bg-gradient-to-r bg-gradient-to-b from-dark-navy to-[#F3F3F3] p-5 grid lg:grid-cols-[500px_1fr] md:grid-cols-[300px_1fr] grid-cols-1 lg:gap-16 md:gap-5 gap-8'>
                    <div className="w-full h-full">
                        <Image src={'/images/contact/cta-img.png'} width={500} height={500} alt='Easy steps and get your solution' className='w-full' />
                    </div>
                    <div className="w-full flex justify-center flex-col gap-10">
                        <div className='relative flex flex-col gap-5'>
                            <Heading className='lg:!text-dark-navy !text-white'>
                                Easy steps and get your solution
                            </Heading>
                            <Subheading className='!text-left lg:!text-dark-navy !text-white'>
                                Booking a consultation with Dr. Satyanarayana Garre is simple and hassle-free. Just follow these four quick steps to start your journey toward better kidney health.
                            </Subheading>
                        </div>
                        <div className='flex items-center gap-2 md:flex-row flex-col-reverse'>
                            <ButtonPrimary>
                                Make an Appointment
                            </ButtonPrimary>
                            <Link href='/about' className='rounded-full text-base font-medium !font-montserrat text-dark-navy px-4 py-2 border border-dark-navy'>
                                Know More
                            </Link>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
