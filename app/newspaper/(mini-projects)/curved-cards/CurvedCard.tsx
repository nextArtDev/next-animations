import { FC } from 'react'

interface CurvedCardProps {}
//Without Media query, after 09:00
const CurvedCard: FC<CurvedCardProps> = ({}) => {
  return (
    <section className="card-container flex justify-center items-center ">
      <div className="card relative ">
        <div
          className="card-content z-20 relative bg-white w-[450px] rounded-[10px] overflow-hidden "
          style={{ boxShadow: ' 0 5px 25px rgba(2,2,2,0.25)' }}
        >
          <div className="card-img relative w-[450px] h-auto flex justify-center items-center ">
            <img
              className="w-full h-full "
              src="/projects/carousel.png"
              alt=""
            />
          </div>
          <div className="card-text">
            <p className="m-4 text-base text-black ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              alias facere eligendi ea aliquid culpa voluptatem porro eos, quos
              asperiores eveniet quas natus cum quia quidem debitis sunt
              necessitatibus sit?
            </p>
          </div>
        </div>
        <div className="curved-drop-shadow before:z-10 before:absolute before:bg-gradient-to-l before:from-50% before:from-[#222] before:to-[#ccc] before:w-[60%] before:h-[60%] before:bottom-4 before:left-[18px] before:-skew-y-[8.5deg] before:origin-right before:rounded-[10px] before:blur-[5px] before:opacity-70 after:z-10 after:absolute after:bg-gradient-to-r after:from-50% after:from-[#222] after:to-[#ccc] after:w-[60%] after:h-[60%] after:bottom-4 after:right-[18px] after:skew-y-[8.5deg] after:origin-left after:rounded-[10px] after:blur-[5px] after:opacity-70 "></div>
      </div>
    </section>
  )
}

export default CurvedCard
