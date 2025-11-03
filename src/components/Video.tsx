'use client';
import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import { Play, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useLenisControl } from '@/utils/SmoothScroll';

export default function Video() {
    const [open, setOpen] = useState(false);
    const { stopScroll, startScroll } = useLenisControl();
    useEffect(() => {
        if (open) {
            stopScroll();
        } else {
            startScroll();
        }
        return () => startScroll();
    }, [open, stopScroll, startScroll]);

    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Procedural Highlights
                        </Heading>
                        <Subheading className='mx-auto max-w-md'>
                            Insight into advanced treatments.
                        </Subheading>
                    </div>
                    <div className='flex-1 relative grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                        <div className='relative w-full'>
                            <div className="relative w-full h-[400px] flex items-center justify-center rounded-2xl bg-[url(/images/video/img-01.jpg)] bg-no-repeat bg-cover bg-center after:inset-0 after:bg-zinc-800/20 after:absolute overflow-hidden " onClick={() => setOpen(true)}>
                                <div className="relative">
                                    <div className="ripple w-20 h-20 rounded-full  flex items-center justify-center relative">
                                        <div className="absolute inset-0 rounded-full animate-ripple bg-dark-navy/40"></div>
                                        <div className="absolute inset-0 rounded-full animate-ripple delay-300 bg-dark-navy/40"></div>
                                        <div className="absolute inset-0 rounded-full animate-ripple delay-700 bg-dark-navy/40"></div>

                                        <div className="relative z-10 flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full cursor-pointer text-dark-navy shadow-lg hover:scale-105 transition-transform duration-300">
                                            <Play size={40} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className='block mt-2 text-xl font-medium text-dark-navy'>
                                Saving an Access, Restoring Dialysis
                            </span>
                        </div>

                    </div>
                </div>
                <Drawer open={open} setOpen={setOpen} />
            </Wrapper>
        </Section>
    )
}

type Props = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>
}

function Drawer({ open, setOpen }: Props) {

    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-20"
                        onClick={() => setOpen(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    />

                    <motion.div
                        className="fixed bottom-0 left-0 right-0 bg-dark-navy rounded-t-3xl shadow-2xl z-50 overflow-y-auto h-[600px]"
                        initial={{ y: "100%" }}
                        animate={{ y: "8%" }}
                        exit={{ y: "100%" }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 18,
                        }}
                    >
                        <div className='relative w-full h-full'>
                            <div className="w-full relative lg:p-16 md:p-10 p-7 flex md:flex-row flex-col gap-10" data-lenis-prevent>
                                <div className='relative flex-1'>
                                    <h2 className='text-white font-bold lg:text-4xl md:text-2xl text-lg'>
                                        Saving an Access, Restoring Dialysis
                                    </h2>
                                    <p className='mt-3 text-gray-100 max-w-2xl md:text-lg text-base'>
                                        A patient was referred to me with poor flow in the left radiocephalic AV fistula, resulting in inadequate dialysis.
                                    </p>

                                    <h2 className='text-white font-bold md:text-2xl text-base mt-5 max-w-3xl'>
                                        A simple fistulogram revealed a juxta-anastomotic lesion — the hidden culprit.
                                    </h2>
                                    <p className='mt-3 text-gray-100 max-w-2xl md:text-lg text-base'>
                                        ✅ With balloon fistuloplasty, the lesion was corrected, a good thrill returned, and the patient could resume dialysis with excellent flows.
                                    </p>

                                    <h2 className='text-white font-bold md:text-2xl text-base mt-5 max-w-3xl'>
                                        🔑 Key message:
                                    </h2>

                                    <p className='mt-3 text-gray-100 max-w-2xl md:text-lg text-base'>
                                        Even small stenotic lesions can compromise dialysis adequacy.
                                        <br />
                                        Timely intervention preserves fistula function and avoids the need for new access creation.
                                        <br />
                                        Always investigate poor flows early — a simple test and prompt treatment can make all the difference.
                                    </p>
                                    <h2 className='text-white font-bold md:text-2xl text-base mt-5 max-w-3xl'>
                                        👨‍⚕️ Each access is precious — protect and salvage whenever possible.
                                    </h2>
                                </div>

                                <div className='shrink-0 md:w-[300px] w-full'>
                                    <video controls className='md:w-[290px] w-full '>
                                        <source src="/video/vdo-1.mp4" type="video/mp4" />
                                    </video>
                                </div>

                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                className="block fixed right-5 top-5 text-zinc-500 hover:text-zinc-800 bg-white p-2 rounded-full cursor-pointer "
                            >
                                <X size={22} />
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}