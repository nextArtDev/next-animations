import { useState } from 'react'
import { MotionValue, motion } from 'framer-motion'
import Image from 'next/image'

type scrollPositionType = {
  x: MotionValue<any>
  y: MotionValue<any>
}
type projectsType = {
  name: string
  handle: string
}
type descriptionProps = {
  scrollPosition: scrollPositionType
  projects: projectsType[]
}

export default function Description({
  scrollPosition,
  projects,
}: descriptionProps) {
  const [index, setIndex] = useState(0)
  const { x, y } = scrollPosition

  return (
    <div
      className="h-[120vh]"
      style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0)' }}
    >
      {/* Added justify-around to space out text so they trigger sequentially on scroll */}
      <div className="relative w-full h-full flex items-center flex-col justify-around z-10">
        {projects.map(({ name }, i) => {
          return (
            <motion.p
              className="text-[7vw] cursor-default m-0 uppercase"
              // Replaced onMouseOver with onViewportEnter
              onViewportEnter={() => setIndex(i)}
              // Triggers when 50% of the text element is in view
              viewport={{ amount: 0.5 }}
              key={`p${i}`}
            >
              {name}
            </motion.p>
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
