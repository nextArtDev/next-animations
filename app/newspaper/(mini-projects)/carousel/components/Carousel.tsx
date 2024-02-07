'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './carousel.scss'

const panelData = [
  {
    id: 1,
    title: 'French Polynesia',
    imageUrl:
      'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg',

    imageUrlPrime:
      'https://images.pexels.com/photos/2088161/pexels-photo-2088161.jpeg',
  },
  {
    id: 2,
    title: 'Maldives',
    imageUrl:
      'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg',

    imageUrlPrime:
      'https://images.pexels.com/photos/2088161/pexels-photo-2088161.jpeg',
  },
  {
    id: 3,
    title: 'Cambodia',
    imageUrl:
      'https://images.pexels.com/photos/12001664/pexels-photo-12001664.jpeg',

    imageUrlPrime:
      'https://images.pexels.com/photos/2088161/pexels-photo-2088161.jpeg',
  },
  {
    id: 4,
    title: 'Hawaii',
    imageUrl:
      'https://images.pexels.com/photos/3948134/pexels-photo-3948134.jpeg',

    imageUrlPrime:
      'https://images.pexels.com/photos/2088161/pexels-photo-2088161.jpeg',
  },
  {
    id: 5,
    title: 'Bali',
    imageUrl:
      'https://images.pexels.com/photos/2088161/pexels-photo-2088161.jpeg',

    imageUrlPrime: '',
  },
]

const Carousel: React.FC = () => {
  const [activePanelId, setActivePanelId] = useState<number>(1)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Function to update the active panel
  const updateActivePanel = () => {
    setActivePanelId((prevActivePanelId) => {
      const nextPanelId =
        prevActivePanelId >= panelData.length ? 1 : prevActivePanelId + 1
      return nextPanelId
    })
  }

  // Function to start the automatic cycling of the carousel
  const startInterval = () => {
    intervalRef.current = setInterval(updateActivePanel, 2000)
  }

  useEffect(() => {
    startInterval()
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const handleClick = (id: number) => {
    // Clear the interval when a panel is clicked
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    // Set the clicked panel as active
    setActivePanelId(id)
    // Resume the automatic cycling after 3 seconds
    setTimeout(startInterval, 3000)
  }

  return (
    <div className="container">
      {panelData.map((panel) => (
        <motion.div
          key={panel.id}
          className="panel"
          style={{
            backgroundImage: `url(${
              activePanelId === panel.id ? panel.imageUrlPrime : panel.imageUrl
            })`,
          }}
          onClick={() => handleClick(panel.id)}
          animate={{
            flex: activePanelId === panel.id ? 5 : 1,
          }}
          transition={{
            flex: {
              duration: 0.2,
              ease: 'easeInOut',
            },
          }}
        >
          <h3>{panel.title}</h3>
        </motion.div>
      ))}
    </div>
  )
}

//   const handleClick = (id: number) => {
//     // Do something when the panel is clicked
//     // For example, you could set the active panel or handle navigation
//     console.log(`Panel with id ${id} was clicked`)
//     // Set the clicked panel as active
//     setActivePanelId(id)
//   }

//   return (
//     <section className="body9">
//       <div className="container">
//         {panelData.map((panel) => (
//           <motion.div
//             key={panel.id}
//             className="panel"
//             onClick={() => handleClick(panel.id)}
//             style={{
//               backgroundImage: `url(${
//                 activePanelId === panel.id
//                   ? panel.imageUrl
//                   : panel.imageUrlPrime
//               })`,
//             }}
//             animate={{
//               flex: activePanelId === panel.id ? 5 : 1,
//             }}
//             transition={{
//               flex: {
//                 duration: 0.2,
//                 ease: 'easeInOut',
//               },
//               backgroundImage: {
//                 duration: 0.2, // You may adjust the duration for the image swap animation
//                 ease: 'easeInOut',
//               },
//             }}
//           >
//             <h3>{panel.title}</h3>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   )
// }

export default Carousel
