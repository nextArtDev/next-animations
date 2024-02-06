import React from 'react'
import LittleBook from './componens/LittleBook'

type Props = {}

function page({}: Props) {
  return (
    <div className="min-h-screen">
      <LittleBook />
    </div>
  )
}

export default page
