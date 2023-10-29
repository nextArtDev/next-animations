import { FC } from 'react'
import texture from '../../../../public/newspaper/texture/texture.jpg'
interface NoteBookProps {}

const NoteBook: FC<NoteBookProps> = ({}) => {
  return (
    <section className="w-full h-screen text-black ">
      <div className="center w-full h-full flex flex-col items-center justify-center ">
        <div className="book w-[400px] h-[300px] relative ">
          <div className="pages w-full h-full relative ">
            <div className="beads absolute top-0 -left-3 flex flex-col z-50 items-center justify-between ">
              <div className="bead w-9 h-3 bg-black rounded-[5mm] z-50 " />
              <div className="bead w-9 h-3 bg-black rounded-[5mm] z-50 " />
              <div className="bead w-9 h-3 bg-black rounded-[5mm] z-50 " />
              <div className="bead w-9 h-3 bg-black rounded-[5mm] z-50 " />
            </div>
            <div
              className="page w-[380px] h-[270px] absolute top-0 left-0 rounded-[7mm] mx-1.5 transition  "
              style={{
                transformStyle: 'preserve-3d',
                transformOrigin: 'left',
                boxShadow:
                  '1px 2px 0 0 rgba(0,0,0,0.15), 1px 3px 1px 0 rgba(0,0,0,0.1)',
              }}
            >
              <div
                className="page-side front absolute top-0 left-0 w-full h-full py-5 px-[30px] flex flex-col items-start justify-center rounded-[7mm]  bg-yellow-100 bg-blend-multiply pl-10  "
                style={{
                  backgroundImage: `url(${texture.src})`,
                  backfaceVisibility: 'hidden',
                }}
              >
                <div className="page-header w-full ">
                  <div className="page-title w-full flex items-center justify-between text-4xl font-medium ">
                    Sports
                    <span className="material-icons-outlined">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="page-subtitle font-light text-xs ">
                    Client Name
                  </div>
                </div>
                <div className="page-content flex-grow text-sm flex items-end ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  reprehenderit maxime veritatis tenetur possimus assumenda? Aut
                  ex, rerum odit voluptates ut quod eligendi esse eveniet!
                </div>
                <div className="page-footer w-full flex items-center justify-between mt-[15px] text-sm ">
                  <span>May 2023</span>
                  <span className="pg-no w-3.5 px-[15px] h-5 text-center text-[rgb(40,40,40)] bg-white rounded-[3mm]">
                    1
                  </span>
                </div>
              </div>
              <div
                className="page-side back absolute top-0 left-0 w-full h-full py-5 px-[30px] flex flex-col items-start justify-center rounded-[7mm]  bg-black/50 text-white bg-blend-multiply pr-10 "
                style={{
                  backgroundImage: `url(${texture.src})`,
                  transform: 'rotateY(180deg)',
                }}
              >
                <div className="page-header w-full ">
                  <div className="page-title w-full flex items-center justify-between text-4xl font-medium ">
                    Sports
                    <span className="material-icons-outlined">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="page-subtitle font-light text-xs ">
                    Client Name
                  </div>
                </div>
                <div className="page-content flex-grow text-sm flex items-end ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  reprehenderit maxime veritatis tenetur possimus assumenda? Aut
                  ex, rerum odit voluptates ut quod eligendi esse eveniet!
                </div>
                <div className="page-footer w-full flex items-center justify-between mt-[15px] text-sm ">
                  <span>May 2023</span>
                  <span className="pg-no w-3.5 px-[15px] h-5 text-center text-[rgb(40,40,40)] bg-white rounded-[3mm]">
                    2
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pages w-full h-full relative ">
            <div
              className="page w-[380px] h-[270px] absolute top-0 left-0 rounded-[7mm] mx-1.5 transition  "
              style={{
                transformStyle: 'preserve-3d',
                transformOrigin: 'left',
                boxShadow:
                  '1px 2px 0 0 rgba(0,0,0,0.15), 1px 3px 1px 0 rgba(0,0,0,0.1)',
              }}
            >
              <div
                className="page-side front absolute top-0 left-0 w-full h-full py-5 px-[30px] flex flex-col items-start justify-center rounded-[7mm]  bg-yellow-100 bg-blend-multiply pl-10  "
                style={{
                  backgroundImage: `url(${texture.src})`,
                  backfaceVisibility: 'hidden',
                }}
              >
                <div className="page-header w-full ">
                  <div className="page-title w-full flex items-center justify-between text-4xl font-medium ">
                    Sports
                    <span className="material-icons-outlined">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="page-subtitle font-light text-xs ">
                    Client Name
                  </div>
                </div>
                <div className="page-content flex-grow text-sm flex items-end ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  reprehenderit maxime veritatis tenetur possimus assumenda? Aut
                  ex, rerum odit voluptates ut quod eligendi esse eveniet!
                </div>
                <div className="page-footer w-full flex items-center justify-between mt-[15px] text-sm ">
                  <span>May 2023</span>
                  <span className="pg-no w-3.5 px-[15px] h-5 text-center text-[rgb(40,40,40)] bg-white rounded-[3mm]">
                    1
                  </span>
                </div>
              </div>
              <div
                className="page-side back absolute top-0 left-0 w-full h-full py-5 px-[30px] flex flex-col items-start justify-center rounded-[7mm]  bg-black/50 text-white bg-blend-multiply pr-10 "
                style={{
                  backgroundImage: `url(${texture.src})`,
                  transform: 'rotateY(180deg)',
                }}
              >
                <div className="page-header w-full ">
                  <div className="page-title w-full flex items-center justify-between text-4xl font-medium ">
                    Sports
                    <span className="material-icons-outlined">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="page-subtitle font-light text-xs ">
                    Client Name
                  </div>
                </div>
                <div className="page-content flex-grow text-sm flex items-end ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  reprehenderit maxime veritatis tenetur possimus assumenda? Aut
                  ex, rerum odit voluptates ut quod eligendi esse eveniet!
                </div>
                <div className="page-footer w-full flex items-center justify-between mt-[15px] text-sm ">
                  <span>May 2023</span>
                  <span className="pg-no w-3.5 px-[15px] h-5 text-center text-[rgb(40,40,40)] bg-white rounded-[3mm]">
                    2
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pages w-full h-full relative ">
            <div
              className="page w-[380px] h-[270px] absolute top-0 left-0 rounded-[7mm] mx-1.5 transition  "
              style={{
                transformStyle: 'preserve-3d',
                transformOrigin: 'left',
                boxShadow:
                  '1px 2px 0 0 rgba(0,0,0,0.15), 1px 3px 1px 0 rgba(0,0,0,0.1)',
              }}
            >
              <div
                className="page-side front absolute top-0 left-0 w-full h-full py-5 px-[30px] flex flex-col items-start justify-center rounded-[7mm]  bg-yellow-100 bg-blend-multiply pl-10  "
                style={{
                  backgroundImage: `url(${texture.src})`,
                  backfaceVisibility: 'hidden',
                }}
              >
                <div className="page-header w-full ">
                  <div className="page-title w-full flex items-center justify-between text-4xl font-medium ">
                    Sports
                    <span className="material-icons-outlined">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="page-subtitle font-light text-xs ">
                    Client Name
                  </div>
                </div>
                <div className="page-content flex-grow text-sm flex items-end ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  reprehenderit maxime veritatis tenetur possimus assumenda? Aut
                  ex, rerum odit voluptates ut quod eligendi esse eveniet!
                </div>
                <div className="page-footer w-full flex items-center justify-between mt-[15px] text-sm ">
                  <span>May 2023</span>
                  <span className="pg-no w-3.5 px-[15px] h-5 text-center text-[rgb(40,40,40)] bg-white rounded-[3mm]">
                    1
                  </span>
                </div>
              </div>
              <div
                className="page-side back absolute top-0 left-0 w-full h-full py-5 px-[30px] flex flex-col items-start justify-center rounded-[7mm]  bg-black/50 text-white bg-blend-multiply pr-10 "
                style={{
                  backgroundImage: `url(${texture.src})`,
                  transform: 'rotateY(180deg)',
                }}
              >
                <div className="page-header w-full ">
                  <div className="page-title w-full flex items-center justify-between text-4xl font-medium ">
                    Sports
                    <span className="material-icons-outlined">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="page-subtitle font-light text-xs ">
                    Client Name
                  </div>
                </div>
                <div className="page-content flex-grow text-sm flex items-end ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  reprehenderit maxime veritatis tenetur possimus assumenda? Aut
                  ex, rerum odit voluptates ut quod eligendi esse eveniet!
                </div>
                <div className="page-footer w-full flex items-center justify-between mt-[15px] text-sm ">
                  <span>May 2023</span>
                  <span className="pg-no w-3.5 px-[15px] h-5 text-center text-[rgb(40,40,40)] bg-white rounded-[3mm]">
                    2
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NoteBook
