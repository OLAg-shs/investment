"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const steps = [
  {
    number: "01",
    title: "Create Your Free Account",
    description: "Sign up in minutes with just your email address and basic information. No paperwork required.",
    image: "/images/step1-account.jpg",
    color: "from-teal-400 to-teal-600",
  },
  {
    number: "02",
    title: "Complete Your Risk Assessment",
    description:
      "Answer a few questions about your financial goals and risk tolerance to help us build your personalized portfolio.",
    image: "/images/step2-browse.jpg",
    color: "from-blue-400 to-blue-600",
  },
  {
    number: "03",
    title: "Fund Your Account",
    description:
      "Link your bank account securely and transfer funds to start investing. You can start with as little as $100.",
    image: "/images/step3-invest.jpg",
    color: "from-purple-400 to-purple-600",
  },
  {
    number: "04",
    title: "Start Investing",
    description:
      "Watch your portfolio grow as our expert algorithms optimize your investments based on market conditions and your goals.",
    image: "/images/step4-returns.jpg",
    color: "from-pink-400 to-pink-600",
  },
]

export default function HowItWorks() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-6">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              Simple Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">HOW IT WORKS</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start earning from real assets in just 4 simple steps
            </p>
          </motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative text-center group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {step.number}
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <img src={step.image || "/placeholder.svg"} alt={step.title} className="h-8 w-8 object-contain" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {/* Connector Line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
