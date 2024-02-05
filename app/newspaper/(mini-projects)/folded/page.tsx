import React from 'react'
import FoldPaper from './components/FoldPaper'
import FoldedPaperForm from './components/FoldedPaperForm'
import VFold from './components/VFold'

type Props = {}

function page({}: Props) {
  return (
    <div>
      <FoldPaper />
      <FoldedPaperForm />
      <VFold />
    </div>
  )
}

export default page
