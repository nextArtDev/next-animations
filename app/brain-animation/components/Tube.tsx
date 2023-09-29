'use client'
import * as THREE from 'three'

import { shaderMaterial } from '@react-three/drei'
import {
  extend,
  Object3DNode,
  ReactThreeFiber,
  useFrame,
  useThree,
} from '@react-three/fiber'
import { useRef } from 'react'
import { GridHelper } from 'three'

interface cubeTypes {
  curve: THREE.CatmullRomCurve3
}
// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       brainMaterial_: ReactThreeFiber.Object3DNode<THREE.Line, typeof THREE.Line>
//     }
//   }
// }

// class BrainMaterial extends GridHelper {}

// extend({ BrainMaterial })

// // declare module '@react-three/fiber' {
// //   interface ThreeElements {
// //     BrainMaterial: Object3DNode<BrainMaterial, typeof BrainMaterial>
// //   }
// // }
// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       customMaterial: ReactThreeFiber.Object3DNode<
//         BrainMaterial,
//         typeof BrainMaterial
//       >
//     }
//   }
// }
// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       item: React.DetailedHTMLProps<
//         React.HTMLAttributes<HTMLElement>,
//         HTMLElement
//       >
//     }
//   }
// }
export default function Tube({ curve }: cubeTypes) {
  const brainMat = useRef()

  let { viewport } = useThree()

  useFrame(({ clock, mouse }) => {
    brainMat.current.uniforms.time.value = clock.getElapsedTime()
    brainMat.current.uniforms.mouse.value = new THREE.Vector3(
      (mouse.x * viewport.width) / 2,
      (mouse.y * viewport.width) / 2,
      0
    )
  })

  const BrainMaterial = shaderMaterial(
    {
      time: 0,
      color: new THREE.Color(0.1, 0.3, 0.6),
      // color: new THREE.Color(0.6, 0.3, 0.6), for red
      mouse: new THREE.Vector3(0, 0, 0),
    },
    // vertex shader
    /*glsl*/ `
    uniform float time;
    uniform vec3 mouse;
    varying vec2 vUv;
    varying float vProgress;
    void main() {
      vUv = uv;
      vProgress = smoothstep(-1. , 1., sin(vUv.x*8. + time*2.5));

      vec3 p = position;
      float maxDist = 0.5;
      float dist = length(mouse.xy - vUv); //for big distortion mind
      // float dist = length(mouse - p); 
      if(dist < maxDist){
        // vec3 dir = 0.1* normalize(mouse - p); for big distortion mind
        vec3 dir =  normalize(mouse - p);
        dir*=(1. - dist/maxDist);
        p -= dir * 0.01; 
      }
      gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    }
    `,
    // fragment shader
    /*glsl*/ `
    uniform float time;
    uniform vec3 color;
    varying vec2 vUv;
    varying float vProgress;
    void main() {
      vec3 finalColor = mix(color,color*0.25,vProgress);

      float hideCorners = smoothstep(1. , 0.9, vUv.x);
      float hideCorners1 = smoothstep(0. , 0.1, vUv.x);
      gl_FragColor.rgba = vec4(finalColor,hideCorners*hideCorners1);
    }
    `
  )

  // declaratively
  extend({ BrainMaterial })

  return (
    <>
      <mesh>
        <tubeGeometry args={[curve, 64, 0.001, 2, false]} />
        {/* @ts-ignore */}
        <brainMaterial
          ref={brainMat}
          // side="DoubleSide"
          side={THREE.DoubleSide}
          transparent
          depthTest={false}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </>
  )
}
