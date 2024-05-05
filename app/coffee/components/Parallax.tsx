'use client'
// time: 1:11:00
import { useEffect, useRef } from 'react'
import styles from './page.module.scss'
import { motion, useScroll, useTransform } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import {
  MotionDiv,
  MotionH1,
  MotionSpan,
} from '@/app/prallax-scroll-two-ways/components/motion-card'
import Image from 'next/image'

import Picture1 from '../../../public/coffee/bg-removed/canella2.png'
import Picture2 from '../../../public/coffee/bg-removed/canella3.png'
import Picture3 from '../../../public/coffee/bg-removed/grain3.png'
import Picture4 from '../../../public/coffee/bg-removed/grain.png'
import Picture5 from '../../../public/coffee/bg-removed/grain1.png'
import Picture6 from '../../../public/coffee/bg-removed/grain2.png'
import Picture7 from '../../../public/coffee/bg-removed/milk1.png'
import Picture8 from '../../../public/coffee/bg-removed/milk2.png'
import Picture9 from '../../../public/coffee/bg-removed/shugar1.png'
import Picture10 from '../../../public/coffee/bg-removed/shugar2.png'
import Picture11 from '../../../public/coffee/bg-removed/shugar3.png'
import Picture12 from '../../../public/coffee/bg-removed/water1.png'
import Picture13 from '../../../public/coffee/bg-removed/water2.png'
// import Picture14 from '../../../public/coffee/bg-removed/z1_blur_light.png'
// import Picture14 from '../../../public/coffee/bg-removed/zerna_finale.png'
// import Picture15 from '../../../public/coffee/bg-removed/zerna_finale.png'
// import Picture15 from '../../../public/coffee/bg-removed/zerna_finale.png'

const word = 'with framer-motion'

const Parallax = ({ type }: { type: string }) => {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  })

  const Y5 = useTransform(scrollYProgress, [0, 1], ['-110vh', '130vh'])
  const X5 = useTransform(scrollYProgress, [0, 1], ['-70vw', '110vw'])
  const R5 = useTransform(scrollYProgress, [0, 1], [0, 5600])

  const Y7 = useTransform(scrollYProgress, [0, 1], ['-100vh', '80vh'])
  const X7 = useTransform(scrollYProgress, [0, 1], ['45vw', '55vw'])
  const R7 = useTransform(scrollYProgress, [0, 1], [0, 5600])

  const Y8 = useTransform(scrollYProgress, [0, 1], ['-110vh', '70vh'])
  const X8 = useTransform(scrollYProgress, [0, 1], ['50vw', '35vw'])
  const R8 = useTransform(scrollYProgress, [0, 1], [0, 5600])

  const Y12 = useTransform(scrollYProgress, [0, 1], ['-150vh', '120vh'])
  const X12 = useTransform(scrollYProgress, [0, 1], ['-55vw', '50vw'])
  const R12 = useTransform(scrollYProgress, [0, 1], [0, 5600])

  const Y13 = useTransform(scrollYProgress, [0, 1], ['-150vh', '100vh'])
  const X13 = useTransform(scrollYProgress, [0, 1], ['-50vw', '100vw'])
  const S13 = useTransform(scrollYProgress, [0, 1], [0.5, 0.8])

  //Ghand
  const Y9 = useTransform(scrollYProgress, [0, 1], ['-30vh', '130vh'])
  const X9 = useTransform(scrollYProgress, [0, 1], ['100vw', '20vw'])
  const R9 = useTransform(scrollYProgress, [0, 1], [0, 5600])

  const Y10 = useTransform(scrollYProgress, [0, 1], ['50vh', '60vh'])
  const X10 = useTransform(scrollYProgress, [0, 1], ['100vw', '20vw'])
  const R10 = useTransform(scrollYProgress, [0, 1], [0, 5600])

  const Y11 = useTransform(scrollYProgress, [0, 1], ['0vh', '100vh'])
  const X11 = useTransform(scrollYProgress, [0, 1], ['80vw', '-30vw'])
  const R11 = useTransform(scrollYProgress, [0, 1], [0, 5600])

  const grainsY = useTransform(scrollYProgress, [0, 1], ['-100vh', '200vh'])
  const grainX = useTransform(scrollYProgress, [0, 1], ['-120vw', '100vw'])
  const grainR = useTransform(scrollYProgress, [0, 1], [0, 5600])

  const sm = useTransform(scrollYProgress, [0, 1], [-500, 0])
  const md = useTransform(scrollYProgress, [0, 1], [-900, 50])
  const lg = useTransform(scrollYProgress, [0, 1], [650, 0])
  // console.log(grainR)
  const images = [
    // {
    //   src: Picture1,
    //   y: sm,
    //   x: md,
    // },
    // {
    //   src: Picture2,
    //   y: lg,
    //   x: md,
    // },
    {
      src: Picture3,
      y: grainsY,
      x: grainX,
      rotation: grainR,
    },
    // {
    //   src: Picture4,
    //   y: grainsY,
    //   x: grainX,
    // },
    {
      src: Picture5,
      y: Y5,
      x: X5,
      rotation: R5,
    },
    // {
    //   src: Picture6,
    //   y: md,
    //   x: md,
    // },
    {
      src: Picture7,
      y: Y7,
      x: X7,
      rotation: R7,
    },
    {
      src: Picture8,
      y: Y8,
      x: X8,
      rotation: R8,
    },
    {
      src: Picture9,
      y: Y9,
      x: X9,
      rotation: R9,
    },
    {
      src: Picture10,
      y: Y10,
      x: X10,
      rotation: R10,
    },
    {
      src: Picture11,
      y: Y11,
      x: X11,
      rotation: R11,
    },
    {
      src: Picture12,
      y: Y12,
      x: X12,
      scale: S13,
    },
    {
      src: Picture13,
      y: Y13,
      x: X13,
      scale: S13,
    },
    //
    // {
    //   src: Picture14,
    //   y: md,
    // },
    // {
    //   src: Picture15,
    //   y: md,
    // },
    // {
    //   src: Picture16,
    //   y: md,
    // },
  ]

  return (
    <div ref={container} className={styles.container}>
      {/* <div className={styles.body}>
        <MotionH1 style={{ y: sm }}>Parallax</MotionH1>
        <h1>Scroll</h1>
        <div className={styles.word}>
          <p>
            {word.split('').map((letter, i) => {
              const y = useTransform(
                scrollYProgress,
                [0, 1],
                [0, Math.floor(Math.random() * -75) - 25]
              )
              return (
                <MotionSpan style={{ top: y }} key={`l_${i}`}>
                  {letter}
                </MotionSpan>
              )
            })}
          </p>
        </div>
      </div> */}
      <div className={styles.images}>
        {images.map(({ src, y, x, rotation, scale }, i) => {
          // console.log(i, src.width, src.width, scale)
          return (
            <MotionDiv
              style={{
                x,
                y,
                transform: `rotate(${rotation}deg) scale(${scale})`,
                scale: '0.7',
              }}
              key={`i_${i}`}
              className={styles.imageContainer}
            >
              <Image
                width={src.width}
                height={src.height}
                src={src}
                placeholder="blur"
                alt="image"
              />
            </MotionDiv>
          )
        })}
      </div>
    </div>
  )
}

export default Parallax
