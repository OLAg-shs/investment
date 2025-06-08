"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full backdrop-blur-md transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-lg" : "bg-white/80"
      }`}
    >
      <div className="container flex h-20 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2,
              }}
              className="flex items-center"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <span className="text-2xl font-bold text-blue-600">AssetInvest</span>
            </motion.div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { text: "About us", href: "#about-us" },
            { text: "Our values", href: "#asset-categories" },
            { text: "How it works", href: "#how-it-works" },
            { text: "FAQs", href: "#faqs" },
          ].map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 relative group cursor-pointer transform hover:scale-105"
                style={{
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.cursor = "pointer"
                }}
              >
                {item.text}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 group-hover:w-full"></span>
                <span className="absolute inset-0 rounded-lg bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-2 text-sm font-medium">
            Get Started →
          </Button>
        </motion.div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md border-b shadow-lg"
        >
          <div className="container py-6 flex flex-col gap-4 px-6">
            {[
              { text: "About us", href: "#about-us" },
              { text: "Our values", href: "#asset-categories" },
              { text: "How it works", href: "#how-it-works" },
              { text: "FAQs", href: "#faqs" },
            ].map((item) => (
              <Link
                key={item.text}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:translate-x-2 py-2 px-3 rounded-lg hover:bg-blue-50"
                onClick={toggleMenu}
                style={{
                  cursor: "pointer",
                }}
              >
                {item.text}
              </Link>
            ))}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full rounded-full">Get Started →</Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
