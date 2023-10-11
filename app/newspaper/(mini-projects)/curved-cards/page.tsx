import { FC } from 'react'
import CurvedCard from './CurvedCard'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="bg-[#fefefe] min-h-screen w-screen flex justify-center items-center ">
      <CurvedCard />
    </div>
  )
}

export default page
