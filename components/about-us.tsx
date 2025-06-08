"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AboutUs() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section id="about-us" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-teal-100/30 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full blur-3xl -z-10" />

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
              About InvestWise
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Founded by a team of financial experts and tech innovators, InvestWise was created to democratize
              investing. We believe everyone deserves access to professional-grade investment tools and strategies.
            </p>
          </motion.div>
        </div>

        <div ref={ref} className="grid gap-12 md:grid-cols-3 mt-12">
          {[
            {
              title: "Expert Team",
              description: "Our team combines decades of financial expertise with cutting-edge technology skills.",
              image: "/images/financial-team.jpg",
              color: "from-teal-400 to-blue-500",
            },
            {
              title: "Transparent Approach",
              description: "We believe in full transparency with our fees, strategies, and performance metrics.",
              image: "/images/transparency-handshake.jpg",
              color: "from-blue-400 to-purple-500",
            },
            {
              title: "Client Success",
              description: "Our clients' financial success is our primary measure of achievement.",
              image: "/images/client-success.jpg",
              color: "from-purple-400 to-pink-500",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex flex-col items-center space-y-4 group"
            >
              <div className="relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10`}
                />
                <div className="relative h-64 w-64 overflow-hidden rounded-3xl shadow-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div
                  className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-6 w-24 bg-gradient-to-r ${item.color} rounded-full blur-lg opacity-60`}
                />
              </div>
              <div className="space-y-2 text-center max-w-xs">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
