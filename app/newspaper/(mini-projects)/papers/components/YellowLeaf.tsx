import React from 'react'
import style from './LooseLeaf.module.css'

type Props = {}

function YellowLeaf({}: Props) {
  return (
    <div>
      <div className={`w-[450px] h-[650px] ${style.yellowBg}`}></div>
    </div>
  )
}

export default YellowLeaf
