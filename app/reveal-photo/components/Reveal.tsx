'use client'
import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

function Reveal({}: Props) {
  return (
    <div className="relative flex flex-col items-center justify-center w-[60vw] h-[50vh] ">
      <motion.div
        // initial={{ height: 0 }}
        // whileInView={{ height: 'auto' }}
        // transition={{ duration: 0.8, delay: 0.8 }}
        className="relative bg-red-500 w-3/4 h-3/4"
      >
        <motion.div
          initial={{ height: 'auto' }}
          whileInView={{ height: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute inset-0 bg-gray-600 "
        ></motion.div>
      </motion.div>
    </div>
  )
}

export default Reveal
