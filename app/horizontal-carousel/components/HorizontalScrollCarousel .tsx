'use client'
import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { GoogleGeminiEffect } from './Gemini'

interface ExampleProps {
  rtl?: boolean
}
const Example = ({ rtl }: ExampleProps) => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel rtl={rtl} />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  )
}

const HorizontalScrollCarousel = ({ rtl }: { rtl?: boolean }) => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })
  const xTransform: string = rtl ? '75%' : '-75%'
  const x = useTransform(scrollYProgress, [0, 1], ['1%', xTransform])

  //   const geminiTransform: number[] = rtl ? [1.2,0.2] : [0.2, 1.2]
  //   const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2])
  //   const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2])
  //   const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2])
  //   const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2])
  //   const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2])
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2])
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2])
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2])
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2])
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2])
  //   for rtl
  //   const x = useTransform(scrollYProgress, [0, 1], ['1%', '75%'])

  return (
    <section
      // for rtl
      //   dir="rtl"
      dir={rtl ? 'rtl' : 'ltr'}
      ref={targetRef}
      className="relative h-[300vh] bg-neutral-900"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden  ">
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />
          })}
        </motion.div>
      </div>
    </section>
  )
}

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="bg-transparent group relative h-[450px] w-[250px] md:w-[450px] overflow-hidden bg-neutral-200 "
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/5 to-white/0 p-8 text-3xl font-black uppercase text-white backdrop-blur-sm">
          {card.title}
        </p>
      </div>
    </div>
  )
}

export default Example

type CardType = {
  url: string
  title: string
  id: number
}

const cards: CardType[] = [
  {
    url: '/imgs/abstract/1.jpg',
    title: 'Title 1',
    id: 1,
  },
  {
    url: '/imgs/abstract/2.jpg',
    title: 'Title 2',
    id: 2,
  },
  {
    url: '/imgs/abstract/3.jpg',
    title: 'Title 3',
    id: 3,
  },
  {
    url: '/imgs/abstract/4.jpg',
    title: 'Title 4',
    id: 4,
  },
  {
    url: '/imgs/abstract/5.jpg',
    title: 'Title 5',
    id: 5,
  },
  {
    url: '/imgs/abstract/6.jpg',
    title: 'Title 6',
    id: 6,
  },
  {
    url: '/imgs/abstract/7.jpg',
    title: 'Title 7',
    id: 7,
  },
]
