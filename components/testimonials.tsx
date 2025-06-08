"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "James Mitchell",
    title: "Software Engineer, California",
    quote:
      "I started with just $50 and now I'm earning $200+ weekly from my electric vehicle investments. AssetInvest has completely changed my financial outlook.",
    avatar: "/images/testimonial-james.jpg",
    rating: 5,
    weeklyEarnings: "$247",
  },
  {
    id: 2,
    name: "Sarah Thompson",
    title: "Marketing Manager, Texas",
    quote:
      "The transparency and consistent returns are incredible. I love seeing my solar panel investments generate clean energy and clean profits every week.",
    avatar: "/images/testimonial-sarah.jpg", // Changed from testimonial-michael.jpg
    rating: 5,
    weeklyEarnings: "$189",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    title: "Teacher, New York",
    quote:
      "As an educator, I needed a simple way to grow my savings. AssetInvest's agricultural equipment investments have been perfect for my budget and goals.",
    avatar: "/images/testimonial-michael.jpg",
    rating: 5,
    weeklyEarnings: "$156",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const nextTestimonial = () => {
    setAutoplay(false)
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setAutoplay(false)
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container px-6">
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
              Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">REAL INVESTORS, REAL RETURNS</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of Americans earning consistent weekly returns
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none bg-white shadow-2xl rounded-3xl overflow-hidden">
            <div className="p-8 md:p-12 relative">
              <div className="absolute top-6 left-6 text-blue-200 opacity-30">
                <Quote size={60} />
              </div>

              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex flex-col md:flex-row items-center gap-8"
                >
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-md -z-10 opacity-30" />
                      <div className="relative h-24 w-24 md:h-32 md:w-32 overflow-hidden rounded-full border-4 border-white shadow-lg">
                        <Image
                          src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                          alt={testimonials[currentIndex].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Weekly Earnings Badge */}
                    <div className="mt-4 text-center">
                      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        Weekly: {testimonials[currentIndex].weeklyEarnings}
                      </div>
                    </div>

                    <div className="flex mt-3 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonials[currentIndex].rating ? "text-yellow-400" : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <p className="text-lg md:text-xl italic mb-6 text-gray-700">{testimonials[currentIndex].quote}</p>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">{testimonials[currentIndex].name}</h4>
                      <p className="text-gray-500">{testimonials[currentIndex].title}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Card>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-200 shadow-sm hover:bg-blue-50 hover:text-blue-600"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-200 shadow-sm hover:bg-blue-50 hover:text-blue-600"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-8 bg-blue-600" : "w-2 bg-gray-300"
                }`}
                onClick={() => {
                  setAutoplay(false)
                  setDirection(i > currentIndex ? 1 : -1)
                  setCurrentIndex(i)
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
