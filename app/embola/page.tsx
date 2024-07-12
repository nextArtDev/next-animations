import React from 'react'
import EmblaCarousel from './components/Carouesl'

function page() {
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <div>
      <EmblaCarousel slides={SLIDES} />
    </div>
  )
}

export default page
