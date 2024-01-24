import React from 'react'
import './module.FoldPaper.scss'
type Props = {}

function FoldPaper({}: Props) {
  return (
    <section className="main">
      <div className="container  ">
        <div className="note noteBlue mix-blend-multiply ">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="note noteOrange">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="note notePink">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="note noteGreen">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="flex gap-8">
          <div className="paper-corner">
            <h2>Accept</h2>
          </div>
          <div className="paper-corner ">
            <h2>Deny</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoldPaper
