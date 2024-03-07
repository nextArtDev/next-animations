'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props: any) {
  const { nodes, materials } = useGLTF('/3d-glass/untitled.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.plate.geometry}
        material={materials['Material.005']}
        position={[-0.2, 0, 0.2]}
        scale={0.6}
      >
        <group rotation={[Math.PI, -1.4, Math.PI]} scale={1.3}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001.geometry}
            material={materials['Material.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_1.geometry}
            material={materials.cONDENSATION}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tea.geometry}
            material={materials.coffe}
            scale={[1, 0.8, 1]}
          />
        </group>
      </mesh>
    </group>
  )
}

useGLTF.preload('/untitled.glb')
