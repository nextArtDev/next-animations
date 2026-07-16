'use client'
import { useEffect } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import Gallery from './components/Gallery'
import Description from './components/Description'

const projects = [
  {
    name: 'Dyal Thak',
    handle: 'dyal_thak',
  },
  {
    name: 'Leidinger Matthias',
    handle: 'leidinger_matthias',
  },
  {
    name: 'Mark Rammers',
    handle: 'mark_rammers',
  },
  {
    name: 'Landon Speers',
    handle: 'landon_speers',
  },
]

export default function Home() {
  // 1. Track the global scroll progress of the page (0 to 1)
  const { scrollYProgress } = useScroll()

  // 2. Map the scroll progress to X and Y coordinates
  // You can tweak these values to adjust the path of the vignette image
  const x = useTransform(scrollYProgress, [0, 1], ['5vw', '60vw'])
  const y = useTransform(scrollYProgress, [0, 1], ['10vh', '40vh'])

  const scrollPosition = { x, y }

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      {projects.map(({ handle }, i) => {
        return (
          <Gallery scrollPosition={scrollPosition} handle={handle} key={i} />
        )
      })}
      <Description scrollPosition={scrollPosition} projects={projects} />
    </main>
  )
}
