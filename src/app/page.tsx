import About from '@/components/About'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Steps from '@/components/Steps'
import TreatmentList from '@/components/TreatmentList'
import React from 'react'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <TreatmentList />
      <Steps />
      <Marquee/>
    </main>
  )
}
