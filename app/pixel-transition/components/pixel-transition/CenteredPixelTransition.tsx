import { FC } from 'react'
import { motion } from 'framer-motion'

interface CenteredPixelTransitionProps {
  menuIsActive: boolean
}

const anim = {
  initial: {
    opacity: 0,
  },
  open: (i: number) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.02 * i },
  }),
  closed: (i: number) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.02 * i },
  }),
}

const CenteredPixelTransition: FC<CenteredPixelTransitionProps> = ({
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

  const getBlocks = (index: number) => {
    // const { innerWidth, innerHeight } = window
    const innerWidth = window?.innerWidth
    const innerHeight = window?.innerHeight
    const blockSize = innerHeight * 0.05
    const nbOfBlocks = Math.ceil(innerWidth / blockSize)
    const shuffledIndexes = shuffle([...Array(nbOfBlocks)].map((_, i) => i))
    return shuffledIndexes.map((randomIndex: number, index: number) => {
      return (
        <motion.div
          key={index}
          className="w-[10vh] h-full bg-gray-300"
          variants={anim}
          initial="initial"
          animate={menuIsActive ? 'open' : 'closed'}
          custom={randomIndex}
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
          <div key={index} className="flex w-full h-[10vh]">
            {getBlocks(index)}
          </div>
        )
      })}
    </div>
  )
}

export default CenteredPixelTransition
