import React from 'react'
import Tube from './Tube'
import { data } from './data'
import * as THREE from 'three'
import BrainParticles from './BrainParticles'

// converting model 3d to json: https://github.com/mrdoob/three.js/blob/ae28664847dde4dde5c826d0381314b4464aec29/utils/converters/README.md
const PATHS = data.economics[0].paths

const randomRange = (min: number, max: number) =>
  Math.random() * (min - max) + min

let curves: THREE.CatmullRomCurve3[] = []

//curves
for (let i = 0; i < 100; i++) {
  let points = []
  let length = randomRange(0.1, 1)
  //point for each curve
  for (let j = 0; j < 100; j++) {
    points.push(
      new THREE.Vector3().setFromSphericalCoords(
        1,
        Math.PI - (j / 100) * Math.PI * length,
        (i / 100) * Math.PI * 2
      )
    )
  }
  let tempcurves = new THREE.CatmullRomCurve3(points)
  curves.push(tempcurves)
}

let brainCurves: THREE.CatmullRomCurve3[] = []

PATHS.forEach((path) => {
  let points = []

  for (let i = 0; i < path.length; i += 3) {
    points.push(new THREE.Vector3(path[i], path[i + 1], path[i + 2]))
  }
  let tempCurves = new THREE.CatmullRomCurve3(points)
  brainCurves.push(tempCurves)
})
// console.log('brainCurves', brainCurves)

type Props = {}

function Tubes({}: Props) {
  return (
    <>
      {brainCurves.map((curve, i) => (
        <Tube curve={curve} key={i} />
      ))}
      {/* <BrainParticles allTheCurves={brainCurves} /> */}
    </>
  )
}

export default Tubes
