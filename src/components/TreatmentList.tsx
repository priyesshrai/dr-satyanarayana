import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image';
import React from 'react'

interface Data {
    title: string;
    summary: string;
    summary2: string;
    icon: string;
}

export default function TreatmentList() {
    const data: Data[] = [
        {
            title: 'Acute Kidney Injury Treatment',
            summary: 'Acute Kidney Injury (AKI) is a sudden loss of kidney function, often caused by infection, dehydration, medications, or surgery.',
            summary2: 'Dr. Satyanarayana Garre provides rapid diagnosis and personalized treatment to stabilize kidney function, manage fluid and electrolyte balance, and prevent long-term damage.',
            icon: '/images/treatment/icon-1.svg'
        },
        {
            title: 'Chronic Kidney Disease Treatment',
            summary: 'Chronic Kidney Disease (CKD) is a gradual loss of kidney function over time, often linked to diabetes, hypertension, or genetic factors.',
            summary2: 'Dr. Garre creates customized care plans that include lifestyle modifications, blood pressure and sugar control, medication, and regular monitoring to slow disease progression and delay the need for dialysis or transplant.',
            icon: '/images/treatment/icon-2.svg'
        },
        {
            title: 'Nephrotic Syndrome Treatment',
            summary: 'Nephrotic Syndrome is a kidney disorder that causes the body to excrete too much protein in the urine, leading to swelling, low protein levels, and high cholesterol.',
            summary2: 'Dr. Garre offers comprehensive care including corticosteroid therapy, blood pressure control, dietary counseling, and long-term disease monitoring to manage relapses and prevent complications.',
            icon: '/images/treatment/icon-3.svg'
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

                    <div className='flex-1 relative grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] lg:gap-4 md:gap-6 gap-8'>
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
                                    <div className='w-full mt-3 flex flex-col gap-2'>
                                        <Subheading className='text-left !text-sm'>
                                            {items.summary}
                                        </Subheading>
                                        <Subheading className='text-left !text-sm'>
                                            {items.summary2}
                                        </Subheading>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
