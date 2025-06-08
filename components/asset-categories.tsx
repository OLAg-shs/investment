"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Car, Bike, Truck, Leaf, Building, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const assetCategories = [
  {
    icon: <Car className="h-8 w-8" />,
    title: "Electric Vehicles",
    description: "Invest in Tesla Model 3s and other EVs used in ride-sharing services",
    minInvestment: "$10",
    weeklyReturn: "12-15%",
    image: "/images/electric-vehicle-tesla.jpg",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: <Bike className="h-8 w-8" />,
    title: "E-Bikes & Scooters",
    description: "Fund electric bikes and scooters for urban mobility solutions",
    minInvestment: "$10",
    weeklyReturn: "10-14%",
    image: "/images/e-bike-urban.jpg",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Delivery Vehicles",
    description: "Commercial vans and trucks for logistics and delivery services",
    minInvestment: "$10",
    weeklyReturn: "8-12%",
    image: "/images/delivery-van.jpg",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "Agricultural Assets",
    description: "Tractors, harvesters, and farming equipment for agricultural ventures",
    minInvestment: "$10",
    weeklyReturn: "9-13%",
    image: "/images/agricultural-tractor.jpg",
    color: "from-green-600 to-lime-600",
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: "Construction Equipment",
    description: "Heavy machinery and construction tools for building projects",
    minInvestment: "$10",
    weeklyReturn: "11-15%",
    image: "/images/construction-equipment.jpg",
    color: "from-gray-600 to-slate-700",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Solar Panels",
    description: "Renewable energy equipment generating clean electricity",
    minInvestment: "$10",
    weeklyReturn: "8-11%",
    image: "/images/solar-panels.jpg",
    color: "from-yellow-500 to-orange-500",
  },
]

export default function AssetCategories() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="asset-categories" className="py-20 bg-white">
      <div className="container px-6">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              Investment Categories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">A LITTLE ABOUT US</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              AssetInvest connects American investors with profitable real-world assets. Our platform allows you to own
              shares in vehicles, equipment, and infrastructure that generate consistent weekly returns through rental
              and operational income.
            </p>
          </motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assetCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-10 transition-opacity duration-300`}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} text-white mb-4 shadow-md`}
                >
                  {category.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>

                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Min. Investment</p>
                    <p className="font-bold text-gray-900">
                      {category.minInvestment} <span className="text-sm text-gray-500">(₵158.50)</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Weekly Return</p>
                    <p className="font-bold text-green-600">{category.weeklyReturn}</p>
                  </div>
                </div>

                <Button className={`w-full bg-gradient-to-r ${category.color} hover:opacity-90 text-white rounded-xl`}>
                  Invest Now
                </Button>
              </div>

              {/* Hover Effect */}
              <div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${category.color} w-0 group-hover:w-full transition-all duration-500`}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg">
              View All Investment Opportunities
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
