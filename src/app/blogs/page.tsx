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
    },
    {
      title: 'Understanding Chronic Kidney Disease (CKD)',
      content: 'Our kidneys do a lot of important work every day. They remove waste and extra fluid from the blood, balance minerals, control blood pressure, and keep the body healthy. When kidneys stop working properly over time, it is called Chronic Kidney Disease (CKD).....',
      slug: '/blogs/understanding-chronic-kidney-disease',
      image: '/images/blog/blog-5.jpg'
    },
    {
      title: 'Blood Urea Nitrogen (BUN) – Complete Patient Guide',
      content: 'A complete guide for patients to understand Blood Urea Nitrogen (BUN), normal ranges, causes of high or low BUN, symptoms, FAQ, and when to consult a nephrologist.',
      slug: '/blogs/bun-complete-guide',
      image: '/images/blog/blog-6.jpg'
    },
    {
      title: 'Cost of Kidney Transplantation',
      content: 'A kidney transplant is one of the most effective treatments for patients with end-stage kidney disease. It offers a better quality of life, more stability, and more long-term health benefits compared to dialysis.',
      slug: '/blogs/cost-of-kidney-transplantation',
      image: '/images/blog/blog-7.jpg'
    },
    {
      title: 'Perm Catheterization for Dialysis: A Nephrologist’s Practical Guide',
      content: 'When kidney function becomes severely reduced, the kidneys are no longer able to clean the blood and remove waste from the body. In such situations, dialysis is required. For dialysis to be performed safely and regularly, a reliable blood access is needed.',
      slug: '/blogs/perm-catheterization-for-dialysis',
      image: '/images/blog/blog-8.jpg'
    },
    {
      title: 'Kidney Problems Diet Chart',
      content: 'A well-planned kidney problems diet chart plays an important role in managing kidney disease. The right diet can reduce the load on your kidneys, control symptoms, and help slow down further damage.',
      slug: '/blogs/kidney-problems-diet-chart',
      image: '/images/blog/kidney-problem-diet-chart-plan.webp'
    },
    {
      title: 'Creatinine Levels Before and After Dialysis',
      content: 'Creatinine levels are one of the most common concerns for patients with kidney problems. Many patients often ask what their creatinine level means, when to worry about creatinine levels, and how dialysis affects these numbers. Understanding creatinine levels before and after dialysis can help patients make informed decisions about their kidney health.',
      slug: '/blogs/creatinine-levels-before-and-after-dialysis',
      image: '/images/blog/creatinine-levels-before-and-after-dialysis.png'
    },
    {
      title: 'Is Beer Good for Kidney Stones?',
      content: 'Kidney stones can cause severe pain and discomfort, often making patients search for quick relief. One common question many people ask is, “Is beer good for kidney stones?” This belief has been around for years, with many thinking beer can help flush stones out of the body. But is this really true, or is it just another myth?',
      slug: '/blogs/is-beer-good-for-kidney-stones',
      image: '/images/blog/blog-9.png'
    },
    {
      title: 'Hematuria: What It Means',
      content: 'Hematuria is the presence of blood in the urine. It can appear as red or pink urine, which is called gross or visible hematuria. Sometimes, blood is present but cannot be seen with the naked eye. This is known as microscopic hematuria, which is detected only under a microscope or through a urine test.',
      slug: '/blogs/what-is-hematuria',
      image: '/images/blog/blog-10.png'
    },
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
              blog.reverse().map((data, idx) => (
                <div key={idx + 32} className='flex flex-col w-full h-full overflow-hidden border border-gray-300 rounded-xl'>
                  <Image src={data.image} width={500} height={400} className='w-full object-cover h-auto' alt={data.title} />

                  <div className='relative mt-5 px-5 pb-5 flex flex-col justify-between flex-1'>
                    <div>
                      <Link href={data.slug} className='lg:text-2xl md:text-xl text-base font-medium text-dark-navy leading-[1.2] '>
                        {data.title}
                      </Link>
                      <Subheading className='text-left mt-2 line-clamp-5'>
                        {data.content}
                      </Subheading>
                    </div>

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
