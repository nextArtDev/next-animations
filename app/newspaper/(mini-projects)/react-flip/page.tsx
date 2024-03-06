import { FC } from 'react'
import ReactPageFlip from './components/React-pageflip'
import AutoFlipBook from './components/PageFlip'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    // <ReactPageFlip />
    <div className="bg-transparent">
      <AutoFlipBook />
    </div>
  )
}

export default page
