import Image from 'next/image'
import { MotionValue, motion } from 'framer-motion'

type mousePositionType = {
  x: MotionValue
  y: MotionValue
}
type galleryProps = {
  mousePosition: mousePositionType
  handle: string
}

export default function Gallery({ mousePosition, handle }: galleryProps) {
  const { x, y } = mousePosition

  return (
    <div
      className="h-[120vh] "
      style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0)' }}
    >
      <div className="w-full h-full relative ">
        <Image
          className="w-full object-cover"
          src={`/images/${handle}/background.jpg`}
          alt="image"
          fill
        />
      </div>
      <motion.div
        className="h-[30vw] w-[25vw] fixed top-0 rounded-[1.5vw] overflow-hidden "
        style={{ x, y }}
      >
        <Image
          className="w-full object-cover"
          src={`/images/${handle}/1.jpg`}
          alt="image"
          fill
        />
      </motion.div>
    </div>
  )
}
