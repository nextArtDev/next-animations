import React from 'react'
import ScrollHighlighter from './components/scroll-highlighter'

type Props = {}

function page({}: Props) {
  return (
    <div className="min-h-screen ">
      <ScrollHighlighter />
    </div>
  )
}

export default page
