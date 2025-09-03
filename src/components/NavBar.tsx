'use client'
import { useLenisControl } from '@/utils/SmoothScroll';
import { Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface MenuItem {
    key: string;
    name: string;
    path: string;
}

export default function NavBar() {
    const currentPath = usePathname();
    const menuItems: MenuItem[] = [
        {
            key: 'home',
            name: 'Home',
            path: '/'
        },
        {
            key: 'about',
            name: 'About',
            path: '/about'
        },
        {
            key: 'services',
            name: 'Services',
            path: '#'
        },
        {
            key: 'appointment',
            name: 'Appointment',
            path: '/#'
        },
        {
            key: 'contact',
            name: 'Contact',
            path: '#'
        },
        {
            key: 'blog',
            name: 'Blogs',
            path: '#'
        }
    ]
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { stopScroll, startScroll } = useLenisControl();

    useEffect(() => {
        if (isMenuOpen) {
            stopScroll();
        } else {
            startScroll();
        }
        return () => startScroll();
    }, [isMenuOpen, stopScroll, startScroll]);

    return (
        <header className={`${currentPath === '/' ? 'absolute left-0 top-0 bg-transparent' : 'relative bg-white'}  w-full z-30`}>
            <nav className='relative w-full max-w-7xl mx-auto px-5 py-3 flex items-center justify-between'>
                <div className='relative shrink-0 w-max'>
                    <Link href={'/'}>
                        <Image src={'/images/logo/logo.svg'} width={300} height={200} alt='Dr. Satyanarayana' className='' />
                    </Link>
                </div>

                <div className='lg:flex hidden relative w-max items-center gap-4'>
                    {
                        menuItems.map(items => (
                            <Link
                                href={items.path}
                                key={items.key}
                                className={`relative text-base font-medium text-dark-navy transition-all duration-300 ease-linear hover:text-hover-navy after:absolute after:bottom-0 after:h-[2px] after:bg-dark-navy ${currentPath === items.path ? ' after:left-0 after:w-full' : 'after:w-0 after:right-0 after:left-auto'}`}>
                                {items.name}
                            </Link>
                        ))
                    }
                </div>

                <div className='lg:flex flex-col items-end hidden relative w-max'>
                    <div className='relative flex items-center text-dark-navy gap-2'>
                        <Phone size={16} className='mt-[3px]' />
                        <Link href={'tel:(555)123-4567'}
                            className='flex flex-col text-lg text-dark-navy font-semibold leading-[1.2]'>
                            (+91) 123-4567890
                        </Link>
                    </div>
                    <span className='text-[12px] text-zinc-400 font-medium'>24/7 Emergency Line</span>
                </div>

                <button onClick={() => setIsMenuOpen((prev) => !prev)} className='lg:hidden w-12 h-12 flex items-center justify-center cursor-pointer bg-primary rounded-full '>
                    <Menu className='text-dark-navy w-7 h-7' />
                </button>
            </nav>

            <div className={`lg:hidden fixed inset-0 left-0 transition-transform duration-200 ease-linear bg-dark-navy/40 z-20 backdrop-blur-[4px] ${isMenuOpen ? 'translate-x-0' : ' -translate-x-full'} `} />

            <div className={`lg:hidden fixed z-40 inset-y-0 bg-white max-w-[450px] w-full transition-transform duration-300 ease-linear p-5 overflow-hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className='w-full h-full relative'>
                    <div className='relative w-full flex justify-between'>
                        <Link href={'/'}>
                            <Image src={'/images/logo/logo.svg'} width={300} height={200} alt='Dr. Satyanarayan' />
                        </Link>
                        <button className='w-10 h-10 bg-dark-navy rounded-full flex items-center justify-center border-none cursor-pointer' onClick={() => { setIsMenuOpen(false) }}>
                            <X color='white' />
                        </button>
                    </div>

                    <div className='w-full relative mt-10 flex flex-col gap-2'>
                        {
                            menuItems.map(items => (
                                <Link href={items.path} key={items.key} className={`w-max relative text-xl transition-all font-medium duration-300 ease-linear px-4 py-1.5 rounded-full 
                                    ${currentPath === items.path ? 'bg-dark-navy text-white' : 'text-dark-navy'} `}
                                    onClick={() => { setIsMenuOpen(false) }}
                                >
                                    {items.name}
                                </Link>
                            ))
                        }
                    </div>

                    <div className='w-max absolute bottom-0 flex flex-col items-end' onClick={() => { setIsMenuOpen(false) }}>
                        <div className='relative flex items-center text-dark-navy gap-2'>
                            <Phone size={16} className='mt-[3px]' />
                            <Link href={'tel:(555)123-4567'}
                                className='flex flex-col text-lg text-dark-navy font-semibold leading-[1.2]'>
                                (+91) 123-4567890
                            </Link>
                        </div>
                        <span className='text-[12px] text-zinc-400 font-medium'>24/7 Emergency Line</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
