import { FC } from 'react'
import OpenCard from './components/OpenCard'
import image1 from '../../public/parallax-images/6.jpg'
import image2 from '../../public/parallax-images/7.jpg'
import image3 from '../../public/parallax-images/8.jpg'
import image4 from '../../public/parallax-images/4.jpg'
import image5 from '../../public/parallax-images/5.jpg'

interface pageProps {}
const cards = [
  {
    id: 0,
    title: 'image title',
    image: image1,
    description: 'this is a description for an image',
  },
  {
    id: 1,
    title: 'image title',
    image: image2,
    description: 'this is a description for an image',
  },
  {
    id: 2,
    title: 'image title',
    image: image3,
    description: 'this is a description for an image',
  },
  {
    id: 3,
    title: 'image title',
    image: image4,
    description: 'this is a description for an image',
  },
  {
    id: 4,
    title: 'image title',
    image: image5,
    description: 'this is a description for an image',
  },
]

const page: FC<pageProps> = ({}) => {
  return <OpenCard cards={cards} />
}

export default page
