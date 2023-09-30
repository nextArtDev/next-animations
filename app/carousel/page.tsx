import { FC } from 'react'
import ImageSlider from './components/ImageSlider'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <section className="overflow-hidden">
      <ImageSlider />
    </section>
  )
}

export default page
