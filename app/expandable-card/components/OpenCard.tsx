'use client'
import { FC, useState } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { StaticImageData } from 'next/image'

// const images = [image1, image2, image3, image4, image5]

interface OpenCardProps {
  cards: {
    image: StaticImageData
    description: string
    id: number
    title: string
  }[]
}

const OpenCard: FC<OpenCardProps> = ({ cards }) => {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1)
  const isBigScreen = useMediaQuery({ minWidth: 768 })

  const handleCardClick = (id: number) =>
    setExpandedIndex(id === expandedIndex ? -1 : id)

  const cardVariants = {
    expanded: {
      width: '400px',
    },
    collapsed: {
      width: '200px',
    },
  }
  const cardMobileVariants = {
    expanded: {
      height: '600px',
    },
    collapsed: {
      height: '100px',
    },
  }

  return (
    <section className="relative py-16 pb-[300px] max-w-7xl ">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e2a8c0] to-[#6e68c2] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <article className="relative w-[90%] md:min-h-[500px] mt-12 mx-auto flex flex-col md:flex-row justify-center items-center gap-2 overflow-hidden">
        {cards.map((card) => (
          <motion.div
            key={card.image.src}
            className={` card cursor-pointer w-full md:min-h-[500px] bg-cover rounded-[20px] ${
              card.id === expandedIndex ? 'expanded' : ''
            }`}
            variants={isBigScreen ? cardVariants : cardMobileVariants}
            initial="collapsed"
            animate={card.id === expandedIndex ? 'expanded' : 'collapsed'}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={() => handleCardClick(card.id)}
            style={{
              backgroundImage: `url(${card.image.src})`,
            }}
          >
            <div className="card-content h-full flex flex-col justify-end">
              <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 md:min-h-[100px]  flex flex-col items-center justify-center ">
                <h2 className="text-xl font-semibold tex-white text-center ">
                  {' '}
                  {card.title}
                </h2>
                {card.id === expandedIndex && (
                  <p className="mt-2 text-gray-300 text-center ">
                    {card.description}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </article>
    </section>
  )
}

export default OpenCard
