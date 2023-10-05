import { Dispatch, SetStateAction } from 'react'

interface PageProps {
  menuIsActive: boolean
  setMenuIsActive: Dispatch<SetStateAction<boolean>>
}

export default function SampleHeader({
  menuIsActive,
  setMenuIsActive,
}: PageProps) {
  return (
    <div className=" fixed flex w-full justify-end z-40 top-0 p-10">
      <div
        onClick={() => {
          setMenuIsActive(!menuIsActive)
        }}
        className={` berger relative flex flex-col cursor-pointer ${
          menuIsActive ? 'burgerActive' : ''
        }`}
      ></div>
    </div>
  )
}

// Global CSS
// .berger::before, .berger::after{
//             display: block;
//             content: "";
//             width: 30px;
//             height: 2px;
//             background-color: black;
//             position: relative;
//             transition: transform 0.3s;
//         }
//         .berger::after{
//             top: -5px;
//         }

//         .berger::before{
//             top: 5px;
//         }
//     .burgerActive::after{
//             transform: rotate(45deg);
//             top: -1px;
//         }
//         .burgerActive::before{
//             transform: rotate(-45deg);
//             top: 0px;
//         }
