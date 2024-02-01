import React from 'react'
import BookCover from './components/BookCover'
import FlipCover from './components/FlipCover'

type Props = {}

function page({}: Props) {
  return (
    <div className="min-h-screen">
      <BookCover />
      <FlipCover />
    </div>
  )
}

export default page
