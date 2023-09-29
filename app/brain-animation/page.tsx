'use client'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { FC } from 'react'

import Tubes from './components/Tubes'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <section className="w-screen  h-screen overflow-hidden">
      <Canvas camera={{ position: [0, 0, 0.3], near: 0.001, far: 5 }}>
        <color attach="background" args={['black']} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />

        <Tubes />
      </Canvas>
    </section>
  )
}

export default page
