import About from '@/components/About'
import Hero from '@/components/Hero'
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
    </main>
  )
}
