import React from 'react'
import './soft-cover.scss'
type Props = {}

function SoftCover({}: Props) {
  return (
    <section className="body">
      <div className="main">
        <h1>
          <span className="book" style={{ transform: 'rotate(180deg)' }}>
            One must always
          </span>
          <span className="book" style={{ transform: 'rotate(170deg)' }}>
            be careful of
          </span>{' '}
          <span className="book" style={{ transform: 'rotate(180deg)' }}>
            books and what is
          </span>{' '}
          <span className="book" style={{ transform: 'rotate(-270deg)' }}>
            inside them,
          </span>
          <br />
          for words have the
          <br />
          <span className="power">power</span>
          <br />
          <span className="change">to change us</span>
        </h1>

        <h4>
          Clockwork Angel
          <br />
          <em>by</em> Cassandra Clare
        </h4>

        {/* <!-- <h2>National Library Week 2023, April 23-29</h2> --></div> */}
      </div>
    </section>
  )
}

export default SoftCover
