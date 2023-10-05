'use client'
import { FC } from 'react'
import { motion } from 'framer-motion'
import image from '../../../../public/pixelate/image_part_001.jpg'
interface VerticalPixelTransitionProps {
  menuIsActive: boolean
}

const anim = {
  initial: {
    opacity: 0,
  },
  open: (delay: number[]) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.02 * delay[1] },
  }),
  closed: (delay: number[]) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.02 * delay[0] },
  }),
}

const VerticalPixelTransition: FC<VerticalPixelTransitionProps> = ({
  menuIsActive,
}) => {
  /**
   * Shuffles array in place (Fisher–Yates shuffle).
   * @param {Array} a items An array containing the items.
   */
  const shuffle = (a: number[]) => {
    var j, x, i
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1))
      x = a[i]
      a[i] = a[j]
      a[j] = x
    }
    return a
  }

  const getBlocks = (indexOfColum: number) => {
    // const { innerWidth, innerHeight } = window
    const innerWidth = window?.innerWidth
    const innerHeight = window?.innerHeight
    const blockSize = innerHeight * 0.1
    const nbOfBlocks = Math.ceil(innerWidth / blockSize)
    const shuffledIndexes = shuffle([...Array(nbOfBlocks)].map((_, i) => i + i))
    return shuffledIndexes.map((randomIndex: number, index: number) => {
      return (
        <motion.div
          key={index}
          className="w-[10vh] h-full bg-contain bg-gray-300"
          // style={{
          //   backgroundImage: `url(/pixelate/image_part_${String(
          //     index + 1
          //   ).padStart(3, '0')}.jpg)`,
          // }}
          variants={anim}
          initial="initial"
          animate={menuIsActive ? 'open' : 'closed'}
          //to pass deferent delays, and get it in variable, we use custom property
          custom={[indexOfColum + randomIndex, 10 - indexOfColum + randomIndex]}
        />
      )
    })
  }

  return (
    <div
      style={{ flexDirection: 'column' }}
      className="flex flex-col h-screen overflow-hidden relative z-10 pointer-events-none"
    >
      {[...Array(10)].map((_, index) => {
        return (
          <div key={index} className="flex w-full h-[20vh]">
            {getBlocks(index)}
          </div>
        )
      })}
    </div>
  )
}

export default VerticalPixelTransition
