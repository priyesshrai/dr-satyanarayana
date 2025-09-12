'use client';
import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import React, { useRef } from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import Image from 'next/image';

interface Testimonial {
    user?: string;
    avatar?: string;
    comment?: string;
}

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

    const testimonialData: Testimonial[] = [
        {
            user: '(Apollo 24/7 Website)',
            comment: 'Dr. Satyanarayana G is a very kind and polite doctor. He listens to all the patient\'s concerns and responds with humility. He has been really helpful in changing my mother\'s life. Will recommend him 100% to patients having Kidney related illness.'
        },
        {
            user: '(Apollo 24/7 Website)',
            comment: 'Dr satyanarayana G is very good doctor and humble person, he treats his patients very professionally, my son was taking treatment from him as he was CKD patient. Recently he had successful transplant under Dr Satya at Apollo Hyderabad. I highly recommend this Dr for any Kidney related issues and we wish him all the best.'
        }
    ]
    const [api, setApi] = React.useState<CarouselApi>()
    const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }))

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
                        <Carousel className="w-full h-full relative"
                            plugins={[plugin.current]}
                            opts={{
                                loop: true,
                                dragFree: true
                            }}
                            onMouseEnter={plugin.current.stop}
                            onMouseLeave={plugin.current.reset}
                            setApi={setApi}
                        >
                            <CarouselContent className='items-center gap-8 lg:ml-5 p-3 lg:mr-5'>
                                {
                                    testimonialData.map((data, index) => (
                                        <CarouselItem key={index}
                                            className='max-w-[500px] w-full shrink-0 cursor-pointer bg-white rounded-2xl shadow p-0'>
                                            <div className='relative w-full h-full p-8'>
                                                <div className='relative w-full'>
                                                    <span className='text-sm text-zinc-600 font-medium'>{data.comment}</span>
                                                </div>

                                                <div className='relative w-full mt-5 flex gap-3 items-center '>
                                                    <div className='relative'>
                                                        <h3 className='font-bold text-base text-dark-navy leading-[1]'>
                                                            {data.user}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))
                                }
                            </CarouselContent>
                            {/* <CarouselPrevious
                                onClick={() => {
                                    api?.scrollPrev();
                                    plugin.current?.reset();
                                }}
                                className='w-11 h-11 bg-dark-navy text-white left-0 text-3xl cursor-pointer hover:bg-primary-hover hover:text-white'
                            />
                            <CarouselNext
                                onClick={() => {
                                    api?.scrollNext();
                                    plugin.current?.reset();
                                }}
                                className='w-11 h-11 bg-dark-navy text-white text-3xl right-8 cursor-pointer hover:bg-primary-hover hover:text-white'
                            /> */}
                        </Carousel>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}   
