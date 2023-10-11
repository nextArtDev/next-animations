import { FC } from 'react'
import backG from '../../../../public/newspaper/texture/side-riped.webp'
import photo from '../../../../public/images/dyal_thak/1.jpg'
interface RippedPaperProps {}

const RippedPaper: FC<RippedPaperProps> = ({}) => {
  return (
    <section className="relative w-full h-screen ">
      <div
        className="bag absolute w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${photo.src})`,
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div
        className="paper bag absolute w-full h-full bg-cover bg-center mix-blend-lighten brightness-110"
        style={{
          backgroundImage: `url(${backG.src})`,
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    </section>
  )
}

export default RippedPaper
