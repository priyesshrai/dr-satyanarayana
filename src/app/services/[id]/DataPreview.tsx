import { Data } from '@/utils/data'
import { Section, Wrapper } from '@/utils/Section'
import React from 'react'

export default function DataPreview({ id }: { id: string }) {
    const data = Data.find((d) => d.id.toLowerCase() === id.toLowerCase())
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full'>
                    {/* {data?.content} */}
                </div>
            </Wrapper>
        </Section>
    )
}
