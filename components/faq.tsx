"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How much money do I need to start investing?",
    answer:
      "You can start investing with AssetInvest with just $10 USD (₵158.50 GHS). Our platform is designed to be accessible to investors of all levels, making real asset investment available to everyone.",
  },
  {
    question: "How do I earn returns from physical assets?",
    answer:
      "When you invest in an asset, you own a share of that asset's revenue stream. For example, electric vehicles generate income through ride-sharing, delivery vehicles earn from logistics services, and solar panels generate revenue from electricity sales. You receive your proportional share of these earnings weekly.",
  },
  {
    question: "What are the fees for using AssetInvest?",
    answer:
      "AssetInvest charges a transparent 5% management fee on your weekly returns only. There are no upfront fees, hidden charges, or account maintenance costs. You only pay when you earn.",
  },
  {
    question: "How often do I receive returns?",
    answer:
      "Returns are calculated and distributed weekly, every Friday. You can expect to see your earnings in your account within 24-48 hours of the distribution date.",
  },
  {
    question: "Can I withdraw my investment anytime?",
    answer:
      "Yes, you can request withdrawal of your principal investment at any time. Withdrawals are processed within 3-5 business days. However, we recommend staying invested for at least 4 weeks to maximize your returns.",
  },
  {
    question: "Is my investment safe and insured?",
    answer:
      "All physical assets are fully insured and tracked with GPS technology. AssetInvest is registered with the SEC and follows strict compliance protocols. Your investments are protected by comprehensive insurance coverage and our risk management systems.",
  },
]

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="container px-6">
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
              Got Questions?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about investing in real assets
            </p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div
                className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 ${
                  activeIndex === i ? "shadow-lg border-blue-200" : ""
                }`}
              >
                <button
                  className="flex items-center justify-between w-full p-6 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(i)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <div
                    className={`flex-shrink-0 p-1 rounded-full transition-all duration-300 ${
                      activeIndex === i ? "rotate-180 bg-blue-100" : "bg-gray-100"
                    }`}
                  >
                    <ChevronDown className={`h-5 w-5 ${activeIndex === i ? "text-blue-600" : "text-gray-500"}`} />
                  </div>
                </button>

                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6">
                        <div className="h-px w-full bg-gray-100 mb-4" />
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
