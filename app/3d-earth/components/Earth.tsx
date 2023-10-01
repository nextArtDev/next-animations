'use client'
import { Canvas, useLoader } from '@react-three/fiber'
import { useScroll, useSpring } from 'framer-motion'
import { FC, useRef } from 'react'
import { TextureLoader } from 'three'
import { motion } from 'framer-motion-3d'

interface EarthProps {}

const Earth: FC<EarthProps> = ({}) => {
  const scene = useRef(null)

  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ['start end', 'end start'],
  })

  /* Used for smooth rotation if you're not using Lenis Scroll */
  //   const smoothRotation = useSpring(scrollYProgress, { damping: 20 })
  const [color, normal, aoMap] = useLoader(TextureLoader, [
    '/3d-earth-assets/color.jpg',
    '/3d-earth-assets/normal.png',
    '/3d-earth-assets/occlusion.jpg',
  ])

  return (
    <Canvas ref={scene}>
      <ambientLight intensity={0.35} />
      <directionalLight intensity={3.5} position={[2, 0, -0.25]} />
      <motion.mesh scale={2.5} rotation-y={scrollYProgress}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
      </motion.mesh>
    </Canvas>
  )
}

export default Earth
