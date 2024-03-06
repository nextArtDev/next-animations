import { FC } from 'react'
import ReactPageFlip from './components/React-pageflip'
import AutoFlipBook from './components/PageFlip'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    // <ReactPageFlip />
    <AutoFlipBook />
  )
}

export default page
