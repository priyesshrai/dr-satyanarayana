import Login from '@/components/login';
import dynamic from 'next/dynamic';
import React from 'react'
import { Toaster } from 'react-hot-toast';
const NavBar = dynamic(() => import("@/components/NavBar"));
const Footer = dynamic(() => import("@/components/Footer"));
const ContactForm = dynamic(() => import("@/components/ContactForm"));

export default function LoginPage() {
    return (
        <>
            <NavBar />
            <Login />
            <Toaster
                position="top-center"
                toastOptions={{
                    style: {
                        borderRadius: '10px',
                        background: '#0f172a',
                        color: '#f8fafc',
                        fontSize: '13px',
                    },
                    success: {
                        iconTheme: { primary: '#0f766e', secondary: '#f0fdfa' },
                    },
                }}
            />
            <ContactForm />
            <Footer />
        </>
    )
}
