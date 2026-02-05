import { Hero } from '@/components/sections/Hero'
import { Story } from '@/components/sections/Story'
import { RoomsPreview } from '@/components/sections/RoomsPreview'
import { Garden } from '@/components/sections/Garden'
import { Location } from '@/components/sections/Location'
import { BlogPreview } from '@/components/sections/BlogPreview'
import { Testimonials } from '@/components/sections/Testimonials'
import { Reservation } from '@/components/sections/Reservation'

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <RoomsPreview />
      <Garden />
      <Location />
      <BlogPreview />
      <Testimonials />
      <Reservation />
    </>
  )
}
