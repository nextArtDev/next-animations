import React from 'react'
import BookCover from './components/BookCover'

type Props = {}

function page({}: Props) {
  return (
    <div className="min-h-screen">
      <BookCover />
    </div>
  )
}

export default page
