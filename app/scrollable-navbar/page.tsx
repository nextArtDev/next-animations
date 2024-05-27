import MainPage from '@/app/scrollable-navbar/components/ScrollNavbar'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <MainPage />
      <div className="h-[200vh]"></div>
    </div>
  )
}

export default page
