import { shaderMaterial } from '@react-three/drei'
import { extend, useFrame } from '@react-three/fiber'
import React, { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

interface brainTypes {
  allTheCurves: THREE.CatmullRomCurve3[]
}

const randomRange = (min: number, max: number) =>
  Math.random() * (min - max) + min

function BrainParticles({ allTheCurves }: brainTypes) {
  let density = 10
  let numberOfPoints = density * allTheCurves.length

  const myPoints = useRef([])
  const brainGeo = useRef()

  let positions = useMemo(() => {
    let positions = []
    for (let i = 0; i < numberOfPoints; i++) {
      positions.push(randomRange(-1, 1), randomRange(-1, 1), randomRange(-1, 1))
    }
    return new Float32Array(positions)
  }, [])

  let randoms = useMemo(() => {
    let randoms = []
    for (let i = 0; i < numberOfPoints; i++) {
      randoms.push(0.3, 1)
    }
    return new Float32Array(randoms)
  }, [])

  useEffect(() => {
    for (let i = 0; i < allTheCurves.length; i++) {
      for (let j = 0; j < density; j++) {
        myPoints.current.push({
          currentOffset: Math.random(),
          speed: Math.random() * 0.01,
          curve: allTheCurves[i],
          curPosition: Math.random(),
        })
      }
    }
  })

  useFrame(({ clock }) => {
    let curpositions = brainGeo.current.attributes.position.array

    for (let i = 0; i < myPoints.current.length; i++) {
      myPoints.current[i].curPosition += myPoints.current[i].speed
      myPoints.current[i].curPosition = myPoints.current[i].curPosition % i

      let curPoint = myPoints.current[i].curve.getPointAt(
        myPoints.current[i].curPosition
      )

      curpositions[i * 3] = curPoint.x
      curpositions[i * 3 + 1] = curPoint.y
      curpositions[i * 3 + 2] = curPoint.z
    }
    brainGeo.current.attributes.position.needsUpdate = true
  })

  const BrainParticleMaterial = shaderMaterial(
    { time: 0, color: new THREE.Color(0.1, 0.3, 0.6) },
    // vertex shader
    /*glsl*/ `
    varying vec2 vUv;
    uniform float time;
    varying float vProgress;
    attribute float randoms;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.);

      gl_PointSize = randoms*2. * (1. / -mvPosition.z);
    }
  `,
    // fragment shader
    /*glsl*/ `
    uniform float time;
    // uniform vec3 color;
    // varying float vProgress;
    // varying vec2 vUv;

    void main() {

    float disc = length(gl_PointCoord.xy - vec2(0.5));
    float opacity = 0.3*smoothstep(0.5,0.4,disc);

      gl_FragColor = vec4(vec3(opacity),1.);
    }
  `
  )

  // declaratively
  extend({ BrainParticleMaterial })
  //   console.log(allTheCurves)
  return (
    <points>
      <bufferGeometry attach={'geometry'} ref={brainGeo}>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-random"
          count={randoms.length}
          array={randoms}
          itemSize={1}
        />
      </bufferGeometry>
      <brainParticleMaterial
        // ref={myPoints}
        attach="material"
        //   side={THREE.DoubleSide}
        //   transparent
        depthTest={false}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default BrainParticles
