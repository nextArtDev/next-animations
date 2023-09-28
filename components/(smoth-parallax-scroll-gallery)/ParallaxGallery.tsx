'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion, MotionValue } from 'framer-motion'

const images = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
]

export default function ParallaxGallery() {
  const gallery = useRef(null)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  })
  const { height } = dimension
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect(() => {
    const lenis = new Lenis()

    const raf = (time: any) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', resize)
    requestAnimationFrame(raf)
    resize()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <main className="">
      <div className="h-screen"></div>
      <div
        ref={gallery}
        className="h-[175vh] bg-zinc-800 relative flex gap-[2vw] p-[2vw] box-border overflow-hidden"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
      <div className="h-screen"></div>
    </main>
  )
}

interface columnProps {
  images: string[]
  y: MotionValue<number>
}

const Column = ({ images, y }: columnProps) => {
  return (
    <motion.div
      className=" scroll-gallery-wrapper relative h-full w-1/4 min-w-[250px] flex flex-col gap-[2vw] "
      style={{ y }}
    >
      {images.map((src, i) => {
        return (
          <div
            key={i}
            className="h-full w-full relative rounded-[1vw] overflow-hidden "
          >
            <Image
              className="object-cover"
              src={`/parallax-images/${src}`}
              alt="image"
              fill
            />
          </div>
        )
      })}
    </motion.div>
  )
}

// global css
// .scroll-gallery-wrapper:nth-of-type(1){
//             top: -45%;
//         }
// .scroll-gallery-wrapper:nth-of-type(2){
//             top: -95%;
//         }
// .scroll-gallery-wrapper:nth-of-type(3){
//             top: -45%;
//         }
// .scroll-gallery-wrapper:nth-of-type(4){
//             top: -75%;
//         }
