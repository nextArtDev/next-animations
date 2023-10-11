import { FC } from 'react'

interface FlipBookProps {}

const FlipBook: FC<FlipBookProps> = ({}) => {
  return (
    <section className=" h-screen items-center justify-center flex ">
      <input className="hidden" type="checkbox" id="checkbox-cover" />
      <input className="hidden" type="checkbox" id="checkbox-page1" />
      <input className="hidden" type="checkbox" id="checkbox-page2" />
      <input className="hidden" type="checkbox" id="checkbox-page3" />
      <div className="book w-[350px] h-[450px] relative transition duration-1000">
        <div className="cover absolute z-40 bg-[#4173a5] w-full h-full rounded-r-[15px] rounded-b-[15px] flex items-center justify-center  ">
          <label
            className="w-full h-full cursor-pointer"
            htmlFor="checkbox-cover"
          ></label>
        </div>
        <div
          className="page absolute bg-white w-[330px] h-[430px] rounded-r-[15px] rounded-b-[15px] mt-2.5 z-30  "
          id="page1"
        >
          <div className="front-page absolute w-full h-full p-[1rem] ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              asperiores sunt velit minus illum ipsam nobis doloremque
              voluptatum vero incidunt dolorum.
            </p>
            <label
              htmlFor="checkbox-page1"
              className="next absolute bottom-[1rem] cursor-pointer right-[1rem] "
            >
              {/* <i className="fas fa-cheveron-right "></i> */}
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
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </label>
          </div>
          <div className="back-page   rounded-t-[15px] rounded-l-[15px] absolute w-full h-full z-50 ">
            <img
              className="w-full h-full rounded-t-[15px] rounded-l-[15px] "
              src="/images/leidinger_matthias/1.jpg"
              alt=""
            />
            <label
              htmlFor="checkbox-page1"
              className="prev absolute bottom-[1rem] cursor-pointer left-[1rem] "
            >
              {/* <i className="fas fa-cheveron-left "></i> */}
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
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </label>
          </div>
        </div>
        <div
          className="page absolute bg-white w-[330px] h-[430px] rounded-r-[15px] rounded-b-[15px] mt-2.5 z-20 "
          id="page2"
        >
          <div className="front-page absolute w-full h-full p-[1rem] ">
            <h2>Page 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ad
              doloribus modi asperiores corrupti consequuntur fugiat voluptas
              sed possimus voluptates.
            </p>
            <label
              htmlFor="checkbox-page2"
              className="next absolute bottom-[1rem] cursor-pointer right-[1rem] "
            >
              {/* <i className="fas fa-cheveron-right "></i> */}
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
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </label>
          </div>
          <div className="back-page absolute w-full h-full z-50 rounded-t-[15px] rounded-l-[15px]">
            <img
              className="w-full h-full rounded-t-[15px] rounded-l-[15px] "
              src="/images/dyal_thak/1.jpg"
              alt=""
            />
            <label
              htmlFor="checkbox-page2"
              className="prev absolute bottom-[1rem] cursor-pointer left-[1rem] "
            >
              {/* <i className="fas fa-cheveron-left "></i> */}
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
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </label>
          </div>
        </div>
        <div
          className="page absolute bg-white w-[330px] h-[430px] rounded-r-[15px] rounded-b-[15px] mt-2.5 z-10 "
          id="page3"
        >
          <div className="front-page absolute w-full h-full p-[1rem] ">
            <h2>page 3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              officiis totam id, saepe perferendis culpa minus impedit vel
              soluta obcaecati.
            </p>
          </div>
        </div>
        <div className="back-cover relative -z-10  bg-[#4173a5] w-full h-full rounded-r-[15px] rounded-b-[15px] flex items-center justify-center  "></div>
      </div>
    </section>
  )
}

export default FlipBook
