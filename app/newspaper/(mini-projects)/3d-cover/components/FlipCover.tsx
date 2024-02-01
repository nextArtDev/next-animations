import React from 'react'
import './flip-cover.scss'
type Props = {}

function FlipCover({}: Props) {
  return (
    <div className="main">
      <div className="realvjy">
        A sinnpets from my website <a href="https://vjy.me/book">vjy.me</a>
      </div>
      <div className="book-wrapper">
        <div className="book-items">
          <div className="main-book-wrap">
            <div className="book-cover">
              <div className="book-inside"></div>
              <div className="book-image">
                <img src="https://i.imgur.com/SPv9Rg7.png" />
                <div className="effect"></div>
                <div className="light"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="book-items">
          <div className="main-book-wrap">
            <div className="book-cover">
              <div className="book-inside"></div>
              <div className="book-image">
                <img src="https://i.imgur.com/UIPQEwk.png" />
                <div className="effect"></div>
                <div className="light"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="book-items">
          <div className="main-book-wrap">
            <div className="book-cover">
              <div className="book-inside"></div>
              <div className="book-image">
                <img src="https://i.imgur.com/nwzWCgm.png" />
                <div className="effect"></div>
                <div className="light"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="book-items">
          <div className="main-book-wrap">
            <div className="book-cover">
              <div className="book-inside"></div>
              <div className="book-image">
                <img src="https://i.imgur.com/YdfU4Bw.png" />
                <div className="effect"></div>
                <div className="light"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="book-items">
          <div className="main-book-wrap">
            <div className="book-cover">
              <div className="book-inside"></div>
              <div className="book-image">
                <img src="https://i.imgur.com/sVNy4Ct.png" />
                <div className="effect"></div>
                <div className="light"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipCover
