import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import { ShieldEllipsis } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Highlight() {
  return (
    <Section>
      <Wrapper>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-8'>
          <div className='relatve w-full'>
            <Image
              src={"/images/about/img.svg"}
              width={500}
              height={500}
              alt=''
              className='object-contain'
            />
          </div>
          <div className='w-full lg:pl-10 md:pl-8 pl-0'>
            <span className='flex w-max gap-1.5 items-center border border-light-blue rounded-full bg-light-blue/10 uppercase px-3 py-1 font-medium text-light-blue text-sm'>
              <ShieldEllipsis size={14} />
              DIALYSIS & KIDNEY CARE
            </span>
            <Heading className='mt-4 lg:!text-4xl md:!text-[28px] !text-xl'>
              Kidney Care & Dialysis Support in Hyderabad
            </Heading>
            <Subheading className='mt-6 text-left'>
              At our clinic in Jubilee Hills, Hyderabad, patients receive comprehensive care for a wide range of kidney disorders. We focus on accurate diagnosis, modern treatment methods, and continuous monitoring to help patients maintain better kidney health.
            </Subheading>
          </div>
        </div>
      </Wrapper>
    </Section>
  )
}
