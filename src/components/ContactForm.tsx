'use client';
import { ButtonPrimary, Heading, Section, Subheading, Wrapper } from '@/utils/Section';
import Image from 'next/image'
import Link from 'next/link';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import axios from 'axios'
import { usePathname } from 'next/navigation';

interface ContactInfo {
    title: string;
    icon: string;
    content: string
    link: string;
}
interface FormData {
    name: string,
    email: string;
    phone: string;
    message: string
}
export default function ContactForm() {
    const currentPath = usePathname()
    const contactInfo: ContactInfo[] = [
        {
            title: 'Address',
            content: 'Apollo Health City, Road No 72, Opp. Bharatiya Vidya Bhavan School, Film Nagar, Jubilee Hills, Hyderabad, TS, 500033',
            icon: '/images/contact/pin.svg',
            link: '#'
        },
        {
            title: 'Phone',
            content: '+91 9844181188',
            icon: '/images/contact/phone.svg',
            link: '#'
        },
        {
            title: 'E-Mail',
            content: 'satyakishoregarre@gmail.com',
            icon: '/images/contact/mail.svg',
            link: '#'
        },
        {
            title: 'Clinic Hours',
            content: 'Monday - Saturday(10:30 am to 6 pm)',
            icon: '/images/contact/clock-2.svg',
            link: '#'
        },
    ]
    const [contactFormData, setContactFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        e.preventDefault();
        const { name, value } = e.target
        setContactFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', contactFormData.name)
        formData.append('email', contactFormData.email)
        formData.append('phone', contactFormData.phone)
        formData.append('message', contactFormData.message)

        try {
            await toast.promise(
                axios
                    .post("/api/v1/contact", formData)
                    .then((response) => {
                        if (response.status === 200) {
                            setContactFormData({
                                name: "",
                                email: "",
                                phone: "",
                                message: "",
                            });
                            return response.data.message || "Message sent successfully!";
                        } else {
                            return response.data.message || "Something went wrong!";
                        }
                    })
                    .catch((error) => {
                        console.error("Error sending message:", error.message);
                        throw new Error("Failed to send message");
                    }),
                {
                    loading: "Sending message...",
                    success: (message) => message,
                    error: (err) => err.message || "Something went wrong",
                }
            );
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
    }

    return (
        <Section className='bg-neutral-100'>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <span className='lg:text-xl md:text-base text-sm font-medium text-dark-navy' >CONTACT US</span>
                        {
                            currentPath === '/contact' ? (
                               <h1 className='lg:text-4xl md:text-[28px] text-2xl leading-[1.3] font-bold text-dark-navy'>
                                    We&apos;re Here to Support You
                                </h1>
                            ) : (
                                <Heading>
                                    We&apos;re Here to Support You
                                </Heading>
                            )
                        }
                        <Subheading className='max-w-md mx-auto'>
                            Ready to take the next step in your kidney care journey? Get in touch with us today.
                        </Subheading>
                    </div>

                    <div className='relative w-full grid md:grid-cols-2 grid-cols-1 gap-5'>
                        <div className="w-full h-full relative md:p-8 p-3 bg-white rounded-2xl border border-neutral-200">
                            <div className='w-full relative'>
                                <h3 className='font-bold text-xl text-dark-navy'>
                                    Contact Information
                                </h3>
                            </div>
                            <div className='w-full mt-5 flex flex-col gap-6'>
                                {
                                    contactInfo.map((info, idx) => (
                                        <div className='relative w-full flex gap-2' key={idx}>
                                            <div className='w-8 h-8 shrink-0'>
                                                <Image src={info.icon} width={32} height={32} alt={info.title} />
                                            </div>
                                            <div className='relative max-w-[340px]'>
                                                <h4 className='text-base text-dark-navy font-semibold'>
                                                    {info.title}
                                                </h4>
                                                <Link href={info.link} className='relative text-sm font-normal text-dark-navy leading-[1.1] !font-montserrat'>
                                                    {info.content}
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="w-full h-full relative md:p-8 p-3 bg-white rounded-2xl border border-neutral-200">
                            <div className='w-full relative'>
                                <h3 className='font-bold text-xl text-dark-navy'>
                                    Send us a Message
                                </h3>
                            </div>
                            <form className='w-full mt-5 flex flex-col gap-5' onSubmit={handleSubmit}>
                                <div className='w-full grid grid-cols-2 gap-2'>
                                    <input type="text"
                                        placeholder='Full Name'
                                        name='name'
                                        value={contactFormData.name}
                                        onChange={handleChange}
                                        className='w-full h-full bg-transparent border border-neutral-300 rounded-md px-2 py-2 outline-none text-xl text-dark-navy font-montserrat' />
                                    <input type="tel"
                                        placeholder='Phone'
                                        name='phone'
                                        value={contactFormData.phone}
                                        onChange={handleChange}
                                        className='w-full h-full bg-transparent border border-neutral-300 rounded-md px-2 py-2 outline-none text-xl text-dark-navy  font-montserrat' />
                                </div>
                                <div className='w-full relative'>
                                    <input type="email"
                                        name='email'
                                        value={contactFormData.email}
                                        onChange={handleChange}
                                        placeholder='E-Mail'
                                        className='w-full h-full bg-transparent border border-neutral-300 rounded-md px-2 py-2 outline-none text-xl text-dark-navy font-montserrat' />
                                </div>
                                <div className='w-full relative'>
                                    <textarea
                                        placeholder='Message' rows={4}
                                        name='message'
                                        value={contactFormData.message}
                                        onChange={handleChange}
                                        className='w-full h-full bg-transparent border border-neutral-300 rounded-md px-2 py-2 outline-none text-xl text-dark-navy font-montserrat' />
                                </div>
                                <div className='w-full relative'>
                                    <ButtonPrimary className='w-full'>
                                        Send Message
                                    </ButtonPrimary>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Toaster />
            </Wrapper>
        </Section>
    )
}
