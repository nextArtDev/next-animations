import React from 'react'
import './book-cover.scss'
type Props = {}

function BookCover({}: Props) {
  return (
    <article>
      <div className="cover-back"></div>
      <div className="pages">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="cover">
        {/* <img
          className="bg-cover object-cover bg-center "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Moai_Rano_raraku.jpg/800px-Moai_Rano_raraku.jpg"
        /> */}
        <span className="title">Book Title</span>
      </div>
      <div className="spine">
        <span>my logo</span>
      </div>
      <div className="spine-shadow"></div>
    </article>
  )
}

export default BookCover
