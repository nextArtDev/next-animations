import React from 'react'
import './paper-cover.scss'
type Props = {}

function PaperCover({}: Props) {
  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="book">
        <img className="cover" src="https://picsum.photos/300/400?g31" />
        <div className="shadow"></div>
      </div>
    </div>
  )
}

export default PaperCover
