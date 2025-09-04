import { Section, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import React from 'react'

export default function ContactBanner() {
    return (
        <Section>
            <Wrapper>
                <div className='w-full relative'>
                    <Image src='/images/contact/contact-bg-3.png' width={1200} height={400} alt='Contact us' className='w-full h-auto cursor-auto' />
                </div>
            </Wrapper>
        </Section>
    )
}
