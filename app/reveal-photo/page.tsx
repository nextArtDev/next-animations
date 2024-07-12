import React from 'react'
import Reveal from './components/Reveal'

function page() {
  return (
    <section>
      <div className="h-screen w-full"></div>
      <div className="w-full h-screen flex items-center justify-center">
        <Reveal />
      </div>
    </section>
  )
}

export default page
