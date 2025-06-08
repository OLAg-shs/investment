"use client"

import { motion } from "framer-motion"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

export default function InvestmentStats() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const stats = [
    { value: 2.8, label: "Million", sublabel: "Total Assets Under Management", prefix: "$" },
    { value: 15000, label: "+", sublabel: "Active Investors Worldwide", prefix: "" },
    { value: 12.4, label: "%", sublabel: "Average Weekly Return", prefix: "" },
    { value: 500, label: "+", sublabel: "Assets Available for Investment", prefix: "" },
  ]

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="container px-6">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex items-baseline">
                <span className="text-3xl md:text-4xl font-bold text-blue-600">
                  {stat.prefix}
                  {inView ? <CountUp end={stat.value} duration={2.5} decimals={stat.value % 1 !== 0 ? 1 : 0} /> : "0"}
                </span>
                <span className="text-xl md:text-2xl font-bold text-blue-600 ml-1">{stat.label}</span>
              </div>
              <p className="text-gray-500 mt-2 text-sm md:text-base">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
