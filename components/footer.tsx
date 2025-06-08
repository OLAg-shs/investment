import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="text-2xl font-bold text-white">AssetInvest</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              America's premier platform for investing in profitable real-world assets with guaranteed weekly returns.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Investment</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Electric Vehicles
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  E-Bikes & Scooters
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Delivery Vehicles
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Agricultural Assets
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Solar Panels
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about-us"
                  className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer transform hover:translate-x-1"
                  style={{ cursor: "pointer" }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#asset-categories"
                  className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer transform hover:translate-x-1"
                  style={{ cursor: "pointer" }}
                >
                  Our Values
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer transform hover:translate-x-1"
                  style={{ cursor: "pointer" }}
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <Link href="mailto:invest@assetinvest.com" className="hover:text-white transition-colors">
                  invest@assetinvest.com
                </Link>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2" />
                <Link href="tel:+18005551234" className="hover:text-white transition-colors">
                  +1 (800) 555-1234
                </Link>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <address className="not-italic">
                  1234 Investment Ave
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AssetInvest LLC. All rights reserved. | SEC Registered Investment Advisor
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Risk Disclosure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
