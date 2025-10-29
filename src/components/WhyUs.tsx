'use client';
import { ButtonPrimary, Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import { CircleCheckBig } from 'lucide-react';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import AppointmanetForm from './AppointmanetForm';
import { AnimatePresence } from 'motion/react'
import { useLenisControl } from '@/utils/SmoothScroll'
import { Toaster } from 'react-hot-toast'

interface List {
    title: string;
    summary: string;
}
export default function WhyUs() {
    const list: List[] = [
        {
            title: 'Renowned Nephrology Specialist',
            summary: 'With years of dedicated experience, Dr. Satyanarayana Garre is a trusted name in diagnosing and treating a wide spectrum of kidney-related diseases.'
        },
        {
            title: 'Personalized & Compassionate Approach',
            summary: 'Each patient is unique—Dr. Garre listens carefully, understands your condition thoroughly, and creates treatment plans tailored specifically to your needs.'
        },
        {
            title: 'Advanced Treatment Facilities',
            summary: 'Access world-class diagnostic and treatment services equipped with the latest technology for precise and effective kidney care.'
        }
    ]
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
    const { stopScroll, startScroll } = useLenisControl();

    useEffect(() => {
        if (isFormOpen) {
            stopScroll();
        } else {
            startScroll();
        }
        return () => startScroll();
    }, [isFormOpen, stopScroll, startScroll]);

    return (
        <Section className='bg-[#F9FAFB]'>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <h1 className='lg:text-4xl md:text-[28px] text-2xl leading-[1.3] font-bold text-dark-navy'>
                            Dr. Satyanarayana Garre - Best Nephrologist in Hyderabad
                        </h1>
                        <Subheading className='mx-auto'>
                            Trusted Expertise in Kidney Health & Compassionate Nephrology Care
                        </Subheading>
                    </div>

                    <div className='flex-1 relative grid md:grid-cols-2 grid-cols-1 gap-10'>
                        <div className='w-full h-full relative flex flex-col justify-center gap-7 order-2 md:order-1'>
                            {
                                list.map((item, idx) => (
                                    <div className='max-w-xl relative' key={idx}>
                                        <div className='relative w-full flex gap-2 items-center'>
                                            <CircleCheckBig className='text-green-400' size={20} />
                                            <h3 className='text-base text-dark-navy font-semibold'>
                                                {item.title}
                                            </h3>
                                        </div>
                                        <Subheading className='text-left mt-2.5 max-w-lg'>
                                            {item.summary}
                                        </Subheading>
                                    </div>
                                ))
                            }
                            <ButtonPrimary className='mt-6' onClick={()=>setIsFormOpen(true)}>
                                Make an Appointment
                            </ButtonPrimary>
                        </div>

                        <div className='w-full h-full relative flex md:justify-end justify-center order-1 md:order-2'>
                            <Image src='/images/about/new-img.png' width={550} height={400} alt='Why Choose Dr. Satayanarayan' className=' h-auto' />
                        </div>
                    </div>
                </div>
            </Wrapper>
            {
                isFormOpen && (
                    <AnimatePresence mode='wait'>
                        <AppointmanetForm key="appointment-form" closeForm={setIsFormOpen} />
                    </AnimatePresence>
                )
            }
            <Toaster />
        </Section>
    )
}
