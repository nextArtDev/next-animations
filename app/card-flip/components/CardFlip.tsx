'use client'
import { FC, useState } from 'react'
import { motion } from 'framer-motion'
import Image1 from '../../../public/parallax-images/1.jpg'
import Image2 from '../../../public/parallax-images/2.jpg'

interface CardFlipProps {}

const CardFlip: FC<CardFlipProps> = ({}) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped)
      setIsAnimating(true)
    }
  }

  return (
    <section className="flex items-center justify-center bg-black h-[800px] cursor-pointer">
      <div
        className="flip-card w-[281px] h-[467px] rounded-md "
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-full h-full "
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: 'normal' }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className="flip-card-front w-full h-full bg-cover border text-white rounded-lg p-4 "
            style={{ backgroundImage: `url(${Image1.src})` }}
          >
            <h1 className="text-2xl font-bold">Earth</h1>
          </div>
          <div
            className="flip-card-back w-full h-full bg-cover border text-white rounded-lg p-4 "
            style={{ backgroundImage: `url(${Image2.src})` }}
          >
            <h1 className="text-2xl font-bold">Earth</h1>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CardFlip

/* In Global CSS Card Flip  */
// .flip-card {
//   perspective: 1000px;
// }
// .flip-card-inner {
//   transition: transform 0.6s;
//   transform-style: preserve-3d;
// }

// .flip-card-front,
// .flip-card-back {
//   position: absolute;
//   backface-visibility: hidden;
// }
// .flip-card-back {
//   transform: rotateY(180deg);
// }
