import React from 'react'
import './seloo.scss'
type Props = {}

function SelloTaped({}: Props) {
  return (
    <div className="body min-h-screen ">
      <div className="paper pink">
        <div className="tape-section"></div>
        <p>drink more water</p>
        <div className="tape-section"></div>
      </div>
      <div className="paper blue">
        <div className="top-tape"></div>
        <p>code more pens</p>
      </div>
    </div>
  )
}

export default SelloTaped
