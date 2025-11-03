import About from '@/components/About'
import Blog from '@/components/Blog'
import ContactBanner from '@/components/ContactBanner'
import CTABanner from '@/components/CTABanner'
import Hero from '@/components/Hero'
import HiglightArea from '@/components/HiglightArea'
import Marquee from '@/components/Marquee'
import Steps from '@/components/Steps'
import Testimonial from '@/components/Testimonial'
import TreatmentList from '@/components/TreatmentList'
import Video from '@/components/Video'
import React from 'react'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Video/>
      <TreatmentList />
      <Marquee />
      {/* <Steps />  */}
      {/* <ContactBanner />  */}
      {/* <HiglightArea />  */}
      <Testimonial />
      {/* <CTABanner />  */}
      {/* <Marquee /> */}
      <Blog />
    </main>
  )
}
