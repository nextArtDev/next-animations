import React, { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const intervalRef = useRef(null)

  const slides = [
    {
      id: 1,
      title: 'Intel® Core™ Ultra Processors',
      subtitle: 'AI-Enabled PCs That Drive Value',
      description:
        "Accelerated performance and better battery life. See what's possible now.",
      ctaText: 'Learn More',
      bgColor: 'from-blue-900 to-blue-600',
      accentColor: 'text-blue-300',
    },
    {
      id: 2,
      title: 'Intel® Arc™ Graphics',
      subtitle: 'Next-Gen Visual Computing',
      description:
        'Experience breakthrough performance and efficiency for gaming and creation.',
      ctaText: 'Explore Arc',
      bgColor: 'from-purple-900 to-purple-600',
      accentColor: 'text-purple-300',
    },
    {
      id: 3,
      title: 'Intel® Evo™ Platform',
      subtitle: 'Premium Laptop Experience',
      description:
        'Verified for exceptional performance, responsiveness, and battery life.',
      ctaText: 'Discover Evo',
      bgColor: 'from-slate-900 to-slate-600',
      accentColor: 'text-slate-300',
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(nextSlide, 5000)
    }
    return () => clearInterval(intervalRef.current)
  }, [isPlaying])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => Math.abs(offset) * velocity

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={1}>
        <motion.div
          key={currentSlide}
          custom={1}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)
            if (swipe < -swipeConfidenceThreshold) {
              nextSlide()
            } else if (swipe > swipeConfidenceThreshold) {
              prevSlide()
            }
          }}
          className="absolute inset-0"
        >
          <div
            className={cn(
              'relative h-full bg-gradient-to-br',
              slides[currentSlide].bgColor,
              'flex items-center justify-center'
            )}
          >
            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                  {slides[currentSlide].title}
                </h1>

                <h2
                  className={cn(
                    'text-2xl lg:text-3xl font-semibold mb-4',
                    slides[currentSlide].accentColor
                  )}
                >
                  {slides[currentSlide].subtitle}
                </h2>

                <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto text-gray-200">
                  {slides[currentSlide].description}
                </p>

                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  {slides[currentSlide].ctaText}
                </Button>
              </motion.div>
            </div>

            {/* Intel Logo Watermark */}
            <div className="absolute bottom-8 right-8 opacity-20">
              <div className="text-6xl font-bold text-white">intel</div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-20">
        {/* Dots Indicator */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                'w-3 h-3 rounded-full transition-all duration-300',
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              )}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-white" />
          ) : (
            <Play className="w-4 h-4 text-white" />
          )}
        </button>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 z-20"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 z-20"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <motion.div
          key={currentSlide}
          className="h-full bg-blue-500"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 5, ease: 'linear' }}
        />
      </div>
    </div>
  )
}

export default HeroCarousel
