'use client'
import React, { ReactNode, useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function GsapMagnetic({ children }: { children: ReactNode }) {
  const magnetic = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, 'x', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    })
    const yTo = gsap.quickTo(magnetic.current, 'y', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    })

    magnetic.current.addEventListener('mousemove', (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { height, width, left, top } =
        magnetic.current.getBoundingClientRect()
      const x = clientX - (left + width / 2)
      const y = clientY - (top + height / 2)
      xTo(x)
      yTo(y)
    })
    magnetic.current.addEventListener('mouseleave', (e: MouseEvent) => {
      xTo(0)
      yTo(0)
    })
  }, [])

  return React.cloneElement(children as React.ReactElement, { ref: magnetic })
}
