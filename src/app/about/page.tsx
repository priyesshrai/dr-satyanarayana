import Academic from '@/components/Academic'
import WhyUs from '@/components/WhyUs'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "About Dr Satyanarayana Garre – Hyderabad Nephrologist",
    description: "Know about Dr. Satyanarayana Garre, trusted nephrologist in Hyderabad with expertise in kidney diseases, dialysis, transplant, and patient-focused care.",
    alternates: {
        canonical: "https://www.drsatyanarayanagarre.in/about",
    },
}

export default function AboutPage() {
    return (
        <main className='relative w-full'>
            <WhyUs />
            <Academic />
        </main>
    )
}
