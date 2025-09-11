import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react'

interface Data {
    title: string;
    summary: ReactNode;
    icon: string;
    link: string;
}

export default function TreatmentList() {
    const data: Data[] = [
        {
            title: 'Acute Kidney Injury Treatment',
            summary: (
                <div className='w-full mt-3 flex flex-col gap-2'>
                    <p className='lg:text-base text-zinc-600 mt-1 font-medium text-sm'>
                        Acute Kidney Injury (AKI) is a sudden loss of kidney function, often caused by infection, dehydration, medications, or surgery.
                    </p>
                    <p className='lg:text-base text-sm text-zinc-600 mt-1 font-medium'>
                        Dr. Satyanarayana Garre provides rapid diagnosis and personalized treatment to stabilize kidney function, manage fluid and electrolyte balance, and prevent long-term damage.
                    </p>
                </div>
            ),
            icon: '/images/treatment/icon-1.svg',
            link: '/services/acute-kidney-injury',
        },
        {
            title: 'Chronic Kidney Disease Treatment',
            summary: (
                <div className='w-full mt-3 flex flex-col gap-2'>
                    <p className='lg:text-base text-zinc-600 mt-1 font-medium text-sm'>
                        Chronic Kidney Disease (CKD) is a gradual loss of kidney function over time, often linked to diabetes, hypertension, or genetic factors.
                    </p>
                    <p className='lg:text-base text-sm text-zinc-600 mt-1 font-medium'>
                        Dr. Garre creates customized care plans that include lifestyle modifications, blood pressure and sugar control, medication, and regular monitoring to slow disease progression and delay the need for dialysis or transplant.
                    </p>
                </div>
            ),
            icon: '/images/treatment/icon-2.svg',
            link: '/services/chronic-kidney-disease',
        },
        {
            title: 'Nephrotic Syndrome Treatment',
            summary: (
                <div className='w-full mt-3 flex flex-col gap-2'>
                    <p className='lg:text-base text-zinc-600 mt-1 font-medium text-sm'>
                        Nephrotic Syndrome is a kidney disorder that causes the body to excrete too much protein in the urine, leading to swelling, low protein levels, and high cholesterol.
                    </p>
                    <p className='lg:text-base text-sm text-zinc-600 mt-1 font-medium'>
                        Dr. Garre offers comprehensive care including corticosteroid therapy, blood pressure control, dietary counseling, and long-term disease monitoring to manage relapses and prevent complications.
                    </p>
                </div>
            ),
            icon: '/images/treatment/icon-3.svg',
            link: '/services/nephrotic-syndrome',
        },
    ]
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            List of <span className='font-open-sans text-light-blue'>Treatments</span>
                        </Heading>
                        <Subheading className='mx-auto max-w-md'>
                            Specialized Nephrology Services Tailored to Your Kidney Health Needs
                        </Subheading>
                    </div>

                    <div className='flex-1 relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-6 gap-8'>
                        {
                            data.map((items, idx) => (
                                <div key={idx} className={`w-full h-full p-5 rounded-xl ${idx === 0 ? 'bg-[#DBEAFE]' : idx === 1 ? 'bg-[#FFEDD5]' : 'bg-[#F4F9CE]'}`}>
                                    <div className='relative w-full flex items-center md:gap-7 gap-4'>
                                        <Image src={items.icon} width={44} height={44} alt={items.title}
                                            className='shrink-0 w-11 h-11'
                                        />
                                        <h3 className='md:text-lg text-sm font-semibold text-dark-navy leading-[1.2]'>
                                            {items.title}
                                        </h3>
                                    </div>
                                    {items.summary}
                                    <Link href={items.link} className='mt-3 block w-max ml-auto text-blue-500'>
                                        Learn More
                                    </Link> 
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
