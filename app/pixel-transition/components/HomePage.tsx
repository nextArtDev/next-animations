'use client'
import SampleHeader from './SampleHeader'
import SampleMenu from './SampleMenu'
import { useState } from 'react'
import VerticalPixelTransition from './pixel-transition/VerticalPixelTransition'
import HorizontalPixelTransition from './pixel-transition/HorizontalPixelTransition'
import CenteredPixelTransition from './pixel-transition/CenteredPixelTransition'

export default function HomePage() {
  const [menuIsActive, setMenuIsActive] = useState(false)
  return (
    <main>
      <SampleHeader
        menuIsActive={menuIsActive}
        setMenuIsActive={setMenuIsActive}
      />
      <SampleMenu menuIsActive={menuIsActive} />
      {/* <CenteredPixelTransition menuIsActive={menuIsActive} /> */}
      {/* <HorizontalPixelTransition menuIsActive={menuIsActive} /> */}
      <VerticalPixelTransition menuIsActive={menuIsActive} />
    </main>
  )
}
