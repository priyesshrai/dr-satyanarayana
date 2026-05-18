"use client";
import { Heading, Section, Wrapper } from '@/utils/Section'
import { useState } from 'react';
import { motion, AnimatePresence, Variants } from "motion/react"
import { ChevronDown } from 'lucide-react';

interface FAQ {
    que: string;
    ans: string;
}

const data: FAQ[] = [
    {
        que: "What symptoms may indicate kidney-related problems?",
        ans: "Common signs of kidney issues include swelling in the feet or face, foamy urine, frequent urination, fatigue, back pain, high blood pressure, and loss of appetite. Early diagnosis can help prevent complications and protect kidney function."
    },
    {
        que: "How is kidney function evaluated?",
        ans: "Kidney function is usually checked through blood tests, urine tests, blood pressure monitoring, and imaging scans such as ultrasound. These tests help doctors understand how well the kidneys are filtering waste from the body."
    },
    {
        que: "Can lifestyle changes support kidney health?",
        ans: "Yes, healthy habits such as drinking enough water, reducing salt intake, controlling blood sugar and blood pressure, avoiding smoking, and following a balanced diet can significantly improve kidney health and reduce the risk of kidney disease progression."
    },
    {
        que: "When is dialysis recommended?",
        ans: "Dialysis is recommended when the kidneys are no longer able to remove waste and excess fluids effectively. It is commonly advised in advanced kidney disease or kidney failure to help maintain the body's normal balance."
    },
    {
        que: "Why are regular follow-ups important in kidney disease?",
        ans: "Regular follow-ups help monitor kidney function, track treatment progress, and detect complications early. Timely medical guidance can slow disease progression and improve overall quality of life."
    },
    {
        que: "How can I maintain better kidney health?",
        ans: "Maintaining kidney health involves staying hydrated, eating a kidney-friendly diet, exercising regularly, avoiding unnecessary medications, and getting routine health checkups for early detection of any kidney-related issues."
    },
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        }
    }
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
        }
    }
}

export default function FAQ() {
    const [active, setActive] = useState<null | number>(0);

    const handleClick = (idx: number) => {
        setActive(prevIdx => (prevIdx === idx ? null : idx))
    }

    return (
        <Section>
            <Wrapper className='max-w-4xl!'>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Frequently Asked Questions <br /> About Kidney Care
                        </Heading>
                    </div>

                    <motion.div
                        className='w-full grid gap-3'
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {data.map((item, idx) => {
                            const isOpen = active === idx;

                            return (
                                <motion.div
                                    key={idx}
                                    variants={cardVariants}
                                    className={`w-full border rounded-lg overflow-hidden cursor-pointer select-none
                                        transition-colors duration-300
                                        ${isOpen
                                            ? 'border-light-blue/40 bg-light-blue/10'
                                            : 'border-light-blue/20 bg-light-blue/5 hover:border-light-blue/30 hover:bg-light-blue/8'
                                        }`}
                                    onClick={() => handleClick(idx)}
                                    whileHover={!isOpen ? { y: -2, transition: { duration: 0.2, ease: "easeOut" } } : {}}
                                    whileTap={{ scale: 0.99, transition: { duration: 0.1 } }}
                                    layout
                                >
                                    {/* Question row */}
                                    <div className='flex items-center justify-between gap-3 px-4 py-4'>
                                        <motion.p
                                            className='text-sm md:text-base font-medium leading-snug flex-1'
                                            animate={{ opacity: 1 }}
                                        >
                                            {item.que}
                                        </motion.p>

                                        {/* Animated chevron */}
                                        <motion.span
                                            className='flex-shrink-0 w-6 h-6 rounded-full border border-light-blue/30 bg-light-blue/10 flex items-center justify-center text-dark-navy'
                                            animate={{
                                                rotate: isOpen ? 180 : 0,
                                                backgroundColor: isOpen ? 'rgba(var(--light-blue-rgb, 56 189 248) / 0.2)' : 'rgba(var(--light-blue-rgb, 56 189 248) / 0.1)',
                                            }}
                                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        >
                                            <ChevronDown size={14} />
                                        </motion.span>
                                    </div>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                key="answer"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{
                                                    height: 'auto',
                                                    opacity: 1,
                                                    transition: {
                                                        height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                                                        opacity: { duration: 0.25, delay: 0.08 },
                                                    }
                                                }}
                                                exit={{
                                                    height: 0,
                                                    opacity: 0,
                                                    transition: {
                                                        height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                                                        opacity: { duration: 0.15 },
                                                    }
                                                }}
                                                style={{ overflow: 'hidden' }}
                                            >
                                                {/* Thin divider that fades in */}
                                                <motion.div
                                                    className='mx-4 border-t border-light-blue/15'
                                                    initial={{ scaleX: 0, opacity: 0 }}
                                                    animate={{ scaleX: 1, opacity: 1, transition: { duration: 0.3, delay: 0.05 } }}
                                                    exit={{ opacity: 0 }}
                                                    style={{ transformOrigin: 'left' }}
                                                />

                                                <motion.p
                                                    className='px-4 pt-3 pb-4 text-sm leading-relaxed opacity-75'
                                                    initial={{ y: 6 }}
                                                    animate={{ y: 0, transition: { duration: 0.3, delay: 0.1, ease: "easeOut" } }}
                                                    exit={{ y: 4 }}
                                                >
                                                    {item.ans}
                                                </motion.p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </Wrapper>
        </Section>
    )
}