'use client'
import React, { useEffect } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './little-book.scss'
import gsap from 'gsap'

const demos = [
  {
    name: 'Kitkat',
    id: 'LYpNyvm',
  },
  {
    name: 'Newton',
    id: 'abzeaWJ',
  },
  {
    name: 'Launch',
    id: 'rNOqzbN',
  },
  {
    name: 'Birthday',
    id: 'BaobKOJ',
  },
  {
    name: 'Impossible',
    id: 'ZjLKGY',
  },
  {
    name: 'Care',
    id: 'RwPrOoz',
  },
  {
    name: 'Cubes',
    id: 'QWbRxXb',
  },
  {
    name: 'Elon',
    id: 'RwWMwvY',
  },
  {
    name: 'Gun',
    id: 'GRoKOyg',
  },
  {
    name: 'Moon',
    id: 'NWqemYK',
  },
  {
    name: 'Pokedex',
    id: 'eYpGQxr',
  },
  {
    name: 'Record',
    id: 'RwraKYZ',
  },
  {
    name: 'Tcannon',
    id: 'eYpmBxQ',
  },
  {
    name: 'Cloud',
    id: 'MWwRKvd',
  },
  {
    name: 'Fireflies',
    id: 'zYGQYWJ',
  },
  {
    name: 'Train',
    id: 'eYpdPWa',
  },
  {
    name: 'Pancake',
    id: 'jJVpWZ',
  },
  {
    name: 'Earth',
    id: 'aPzVme',
  },
  {
    name: 'Matryoshka',
    id: 'jOOYMLm',
  },
  {
    name: 'Truck',
    id: 'MWWowEb',
  },
]
const LittleBook = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to('.book', {
      scrollTrigger: {
        scrub: 1,
        start: () => 0,
        end: () => window.innerHeight * 0.25,
      },
      scale: 1,
    })

    gsap.to('.logo', {
      scrollTrigger: {
        scrub: true,
        start: () => 13.5 * (window.innerHeight * 0.25),
        end: () => 14 * (window.innerHeight * 0.25),
      },
      opacity: 1,
    })

    const PAGES = document.querySelectorAll('.book__page')
    PAGES.forEach((page, index) => {
      gsap.set(page, { z: index === 0 ? 13 : -index * 1 })
      if (index === 11) return
      gsap.to(page, {
        rotateY: `-=${180 - index / 2}`,
        scrollTrigger: {
          scrub: 1,
          start: () => (index + 1) * (window.innerHeight * 0.25),
          end: () => (index + 2) * (window.innerHeight * 0.25),
        },
      })
      gsap.to(page, {
        z: index === 0 ? -13 : index,
        scrollTrigger: {
          scrub: 1,
          start: () => (index + 1) * (window.innerHeight * 0.25),
          end: () => (index + 1.5) * (window.innerHeight * 0.25),
        },
      })
    })
  }, [])
  const PAGES = 10
  const SHUFFLED_DEMOS = demos.sort(() => 0.5 - Math.random())
  return (
    <div className="book">
      <div className="book__spine" />
      {/* Front cover */}
      <div
        className="page book__page book__cover book__cover--front"
        style={{ '--page-index': 1 }}
      >
        <div className="page__half page__half--front">
          <span className="code">{/* Code content */}</span>
          <svg
            className="sticker"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 316 306"
          >
            {/* SVG content */}
          </svg>
        </div>
        <div className="page__half page__half--back">
          <div className="book__insert" />
        </div>
      </div>
      {/* Inner pages */}
      {Array.from({ length: PAGES }, (_, p) => (
        <div
          key={p}
          className="page book__page"
          style={{ '`--page-index`': `${p + 2}` }}
        >
          <div className="page__half page__half--front">
            {/* Render sketch for odd-numbered pages */}
            {p % 2 === 0 && (
              <a
                href={`https://codepen.io/jh3y/full/${
                  SHUFFLED_DEMOS[p / 2].id
                }`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/605876/${
                    SHUFFLED_DEMOS[p / 2].name || 'Book'
                  }-sketch.svg`}
                />
              </a>
            )}
            <div className="page__number">{p * 2 + 1}</div>
          </div>
          <div className="page__half page__half--back">
            {/* Render sketch for even-numbered pages */}
            {p % 2 !== 0 && (
              <a
                href={`https://codepen.io/jh3y/full/${
                  SHUFFLED_DEMOS[(p + 1) / 2].id
                }`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/605876/${
                    SHUFFLED_DEMOS[(p + 1) / 2].name || 'Book'
                  }-sketch.svg`}
                />
              </a>
            )}
            <div className="page__number">{p * 2 + 2}</div>
          </div>
        </div>
      ))}
      {/* Back cover */}
      <div
        className="page book__page book__cover book__cover--back"
        style={{ '--page-index': `${PAGES + 2}` }}
      >
        <div className="page__half page__half--front" />
        <div className="page__half page__half--back">
          <span className="code">{/* Code content */}</span>
          <div className="book__insert">
            <a
              href="https://jhey.dev"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="logo"
                src="https://assets.codepen.io/605876/bear-with-cap.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LittleBook
