"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const heroSlides = [
  {
    title: "AMERICA'S PREMIER ASSET INVESTMENT PLATFORM",
    subtitle: "Invest Smart, Earn Weekly Returns, and Build Wealth Through Tangible Assets",
    image: "/images/hero-slide1.jpg",
    cta: "Start Investing Today",
  },
  {
    title: "DIVERSIFY WITH REAL WORLD ASSETS",
    subtitle: "From Electric Vehicles to Agricultural Equipment - Your Portfolio, Your Choice",
    image: "/images/hero-slide2.jpg",
    cta: "Explore Assets",
  },
  {
    title: "WEEKLY RETURNS ON YOUR INVESTMENT",
    subtitle: "Watch Your Money Grow with Consistent 8-15% Weekly Returns",
    image: "/images/hero-slide3.jpg",
    cta: "Calculate Returns",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container px-6 py-12">
        {/* Hero Content */}
        <div className="text-center mb-8">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-blue-600 leading-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>

            {/* Investment Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500 mt-6">
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border">
                <span className="font-medium">Minimum Investment:</span> $10 USD (₵158.50 GHS)
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border">
                <span className="font-medium">Expected Returns:</span> 8-15% Weekly
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border">
                <span className="font-medium">Investment Period:</span> 1 Week Minimum
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Image Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src={heroSlides[currentSlide].image || "/placeholder.svg"}
              alt="Investment Assets"
              width={1200}
              height={600}
              className="w-full h-[400px] md:h-[600px] object-cover"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* CTA Button on Image */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg">
                {heroSlides[currentSlide].cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "w-8 bg-blue-600" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
