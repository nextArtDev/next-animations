'use client'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { FC } from 'react'
import BackgroundImage from '../../../public/parallax-images/9.jpg'
import Image1 from '../../../public/parallax-images/6.jpg'
import Image2 from '../../../public/parallax-images/3.jpg'
import Image3 from '../../../public/parallax-images/2.jpg'

interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = ({}) => {
  const bgAnimate = {
    hidden: { clipPath: 'polygon(21% 27%, 77% 26%, 77% 77% , 21% 77%)' },
    show: {
      clipPath: 'polygon(0 0, 100% 0, 100% 100% , 0 100%)',
      transition: {
        ease: 'easeInOut',
        duration: 0.8,
        delay: 1,
      },
    },
  }
  const textAnimate1 = {
    hidden: { y: '100%', opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: 0.8,
        staggerChildren: 0.4,
        delayChildren: 1,
      },
    },
  }
  const textAnimate2 = {
    hidden: { x: 0 },
    show: (i: number) => ({
      x: i,
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: 0.8,
      },
    }),
  }

  const imageAnimate = {
    hidden: {},
    show: {
      transition: {
        ease: 'easeInOut',
        staggerChildren: 0.6,
        delayChildren: 3.6,
      },
    },
  }
  const imageAnimateChild = {
    hidden: { x: 100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        ease: 'easeInOut',
      },
    },
  }
  const navAnimate = {
    hidden: { y: -'110%' },
    show: {
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        delay: 2,
      },
    },
  }

  const textParagraph = {
    hidden: { y: '100%', opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 60,
        delay: 2.8,
      },
    },
  }

  return (
    <section className="h-screen w-screen overflow-x-hidden ">
      <motion.div
        variants={bgAnimate}
        initial="hidden"
        animate="show"
        className="absolute inset-0 z-0 h-screen w-screen "
      >
        <Image
          src={BackgroundImage.src}
          alt="background"
          fill
          priority
          sizes="(max-width:7768px) 33vw,(max-width:1024px) 50vw, 100vw "
          className="object-cover brightness-75"
        />
      </motion.div>
      <div>
        <Navigation />
      </div>

      <div className="relative top-[120px] ">
        <motion.div
          variants={textAnimate1}
          initial="hidden"
          animate="show"
          className="relative left-[25%] "
        >
          <motion.h1
            variants={textAnimate2}
            custom={-150}
            className="text-9xl text-yellow-200 tracking-tighter font-bold"
          >
            Painting
          </motion.h1>
        </motion.div>
        <motion.p
          variants={textParagraph}
          initial="hidden"
          animate="show"
          className="w-[500px] text-justify absolute right-36 top-12 text-sm text-semibold"
        >
          Lorem ipsum dolor sit,{' '}
          <span className="text-yellow-200">
            {' '}
            amet consectetur adipisicing elit. Impedit
          </span>
          voluptatem eum corporis, pariatur magnam quam vitae! Quidem dolor
          magni labore culpa saepe non consequatur eos eum, fugiat cum earum
          libero.
        </motion.p>
        <motion.div
          variants={textAnimate1}
          initial="hidden"
          animate="show"
          className="relative left-[25%] "
        >
          <motion.h1
            variants={textAnimate2}
            className="text-9xl text-yellow-200 tracking-tighter font-bold"
            custom={100}
          >
            Experience
          </motion.h1>
        </motion.div>
      </div>

      <motion.div
        variants={imageAnimate}
        initial="hidden"
        animate="show"
        className="flex gap-4 absolute bottom-4 "
      >
        <motion.div
          variants={imageAnimateChild}
          className="relative w-[300px] h-[250px]"
        >
          <Image
            src={Image1.src}
            fill
            sizes="(max-width:7768px) 33vw,(max-width:1024px) 50vw, 100vw "
            alt=""
            className="object-cover rounded-sm saturate-150 "
          />
        </motion.div>
        <motion.div
          variants={imageAnimateChild}
          className="relative w-[300px] h-[250px]"
        >
          <Image
            src={Image2.src}
            fill
            sizes="(max-width:7768px) 33vw,(max-width:1024px) 50vw, 100vw "
            alt=""
            className="object-cover rounded-sm saturate-150 "
          />
        </motion.div>
        <motion.div
          variants={imageAnimateChild}
          className="relative w-[300px] h-[250px]"
        >
          <Image
            src={Image3.src}
            fill
            sizes="(max-width:7768px) 33vw,(max-width:1024px) 50vw, 100vw "
            alt=""
            className="object-cover rounded-sm saturate-150 "
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default LandingPage

const Navigation = () => {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })
  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="sticky top-0 flex w-full items-center justify-between "
    >
      <ul className="flex w-[300px] justify-around items-center gap-2 text-bold text-xl py-4  ">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        {/* <li className="cursor-pointer">Services</li> */}
        <li className="cursor-pointer">Contant</li>
      </ul>
      <button className="relative scale-100 overflow-hidden px-6 py-3 mx-6 bg-neutral-200 rounded-2xl flex justify-center items-center text-black/80 font-bold">
        Login
      </button>
    </motion.nav>
  )
}
