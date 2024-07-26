'use client'
import styles from './page.module.scss'

import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import GSAP from './components/gsap'
import FramerMotion from './components/frmaer-motion'
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className={styles.main}>
      <div className="min-h-screen max-w-full overflow-x-hidden" />
      {/* <GSAP /> */}
      <FramerMotion />
      <div className="h-screen"></div>
    </main>
  )
}
