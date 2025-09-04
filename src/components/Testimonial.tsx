import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip'

export default function Testimonial() {
    const people = [
        {
            id: 1,
            name: "John Doe",
            designation: "Software Engineer",
            image: "/images/testimonial/user-1.png",
        },
        {
            id: 2,
            name: "Robert Johnson",
            designation: "Product Manager",
            image: '/images/testimonial/user-2.png',
        },
        {
            id: 3,
            name: "Jane Smith",
            designation: "Data Scientist",
            image: '/images/testimonial/user-3.png',
        },
        {
            id: 4,
            name: "Emily Davis",
            designation: "UX Designer",
            image: '/images/testimonial/user-4.png',
        },
        {
            id: 5,
            name: "Tyler Durden",
            designation: "Soap Developer",
            image: '/images/testimonial/user-5.png',
        },
        {
            id: 6,
            name: "Adding More People",
            designation: "",
            image: '/images/testimonial/plus.svg',
        },
    ];
    return (
        <Section className='bg-[url(/images/testimonial/bg.png)] bg-no-repeat bg-cover bg-left-top '>
            <Wrapper>
                <div className='relative w-full grid lg:grid-cols-[450px_1fr] grid-cols-1 gap-16'>
                    <div className='w-full h-full flex flex-col gap-5'>
                        <Heading>
                            Our patient most valuable Words
                        </Heading>
                        <Subheading className='text-left'>
                            The true measure of our care is reflected in the voices of our patients. Their heartfelt experiences and kind words inspire us every day to deliver exceptional healthcare with compassion and dedication. Here&apos;s what they have to say about their journey with us.
                        </Subheading>
                        <div className='relative'>
                            <span className='font-bold text-base text-dark-navy'>
                                500+ Patients Trust Us & Counting
                            </span>
                            <div className="mt-5 flex flex-row items-center justify-center w-max">
                                <AnimatedTooltip items={people} />
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-full overflow-hidden'>
                        
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}   
