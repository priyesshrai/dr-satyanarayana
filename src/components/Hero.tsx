'use client'
import { ButtonPrimary, Section, Subheading, Wrapper } from '@/utils/Section'
import { Calendar } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import AppointmanetForm from './AppointmanetForm';
import { AnimatePresence } from 'motion/react'
import { useLenisControl } from '@/utils/SmoothScroll'
import { Toaster } from 'react-hot-toast'

interface Data {
    title: string;
    summary: string;
    image: string;
}
export default function Hero() {
    const data: Data[] = [
        {
            title: 'Dialysis Expertise',
            summary: 'Skilled in IHD, CRRT, and peritoneal dialysis with complication management.',
            image: '/images/hero/icon-1.svg'
        },
        {
            title: 'Renal Transplant',
            summary: 'Experienced in managing renal transplants and related post-operative complications.',
            image: '/images/hero/icon-2.svg'
        },
        {
            title: 'Interventional Procedures',
            summary: 'Expert in Permcath and PD catheter insertion for dialysis access.',
            image: '/images/hero/icon-3.svg'
        },
        {
            title: 'Critical Care',
            summary: 'Trained in CytoSorb and Oxiris filters for advanced critical care.',
            image: '/images/hero/icon-4.svg'
        },
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
        <Section className='bg-[url(/images/hero/bg-image.png)] w-full bg-cover bg-no-repeat bg-center lg:!pt-[120px] md:!pt-[100px] !pt-[120px]'>
            <Wrapper>
                <div className='w-full relative grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-5'>
                    <div className="w-full h-full relative flex flex-col justify-center md:items-start items-center">
                        <h1
                            className='font-bold lg:text-5xl md:text-4xl text-[28px] text-dark-navy md:text-left text-center leading-[1.3] max-w-lg'>
                            Expert Kidney Care You Can Trust
                        </h1>
                        <Subheading className=' md:text-left !mt-3 text-center max-w-md leading-[1.3]'>
                            <strong>Dr. Satyanarayana Garre</strong>, Specialist in Nephrology - Providing Personalized Treatment for Kidney Health, Dialysis, and More
                        </Subheading>
                        <div className='relative mt-10 flex items-center gap-2 md:justify-start justify-center'>
                            <ButtonPrimary className='flex items-center gap-2 font-normal' onClick={() => setIsFormOpen(true)}>
                                MAKE AN APPOINTMENT
                                <Calendar size={16} />
                            </ButtonPrimary>
                        </div>
                    </div>

                    <div className="w-full h-full relative flex items-center md:justify-end justify-center">
                        <Image src={'/images/hero/hero-image-2.png'} width={800} height={450}
                            alt='Hero Image'
                            className='w-full h-auto max-w-[450px] ' />
                    </div>
                </div>

                <div className='relative w-full mt-20 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5'>
                    {
                        data.map((items, idx) => (
                            <div className='w-full h-full flex gap-2 items-start' key={idx}>
                                <div className='w-9 h-9 shrink-0'>
                                    <Image src={items.image} alt={items.title} width={36} height={36} className='w-9 h-9' />
                                </div>
                                <div className='flex-1 flex flex-col gap-1'>
                                    <h3 className='font-medium text-lg text-dark-navy leading-[1.2]'>
                                        {items.title}
                                    </h3>
                                    <Subheading className='!text-left leading-[1.2]'>
                                        {items.summary}
                                    </Subheading>
                                </div>
                            </div>
                        ))
                    }
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
