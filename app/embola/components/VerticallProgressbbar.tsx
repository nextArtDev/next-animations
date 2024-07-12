'use client'
import { motion } from 'framer-motion'

const VerticalProgressBar = () => {
  return (
    <motion.div
      className="bg-gray-500 h-12   absolute top-1/2 right-12 z-10 w-0.5 rounded-full "
      initial={{ height: 0 }}
      whileInView={{ height: '100%' }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 0 }}
    />
  )
}

export default VerticalProgressBar
