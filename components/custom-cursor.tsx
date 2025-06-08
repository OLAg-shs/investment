"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Check for different types of interactive elements
      const isButton = target.closest('button, [role="button"]')
      const isLink = target.closest("a")
      const isInput = target.closest("input, textarea, select")
      const isNavLink = target.closest("nav a")

      if (isNavLink) {
        setCursorVariant("nav")
        setIsHovering(true)
      } else if (isButton) {
        setCursorVariant("button")
        setIsHovering(true)
      } else if (isLink) {
        setCursorVariant("link")
        setIsHovering(true)
      } else if (isInput) {
        setCursorVariant("input")
        setIsHovering(true)
      } else {
        setCursorVariant("default")
        setIsHovering(false)
      }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", handleMouseOver)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  const getCursorStyles = () => {
    switch (cursorVariant) {
      case "nav":
        return {
          main: "bg-gradient-to-r from-blue-500 to-blue-600",
          trail: "border-blue-400 bg-blue-50",
          scale: 1.2,
          trailScale: 1.5,
        }
      case "button":
        return {
          main: "bg-gradient-to-r from-blue-600 to-blue-700",
          trail: "border-blue-500 bg-blue-100",
          scale: 1.5,
          trailScale: 2,
        }
      case "link":
        return {
          main: "bg-gradient-to-r from-teal-500 to-blue-500",
          trail: "border-teal-400 bg-teal-50",
          scale: 1.3,
          trailScale: 1.8,
        }
      case "input":
        return {
          main: "bg-gradient-to-r from-gray-600 to-gray-700",
          trail: "border-gray-400 bg-gray-50",
          scale: 0.8,
          trailScale: 1.2,
        }
      default:
        return {
          main: "bg-gradient-to-r from-blue-400 to-blue-500",
          trail: "border-blue-300 bg-blue-25",
          scale: 1,
          trailScale: 1,
        }
    }
  }

  const styles = getCursorStyles()

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className={`fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] ${styles.main} shadow-lg`}
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isClicking ? 0.6 : styles.scale,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 35,
          mass: 0.3,
        }}
      />

      {/* Trailing cursor ring */}
      <motion.div
        className={`fixed top-0 left-0 w-8 h-8 border-2 rounded-full pointer-events-none z-[9998] ${styles.trail}`}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isClicking ? 1.4 : isHovering ? styles.trailScale : 1,
          opacity: isHovering ? 0.8 : 0.4,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.2,
        }}
      />

      {/* Glow effect for special interactions */}
      {(cursorVariant === "button" || cursorVariant === "nav") && (
        <motion.div
          className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[9997] bg-blue-400 opacity-20 blur-md"
          animate={{
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            scale: isHovering ? 1.5 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
        />
      )}

      {/* Click ripple effect */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 w-16 h-16 border border-blue-400 rounded-full pointer-events-none z-[9996]"
          initial={{
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            scale: 0,
            opacity: 0.8,
          }}
          animate={{
            scale: 2,
            opacity: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        />
      )}
    </>
  )
}
