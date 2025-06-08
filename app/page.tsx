import Header from "@/components/header"
import Hero from "@/components/hero"
import AssetCategories from "@/components/asset-categories"
import HowItWorks from "@/components/how-it-works"
import InvestmentStats from "@/components/investment-stats"
import Testimonials from "@/components/testimonials"
import Faq from "@/components/faq"
import MobilePreview from "@/components/mobile-preview"
import MarketTicker from "@/components/market-ticker"
import Footer from "@/components/footer"
import BackgroundElements from "@/components/background-elements"
import ScrollToSection from "@/components/scroll-to-section"
import AnimatedScrollButton from "@/components/animated-scroll-button"
import CustomCursor from "@/components/custom-cursor"

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <CustomCursor />
      <BackgroundElements />
      <Header />
      <ScrollToSection />
      <AnimatedScrollButton />
      <main>
        <MarketTicker />
        <Hero />
        <AssetCategories />
        <HowItWorks />
        <InvestmentStats />
        <Testimonials />
        <Faq />
        <MobilePreview />
      </main>
      <Footer />
    </div>
  )
}
