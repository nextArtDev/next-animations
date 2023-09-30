import Image from 'next/image'
import vignette from '../public/projects/vignette.png'
import galleryScroll from '../public/projects/parallax-scroll-gallery.png'
import hideNav from '../public/projects/scrollable-navbar.png'
import brain from '../public/projects/brain.png'
import carousel from '../public/projects/carousel.png'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-screen h-screen max-w-7xl mx-auto overflow-x-hidden pb-20">
      <h2 className="text-5xl font-bold text-center py-16 pb-24 underline underline-offset-[12px]">
        Projects
      </h2>
      <section className="px-8 grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center ">
        <article className="relative w-full overflow-hidden flex flex-col rounded-xl shadow-2xl h-64 border border-white ">
          <Link href={'/vignette'} target="_blank">
            <Image src={vignette} alt="" fill className="object-cover" />
            <div className="absolute flex items-end justify-center inset-0 w-full h-full bg-gradient-to-t from-white/80 to-white/20 py-6">
              <h2 className="text-center text-4xl font-bold text-black ">
                Vignette Picture
              </h2>
            </div>
          </Link>
        </article>
        <article className="relative w-full overflow-hidden flex flex-col rounded-xl shadow-2xl h-64 border-white/40 ">
          <Link href={'/parallax-scroll'} target="_blank">
            <Image src={galleryScroll} alt="" fill className="object-cover " />
            <div className="absolute flex items-end justify-center inset-0 w-full h-full bg-gradient-to-t from-white/80 to-white/20 py-6">
              <h2 className="text-center text-4xl font-bold text-black ">
                Scrollable Gallery
              </h2>
            </div>
          </Link>
        </article>
        <article className="relative w-full overflow-hidden flex flex-col rounded-xl shadow-2xl h-64 border-white/40 ">
          <Link href={'/scrollable-navbar'} target="_blank">
            <Image src={hideNav} alt="" fill className="object-cover" />
            <div className="absolute flex items-end justify-center inset-0 w-full h-full bg-gradient-to-t from-white/80 to-white/20 py-6">
              <h2 className="text-center text-4xl font-bold text-black ">
                Scroll Navbar Hide
              </h2>
            </div>
          </Link>
        </article>
        <article className="relative w-full overflow-hidden flex flex-col rounded-xl shadow-2xl h-64 border-white/40 ">
          <Link href={'/brain-animation'} target="_blank">
            <Image src={brain} alt="" fill className="object-cover" />
            <div className="absolute flex items-end justify-center inset-0 w-full h-full bg-gradient-to-t from-white/80 to-white/20 py-6">
              <h2 className="text-center text-4xl font-bold text-black ">
                Brain Animation
              </h2>
            </div>
          </Link>
        </article>
        <article className="relative w-full overflow-hidden flex flex-col rounded-xl shadow-2xl h-64 border-white/40 ">
          <Link href={'/carousel'} target="_blank">
            <Image src={carousel} alt="" fill className="object-cover" />
            <div className="absolute flex items-end justify-center inset-0 w-full h-full bg-gradient-to-t from-white/80 to-white/20 py-6">
              <h2 className="text-center text-4xl font-bold text-black ">
                Carousel
              </h2>
            </div>
          </Link>
        </article>
      </section>
    </main>
  )
}
