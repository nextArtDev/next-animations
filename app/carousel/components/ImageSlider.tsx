'use client'

import { FC, useState } from 'react'
import { motion } from 'framer-motion'

import image1 from '../../../public/parallax-images/1.jpg'
import image2 from '../../../public/parallax-images/2.jpg'
import image3 from '../../../public/parallax-images/3.jpg'
import image4 from '../../../public/parallax-images/4.jpg'
import image5 from '../../../public/parallax-images/5.jpg'
import image6 from '../../../public/parallax-images/6.jpg'
import image7 from '../../../public/parallax-images/7.jpg'
import { createPositions, createVariants } from '@/lib/utils'

const images = [image1, image2, image3, image4, image5, image6, image7]

// function createPositions(numInputs: number): string[] {
//   const centerIndex = Math.floor(numInputs / 2)
//   const positions = []

//   for (let i = centerIndex; i >= 0; i++) {
//     positions.push(`left${i}`)
//   }

//   positions.push('center')

//   for (let i = 1; i <= centerIndex; i++) {
//     positions.push(`right${i}`)
//   }

//   // If the number of inputs is odd, repeat the last position
//   if (numInputs % 2 === 0) {
//     positions.push(`right${centerIndex + 1}`)
//   }

//   return positions
// }
// function createVariants(numInputs: number) {
//   const centerIndex = Math.floor(numInputs / 2)
//   let imageVariant = { x: '0%', scale: 1, zIndex: numInputs }

//   for (let i = centerIndex; i >= 0; i++) {
//     // positions.push(`left${i}`)
//     imageVariant = {
//       x: `${-i * 45}%`,
//       scale: (i / 2) * 0.7,
//       zIndex: Math.floor(numInputs / 2) + 1,
//     }
//   }

//   //   positions.push('center')
//   imageVariant = { x: '0%', scale: 1, zIndex: numInputs }

//   for (let i = 1; i <= centerIndex; i++) {
//     imageVariant = {
//       x: `${i * 45}%`,
//       scale: (i / 2) * 0.7,
//       zIndex: Math.floor(numInputs / 2) + 1,
//     }
//     // positions.push(`right${i}`)
//   }

//   // If the number of inputs is odd, repeat the last position
//   //   if (numInputs % 2 === 0) {
//   //     // positions.push(`right${centerIndex + 1}`)
//   //   }

//   return imageVariant
// }

const ImageSlider = ({}) => {
  //   const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4])
  // ChatGPT && DOC: console.log(Array.from([1, 2, 3], (x) => x + x));
  // Expected output: Array [2, 4, 6]
  //Array.from(arrayLike, mapFn)

  const handleNext = () => {
    setPositionIndexes((prev) => {
      const updatedIndexes = prev.map((p) => (p + 1) % 5)
      return updatedIndexes
    })
  }
  const [positionIndexes, setPositionIndexes] = useState(
    Array.from({ length: images.length }, (_, i) => i)
  )
  // console.log(positionIndexes)
  const positions = createPositions(positionIndexes.length)
  const variants = createVariants(images.length)
  // console.log(positions)
  // console.log(variants)
  // console.log(images.map((image) => image))
  return (
    <div className="flex items-center flex-col justify-center h-screen">
      {images?.map((image, i) => (
        <motion.img
          key={i}
          src={image.src}
          alt={image.src}
          className="rounded-[12px]"
          initial="center"
          animate={positions[positionIndexes[i]]}
          variants={variants}
          transition={{ duration: 0.5 }}
          style={{ width: '40%', position: 'absolute' }}
        />
      ))}
      <button
        className="text-white mt-[450px] bg-red-400 rounded-full py-4 px-4 text-3xl text-white/80 z-50"
        onClick={handleNext}
      >
        &#x21BA;
      </button>
    </div>
  )
}

export default ImageSlider
