import { Dispatch, FC, SetStateAction } from 'react'

interface DescriptionsProps {
  data: {
    title: string
    description: string
    speed: number
  }[]
  selectedProject: number | null
}

const Descriptions: FC<DescriptionsProps> = ({ data, selectedProject }) => {
  const crop = (string: string, maxLength: number) => {
    return string.substring(0, maxLength)
  }

  return (
    <div className="absolute top-[3px] h-full w-full z-20 pointer-events-none">
      {data.map((project, i) => {
        const { title, description } = project
        return (
          <div
            key={i}
            className="threeEarthDescription bg-[#ec4e39] flex justify-between items-center pl-[10%] pr-[10%] "
            style={{
              clipPath:
                selectedProject == i ? 'inset(0 0 0)' : 'inset(50% 0 50%',
            }}
          >
            <p className="threeEarthDescription-p">{crop(title, 9)}</p>
            <p className="threeEarthDescription-p">{description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Descriptions

// Global CSS
// .threeEarthDescription {
//   clip-path: inset(50% 0 50%);
//   transition: clip-path 0.4s;
// }

// .threeEarthDescription-p:nth-of-type(1) {
//   color: #010101;
//   text-transform: uppercase;
//   font-weight: 700;
//   font-size: 8vw;
//   line-height: 7.5vw;
//   margin: 0px;
//   position: relative;
//   z-index: 1;
// }
// .threeEarthDescription-p:nth-of-type(2){
//                 width: 40%;
//                 font-size: 1vw;
//                 font-weight: 700;
//             }
