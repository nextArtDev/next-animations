// 'use client'
// import { FC, createRef, useEffect, useRef } from 'react'
// import image1 from '../../../public/parallax-images/1.jpg'
// import image2 from '../../../public/parallax-images/2.jpg'
// import image3 from '../../../public/parallax-images/3.jpg'
// import image4 from '../../../public/parallax-images/4.jpg'
// import image5 from '../../../public/parallax-images/5.jpg'
// import image6 from '../../../public/parallax-images/6.jpg'
// import image7 from '../../../public/parallax-images/7.jpg'
// import image8 from '../../../public/parallax-images/8.jpg'
// import image9 from '../../../public/parallax-images/9.jpg'
// import Image from 'next/image'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/all'
// const images = [
//   image1,
//   image2,
//   image3,
//   image4,
//   image5,
//   image6,
//   image7,
//   image8,
//   image9,
// ]
// interface ImageSliderProps {}

// const ImageSlider: FC<ImageSliderProps> = ({}) => {
//   const sectionHeight =
//     (document.body.scrollHeight - window.innerHeight) / images.length

//   // const slideRef = useRef()
//   const slideRefs = []
//   const slideImgRefs = useRef(null)
//   console.log(slideRefs)

//   useEffect(() => {
//     gsap.registerPlugin()
//     images.forEach((slide, i) => {
//       gsap.to('.slide', {
//         zIndex: (progress) => {
//           return progress < 0.5 ? 1 : 5 - i
//         },
//         scrollTrigger: {
//           start: sectionHeight * i + ' top',
//           end: sectionHeight * (i + 1) + ' top',
//           scrub: 1,
//         },
//       })
//       gsap.fromTo(
//         '.slide',
//         { scale: i === 0 ? 1 : 0 },
//         {
//           scale: 1,
//           scrollTrigger: {
//             start: sectionHeight * i + ' top',
//             end: sectionHeight * (i + 1) + ' top',
//             scrub: 1,
//           },
//         }
//       )
//       if (i !== 0) {
//         gsap.fromTo(
//           slideImgRefs?.current,
//           { scale: 2 },
//           {
//             scale: 1,
//             scrollTrigger: {
//               start: sectionHeight * i + ' top',
//               end: sectionHeight * (i + 1) + ' top',
//               scrub: 1,
//             },
//           }
//         )
//       }
//     })
//   }, [])
//   return (
//     <section className="w-screen h-[500vh]">
//       <div className="slider fixed inset-0 top-0 left-0 w-screen h-screen z-[1] [&:not(#slide-1)]:origin-center [&:not(#slide-1)]:z-[2]">
//         {images.map((image, index) => {
//           const slideRef = useRef(null) // Create a ref for each slide
//           slideRefs.push(slideRef) // Push the ref into the array
//           return (
//             <div
//               ref={slideRef}
//               className="slide absolute to-0 left-0 w-full h-full overflow-hidden "
//               key={index}
//               id={`slide-${index}`}
//             >
//               <Image
//                 ref={slideImgRefs}
//                 src={image.src}
//                 className="side-img absolute top-0 left-0 w-full object-cover z-0 "
//                 //   width={240}
//                 //   height={240}
//                 fill
//                 alt=" "
//               />
//             </div>
//           )
//         })}
//       </div>
//     </section>
//   )
// }

// export default ImageSlider
