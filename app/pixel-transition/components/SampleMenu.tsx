import React from 'react'

import { motion } from 'framer-motion'
interface PageProps {
  menuIsActive: boolean
}
const anim = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

export default function SampleMenu({ menuIsActive }: PageProps) {
  return (
    <motion.div
      className="text-black fixed flex flex-col items-center justify-center h-[90vh] w-full z-30"
      variants={anim}
      initial="initial"
      animate={menuIsActive ? 'open' : 'closed'}
    >
      <p className="text-[5vw] m-1">Home</p>
      <p className="text-[5vw] m-1">About</p>
      <p className="text-[5vw] m-1">Contact</p>
    </motion.div>
  )
}
