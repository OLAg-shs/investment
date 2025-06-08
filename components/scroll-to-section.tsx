"use client"

import { useEffect } from "react"

export default function ScrollToSection() {
  useEffect(() => {
    // Enhanced smooth scrolling with easing animation
    const smoothScrollTo = (targetPosition: number, duration = 1200) => {
      const startPosition = window.pageYOffset
      const distance = targetPosition - startPosition
      let startTime: number | null = null

      // Easing function for smooth animation
      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
      }

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / duration, 1)
        const ease = easeInOutCubic(progress)

        window.scrollTo(0, startPosition + distance * ease)

        if (timeElapsed < duration) {
          requestAnimationFrame(animation)
        }
      }

      requestAnimationFrame(animation)
    }

    // Function to handle smooth scrolling with offset for fixed header
    const handleScrollToSection = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement

      // Check if the clicked element is an anchor with a hash
      if (target.tagName === "A" && target.hash) {
        const section = document.querySelector(target.hash)

        if (section) {
          e.preventDefault()

          // Add visual feedback - cursor animation
          target.style.transform = "scale(0.95)"
          target.style.transition = "transform 0.1s ease"

          setTimeout(() => {
            target.style.transform = "scale(1)"
          }, 100)

          // Get the height of the fixed header
          const headerHeight = 100

          // Calculate the position to scroll to
          const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight

          // Use enhanced smooth scroll
          smoothScrollTo(sectionTop, 1500)

          // Update URL hash without scrolling
          setTimeout(() => {
            history.pushState(null, "", target.hash)
          }, 100)
        }
      }
    }

    // Add event listener to document
    document.addEventListener("click", handleScrollToSection)

    // Clean up event listener
    return () => {
      document.removeEventListener("click", handleScrollToSection)
    }
  }, [])

  return null
}
