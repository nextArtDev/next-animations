import React from 'react'
import style from './LooseLeaf.module.css'
type Props = {}

function LooseLeaf({}: Props) {
  return (
    <div className={`${style.paper}  p-2`}>
      <div className={style.line} />
      <div className={style.textarea}>
        <div className={`${style.hole}`}></div>
        <div className={`${style.hole}`}></div>
        <div className={`${style.hole}`}></div>
        <div className={`pl-16 ${style.content}`}>
          <ol className={style.ol} start={0}>
            <li>Start on top and around you go. That how you make a zero!</li>
            <li>
              Go straight down and then you done. That the way to make a one.
            </li>
            <li>
              Make a candy cane and then a shoe. That the way to make a two!
            </li>
            <li>Around a tree. Around a tree. That the way to make a three!</li>
            <li>
              Down, across, and down some more. That is how you make a four!
            </li>
            <li>
              Take a drive. Swim around. To make a five come back to the ground.
            </li>
            <li>Make an S but don just wait. Come back up to make an eight!</li>
            <li>Make a loop and then a line. make a nine!</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default LooseLeaf
