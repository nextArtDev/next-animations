import React from 'react'
import BookCover from './components/BookCover'
import FlipCover from './components/FlipCover'
import SoftCover from './components/SoftCover'

type Props = {}

function page({}: Props) {
  return (
    <div className="min-h-screen">
      <BookCover />
      <SoftCover />
      <FlipCover />
    </div>
  )
}

export default page
