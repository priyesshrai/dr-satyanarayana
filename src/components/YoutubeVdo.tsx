'use client';
import { Section, Wrapper } from '@/utils/Section'
import React, { useRef, useState } from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import {
    Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";

export default function YoutubeVdo() {
    const ytLinks: string[] = [
        "qHCl4Jl8--M",
        "h6r_UO5GUL0",
        "IAAWhsaMXoI",
        "RvIC4tfn3Vc",
        "DbYZGAMZpbc",
        "an0UCsNB55g",
        "NQsmjtW1b0s",
        "fEpconYg-NA",
    ]
    const [api, setApi] = useState<CarouselApi>()
    const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }))
    return (
        <Section className='!px-0'>
            <Wrapper className='!max-w-full !p-0'>
                <div className='w-full h-full overflow-hidden'>
                    <Carousel className="w-full h-full relative"
                        plugins={[plugin.current]}
                        opts={{
                            loop: true,
                            dragFree: true
                        }}
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                        setApi={setApi}
                    >
                        <CarouselContent className='items-center gap-3'>
                            {
                                ytLinks.map((links, idx) => (
                                    <CarouselItem
                                        key={idx}
                                        className="max-w-[550px] w-full shrink-0 cursor-pointer bg-white overflow-hidden"
                                    >
                                        <LiteYouTubeEmbed
                                            id={links}
                                            title="Video Title"
                                            lazyLoad={true}
                                            poster="hqdefault"
                                            webp={true}
                                        />
                                    </CarouselItem>
                                ))
                            }
                        </CarouselContent>
                        <CarouselPrevious
                            onClick={() => {
                                api?.scrollPrev();
                                plugin.current?.reset();
                            }}
                            className='w-11 h-11 bg-dark-navy text-white left-4 text-3xl cursor-pointer hover:bg-primary-hover hover:text-white'
                        />
                        <CarouselNext
                            onClick={() => {
                                api?.scrollNext();
                                plugin.current?.reset();
                            }}
                            className='w-11 h-11 bg-dark-navy text-white text-3xl right-4 cursor-pointer hover:bg-primary-hover hover:text-white'
                        />
                    </Carousel>
                </div>
            </Wrapper>
        </Section>
    )
}

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/qHCl4Jl8--M?si=9aDB8TBX5_-DfGz6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */ }