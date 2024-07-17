'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}
const DELAY = 3

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, axis: 'y' }, [
    Autoplay({ delay: DELAY * 1000 }),
  ])

  return (
    <section className="embla ">
      <div className="relative embla__viewport" ref={emblaRef}>
        <div className=" embla__container  ">
          {slides.map((index) => (
            <div className=" embla__slide " key={index}>
              <div className=" relative embla__slide__number">
                {index + 1}
                <motion.div
                  initial={{ height: 'auto' }}
                  whileInView={{ height: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="absolute inset-0 bg-blue-300/10 backdrop-blur-lg "
                ></motion.div>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          className="bg-gray-500 origin-top absolute top-1/2 -translate-y-1/2 right-12 w-[0.1rem] rounded-full "
          initial={{ height: '50px' }}
          whileInView={{ height: 0 }}
          transition={{ duration: DELAY, repeat: Infinity }}
        />
      </div>
    </section>
  )
}

export default EmblaCarousel

//  <svg width="450px" height="450px" viewBox="0 0 32.666 32.666">
//             <motion.path
//               strokeWidth={0.2}
//               fill="none"
//               initial={{ pathLength: 0 }}
//               //   whileInView doesn't work with "path"
//               animate={isInView && { pathLength: 1 }}
//               transition={{ duration: 3 }}
