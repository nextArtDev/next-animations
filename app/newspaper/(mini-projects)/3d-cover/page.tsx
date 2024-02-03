import React from 'react'
import BookCover from './components/BookCover'
import FlipCover from './components/FlipCover'
import SoftCover from './components/SoftCover'
import PaperCover from './components/PaperCover'

type Props = {}

function page({}: Props) {
  return (
    <div className="min-h-screen">
      <BookCover />
      <PaperCover />
      <SoftCover />
      <FlipCover />
    </div>
  )
}

export default page
