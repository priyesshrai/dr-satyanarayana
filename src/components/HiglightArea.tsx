import { Section, Subheading, Wrapper } from '@/utils/Section'
import React from 'react'
import { Marquee } from './magicui/marquee'
import Image from 'next/image'

export default function HiglightArea() {
    const words = [
        'Caring',
        'for',
        'your',
        'Kidney'
    ]
    return (
        <Section>
            <div className='w-full relative '>
                <Marquee pauseOnHover className='items-center md:gap-10 gap-5'>
                    {
                        words.map((data, idx) => (
                            <div key={idx} className='flex md:gap-10 gap-5 items-center'>
                                <span className=' lg:text-[128px] text-[90px] font-extrabold leading-[1] text-[#F0F0F0] cursor-pointer'>
                                    {data}
                                </span>
                            </div>
                        ))
                    }
                </Marquee>
            </div>

            <Wrapper className='pt-16 '>
                <div className='relative w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7'>
                    <div className='w-full h-full rounded-2xl bg-[#85D0B1] p-5 flex gap-3'>
                        <div className='flex-1 relative'>
                            <span className='block text-white'>
                                24/7 <br />
                                <strong className='text-lg'>Emergency Care</strong>
                            </span>
                            <Subheading className='text-left !text-white !text-sm !mt-3'>
                                Immediate medical attention with a fully equipped emergency unit and experienced doctors available round the clock.
                            </Subheading>
                        </div>
                        <div className='w-20 relative shrink-0'>
                            <Image src='/images/highlite/icon-1.svg' width={150} height={150} className='w-full h-full' alt='' />
                        </div>
                    </div>

                    <div className='w-full h-full rounded-2xl bg-[#9688E9] p-5 flex gap-3'>
                        <div className='flex-1 relative'>
                            <span className='block text-white'>
                                Advanced <br />
                                <strong className='text-lg'>Diagnostic Center</strong>
                            </span>
                            <Subheading className='text-left !text-white !text-sm !mt-3'>
                                State-of-the-art laboratory, MRI, CT scan, and X-ray facilities for accurate and quick diagnosis.
                            </Subheading>
                        </div>
                        <div className='w-20 relative shrink-0 mt-auto'>
                            <Image src='/images/highlite/icon-2.svg' width={150} height={150} className='w-full h-full' alt='' />
                        </div>
                    </div>

                    <div className='w-full h-full rounded-2xl bg-[#E87966] p-5 flex gap-3'>
                        <div className='flex-1 relative'>
                            <span className='block text-white'>
                                Accurate <br />
                                <strong className='text-lg'>Lab Tests</strong>
                            </span>
                            <Subheading className='text-left !text-white !text-sm !mt-3'>
                                State-of-the-art diagnostic laboratories ensuring fast and precise test results.
                            </Subheading>
                        </div>
                        <div className='w-20 relative shrink-0 mt-auto'>
                            <Image src='/images/highlite/icon-3.svg' width={150} height={150} className='w-full h-full' alt='' />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
