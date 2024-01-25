import React from 'react'
import './photocopied.scss'
type Props = {}

function PhotocopiedZinc({}: Props) {
  return (
    <div className="min-h-screen">
      <div className="body">
        <figure>
          {/* <!-- Replace the src attribute of the img element below --> */}
          <img
            src="https://i.pinimg.com/originals/36/06/f2/3606f24af65ab8f65ae703b116f0cef0.jpg"
            alt=""
          />
        </figure>
      </div>
      <div className="container">
        <img
          src="https://assets.codepen.io/1025350/schitts-creek2.png"
          alt="the cast of Schitt’s Creek"
        />

        <div className="zine">
          <img
            src="https://assets.codepen.io/1025350/schitts-creek2.png"
            alt="the cast of Schitt’s Creek"
          />
        </div>

        <img src="https://assets.codepen.io/1025350/pose.png" alt="Pose" />

        <div className="zine">
          <img src="https://assets.codepen.io/1025350/pose.png" alt="Pose" />
        </div>

        <img
          src="https://assets.codepen.io/1025350/janet.jpg"
          alt="Janet from The Good Place"
        />

        <div className="zine">
          <img
            src="https://assets.codepen.io/1025350/janet.jpg"
            alt="Janet from The Good Place"
          />
        </div>
      </div>
    </div>
  )
}

export default PhotocopiedZinc
