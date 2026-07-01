import Hero from '@/components/sections/Hero'
import FTCMethod from '@/components/sections/FTCMethod'
import MeetLeonidas from '@/components/sections/MeetLeonidas'
import Coaching from '@/components/sections/Coaching'
import Gallery from '@/components/sections/Gallery'
import WhyCoach from '@/components/sections/WhyCoach'
import FAQ from '@/components/sections/FAQ'

export default function Home() {
  return (
    <>
      <Hero />
      <FTCMethod />
      <MeetLeonidas />
      <Coaching />
      <Gallery />
      <WhyCoach />
      <FAQ />
    </>
  )
}