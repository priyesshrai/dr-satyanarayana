'use client'
import { useAuth } from '@/hooks/useAuth';
import { useLenisControl } from '@/utils/SmoothScroll';
import { ChevronRight, LogOut, Mail, Menu, User, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Signup from './auth/signup';
import { AnimatePresence, motion, Variants } from 'motion/react';
import { getInitials } from '@/lib/generate-initials';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';

interface MenuItem {
    key: string;
    name: string;
    path: string;
}

const containerVariants: Variants = {
    hide: {
        opacity: 0,
        y: 30,
        scale: 0.98,
        pointerEvents: "none",
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        pointerEvents: "auto",
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 25,
            mass: 0.8,
            bounce: 0.4,
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};
const itemVariants: Variants = {
    hide: {
        opacity: 0,
        y: -10,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 20,
        },
    },
};

export default function NavBar() {
    const router = useRouter()
    const currentPath = usePathname();
    const menuItems: MenuItem[] = [
        {
            key: 'home',
            name: 'Home',
            path: '/'
        },
        {
            key: 'about',
            name: 'Dr. Garre Profile',
            path: '/about'
        },
        {
            key: 'services',
            name: 'Kidney Treatments',
            path: '/services'
        },
        {
            key: 'contact',
            name: 'Contact Us',
            path: '/contact'
        },
        {
            key: 'blog',
            name: 'Nephrology Blogs',
            path: '/blogs'
        }
    ]
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { stopScroll, startScroll } = useLenisControl();

    const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
    const { isAuthenticated, user } = useAuth();
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (isMenuOpen || openLoginModal || showOptions) {
            stopScroll();
        } else {
            startScroll();
        }
        return () => startScroll();
    }, [isMenuOpen, stopScroll, startScroll, openLoginModal, showOptions]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            )
                setShowOptions(false);
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const logoutMutation = useMutation({
        mutationFn: async () => {
            const response = await axios.post("/api/auth/logout", {}, { withCredentials: true });
            return response.data;
        },
        onSuccess: (val) => {
            toast.success(val?.message);
            window.location.href = "/";
        },
        onError: (err: AxiosError<{ error: string }>) => {
            toast.error(err.response?.data?.error || "Something went wrong");
        }
    });

    return (
        <>
            <header className={`${currentPath === '/' ? 'absolute left-0 top-0 bg-transparent inset-x-0' : 'relative w-full bg-white'} z-30`}>
                <nav className='relative w-full max-w-7xl mx-auto px-5 py-3 flex items-center justify-between'>
                    <div className='relative shrink-0 w-max'>
                        <Link href={'/'}>
                            <Image src={'/images/logo/logo.svg'} width={300} height={50} alt='Dr. Satyanarayana'
                                className='md:w-[300px] w-[200px] h-auto' priority />
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

                    <div className='lg:flex flex-col items-end hidden relative w-max' ref={dropdownRef}>
                        <button
                            onClick={() =>
                                isAuthenticated ? setShowOptions((prev) => !prev) : setOpenLoginModal(true)
                            }
                            className='flex items-center gap-1 bg-dark-navy px-3 py-2.5 text-white rounded-lg cursor-pointer transition-colors duration-200 ease-in-out hover:bg-dark-navy/90 text-sm'>
                            {!isAuthenticated ? "Book Appointement" : <>
                                <User size={14} fill='white' />
                                <span className='text-sm leading-tight'>
                                    {user?.name.trim().split(" ")[0]}
                                </span>
                            </>}
                        </button>
                        <AnimatePresence>
                            {showOptions && user && (
                                <motion.div
                                    className="absolute z-20 mt-7 top-full right-0 p-4 min-w-60 max-w-64 bg-white backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200 space-y-5"
                                    variants={containerVariants}
                                    initial="hide"
                                    animate="show"
                                    exit="hide"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-full shrink-0 bg-dark-navy border border-white flex items-center justify-center font-semibold text-sm select-none text-white">
                                            {getInitials(user.name)}
                                        </div>

                                        <div className="flex-1 flex flex-col leading-tight">
                                            <span className="text-sm font-semibold text-gray-900 truncate">
                                                {user?.name}
                                            </span>
                                            <span className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                                                <Mail size={12} className="text-gray-400" />
                                                {user?.email}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="h-px bg-gray-100" />

                                    {/* Actions */}
                                    <div className="flex flex-col gap-1">
                                        <motion.button
                                            variants={itemVariants}
                                            onClick={() => (
                                                router.push(`${user.role === "DOCTOR" ? "/doctor/dashboard" : "/user/dashboard"}`),
                                                setShowOptions(false)
                                            )}
                                            className="cursor-pointer group flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                                        >
                                            <span>Dashboard</span>
                                            <ChevronRight
                                                size={14}
                                                className="text-gray-400 group-hover:translate-x-0.5 transition-transform"
                                            />
                                        </motion.button>

                                        <motion.button
                                            variants={itemVariants}
                                            onClick={() => (logoutMutation.mutate(), setShowOptions(false))}
                                            className="cursor-pointer group flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors duration-150"
                                        >
                                            <span>Logout</span>
                                            <LogOut
                                                size={14}
                                                className="text-red-500 group-hover:scale-110 transition-transform"
                                            />
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
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
                                <Image src={'/images/logo/logo.svg'} width={300} height={200} alt='Dr. Satyanarayan' className='md:w-[300px] w-[200px] h-auto ' />
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

                        <div className='w-full absolute bottom-0 flex flex-col items-end'>
                            {
                                !isAuthenticated ?
                                    <button
                                        onClick={() => (setOpenLoginModal(true), setIsMenuOpen(false))}
                                        className='w-full bg-dark-navy px-3 py-2.5 text-white rounded-lg cursor-pointer transition-colors duration-200 ease-in-out hover:bg-dark-navy/90 text-sm'
                                    >
                                        Book Appointment
                                    </button>
                                    :
                                    <button
                                        onClick={() => (isAuthenticated ? router.push("/user/dashboard") : router.push("/login"), setIsMenuOpen(false))}
                                        className='w-full flex flex-col items-center justify-center bg-dark-navy px-3 py-2.5 text-white rounded-lg cursor-pointer transition-colors duration-200 ease-in-out hover:bg-dark-navy/90 text-sm'
                                    >
                                        <User className='text-white' size={18} />
                                        <span className='text-xl text-white text-center'>
                                            {user?.name}
                                        </span>
                                    </button>
                            }
                        </div>
                    </div>
                </div>
            </header>


            <Signup
                openLoginModal={openLoginModal}
                closeLoginModal={() => setOpenLoginModal(false)}
            />
        </>
    )
}
