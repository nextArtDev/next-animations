import { FC } from 'react'
import FlipBook from './components/FlipBook'
import Book3D from './components/Book-3D'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main className="overflow-hidden">
      <FlipBook />
      <Book3D />
    </main>
  )
}

export default page
