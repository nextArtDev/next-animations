import { FC } from 'react'

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <main>
      <section className="hero">
        <div className="hero-bg">
          <img src="/illustration/sky.webp" alt="sky" />
        </div>
      </section>
    </main>
  )
}

export default Hero
