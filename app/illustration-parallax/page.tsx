import { FC } from 'react'

import './components/Style.css'
import Hero from './components/Hero'
import Header from './components/Header'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="w-screen h-screen text-[6.94vw] relative bg-[var(--color-white)] text-[var(--color-black)] ">
      <Header />
      <Hero />
    </div>
  )
}

export default page
