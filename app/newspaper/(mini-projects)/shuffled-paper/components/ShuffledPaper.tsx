import React from 'react'
import style from './ShuffledPaper.module.css'
type Props = {}

function ShuffledPaper({}: Props) {
  return (
    // <main className={`${style.main}`}>
    <div className={`z-10 ${style.papers}`}>
      <h2>CSS3 shuffled paper effect</h2>
      <p>This example creates a shuffled paper effect using HTML and CSS3.</p>
      <p>
        You simply need to apply a class of papers to any element containing
        content.
      </p>
      <p>
        The paper effects can be modified in the CSS to change the width,
        padding, margin, color, border, angle of rotation, etc. The background
        paper is applied using :before and :after pseudo elements.
      </p>
    </div>
    // </main>
  )
}

export default ShuffledPaper
