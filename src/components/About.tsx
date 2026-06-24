'use client'
import { ButtonPrimary, Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import { useLenisControl } from '@/utils/SmoothScroll'
import { AnimatePresence } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import AppointmanetForm from './AppointmanetForm'
import { Stethoscope } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'

export default function About() {
    const router = useRouter()
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

    const { isAuthenticated } = useAuth();


    return (
        <Section>
            <Wrapper>
                <div className='w-full relative grid md:grid-cols-2 grid-cols-1 gap-5'>


                    <div className="w-full h-full relative flex items-start md:justify-start justify-center">
                        <Image src='/images/about/about.png' width={520} height={560} alt='About dr satyanarayana'
                            className='w-full h-auto max-w-[520px]' />
                    </div>

                    <div className="w-full h-full relative flex flex-col justify-center">

                        <span className='flex w-max gap-1.5 items-center border border-light-blue rounded-full bg-light-blue/10 uppercase px-3 py-1 font-medium text-light-blue text-sm'>
                            <Stethoscope size={14} />
                            ABOUT THE DOCTOR
                        </span>

                        <Heading className='mt-4 lg:!text-4xl md:!text-[28px] !text-xl'>
                            Advanced in <span className='!font-open-sans text-light-blue'>Kidney Care</span> Jubilee Hills, Hyderabad
                        </Heading>
                        <Subheading className='mt-2 text-left max-w-md'>
                            Expert in all aspects of nephrology—from dialysis to transplant care and advanced procedures.
                        </Subheading>

                        <Subheading className='mt-4 text-left font-normal'>
                            Dr. Satyanarayana Garre provides specialized care for patients dealing with kidney-related health concerns ranging from early-stage renal conditions to advanced medical management.
                        </Subheading>
                        <Subheading className='mt-2 text-left font-normal'>
                            His approach combines clinical precision, detailed evaluation, and structured treatment planning to help patients receive the right care at the right stage.
                        </Subheading>
                        <Subheading className='mt-2 text-left font-normal'>
                            Practicing in Jubilee Hills, Hyderabad, he focuses on building long-term patient relationships through clear communication, ethical guidance, and consistent medical support tailored to individual health needs.
                        </Subheading>
                        <div className='mt-8 flex items-center gap-3 justify-start max-[420px]:flex-col'>
                            <ButtonPrimary
                                onClick={() => isAuthenticated ? router.push("/user/dashoard") : router.push("/login")}
                            >
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
            {/* {
                isFormOpen && (
                    <AnimatePresence mode='wait'>
                        <AppointmanetForm key="appointment-form" closeForm={setIsFormOpen} />
                    </AnimatePresence>
                )
            } */}
            <Toaster />
        </Section>
    )
}
