import dynamic from "next/dynamic";
import About from '@/components/About'
const Blog = dynamic(() => import('@/components/Blog'), {
  loading: () => <p>Loading…</p>
})
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
const Testimonial = dynamic(() => import('@/components/Testimonial'), {
  loading: () => <p>Loading…</p>
})
import TreatmentList from '@/components/TreatmentList'
import { Metadata } from "next";
const Video = dynamic(() => import('@/components/Video'), {
  loading: () => <p>Loading…</p>
})
const YoutubeVdo = dynamic(() => import('@/components/YoutubeVdo'), {
  loading: () => <p>Loading…</p>
})

export default function HomePage() {
  return (
    <main className="relative w-full">
      <Hero />
      <About />
      <Video />
      <TreatmentList />
      <YoutubeVdo />
      <Marquee />
      <Testimonial />
      <Blog />
    </main>
  )
}

export const metadata: Metadata = {
  title: "Nephrologist in Hyderabad | Dr. Satyanarayana Garre - Kidney Specialist",
  description: "Dr. Satyanarayana Garre, top nephrologist in Hyderabad, provides expert kidney care including dialysis, transplants, stone treatment & preventive health services",
  alternates: {
    canonical: "https://www.drsatyanarayanagarre.in",
  },
}