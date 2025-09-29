import TreatmentList from '@/components/TreatmentList'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Kidney Care Services – Nephrology & Dialysis",
    description: "Explore nephrology services by Dr. Satyanarayana Garre in Hyderabad. From kidney disease care to dialysis, transplant, and prevention, expert treatment.",
    alternates: {
        canonical: "https://www.drsatyanarayanagarre.in/services",
    },
}

export default function page() {
    return (
        <main>
            <TreatmentList />
        </main>
    )
}
