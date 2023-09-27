import { useState } from 'react'
import { MotionValue, motion } from 'framer-motion'
import Image from 'next/image'

type mousePositionType = {
  x: MotionValue
  y: MotionValue
}
type projectsType = {
  name: string
  handle: string
}
type descriptionProps = {
  mousePosition: mousePositionType
  projects: projectsType[]
}
export default function Description({
  mousePosition,
  projects,
}: descriptionProps) {
  const [index, setIndex] = useState(0)
  const { x, y } = mousePosition

  return (
    <div
      className="h-[120vh] "
      style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0)' }}
    >
      <div className="relative w-full h-full flex items-center flex-col z-10">
        {projects.map(({ name }, i) => {
          return (
            <p
              className="text-[7vw] cursor-default m-0 uppercase"
              onMouseOver={() => {
                setIndex(i)
              }}
              key={`p${i}`}
            >
              {name}
            </p>
          )
        })}
      </div>
      <motion.div
        className="h-[30vw] w-[25vw] fixed top-0 rounded-[1.5vw] overflow-hidden"
        style={{ x, y }}
      >
        <Image
          className="w-full object-cover"
          src={`/images/${projects[index].handle}/about.jpg`}
          alt="image"
          fill
        />
      </motion.div>
    </div>
  )
}
