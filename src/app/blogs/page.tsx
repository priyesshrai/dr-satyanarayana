import { Section, Subheading, Wrapper } from '@/utils/Section'
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Kidney Health Blog – Nephrology & Prevention Tips",
    description: "Explore kidney health blogs by Dr. Satyanarayana Garre. Learn about prevention, symptoms, causes, and treatments for kidney disease, stones, and failure.",
    alternates: {
        canonical: "https://www.drsatyanarayanagarre.in/blogs",
    },
}

interface Blog {
  title: string;
  content: string;
  slug: string;
  image: string;
}
export default function Blogs() {
  const blog: Blog[] = [
    {
      title: 'Symptoms of Kidney Stones',
      content: 'Kidney stones are hard mineral masses inside your kidneys or urinary tract. They can be very painful, but knowing the symptoms early helps in quick treatment and avoiding complications. Here are the common signs and what to watch out for. Kidney stones e...',
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
            <h1 className='lg:text-4xl md:text-[28px] text-2xl leading-[1.3] font-bold text-dark-navy'>
              Blogs and News
            </h1>
            <Subheading className='mx-auto max-w-md'>
              Expert articles and patient-friendly guides for better kidney health.
            </Subheading>
          </div>

          <div className='w-full flex-1 relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            {
              blog.map((data, idx) => (
                <div key={idx + 32} className='w-full h-full overflow-hidden border border-gray-300 rounded-xl'>
                  <Image src={data.image} width={500} height={400} className='w-full object-cover h-auto' alt={data.title} />

                  <div className='relative mt-5 px-5 pb-5'>
                    <Link href={data.slug} className='lg:text-2xl md:text-xl text-base font-medium text-dark-navy leading-[1.2] '>
                      {data.title}
                    </Link>
                    <Subheading className='text-left mt-2 line-clamp-5'>
                      {data.content}
                    </Subheading>

                    <Link href={data.slug} className='mt-7 w-max ml-auto !font-montserrat font-medium text-blue-500 flex items-center gap-2'>
                      Read this Blog
                      <ArrowRight />
                    </Link>
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
