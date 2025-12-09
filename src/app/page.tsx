import About from '@/components/About'
import Blog from '@/components/Blog'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Testimonial from '@/components/Testimonial'
import TreatmentList from '@/components/TreatmentList'
import Video from '@/components/Video'
import YoutubeVdo from '@/components/YoutubeVdo'
import React from 'react'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Video/>
      <TreatmentList />
      <YoutubeVdo/>
      <Marquee />
      <Testimonial />
      <Blog />
    </main>
  )
}
