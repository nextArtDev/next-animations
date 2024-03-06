'use client'
import React, { useEffect, useRef, useState } from 'react'
import HTMLFlipBook from 'react-pageflip'

const AutoFlipBook = () => {
  const book = useRef<typeof HTMLFlipBook>(null)
  const [canFlip, setCanFlip] = useState(true)
  const flipInterval = 2000 // Flip every 2 seconds
  const [userInteracted, setUserInteracted] = useState(false)

  useEffect(() => {
    const flipPage = () => {
      if (!book.current || userInteracted) return

      let currentPage = book.current.pageFlip()?.getCurrentPageIndex() || 0
      let totalPages = book.current.pageFlip()?.getPageCount() || 0

      // Flip to the next page or go back to the first page if it's the last page
      if (currentPage === totalPages - 1) {
        book.current?.pageFlip()?.flip(0)
      } else {
        book.current?.pageFlip()?.flipNext()
      }
    }

    let intervalId: NodeJS.Timeout

    if (canFlip) {
      // Start flipping pages
      intervalId = setInterval(flipPage, flipInterval)
    }

    // Cleanup on unmount or when canFlip changes
    return () => clearInterval(intervalId)
  }, [canFlip, flipInterval, userInteracted])

  const handlePageTurn = () => {
    setUserInteracted(true)

    setTimeout(() => {
      setUserInteracted(false)
    }, 2000)
  }

  return (
    <HTMLFlipBook onFlip={handlePageTurn} ref={book} width={300} height={500}>
      <div className="bg-blue-500 backdrop-blur-3xl demoPage">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        nesciunt recusandae numquam debitis quisquam officiis temporibus
        explicabo error, dolores non aliquid sed laborum rem culpa voluptas
        nihil labore alias molestiae.
      </div>
      <div
        style={{ backfaceVisibility: 'hidden' }}
        className="backfaceHidden demoPage bg-red-500"
      >
        Page 2
      </div>
      <div className="demoPage bg-yellow-300">Page 3</div>
      <div className="demoPage bg-blue-500">Page 4</div>
      <div className="demoPage bg-indigo-300">Page 5</div>
      <div className="demoPage bg-red-500">Page 6</div>
      <div className="demoPage bg-blue-300">Page 7</div>
      <div className="demoPage bg-red-500">Page 8</div>
    </HTMLFlipBook>
  )
}

export default AutoFlipBook
