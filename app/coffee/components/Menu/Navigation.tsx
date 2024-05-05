'use client'
import { coffeeTypes } from '../constant'
import React from 'react'
import NavButton from './NavButton'
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size/throttled'
// import ResponsiveComponent from "../ResponsiveComponent";
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList } from './tabs/tabs'
import Image from 'next/image'
import { TabsTrigger } from '@radix-ui/react-tabs'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const Navigation = () => {
  const angleIncrement = 360 / coffeeTypes.length
  const [width, height] = useWindowSize()
  const size: number | undefined = width

  const isLarge = size >= 1024
  const isMedium = size >= 768

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <Tabs defaultValue={'latte'}>
        {/* <NavButton key={btn.label} x={x} y={y} {...btn} /> */}
        <TabsList>
          {coffeeTypes.map((btn, index) => {
            const angleRad = (index * angleIncrement * Math.PI) / 180
            const radius = isLarge
              ? 'calc(20vw - 1rem)'
              : isMedium
              ? 'calc(30vw - 1rem)'
              : 'calc(40vw - 1rem)'
            const x = `calc(${radius}*${Math.cos(angleRad)})`
            const y = `calc(${radius}*${Math.sin(angleRad)})`
            return (
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group"
              >
                <div
                  className="absolute cursor-pointer z-50"
                  style={{ transform: `translate(${x}, ${y})` }}
                >
                  <TabsTrigger
                    // variants={item}
                    // href={'#'}
                    // target={newTab ? '_blank' : '_self'}
                    className="text-foreground  rounded-full flex items-center justify-center custom-bg"
                    value={btn.label}
                    // aria-label={btn.label}
                    // id={btn.label}
                    // asChild
                    // prefetch={false}
                    // scroll={false}
                  >
                    <span className="relative  w-32 h-32 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent">
                      {/* {getIcon(icon)} */}
                      <Image src={btn.icon} width={150} height={150} alt="" />

                      <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

                      <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
                        {btn.label}
                      </span>
                    </span>
                  </TabsTrigger>
                </div>
              </motion.div>
            )
          })}
        </TabsList>

        {coffeeTypes.map((btn, index) => {
          return (
            <TabsContent
              value={btn.label}
              className="absolute flex justify-center items-center w-52 h-52 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 "
            >
              <Image
                alt=""
                className=""
                width={200}
                height={200}
                src={btn.src}
              />
            </TabsContent>
          )
        })}
      </Tabs>
    </div>
  )
}

export default Navigation
