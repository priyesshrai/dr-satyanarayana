'use client';
import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import { Play, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react';
import React, { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import { useLenisControl } from '@/utils/SmoothScroll';


interface Video {
    cover: string;
    url: string;
    title: string;
    content: ReactNode
}

const video: Video[] = [
    {
        cover: '/images/video/img-01.jpg',
        url: "/video/vdo-1.mp4",
        title: 'Saving an Access, Restoring Dialysis',
        content: <div className='relative flex-1'>
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

    },
    {
        cover: '/images/video/img-02.jpg',
        url: "/video/vdo-2.mp4",
        title: 'Cephalic Arch Stenosis Presenting as Fistula Clot',
        content:
            <div className='relative flex-1'>
                <h2 className='text-white font-bold lg:text-4xl md:text-2xl text-lg'>
                    Cephalic Arch Stenosis Presenting as Fistula Clot
                </h2>
                <p className='mt-3 text-gray-100 max-w-2xl md:text-lg text-base'>
                    This case demonstrates the critical importance of identifying and addressing the underlying cause of access thrombosis rather than just treating the clot itself.
                </p>

                <p className='mt-3 text-gray-100 max-w-2xl md:text-lg text-base'>
                    A patient presented with a thrombosed AV fistula, and POCUS (point-of-care ultrasound) revealed a clot burden within the fistula segment with no detectable flow. At first glance, this appeared to be a simple thrombotic occlusion.
                </p>

                <p className='mt-3 text-gray-100 max-w-2xl md:text-lg text-base'>
                    However, on detailed angiographic assessment, we identified a significant cephalic arch stenosis — the true culprit lesion responsible for the stasis and subsequent clot formation.
                    <br />
                    If only surgical declotting had been done without correcting this cephalic arch obstruction, the thrombus would almost certainly have recurred.
                </p>

                <p className='mt-3 text-gray-100 max-w-2xl md:text-lg text-base'>
                    During the procedure, contrast injection into the fistula showed no flow beyond the thrombus. Subsequently, balloon maceration of the clot was performed, followed by angioplasty of the cephalic arch using a high-pressure balloon, which restored excellent outflow and re-established normal fistula function.
                </p>
                <p className='mt-3 text-gray-100 max-w-2xl md:text-lg text-base'>
                    This intervention not only salvaged the existing access but also prevented the need for a temporary dialysis catheter, thereby reducing infection risk and preserving the patient's native access longevity.
                </p>
                <h2 className='text-white font-bold md:text-2xl text-base mt-5 max-w-3xl'>
                    Learning Point
                </h2>
                <em className='block mt-4 text-gray-100 max-w-2xl md:text-lg text-base'>
                    “In access salvage, don't just chase the clot — find and fix the reason behind it.Treating the underlying stenosis is key to durable success.”
                </em>
            </div>
    },
]

export default function Video() {
    const [open, setOpen] = useState(false);
    const { stopScroll, startScroll } = useLenisControl();
    const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
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
                        {
                            video.map((item, idx) => (
                                <div className='relative w-full' key={idx + 3}>
                                    <div
                                        className={`relative w-full h-[400px] flex items-center justify-center rounded-2xl bg-no-repeat bg-cover bg-center after:inset-0 after:bg-zinc-800/20 after:absolute overflow-hidden`}
                                        style={{ backgroundImage: `url(${item.cover})` }}
                                        onClick={() => { setOpen(true); setSelectedVideo(idx) }}
                                    >
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
                                        {item.title}
                                    </span>
                                </div>
                            ))
                        }

                    </div>
                </div>
                <Drawer open={open} setOpen={setOpen} selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />
            </Wrapper>
        </Section>
    )
}

type Props = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>
    selectedVideo: number | null
    setSelectedVideo: Dispatch<SetStateAction<number | null>>
}

function Drawer({ open, setOpen, selectedVideo, setSelectedVideo }: Props) {

    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-20"
                        onClick={() => { setOpen(false); setSelectedVideo(null) }}
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
                                {
                                    selectedVideo !== null && (
                                        video[selectedVideo].content
                                    )
                                }

                                <div className='shrink-0 md:w-[300px] w-full'>
                                    <video controls className='md:w-[290px] w-full '>
                                        {selectedVideo !== null && (
                                            <source src={video[selectedVideo].url} type="video/mp4" />
                                        )}
                                    </video>
                                </div>

                            </div>
                            <button
                                onClick={() => { setOpen(false); setSelectedVideo(null) }}
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