import { FC } from 'react'
import texture from '../../../public/newspaper/texture/texture.jpg'
interface SnapScrollProps {}

const SnapScroll: FC<SnapScrollProps> = ({}) => {
  return (
    <section className="text-black  " style={{}}>
      <div
        className="wrapper bg-[#f5f5ef] bg-blend-multiply w-full h-full max-h-[800px] max-w-[1500px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  grid p-8 overflow-hidden
      "
        style={{
          gridTemplateColumns: '1fr 1fr 2fr 1.7fr',
          backgroundImage: `url(${texture.src})`,
        }}
      >
        <nav className="navigation flex flex-col min-h-0 border-r border-black ">
          <ul className="p-0">
            <li className="m-5 text-4xl cursor-pointer">Home</li>
            <li className="m-5 text-4xl cursor-pointer">Politics</li>
            <li className="m-5 text-4xl cursor-pointer">Ecology</li>
            <li className="m-5 text-4xl cursor-pointer">Sports</li>
          </ul>
        </nav>
        <div className="static">
          <div
            className="article-header m-4 p-4 border-b border-black mt-0 snap-start "
            //   style={{scrollSnapAlign:'start'}}
          >
            <div className="bigTitle font-bold text-[7rem]">Self</div>
            <div className="smallTitle">Pinned Issue</div>
          </div>
          <div className="article-content h-full p-4  page-no flex flex-col justify-end text-5xl border-r border-black text-center ">
            NO. 01
          </div>
        </div>
        <div className="suggested-articles overflow-auto snap-y snap-mandatory pb-8 ">
          <div
            className="article-header m-4 p-4 border-b border-black mt-0 snap-start "
            //   style={{scrollSnapAlign:'start'}}
          >
            <div className="bigTitle font-bold text-[7rem]">Esteem</div>
            <div className="smallTitle">15.08.2023</div>
          </div>
          <div className="article-content h-full p-4 ">
            <img
              className="w-full max-h-[200px] grayscale-(1) "
              src=" /newspaper/texture/1.jpg"
            />
            <h3 className="text-3xl p-0 m-0 font-normal">
              Nurturing Self-Confident in Children
            </h3>
            <div className="row italic flex justify-between my-4 ">
              <span>By Emma Thompson</span>
              <span>5 min read</span>
            </div>
            <p className="content text-[1.1rem] ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia!
            </p>
            <div className="see-more border-t border-black flex justify-end text-base ">
              &gt; See more
            </div>
          </div>

          <div
            className="article-header m-4 p-4 border-b border-black mt-0 snap-start "
            //   style={{scrollSnapAlign:'start'}}
          >
            <div className="bigTitle font-bold text-[7rem]">Control</div>
            <div className="smallTitle">15.08.2023</div>
          </div>
          <div className="article-content h-full p-4 ">
            <img
              className="w-full max-h-[200px] grayscale-(1) "
              src=" /newspaper/texture/1.jpg"
            />
            <h3 className="text-3xl p-0 m-0 font-normal">
              The Powe of Self-Descipline{' '}
            </h3>
            <div className="row italic flex justify-between my-4 ">
              <span>By Emma Thompson</span>
              <span>5 min read</span>
            </div>
            <p className="content text-[1.1rem] ">
              Lorem ipsum damet consectetur adipisicing elit. Quia!
            </p>
            <div className="see-more border-t border-black flex justify-end text-base ">
              &gt; See more
            </div>
          </div>
          <div
            className="article-header m-4 p-4 border-b border-black mt-0 snap-start "
            //   style={{scrollSnapAlign:'start'}}
          >
            <div className="bigTitle font-bold text-[7rem]">Talk</div>
            <div className="smallTitle">15.08.2023</div>
          </div>
          <div className="article-content h-full p-4 ">
            <img
              className="w-full max-h-[200px] grayscale-(1) "
              src=" /newspaper/texture/1.jpg"
            />
            <h3 className="text-3xl p-0 m-0 font-normal">
              The Art of Self experience
            </h3>
            <div className="row italic flex justify-between my-4 ">
              <span>By Richard Thompson</span>
              <span>5 min read</span>
            </div>
            <p className="content text-[1.1rem] ">
              Lorem ipsum damet consectetur adipisicing elit. Quia!
            </p>
            <div className="see-more border-t border-black flex justify-end text-base ">
              &gt; See more
            </div>
          </div>
        </div>
        <div
          className="featured border-l border-black overflow-y-scroll "
          style={{ maxHeight: 'inherit' }}
        >
          <div className="article-header m-4 p-4 border-b border-black mt-0 snap-start ">
            <div className="smallTitle italic text-3xl ">Featured Articles</div>
          </div>
          <div className="featured-articles p-4 overflow-auto  ">
            <div className="feature h-auto article-content h-full p-4 ">
              <div className="row items-end ">
                <div className="no text-5xl font-normal ">1</div>
                <div className="date">15.08.2023</div>
              </div>
              <div className="title text-3xl font-medium pb-2 ">
                Decoding the Metaverse:Navigating the virtual{' '}
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </div>
            </div>
          </div>
          <div className="featured-articles p-4 overflow-auto  ">
            <div className="feature h-auto article-content h-full p-4 ">
              <div className="row items-end ">
                <div className="no text-5xl font-normal ">1</div>
                <div className="date">15.08.2023</div>
              </div>
              <div className="title text-3xl font-medium pb-2 ">
                Remote work:Navigating the virtual{' '}
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </div>
            </div>
          </div>
          <div className="featured-articles p-4 overflow-auto  ">
            <div className="feature h-auto article-content h-full p-4 ">
              <div className="row items-end ">
                <div className="no text-5xl font-normal ">1</div>
                <div className="date">15.08.2023</div>
              </div>
              <div className="title text-3xl font-medium pb-2 ">
                AI in Health work:Navigating the virtual{' '}
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </div>
            </div>
          </div>
          <div className="featured-articles p-4 overflow-auto  ">
            <div className="feature h-auto article-content h-full p-4 ">
              <div className="row items-end ">
                <div className="no text-5xl font-normal ">1</div>
                <div className="date">15.08.2023</div>
              </div>
              <div className="title text-3xl font-medium pb-2 ">
                Cognitive Bias work:Navigating the virtual{' '}
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SnapScroll
