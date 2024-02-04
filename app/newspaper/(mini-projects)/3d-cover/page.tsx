import React from 'react'
import BookCover from './components/BookCover'
import FlipCover from './components/FlipCover'
import SoftCover from './components/SoftCover'
import PaperCover from './components/PaperCover'
import LeatherCover from './components/LeatherCover'
import BookEffect from './components/BookEffect'

type Props = {}

function page({}: Props) {
  return (
    <div className="flex flex-col  min-h-screen">
      <BookEffect />
      {/* <div className="h-screen">
        <BookCover />
        </div>
        <div className="h-screen">
        <PaperCover />
        </div>
      <div className="h-screen">
        <SoftCover />
      </div>
      <div className="h-screen">
        <FlipCover />
      </div>
      <div className="h-screen">
        <LeatherCover />
      </div> */}
    </div>
  )
}

export default page
