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
            title: 'Symptoms of Kidney Stones',
            content: 'Kidney stones are hard mineral masses inside your kidneys or urinary tract. They can be very painful, but knowing the symptoms early helps in quick treatment and avoiding complications. Here are the common signs and what to watch out for. Kidney stones (also called renal calculi or nephrolithiasis) form when wastes like calcium, oxalate, uric acid and other substances crystallize in the urine. Normally urine contains chemicals that prevent crystals, but if those chemicals are out of balance...',
            slug: '/blogs/symptoms-of-kidney-stones',
            image: '/images/blog/blog-1.jpg'
        },
        {
            title: 'How to Prevent Kidney Failure',
            content: 'Our kidneys are like natural filters of the body. They remove waste, balance fluids, keep blood pressure under control, and help produce red blood cells. When the kidneys stop working properly, it can lead to kidney failure, a life-threatening condition...',
            slug: '/blogs/how-to-prevent-kidney-failure',
            image: '/images/blog/blog-2.jpg'
        },
        {
            title: 'How Diabetes Causes Kidney Failure',
            content: 'Diabetes is one of the leading causes of kidney disease around the world. When blood sugar is not well controlled over years, it gradually damages the kidneys until they can no longer do their job. This blog explains in plain language how diabetes causes kidney failure...',
            slug: '/blogs/how-diabetes-causes-kidney-failure',
            image: '/images/blog/blog-3.jpg'
        },
        {
            title: 'Can Too Much Salt Cause Kidney Damage?',
            content: 'Salt is something we all use – in cooking, in packaged foods, and at the table. A small amount of salt (sodium) is necessary for our body to work properly. But when salt intake is too high, it can start to harm our kidneys. In this blog,....',
            slug: '/blogs/can-too-much-salt-cause-kidney-damage',
            image: '/images/blog/blog-4.jpg'
        }
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
                                        <div className='flex items-start gap-4 max-[600px]:flex-col' key={data.title}>
                                            <div className='w-28 h-28 max-[600px]:w-full max-[600px]:h-auto shrink-0'>
                                                <Image src={data.image} width={500} height={300} alt={data.title} className='w-full h-[100px] rounded-lg max-[600px]:h-[250px] object-cover object-center' />
                                            </div>
                                            <div className='flex flex-col gap-1'>
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
