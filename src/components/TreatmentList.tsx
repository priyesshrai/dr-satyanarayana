'use client'
import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react'

interface Data {
    title: string;
    summary: ReactNode;
    icon: string;
    link: string;
}

export default function TreatmentList() {
    const currentPath = usePathname()
    const data: Data[] = [
        {
            title: 'Kidney Stones & Urinary Disorders',
            summary: (
                <div className='w-full mt-3 flex flex-col gap-2'>
                    <p className='lg:text-base text-zinc-600 mt-1 font-medium text-sm'>
                        Kidney stones and urinary disorders are common conditions that can affect people of all ages. Kidney stones are hard deposits that form inside the kidneys, while urinary disorders include problems such as infections, frequent urination, or difficulty in passing urine.
                    </p>
                    <p className='lg:text-base text-sm text-zinc-600 mt-1 font-medium'>
                        Early diagnosis and proper treatment help prevent complications and protect long-term kidney health.
                    </p>
                </div>
            ),
            icon: '/images/treatment/icon-1.svg',
            link: '/services/acute-kidney-injury',
        },
        {
            title: 'Acute Kidney Injury Treatment',
            summary: (
                <div className='w-full mt-3 flex flex-col gap-2'>
                    <p className='lg:text-base text-zinc-600 mt-1 font-medium text-sm'>
                        Acute Kidney Injury (AKI), also known as Acute Renal Failure, is a sudden loss of kidney function that develops within hours or days. It causes waste and fluid to build up in the body, which can be life-threatening if not treated quickly.
                    </p>
                    <p className='lg:text-base text-sm text-zinc-600 mt-1 font-medium'>
                        With timely diagnosis and treatment, kidney function can often be restored fully or partially.
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
                        Chronic Kidney Disease (CKD) is a condition where the kidneys gradually lose their ability to filter waste and excess fluids from the blood. If not treated on time, CKD can progress to renal failure, where kidneys stop working completely and require dialysis or a transplant.
                    </p>
                    <p className='lg:text-base text-sm text-zinc-600 mt-1 font-medium'>
                        Early detection and proper management can slow down the progression and improve quality of life.
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
        {
            title: 'Kidney Transplantation',
            summary: (
                <div className='w-full mt-3 flex flex-col gap-2'>
                    <p className='lg:text-base text-zinc-600 mt-1 font-medium text-sm'>
                        Kidney transplantation is a surgical procedure where a healthy kidney from a living or deceased donor is placed into a patient whose kidneys have failed. It is often the best treatment option for patients with end-stage renal disease (ESRD), offering improved quality of life compared to long-term dialysis.
                    </p>
                    <p className='lg:text-base text-sm text-zinc-600 mt-1 font-medium'>
                        With proper care, a transplanted kidney can function for many years.
                    </p>
                </div>
            ),
            icon: '/images/treatment/icon-3.svg',
            link: '/services/nephrotic-syndrome',
        },
        {
            title: 'Dialysis Care',
            summary: (
                <div className='w-full mt-3 flex flex-col gap-2'>
                    <p className='lg:text-base text-zinc-600 mt-1 font-medium text-sm'>
                        Dialysis is a life-saving treatment for patients whose kidneys can no longer filter waste and excess fluid from the blood. It can be done through Hemodialysis, where blood is cleaned using a dialysis machine, or Peritoneal Dialysis, where a cleansing fluid is used inside the abdomen.
                    </p>
                    <p className='lg:text-base text-sm text-zinc-600 mt-1 font-medium'>
                        Dialysis helps patients manage symptoms and maintain quality of life until a kidney transplant is possible.
                    </p>
                </div>
            ),
            icon: '/images/treatment/icon-3.svg',
            link: '/services/nephrotic-syndrome',
        },
        {
            title: 'Hypertension & Diabetes-related Kidney Problems',
            summary: (
                <div className='w-full mt-3 flex flex-col gap-2'>
                    <p className='lg:text-base text-zinc-600 mt-1 font-medium text-sm'>
                        High blood pressure (hypertension) and uncontrolled diabetes are two leading causes of chronic kidney disease (CKD). Over time, they damage the kidney&apos;s delicate blood vessels, reducing their ability to filter waste and excess fluids.
                    </p>
                    <p className='lg:text-base text-sm text-zinc-600 mt-1 font-medium'>
                        Early detection and strict management of these conditions can significantly slow down kidney damage and protect overall health.
                    </p>
                </div>
            ),
            icon: '/images/treatment/icon-3.svg',
            link: '/services/nephrotic-syndrome',
        },
        {
            title: 'Inherited & Rare Kidney Disorders',
            summary: (
                <div className='w-full mt-3 flex flex-col gap-2'>
                    <p className='lg:text-base text-zinc-600 mt-1 font-medium text-sm'>
                        Inherited and rare kidney disorders are conditions passed down genetically or occurring infrequently in the population. These include Polycystic Kidney Disease (PKD), Alport Syndrome, Bartter Syndrome, and Gitelman Syndrome.
                    </p>
                    <p className='lg:text-base text-sm text-zinc-600 mt-1 font-medium'>
                        They affect kidney function differently—some cause cyst formation, others lead to salt imbalance or progressive kidney failure.
                    </p>
                </div>
            ),
            icon: '/images/treatment/icon-3.svg',
            link: '/services/nephrotic-syndrome',
        },
        {
            title: 'Interventional Nephrology & Renal Imaging',
            summary: (
                <div className='w-full mt-3 flex flex-col gap-2'>
                    <p className='lg:text-base text-zinc-600 mt-1 font-medium text-sm'>
                        Interventional Nephrology focuses on minimally invasive procedures and imaging techniques to diagnose and manage kidney-related conditions. Renal imaging, including ultrasound, Doppler, and advanced scans, helps assess kidney structure, blood flow, and function.
                    </p>
                    <p className='lg:text-base text-sm text-zinc-600 mt-1 font-medium'>
                        Combined with interventional procedures such as vascular access placement, biopsy, and catheter insertions, it ensures accurate diagnosis and effective treatment.
                    </p>
                </div>
            ),
            icon: '/images/treatment/icon-3.svg',
            link: '/services/nephrotic-syndrome',
        },
        {
            title: 'Preventive Kidney Health & Lifestyle Guidance',
            summary: (
                <div className='w-full mt-3 flex flex-col gap-2'>
                    <p className='lg:text-base text-zinc-600 mt-1 font-medium text-sm'>
                        Prevention plays a vital role in protecting kidney health and reducing the risk of chronic diseases. With the right lifestyle habits, diet, and regular health check-ups, many kidney problems can be delayed or avoided.
                    </p>
                    <p className='lg:text-base text-sm text-zinc-600 mt-1 font-medium'>
                        Preventive kidney care focuses on educating patients about healthy choices, monitoring risk factors, and adopting practices that keep kidneys functioning optimally.
                    </p>
                </div>
            ),
            icon: '/images/treatment/icon-3.svg',
            link: '/services/nephrotic-syndrome',
        },
    ]
    const bgColors = [
        "#DBEAFE", // light blue
        "#FFEDD5", // light orange
        "#F4F9CE", // light yellow
        "#E0F7FA", // cyan
        "#FCE4EC", // pink
        "#E8F5E9", // green
        "#FFF3E0", // peach
        "#F3E5F5", // lavender
        "#E6EEFA", // purple-light
        "#F9FBE7", // lime-light
    ];
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
                            (currentPath === "/" ? data.slice(0, 5) : data).map((items, idx) => (
                                <div
                                    key={idx}
                                    className='w-full h-full p-5 rounded-xl'
                                    style={{ backgroundColor: bgColors[idx % bgColors.length] }}
                                >
                                    <div className="relative w-full flex items-center md:gap-7 gap-4">
                                        <Image
                                            src={items.icon}
                                            width={44}
                                            height={44}
                                            alt={items.title}
                                            className="shrink-0 w-11 h-11"
                                        />
                                        <h3 className="md:text-lg text-sm font-semibold text-dark-navy leading-[1.2]">
                                            {items.title}
                                        </h3>
                                    </div>
                                    {items.summary}
                                    <Link
                                        href={items.link}
                                        className="mt-3 block w-max ml-auto text-blue-500"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            ))
                        }
                        {
                            currentPath === '/' ? (
                                <div className='relative w-full h-full bg-gray-100 p-5 rounded-xl flex items-center justify-center'>
                                    <Link href='/services' className='font-semibold md:text-2xl text-lg !font-montserrat text-blue-500 flex items-center gap-3 group'>
                                        View All
                                        <MoveUpRight className='group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-300 ease-in-out' />
                                    </Link>
                                </div>

                            ) : ''
                        }
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
