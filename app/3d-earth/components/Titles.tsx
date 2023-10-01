import { useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import { Dispatch, FC, SetStateAction, useRef } from 'react'
import { motion } from 'framer-motion'
interface TitlesProps {
  data: {
    title: string
    description: string
    speed: number
  }[]
  setSelectedProject: Dispatch<SetStateAction<null>>
}

const Titles: FC<TitlesProps> = ({ data, setSelectedProject }) => {
  return (
    <div className="w-full border-t border-[rgba(183, 171, 152, 0.25)]">
      {data.map((project, i) => {
        return (
          <Title
            key={i}
            data={{ ...project, i }}
            setSelectedProject={setSelectedProject}
          />
        )
      })}
    </div>
  )
}

export default Titles

interface TitleProps {
  data: {
    title: string
    description: string
    speed: number
    i: number
  }
  setSelectedProject: Dispatch<SetStateAction<null>>
}
function Title({ data, setSelectedProject }: TitleProps) {
  const { title, speed, i } = data
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', `${25 / speed}vw end`],
  })

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0])
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`

  return (
    <div
      ref={container}
      className="border-b border-[rgba(183, 171, 152, 0.25)] cursor-default relative z-20"
    >
      <div
        className="inline-block pl-[10%] "
        onMouseOver={() => {
          setSelectedProject(i)
        }}
        onMouseLeave={() => {
          setSelectedProject(null)
        }}
      >
        <motion.p
          className="threeEarthTitle-p inline-block text-[#b7ab98] uppercase font-bold text-[8vw] m-0 relative z-20  "
          style={{ clipPath: clip }}
        >
          {title}
        </motion.p>
        <p>{title}</p>
      </div>
    </div>
  )
}

// Gloal CSS

// .threeEarthTitle-p:nth-of-type(2) {
//   display: block;
//   position: absolute;
//   color: #1c1c1c;
//   top: 0;
//   z-index: 1;
// }
