'use client'
import { useEffect, useLayoutEffect, useRef } from 'react'
import styles from './page.module.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Lenis from '@studio-freight/lenis'

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
import Picture14 from '../../../public/coffee/bg-removed/z1_blur_light.png'
import Picture15 from '../../../public/coffee/bg-removed/zerna_finale.png'
import Picture16 from '../../../public/coffee/bg-removed/zerna_finale.png'

gsap.registerPlugin(ScrollTrigger)
const word = 'with gsap'

export default function ParallaxGsap() {
  const container = useRef(null)

  const images = [
    Picture1,
    Picture2,
    // Picture3,
    // Picture4,
    // Picture5,
    // Picture6,
    // Picture7,
    // Picture8,
    // Picture9,
    // Picture10,
    // Picture11,
    // Picture12,
    // Picture13,
    // Picture14,
    // Picture15,
    // Picture16,
  ]
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const lettersRef = useRef<(HTMLSpanElement | null)[]>([])
  const imagesRef = useRef<(HTMLDivElement | null)[]>([])
  const title1 = useRef(null)
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
        .to(title1.current, { y: -50 }, 0)
        .to(imagesRef.current[1], { y: -50, x: '-300%' }, 0)
        .to(imagesRef.current[2], { y: 255, x: '300%' }, 0)
        .to(imagesRef.current[0], { zoom: 1.5 }, 0)
      lettersRef.current.forEach((letter, i) => {
        tl.to(
          letter,
          {
            // because its span, y value doesn't effect on that; we use top
            top: Math.floor(Math.random() * 50) - 50,
            // top: Math.floor(Math.random() * -75) - 25,
          },
          0
        )
      })
    })
    return () => context.revert()
  }, [])

  return (
    <div ref={container} className={` ${styles.container}`}>
      <div className={styles.body}>
        <h1 ref={title1}>Parallax</h1>
        <h1>Scroll</h1>
        <div className={styles.word}>
          <p>
            {word.split(' ').map((letter, i) => {
              return (
                <span key={`l_${i}`} ref={(el) => (lettersRef.current[i] = el)}>
                  {letter}
                </span>
              )
            })}
          </p>
        </div>
      </div>
      <div className={styles.images}>
        {images.map((image, i) => {
          return (
            <div
              key={`i_${i}`}
              ref={(el) => (imagesRef.current[i] = el)}
              className={styles.imageContainer}
            >
              <Image src={image} placeholder="blur" alt="image" fill />
            </div>
          )
        })}
      </div>
    </div>
  )
}
