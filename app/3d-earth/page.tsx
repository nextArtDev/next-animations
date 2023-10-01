import { FC } from 'react'
import Earth from './components/Earth'
import LenisSmooth from './components/SmoothLenis'
import dynamic, { DynamicOptions } from 'next/dynamic'
import Projects from './components/Projects'

interface pageProps {}

// const Earth = dynamic(
//   () =>
//     import('@/app/3d-earth/components/Earth', {
//       ssr: false,
//       loading: () => (
//         <img src="/3d-earth-assets/placeholder.png" alt="placeholder" />
//       ),
//     })
// )
const page: FC<pageProps> = ({}) => {
  return (
    <LenisSmooth>
      <div className="h-screen" />
      <main className="h-[60vw] relative flex items-center justify-center">
        <Earth />
        <Projects />
      </main>
      <div className="h-screen" />
    </LenisSmooth>
  )
}

export default page
