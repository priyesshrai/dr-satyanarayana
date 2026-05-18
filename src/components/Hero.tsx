'use client'
import { ButtonPrimary, Section, Subheading, Wrapper } from '@/utils/Section'
import { Award, BadgeCheck, Calendar, HeartHandshake, LucideIcon, Stethoscope } from 'lucide-react'
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

interface Exp {
    icon: LucideIcon,
    title: string
}

const features: Exp[] = [
    {
        icon: Award,
        title: '15+ Years of Experience'
    },
    {
        icon: BadgeCheck,
        title: 'Evidence Based Treatment'
    },
    {
        icon: HeartHandshake,
        title: 'Personalised Patient Care'
    }
]

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
                    <div className="w-full h-full relative flex flex-col justify-center items-start">
                        <span className='flex gap-1.5 items-center border border-dark-navy rounded-full bg-dark-navy/10 uppercase px-3 py-1 font-medium text-dark-navy mb-4 text-sm'>
                            <Stethoscope size={14}/>
                            Kidney Care You Can Trust
                        </span>
                        <h1
                            className='font-bold md:text-4xl text-3xl text-dark-navy text-left leading-tight max-w-lg'>
                            Best Nephrologist & Kidney Specialist in Hyderabad

                        </h1>
                        <Subheading className='text-left !mt-3 max-w-md leading-tight'>
                            Expert care for kidney disorders, dialysis management, and long-term renal health by <strong> Dr. Satyanarayana Garre</strong> in Jubilee Hills, Hyderabad.
                        </Subheading>


                        <div className='mt-10 w-full grid lg:grid-cols-3 grid-cols-2 lg:gap-2 gap-6'>
                            {
                                features.map((items) => (
                                    <div
                                        key={items.title}
                                        className='w-full h-full flex items-center gap-2'
                                    >
                                        <div
                                            className='w-10 h-10 shrink-0 rounded-full bg-dark-navy flex items-center justify-center text-white '>
                                            <items.icon size={18} />
                                        </div>
                                        <span className='leading-tight font-semibold text-dark-navy md:text-sm text-xs'>
                                            {items.title}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>


                        <div className='relative mt-10 w-full'>
                            <ButtonPrimary className='flex items-center gap-2 font-normal' onClick={() => setIsFormOpen(true)}>
                                MAKE AN APPOINTMENT
                                <Calendar size={16} />
                            </ButtonPrimary>
                        </div>
                    </div>

                    <div className="w-full h-full relative flex items-center md:justify-end justify-center">
                        <Image src={'/images/hero/hero-image-2.png'} width={450} height={460}
                            alt='Hero Image'
                            className='w-full h-auto max-w-[450px]' priority />
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
