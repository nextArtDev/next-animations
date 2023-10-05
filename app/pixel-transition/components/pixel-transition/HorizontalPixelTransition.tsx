import { FC } from 'react'
import { motion } from 'framer-motion'

interface HorizontalPixelTransitionProps {
  menuIsActive: boolean
}
const anim = {
  initial: {
    opacity: 0,
  },
  open: (delay: number[]) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.02 * delay[0] },
  }),
  closed: (delay: number[]) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.02 * delay[1] },
  }),
}

const HorizontalPixelTransition: FC<HorizontalPixelTransitionProps> = ({
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
    const blockSize = innerWidth * 0.1
    const nbOfBlocks = Math.ceil(innerHeight / blockSize)
    const shuffledIndexes = shuffle([...Array(nbOfBlocks)].map((_, i) => i))
    return shuffledIndexes.map((randomIndex: number, index: number) => {
      return (
        <motion.div
          key={index}
          className="w-full h-[10vw] bg-gray-300"
          variants={anim}
          initial="initial"
          animate={menuIsActive ? 'open' : 'closed'}
          custom={[indexOfColum + randomIndex, 20 - indexOfColum + randomIndex]}
        />
      )
    })
  }

  return (
    <div className="flex  h-screen overflow-hidden relative z-10 pointer-events-none">
      {[...Array(10)].map((_, index) => {
        return (
          <div key={index} className="flex flex-col h-full w-[10vh]">
            {getBlocks(index)}
          </div>
        )
      })}
    </div>
  )
}

export default HorizontalPixelTransition
