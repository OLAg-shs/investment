"use client"

import { useEffect, useState } from "react"
import { TrendingUp, TrendingDown } from "lucide-react"

const marketData = [
  { symbol: "USD/GHS", name: "US Dollar to Ghana Cedi", price: 15.85, change: 0.2 },
  { symbol: "BTC", name: "Bitcoin", price: 42568.3, change: 2.4 },
  { symbol: "ETH", name: "Ethereum", price: 2341.15, change: 1.8 },
  { symbol: "AAPL", name: "Apple", price: 187.68, change: -0.3 },
  { symbol: "TSLA", name: "Tesla", price: 237.49, change: -1.5 },
  { symbol: "GOLD", name: "Gold", price: 2034.5, change: 0.8 },
  { symbol: "OIL", name: "Crude Oil", price: 78.92, change: 1.2 },
  { symbol: "MIN INV", name: "Minimum Investment", price: 10.0, change: 0.0, isStatic: true },
]

export default function MarketTicker() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev - 1)
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-3 overflow-hidden border-b">
      <div className="whitespace-nowrap" style={{ transform: `translateX(${offset}px)` }}>
        {[...marketData, ...marketData].map((item, index) => (
          <span key={index} className="inline-flex items-center mx-8">
            <span className="font-semibold mr-2 text-blue-300">{item.symbol}</span>
            <span className="text-gray-300 mr-2">
              {item.symbol === "MIN INV" ? "$" : ""}
              {item.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              {item.symbol === "USD/GHS" ? " GHS" : ""}
              {item.symbol === "MIN INV" ? " (₵158.50)" : ""}
            </span>
            {!item.isStatic && (
              <span className={`inline-flex items-center ${item.change >= 0 ? "text-green-400" : "text-red-400"}`}>
                {item.change >= 0 ? (
                  <TrendingUp size={14} className="mr-1" />
                ) : (
                  <TrendingDown size={14} className="mr-1" />
                )}
                {Math.abs(item.change)}%
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
