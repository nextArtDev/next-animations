import React from 'react'
import ShuffledPaper from './components/ShuffledPaper'

type Props = {}

function page({}: Props) {
  return (
    <div className=" text-black/60 w-full h-screen flex flex- col items-center justify-center">
      <ShuffledPaper />
    </div>
  )
}

export default page
