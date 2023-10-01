import Image from 'next/image'
import vignette from '../public/projects/vignette.png'
import galleryScroll from '../public/projects/parallax-scroll-gallery.png'
import hideNav from '../public/projects/scrollable-navbar.png'
import brain from '../public/projects/brain.png'
import carousel from '../public/projects/carousel.png'
import expandedCard from '../public/projects/expanded-card.png'
import Link from 'next/link'

const projects = [
  { id: 0, name: 'Vignette Picture', image: vignette, url: '/vignette' },
  {
    id: 1,
    name: 'Scrollable Gallery',
    image: galleryScroll,
    url: '/parallax-scroll',
  },
  {
    id: 2,
    name: 'Scroll Navbar Hide',
    image: hideNav,
    url: '/scrollable-navbar',
  },
  { id: 3, name: 'Brain Animation', image: brain, url: '/brain-animation' },
  { id: 4, name: 'Carousel', image: carousel, url: '/carousel' },
  {
    id: 5,
    name: 'Expandable Card',
    image: expandedCard,
    url: '/expandable-card',
  },
]
export default function Home() {
  return (
    <main className="w-screen h-screen max-w-7xl mx-auto overflow-x-hidden pb-20">
      <h2 className="text-5xl font-bold text-center py-16 pb-24 underline underline-offset-[12px]">
        Projects
      </h2>
      <section className="px-8 grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center ">
        {projects.map((project) => (
          <article
            key={project.id}
            className="relative w-full overflow-hidden flex flex-col rounded-xl shadow-2xl h-64 border border-white "
          >
            <Link href={project.url} target="_blank">
              <Image
                src={project.image.src}
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute flex items-end justify-center inset-0 w-full h-full bg-gradient-to-t from-white/80 to-white/20 py-6">
                <h2 className="text-center text-4xl font-bold text-black ">
                  {project.name}
                </h2>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </main>
  )
}
