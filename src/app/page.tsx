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
