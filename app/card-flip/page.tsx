import { FC } from 'react'
import CardFlip from './components/CardFlip'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <div className="h-screen"></div>
      <CardFlip />
      <div className="h-screen"></div>
    </>
  )
}

export default page
