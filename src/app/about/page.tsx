import Academic from '@/components/Academic'
import WhyUs from '@/components/WhyUs'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "About Dr. Monica’s Dental Clinic | Best Dentist in Varanasi",
    description: "Discover Dr. Monica’s Dental Clinic in Varanasi – offering advanced dental treatments, expert dentists, modern technology & 15+ years of trusted patient care.",
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
