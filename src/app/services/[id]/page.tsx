import React from 'react'
import { Section, Wrapper } from '@/utils/Section'
import { Data } from '@/utils/data'

export default async function TreatmentDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const data = Data.find((d) => d.id.toLowerCase() === id.toLowerCase())
    return (
        <main className='relative w-full'>
            <Section>
                <Wrapper>
                    {data?.content}
                </Wrapper>
            </Section>
        </main>
    )
}
