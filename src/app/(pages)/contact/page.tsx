import React from 'react'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic';
const NavBar = dynamic(() => import("@/components/NavBar"));
const Footer = dynamic(() => import("@/components/Footer"));
const ContactForm = dynamic(() => import("@/components/ContactForm"));


export const metadata: Metadata = {
  title: "Contact Dr Garre – Hyderabad Kidney Specialist",
  description: "Contact Dr. Satyanarayana Garre, top nephrologist in Hyderabad. Book appointments for kidney disease, dialysis, transplant and preventive health services.",
  alternates: {
    canonical: "https://www.drsatyanarayanagarre.in/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <ContactForm />
      <Footer />
    </>
  )
}
