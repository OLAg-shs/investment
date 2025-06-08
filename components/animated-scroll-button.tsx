"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function AnimatedScrollButton() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const sections = [
    { id: "about-us", name: "About Us" },
    { id: "asset-categories", name: "Our Values" },
    { id: "how-it-works", name: "How It Works" },
    { id: "faqs", name: "FAQs" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      const documentHeight = document.documentElement.scrollHeight
      const windowHeight = window.innerHeight

      // Hide button when near bottom of page
      if (scrollPosition > documentHeight - windowHeight - 200) {
        setIsVisible(false)
        return
      } else {
        setIsVisible(true)
      }

      // Find current section
      let newCurrentSection = 0
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            newCurrentSection = index
          }
        }
      })

      setCurrentSection(newCurrentSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToNextSection = () => {
    const nextSectionIndex = Math.min(currentSection + 1, sections.length - 1)
    const nextSection = document.getElementById(sections[nextSectionIndex].id)

    if (nextSection) {
      const headerHeight = 100
      const sectionTop = nextSection.getBoundingClientRect().top + window.pageYOffset - headerHeight

      // Enhanced smooth scroll
      const startPosition = window.pageYOffset
      const distance = sectionTop - startPosition
      let startTime: number | null = null

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
      }

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / 1200, 1)
        const ease = easeInOutCubic(progress)

        window.scrollTo(0, startPosition + distance * ease)

        if (timeElapsed < 1200) {
          requestAnimationFrame(animation)
        }
      }

      requestAnimationFrame(animation)
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <motion.button
            onClick={scrollToNextSection}
            className="group relative bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{ cursor: "pointer" }}
          >
            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />

            {/* Pulsing ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-300"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Icon with bounce animation */}
            <motion.div
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="h-6 w-6" />
            </motion.div>

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                Next: {sections[Math.min(currentSection + 1, sections.length - 1)]?.name}
                <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
              </div>
            </div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
