import { Section, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import React from 'react'

export default function CTABanner() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full'>
                    <Image src='/images/contact/contact-bg-4.svg' width={1200} height={300} className='w-full cursor-pointer' alt='' />
                </div>
            </Wrapper>
        </Section>
    )
}
