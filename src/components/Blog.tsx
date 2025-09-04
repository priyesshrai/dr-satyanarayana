import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Blog {
    title: string;
    content: string;
    slug: string;
    image: string;
}
export default function Blog() {
    const blog: Blog[] = [
        {
            title: 'Understanding Chronic Kidney Disease: A Beginner’s Guide',
            content: 'Chronic Kidney Disease (CKD) is often called a "silent condition" because symptoms rarely appear until significant damage has occurred. This blog breaks down the basics of CKD — from how your kidneys work, to the common causes such as diabetes and high blood pressure, to the stages of the disease. Readers will also learn why early screening is crucial, how blood and urine tests help in diagnosis, and what lifestyle and dietary changes can slow down kidney damage. Perfect for patients, caregivers, and anyone who wants to understand this growing global health challenge.',
            slug: '',
            image: '/images/blog/blog-1.png'
        },
        {
            title: 'The Importance of Staying Hydrated for Kidney Health',
            content: 'Water is the unsung hero of kidney health. In this post, we explore how hydration directly supports the kidneys in filtering waste, regulating blood pressure, and balancing electrolytes. We’ll also look at how much water is “enough” for different individuals, warning signs of dehydration, and why overhydration can also be harmful. Real-life examples',
            slug: '',
            image: '/images/blog/blog-2.png'
        },
        {
            title: 'Kidney-Friendly Diet: Foods to Eat and Avoid',
            content: 'When it comes to kidney health, what you eat matters — a lot. This blog takes readers through the essentials of a kidney-friendly diet, including low-sodium choices, healthy protein sources, and foods rich in antioxidants. We’ll also discuss why limiting phosphorus and potassium may be necessary for some patients, and provide a sample.',
            slug: '',
            image: '/images/blog/blog-3.png'
        },
        {
            title: 'Dialysis Demystified: What to Expect During Treatment',
            content: 'For patients starting dialysis, the unknown can be more frightening than the treatment itself. This article walks readers step-by-step through the process, explaining the differences between hemodialysis and peritoneal dialysis, how each is performed, and what equipment is used. We’ll discuss the duration and frequency of sessions, pos.',
            slug: '',
            image: '/images/blog/blog-4.png'
        },
        {
            title: 'Preventing Kidney Stones: Tips for a Healthy Urinary System',
            content: 'Kidney stones are notorious for causing sudden, intense pain — but they are often preventable. This blog explains what kidney stones are, how they form, and the main types that affect people. We’ll share evidence-based prevention strategies, including optimal hydration, dietary adjustments, and lifestyle habits that reduce the risk. M.',
            slug: '',
            image: '/images/blog/blog-5.png'
        },
    ]
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Blogs and News
                        </Heading>
                        <Subheading className='mx-auto max-w-md'>
                            Expert articles and patient-friendly guides for better kidney health.
                        </Subheading>
                    </div>

                    <div className='relative w-full grid lg:grid-cols-2 grid-cols-1 gap-8'>
                        <div className="w-full h-full">
                            <div className='relative w-full'>
                                <Image src={blog[0].image} width={500} height={400} alt={blog[0].title}
                                    className='w-full rounded-2xl h-[350px] object-cover object-top-left'
                                />

                                <h3 className='lg:text-2xl text-base md:text-xl mt-4 text-dark-navy font-bold '>
                                    {blog[0].title}
                                </h3>
                                <Subheading className='text-left !text-sm !mt-4'>
                                    {blog[0].content}
                                </Subheading>
                                <Link href={blog[0].slug} className='mt-8 flex gap-1.5 items-center text-base text-dark-navy font-semibold'>
                                    <ArrowRight size={16} />
                                    Read More
                                </Link>
                            </div>
                        </div>

                        <div className="w-full h-full flex flex-col gap-4 max-[600px]:gap-12">
                            {
                                blog.map((data, idx) => {
                                    if (idx === 0) return;

                                    return (
                                        <div className='flex-1 flex items-start gap-4 max-[600px]:flex-col' key={data.title}>
                                            <div className='w-28 h-28 max-[600px]:w-full max-[600px]:h-auto shrink-0'>
                                                <Image src={data.image} width={500} height={300} alt={data.title} className='w-full h-auto rounded-lg max-[600px]:h-[250px] object-cover object-center' />
                                            </div>
                                            <div className='flex-1 flex flex-col gap-1'>
                                                <Link href={data.slug} className='flex-1 text-base font-semibold text-dark-navy'>
                                                    {data.title}
                                                </Link>
                                                <Subheading className='text-left !font-normal !text-sm'>
                                                    {data.content}
                                                </Subheading>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
