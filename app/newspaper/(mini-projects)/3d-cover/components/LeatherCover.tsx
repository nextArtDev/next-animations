import React from 'react'
import './leather-cover.scss'
type Props = {}

function LeatherCover({}: Props) {
  return (
    <div className="body2 ">
      <div className="book">
        <div className="book__cover">
          <img
            className="book__cover-img"
            src="https://visme.co/blog/wp-content/uploads/2021/06/the-godfather-book-cover.png"
          />
        </div>
        <div className="book__pages"></div>
      </div>
    </div>
  )
}

export default LeatherCover
