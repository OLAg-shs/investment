"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BarChart3, Shield, Clock, Smartphone, PiggyBank, Users } from "lucide-react"

export default function Features() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const features = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Personalized Portfolios",
      description: "Custom investment strategies tailored to your financial goals and risk tolerance.",
      color: "from-teal-500 to-emerald-500",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Advanced Security",
      description: "Bank-level encryption and security protocols to keep your investments and data safe.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Access to expert support whenever you need assistance with your investments.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Access",
      description: "Manage your investments anytime, anywhere with our user-friendly mobile app.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <PiggyBank className="h-6 w-6" />,
      title: "Low Fees",
      description: "Transparent, competitive fee structure to maximize your investment returns.",
      color: "from-red-500 to-rose-500",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Insights",
      description: "Learn from and connect with other investors to enhance your investment strategy.",
      color: "from-cyan-500 to-blue-500",
    },
  ]

  return (
    <section id="investment-plans" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 -z-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent" />

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              What We Offer
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features & Benefits</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Our platform offers everything you need to build and manage your investment portfolio with confidence.
            </p>
          </motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-white rounded-3xl shadow-lg border border-slate-100 -z-10 transition-all duration-300 group-hover:shadow-xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              <div className="p-8">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-white mb-5 shadow-md`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>

                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} rounded-full w-0 group-hover:w-full transition-all duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
