'use client'
import React, { useEffect, useRef, useState } from 'react'
import HTMLFlipBook from 'react-pageflip'
import './page-flip.scss'
const AutoFlipBook = () => {
  const book = useRef<any>(null)
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
    <section
      dir="rtl"
      className="h-[150vh]  overflow-hidden px-8 mx-auto w-full flex items-center justify-center"
    >
      {/* @ts-ignore */}
      <HTMLFlipBook
        // className="flip-book"

        style={{ boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.5)' }}
        onFlip={handlePageTurn}
        ref={book}
        // width={300}
        // height={500}
        width={350} // base page width
        height={433} // base page height
        size={'stretch'}
        // set threshold values=
        minWidth={315}
        // maxWidth={1000}
        minHeight={420}
        // maxHeight={1350}
        // maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={false} // disable content scrolling on mobile devices
      >
        <div
          style={{
            backgroundColor: 'hsl(35, 55, 98)',
            color: 'hsl(35, 35, 35)',
            border: 'solid 1px hsl(35, 20, 70)',
            boxShadow: 'inset -7px 0 30px -7px rgba(0, 0, 0, 0.4)',
          }}
          className=" bg-[hsl(35, 55, 98)]   "
        >
          page1
        </div>
        <div
          // style={{ backfaceVisibility: 'hidden' }}
          className=" bg-[hsl(35, 55, 98)]"
          style={{
            backgroundColor: 'hsl(35, 55, 98)',
            color: 'hsl(35, 35, 35)',
            border: 'solid 1px hsl(35, 20, 70)',
            boxShadow: 'inset -7px 0 30px -7px rgba(0, 0, 0, 0.4)',
          }}
        >
          Page 2
        </div>
        <div
          style={{
            backgroundColor: 'hsl(35, 55, 98)',
            color: 'hsl(35, 35, 35)',
            border: 'solid 1px hsl(35, 20, 70)',
            boxShadow: 'inset 7px 0 30px -7px rgba(0, 0, 0, 0.4)',
          }}
          className="bg-[hsl(35, 55, 98)]"
        >
          Page 3
        </div>

        <div
          style={{
            backgroundColor: 'hsl(35, 55, 98)',
            color: 'hsl(35, 35, 35)',
            border: 'solid 1px hsl(35, 20, 70)',
            boxShadow: 'inset -7px 0 30px -7px rgba(0, 0, 0, 0.4)',
          }}
          className="origin-left bg-[hsl(35, 55, 98)]"
        >
          Page 4
        </div>

        <div
          style={{
            backgroundColor: 'hsl(35, 55, 98)',
            color: 'hsl(35, 35, 35)',
            border: 'solid 1px hsl(35, 20, 70)',
            boxShadow: 'inset 7px 0 30px -7px rgba(0, 0, 0, 0.4)',
          }}
          className=" origin-left bg-[hsl(35, 55, 98)]"
        >
          Page 5
        </div>

        <div
          style={{
            backgroundColor: 'hsl(35, 55, 98)',
            color: 'hsl(35, 35, 35)',
            border: 'solid 1px hsl(35, 20, 70)',
            boxShadow: 'inset -7px 0 30px -7px rgba(0, 0, 0, 0.4)',
          }}
          className="origin-left bg-[hsl(35, 55, 98)]"
        >
          Page 6
        </div>

        <div
          style={{
            backgroundColor: 'hsl(35, 55, 98)',
            color: 'hsl(35, 35, 35)',
            border: 'solid 1px hsl(35, 20, 70)',
            boxShadow: 'inset 7px 0 30px -7px rgba(0, 0, 0, 0.4)',
          }}
          className=" origin-left bg-[hsl(35, 55, 98)]"
        >
          Page 7
        </div>

        <div
          style={{
            backgroundColor: 'hsl(35, 55, 98)',
            color: 'hsl(35, 35, 35)',
            border: 'solid 1px hsl(35, 20, 70)',
            boxShadow: 'inset -7px 0 30px -7px rgba(0, 0, 0, 0.4)',
          }}
          className="origin-left bg-[hsl(35, 55, 98)]"
        >
          Page 8
        </div>

        {/* <div className="page page-cover page-cover-top" data-density="hard">
          <div className="page-content">
            <h2>BOOK TITLE</h2>
          </div>
        </div>
        <div className="page">
          <div className="page-content">
            <h2 className="page-header">Page header 1</h2>
            <div
              className="page-image"
              style={{ backgroundImage: 'url(images/html/1.jpg)' }}
            ></div>
            <div className="page-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus
              mollis nibh, non convallis ex convallis eu. Suspendisse potenti.
              Aenean vitae pellentesque erat. Integer non tristique quam.
              Suspendisse rutrum, augue ac sollicitudin mollis, eros velit
              viverra metus, a venenatis tellus tellus id magna. Aliquam ac
              nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non
              justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. In cursus
              mollis nibh, non convallis ex convallis eu. Suspendisse potenti.
              Aenean vitae pellentesque erat. Integer non tristique quam.
              Suspendisse rutrum, augue ac sollicitudin mollis, eros velit
              viverra metus, a venenatis tellus tellus id magna.
            </div>
            <div className="page-footer">2</div>
          </div>
        </div>
        <div className="page">
          <div className="page-content">
            <h2 className="page-header">Page header 1</h2>
            <div
              className="page-image"
              style={{ backgroundImage: 'url(images/html/1.jpg)' }}
            ></div>
            <div className="page-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus
              mollis nibh, non convallis ex convallis eu. Suspendisse potenti.
              Aenean vitae pellentesque erat. Integer non tristique quam.
              Suspendisse rutrum, augue ac sollicitudin mollis, eros velit
              viverra metus, a venenatis tellus tellus id magna. Aliquam ac
              nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non
              justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. In cursus
              mollis nibh, non convallis ex convallis eu. Suspendisse potenti.
              Aenean vitae pellentesque erat. Integer non tristique quam.
              Suspendisse rutrum, augue ac sollicitudin mollis, eros velit
              viverra metus, a venenatis tellus tellus id magna.
            </div>
            <div className="page-footer">2</div>
          </div>
        </div>
        <div className="page">
          <div className="page-content">
            <h2 className="page-header">Page header 1</h2>
            <div
              className="page-image"
              style={{ backgroundImage: 'url(images/html/1.jpg)' }}
            ></div>
            <div className="page-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus
              mollis nibh, non convallis ex convallis eu. Suspendisse potenti.
              Aenean vitae pellentesque erat. Integer non tristique quam.
              Suspendisse rutrum, augue ac sollicitudin mollis, eros velit
              viverra metus, a venenatis tellus tellus id magna. Aliquam ac
              nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non
              justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. In cursus
              mollis nibh, non convallis ex convallis eu. Suspendisse potenti.
              Aenean vitae pellentesque erat. Integer non tristique quam.
              Suspendisse rutrum, augue ac sollicitudin mollis, eros velit
              viverra metus, a venenatis tellus tellus id magna.
            </div>
            <div className="page-footer">2</div>
          </div>
        </div>

        <div className="page page-cover page-cover-bottom" data-density="hard">
          <div className="page-content">
            <h2>THE END</h2>
          </div>
        </div> */}
      </HTMLFlipBook>
    </section>
  )
}

export default AutoFlipBook
