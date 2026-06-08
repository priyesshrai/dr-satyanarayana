import dynamic from 'next/dynamic';
import React from 'react'
const NavBar = dynamic(() => import("@/components/NavBar"));
const Footer = dynamic(() => import("@/components/Footer"));
const ContactForm = dynamic(() => import("@/components/ContactForm"));


export default function ServicePageLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar />
            {children}
            <ContactForm />
            <Footer />
        </>
    )
}
