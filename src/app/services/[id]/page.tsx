import React from 'react'
import { Section, Wrapper } from '@/utils/Section'
import { Data } from '@/utils/data'
import type { Metadata, ResolvingMetadata } from 'next'

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


type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params
    const data = Data.find((d) => d.id.toLowerCase() === id.toLowerCase());

    return {
        title: data?.metaTitle,
        description: data?.metaDescription,
        alternates: {
            canonical: data?.canonical,
        }
    }
}
