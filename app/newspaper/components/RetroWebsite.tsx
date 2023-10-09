'use client'
import { FC, useEffect, useRef } from 'react'
import textureBg from '../../../public/newspaper/texture/texture.jpg'
import image from '../../../public/newspaper/texture/1.jpg'
import Image from 'next/image'
import gsap from 'gsap'
interface RetroWebsiteProps {}

const RetroWebsite: FC<RetroWebsiteProps> = ({}) => {
  const section1Ref = useRef(null)
  useEffect(() => {
    // gsap.from('h1 b', {
    //   y: 100,
    //   opacity: 0,
    //   duration: 0.9,
    // })

    // gsap.from('.heading p', {
    //   y: 10,
    //   opacity: 0,
    //   delay: 0.2,
    //   duration: 0.5,
    // })

    // gsap.from('.logo', {
    //   x: -100,
    //   opacity: 0,
    //   delay: 0.2,
    //   duration: 0.5,
    // })

    // gsap.from('.section-1', {
    //   y: 1000,
    //   opacity: 0,
    //   delay: 0.2,
    //   duration: 1,
    // })

    section1Ref.current.addEventListener(
      'mousemove',
      (e: { clientX: any; clientY: any }) => {
        gsap.to('.box', {
          x: e.clientX,
          y: e.clientY,
          stagger: 0.1,
          opacity: 1,
          display: 'grid',
        })
      }
    )
    section1Ref.current.addEventListener(
      'mouseout',
      (e: { clientX: any; clientY: any }) => {
        gsap.to('.box', {
          x: e.clientX,
          y: e.clientY,
          stagger: 0.1,
          opacity: 0,
          display: 'none',
        })
      }
    )
  }, [])

  return (
    <section
      style={{
        backgroundImage: `url(${textureBg.src}) `,
      }}
      className="retro w-screen min-h-screen text-black bg-gray-300 bg-blend-multiply"
    >
      <div className="h-full w-screen flex flex-col justify-center items-center p-5">
        <div className="heading w-full flex flex-col justify-center items-center py-2 my-2 border-black border-t-[5px] border-b-[5px] relative before:content-[''] before:w-full before:h-[2px] before:bg-black before:-mt-[3px] after:content-[''] after:w-full after:h-[2px] after:bg-black after:-mt-[3px]">
          <span
            className="block absolute -top-5 text-2xl px-[10px] text-[#b93c12] "
            style={{
              backgroundImage: `url(${textureBg.src}) `,
            }}
          >
            The
          </span>
          <h1 className="text-7xl">
            <b className="inline-block">Daily Portfolio</b>
          </h1>
          <p className="text-lg my-[10px] tracking-[5px] font-medium ">
            Unfolding the Stories & Showcasing the Creativity{' '}
          </p>
        </div>
        <nav className="flex w-full items-center justify-center py-[10px] text-[20px] gap-5 ">
          <a
            href="#"
            className="logo circle  relative left-[0.5em] text-[20px] font-medium mr-2.5 z-10 decoration-none mr-auto text-[30px] text-[#b93c12] font-semibold "
          >
            Daily Portfolio
          </a>
          <a className=" decoration-none" href="#about">
            About
          </a>
          <a className=" decoration-none" href="#work">
            Work
          </a>
          <a className=" decoration-none" href="#contact">
            Contact
          </a>
        </nav>
        <section
          ref={section1Ref}
          className="section-1 w-full min-h-screen border-black border-[5px] py-5 flex flex-col justify-center items-center pb-0 "
          id="about"
        >
          <h2 className="text-7xl text-center mb-5 ">
            Discovering Creativity Daily ?
          </h2>
          <div className="content flex h-full w-full overflow-hidden p-5 relative ">
            <div className="text w-1/2 h-full flex justify-center gap-5 pb-[50px] ">
              <div className="left  w-1/2 ">
                <p>
                  <span className="text-4xl float-left mr-1.5 font-bold bg-black text-[#d3cfc6] p-1 ">
                    D
                  </span>
                  iscovering Creativity Daily is more than just a phrase; its an
                  open invitation to embark on a daily expedition into the vast
                  realm of human creativity and innovation. In a world teeming
                  with boundless imagination, we serve as your trusted guide,
                  leading you through the intricate maze of artistic expression
                  and design innovation.
                </p>

                <p>
                  Our mission is simple yet profound: to celebrate the artistry,
                  craftsmanship, and innovative spirit that shape our world. We
                  curate and present a diverse collection of creative works that
                  capture the essence of human ingenuity.
                </p>

                <p>
                  Creativity is the{' '}
                  <small className="circle relative left-[0.5em] text-[20px] font-medium mr-2.5 z-10">
                    lifeblood
                  </small>{' '}
                  of human progress. It has the power to transcend boundaries,
                  challenge norms, and reshape perspectives. Discovering
                  Creativity Daily is your gateway to this transformative force
                  that drives us forward.
                </p>

                <p className="last mt-1.5 ">
                  <span className="uppercase text-[45px] ">Multitude</span>
                  Each day, we unveil a new masterpiece, a fresh perspective, or
                  an innovative creation. We firmly believe that creativity is
                  not a finite resource but an abundant wellspring within us
                  all. By bringing you daily bursts of inspiration, we hope to
                  spark your own creative journey. Our aim is to introduce you
                  to the work of emerging talents and established luminaries
                  alike. Discovering Creativity Daily is your daily dose of
                  motivation, a reminder that creativity is not an elusive muse
                  but a dependable companion. Our digital gallery is a testament
                  to the incredible feats that can be achieved when imagination
                  meets skill, when passion meets dedication.
                </p>
                <div className="side-heading text-2xl absolute left-5 bottom-1 uppercase float-left font-bold bg-black  text-[#d3cfc6] bg-clip-text px-2.5 ">
                  of creative domain{' '}
                </div>
              </div>
              <div className="right w-1/2 ">
                <p>
                  Join us on this adventure into the heart of creativity.
                  Bookmark us, subscribe to our newsletter, or follow us on
                  social media to ensure you never miss a daily dose of
                  inspiration. We encourage you to engage with our content,
                  share your thoughts, and contribute to the conversation. After
                  all, creativity thrives when ideas are shared, when minds
                  connect, and when diverse perspectives converge.
                </p>

                <p>
                  Creativity is not confined to artists, designers, or inventors
                  alone. It resides within each of us, waiting to be awakened
                  and expressed in our unique ways. Discovering Creativity Daily
                  is your platform to{' '}
                  <span className="sketch-highlight z-10">
                    explore your own creative{' '}
                  </span>{' '}
                  potential, to find your voice, and to be inspired by the
                  boundless creativity of others.
                </p>

                <p>
                  As you journey with us, remember that creativity knows no
                  boundaries. It is a universal language that transcends
                  culture, age, and background. Discovering Creativity Daily is
                  your ticket to a world where imagination reigns supreme, where
                  innovation knows no limits, and where every day brings a fresh
                  canvas to explore.
                </p>

                <p>
                  Welcome to{' '}
                  <small className="circle relative left-[0.5em] text-[20px] font-medium mr-2.5 z-10 ">
                    Discovering Creativity Daily
                  </small>{' '}
                  , where the adventure of creativity unfolds anew with each
                  rising sun.
                </p>
                <p>
                  At Discovering Creativity Daily we believe that creativity
                  isnt a solitary endeavor; its a communal celebration of the
                  human spirit. Our community extends far beyond the confines of
                  this digital canvas. We encourage you to connect with fellow
                  explorers of creativity, to engage in spirited discussions,
                  and to share your own creative triumphs. Together, we amplify
                  the collective heartbeat of innovation and inspiration.
                </p>
              </div>
            </div>
            <div className="video w-1/2 min-h-full overflow-hidden ml-5 ">
              <video
                src="/newspaper/video/video.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              ></video>
            </div>
          </div>
        </section>
        <section className="section-2 w-full m-2.5 p-5 " id="work">
          <div className="content flex gap-5 ">
            <div className="text w-1/2 ">
              <h2 className="w-full text-4xl mb-8 text-center relative border-y-[5px] border-black before:w-full before:content-[''] before:h-0.5 before:absolute before:left-0 before:top-0.5 after:w-full after:content-[''] after:h-0.5 after:absolute after:left-0 after:bottom-0.5 ">
                Gallery of Creative Wonders
              </h2>
              <p className="text-justify">
                Welcome to the heart of our creative gallery, where we proudly
                present a selection of our most inspiring works. In this
                section, youll have the opportunity to explore a curated
                collection of artistic creations, innovative designs, and
                thought-provoking projects that embody the essence of{' '}
                <small className="circle relative left-[0.5em] text-[20px] font-medium mr-2.5 z-10">
                  Discovering Creativity Daily
                </small>
                . Each piece in this gallery tells a unique story, showcasing
                the boundless potential of human creativity and the power of
                artistic expression. We invite you to browse through these
                works, each a testament to the enduring spirit of innovation and
                inspiration.
              </p>

              <div className="tagline w-full text-center text-[20px] bg-black  text-[#d3cfc6] p-5 uppercase ">
                Ethereal Landscapes
              </div>
              <div className="tagline w-full text-center text-[20px] bg-black  text-[#d3cfc6] p-5 uppercase ">
                Interactive Storytelling
              </div>
              <div className="tagline w-full text-center text-[20px] bg-black  text-[#d3cfc6] p-5 uppercase ">
                Sustainable Urban Design
              </div>
            </div>
            <div className="image relative w-1/2 h-[700px] grayscale-[100%] ">
              <Image
                src={image.src}
                fill
                alt=""
                className="absolute object-cover "
              />
            </div>
          </div>
        </section>
        <div
          className="marquee-container overflow-hidden whitespace-nowrap w-full text-[30px] border-y-[2px] border-black mt-5 p-3  "
          id="contact"
        >
          <div className="marquee">
            Lets Create Something Together{' '}
            <a
              className="no-underline bg-black p-5 text-[#d3cfc6] "
              href="mailto:info@idk.com"
            >
              EMAIL ME
            </a>
          </div>
        </div>
      </div>
      <div className="mouse-trail fixed pointer-events-none top-0 ">
        <div className="box hidden  absolute w-full h-full -translate-x-[50%] -translate-y-[50%] pointer-events-none place-content-center bg-[#b93c12] text-white text-[20px] opacity-0 ">
          D
        </div>
        <div className="box hidden  absolute w-full h-full -translate-x-[50%] -translate-y-[50%] pointer-events-none place-content-center bg-[#b93c12] text-white text-[20px] opacity-0 ">
          A
        </div>
        <div className="box hidden  absolute w-full h-full -translate-x-[50%] -translate-y-[50%] pointer-events-none place-content-center bg-[#b93c12] text-white text-[20px] opacity-0 ">
          I
        </div>
        <div className="box hidden  absolute w-full h-full -translate-x-[50%] -translate-y-[50%] pointer-events-none place-content-center bg-[#b93c12] text-white text-[20px] opacity-0 ">
          L
        </div>
        <div className="box hidden  absolute w-full h-full -translate-x-[50%] -translate-y-[50%] pointer-events-none place-content-center bg-[#b93c12] text-white text-[20px] opacity-0 ">
          Y
        </div>
      </div>
    </section>
  )
}

export default RetroWebsite
