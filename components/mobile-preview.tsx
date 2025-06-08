"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function MobilePreview() {
  const phoneRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-6">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              Mobile Experience
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">INVEST ON THE GO</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manage your asset investments anytime, anywhere with our mobile-optimized platform
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            {/* Phone Frame */}
            <div
              ref={phoneRef}
              className="relative w-[300px] h-[600px] bg-black rounded-[40px] p-3 shadow-2xl border-8 border-black overflow-hidden"
            >
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl z-20"></div>

              {/* Phone Screen */}
              <div className="relative w-full h-full bg-white rounded-[30px] overflow-hidden">
                {isLoading ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white">
                    <div className="w-12 h-12 border-4 border-t-transparent border-blue-600 rounded-full animate-spin mb-4"></div>
                    <p className="text-sm text-gray-500">Loading mobile preview...</p>
                  </div>
                ) : (
                  <iframe ref={iframeRef} src="/" className="w-full h-full border-0" title="Mobile Preview" />
                )}
              </div>

              {/* Home Button */}
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-400 rounded-full"></div>
            </div>

            {/* Phone Shadow */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[260px] h-[20px] bg-black/20 rounded-full blur-md"></div>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
            🔧 Under Maintenance
          </div>
          <p className="text-gray-500 mb-6">Mobile app is currently under maintenance</p>
          <p className="text-sm text-gray-400">
            We're working hard to bring you the best mobile experience. Stay tuned!
          </p>
        </div>
      </div>
    </section>
  )
}
