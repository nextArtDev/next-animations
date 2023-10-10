'use client'

// https://nodlik.github.io/react-pageflip/

import { FC, ReactNode, forwardRef } from 'react'
import HTMLFlipBook from 'react-pageflip'
import textureBg from '../../../../public/newspaper/texture/texture.jpg'
type PageProps = {
  number: string
  children: ReactNode
  className: string
}

// eslint-disable-next-line react/display-name
const SinglePage = forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div className={`${props.className}`} ref={ref}>
      <h1>Page Header</h1>
      <p>{props.children}</p>
      <p>Page number: {props.number}</p>
    </div>
  )
})

interface ReactPageFlipProps {}

const ReactPageFlip: FC<ReactPageFlipProps> = ({}) => {
  return (
    <HTMLFlipBook
      width={300}
      height={500}
      className={'bg-white text-black overflow-hidden '}
      style={{ backgroundImage: `url(${textureBg.src}) ` }}
      //  children={undefined}
      //   startPage={0}
      //   size={'fixed'}
      //   minWidth={0}
      //   maxWidth={0}
      //   minHeight={0}
      //   maxHeight={0}
      //   drawShadow={false}
      //   flippingTime={0}
      //   usePortrait={false}
      //   startZIndex={0}
      //   autoSize={false}
      //   maxShadowOpacity={0}
      //   showCover={false}
      mobileScrollSupport={true}
      clickEventForward={true}
      useMouseEvents={true}
      //   swipeDistance={0}
      //   showPageCorners={false}
      //   disableFlipByClick={false}
    >
      <SinglePage
        number="1"
        className="demoPage w-full h-full  flex flex-col justify-center items-center mix-blend-multiply  "
      >
        Page 1
      </SinglePage>
      <SinglePage
        number="2"
        className="demoPage w-full h-full bg-blue-500/10 flex flex-col justify-center items-center mix-blend-multiply "
      >
        Page 2
      </SinglePage>
      <SinglePage
        number="3"
        className="demoPage w-full h-full bg-green-500/10 flex flex-col justify-center items-center mix-blend-multiply "
      >
        Page 3
      </SinglePage>
      <SinglePage
        number="4"
        className="demoPage w-full h-full bg-indigo-500/10 flex flex-col justify-center items-center mix-blend-multiply "
      >
        Page 4
      </SinglePage>
      <SinglePage
        number="1"
        className="demoPage w-full h-full bg-red-500/10 flex flex-col justify-center items-center mix-blend-multiply  "
      >
        Page 1
      </SinglePage>
      <SinglePage
        number="2"
        className="demoPage w-full h-full bg-blue-500/10 flex flex-col justify-center items-center mix-blend-multiply "
      >
        Page 2
      </SinglePage>
      <SinglePage
        number="3"
        className="demoPage w-full h-full bg-green-500/10 flex flex-col justify-center items-center mix-blend-multiply "
      >
        Page 3
      </SinglePage>
      <SinglePage
        number="4"
        className="demoPage w-full h-full bg-indigo-500/10 flex flex-col justify-center items-center mix-blend-multiply "
      >
        Page 4
      </SinglePage>
    </HTMLFlipBook>
  )
}

export default ReactPageFlip
