import React from 'react'
import './book-effect.scss'
type Props = {}

function BookEffect({}: Props) {
  return (
    <div className="body3">
      <div className="container">
        <img
          src="https://assets.codepen.io/1025350/schitts-creek2.png"
          alt="the cast of Schitt’s Creek"
        />

        <div className="book">
          <img
            src="https://assets.codepen.io/1025350/schitts-creek2.png"
            alt="the cast of Schitt’s Creek"
          />
        </div>

        <img
          src="https://assets.codepen.io/1025350/pose.png"
          alt="Elektra Wintour from Pose"
        />

        <div className="book">
          <img
            src="https://assets.codepen.io/1025350/pose.png"
            alt="Elektra Wintour from Pose"
          />
        </div>

        <img
          src="https://assets.codepen.io/1025350/janet.jpg"
          alt="Janet from The Good Place"
        />

        <div className="book">
          <img
            src="https://assets.codepen.io/1025350/janet.jpg"
            alt="Janet from The Good Place"
          />
        </div>
      </div>
    </div>
  )
}

export default BookEffect
