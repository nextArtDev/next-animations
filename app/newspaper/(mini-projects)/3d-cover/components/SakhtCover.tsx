import React from 'react'
import './sakht-cover.scss'
type Props = {}

function SakhtCover({}: Props) {
  return (
    <div className="h-screen">
      <section className="h-screen flex justify-center fa-align-center ">
        <figure className="book">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/516H0-UodwL._SX329_BO1,204,203,200_.jpg"
            className="book__image"
            alt=""
          />
        </figure>
      </section>
    </div>
  )
}

export default SakhtCover
