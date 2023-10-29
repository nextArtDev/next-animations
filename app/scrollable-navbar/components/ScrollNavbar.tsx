'use client'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

type Props = {}

export default function ScrollNavbar(props: Props) {
  return (
    <section className="relative w-full bg-neutral-900">
      <Navigation />
      {/* <Content /> */}
    </section>
  )
}

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
      className="sticky top-0 flex w-full items-center justify-between bg-neutral-700"
    >
      <ul className="flex w-full justify-around items-center gap-2 text-bold text-xl py-4  ">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Contant</li>
      </ul>
      <button className="relative scale-100 overflow-hidden px-6 py-3 mx-6 bg-green-700 rounded-2xl flex justify-center items-center text-white/80 font-bold">
        Login
      </button>
    </motion.nav>
  )
}

const Content = () => {
  return (
    <main className="mx-auto max-w-3xl space-y-4 p-12 ">
      <h1 className="mb-8 text-7xl font-bold text-green-500">My Blog Post</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim incidunt
        illo neque placeat reprehenderit doloremque quo sequi repellendus illum
        aliquam impedit, doloribus dolorum dignissimos nam reiciendis. Itaque
        iusto nostrum corrupti!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam dolorem
        error reprehenderit vero optio eaque, vitae et nesciunt modi libero
        ullam culpa quibusdam fugiat laborum at voluptatum similique adipisci
        dicta!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        aliquam quod, consequuntur, illum nostrum aperiam laudantium nisi
        exercitationem hic debitis, vero amet minima voluptas sunt pariatur odit
        quos architecto ipsa!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim incidunt
        illo neque placeat reprehenderit doloremque quo sequi repellendus illum
        aliquam impedit, doloribus dolorum dignissimos nam reiciendis. Itaque
        iusto nostrum corrupti!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam dolorem
        error reprehenderit vero optio eaque, vitae et nesciunt modi libero
        ullam culpa quibusdam fugiat laborum at voluptatum similique adipisci
        dicta!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        aliquam quod, consequuntur, illum nostrum aperiam laudantium nisi
        exercitationem hic debitis, vero amet minima voluptas sunt pariatur odit
        quos architecto ipsa!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim incidunt
        illo neque placeat reprehenderit doloremque quo sequi repellendus illum
        aliquam impedit, doloribus dolorum dignissimos nam reiciendis. Itaque
        iusto nostrum corrupti!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam dolorem
        error reprehenderit vero optio eaque, vitae et nesciunt modi libero
        ullam culpa quibusdam fugiat laborum at voluptatum similique adipisci
        dicta!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        aliquam quod, consequuntur, illum nostrum aperiam laudantium nisi
        exercitationem hic debitis, vero amet minima voluptas sunt pariatur odit
        quos architecto ipsa!
      </p>
    </main>
  )
}
