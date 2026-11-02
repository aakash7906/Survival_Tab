import { FloatingNav } from "./components/FloatingNav"
import { HeroSection } from "./components/HeroSection"
import { FeatureGrid } from "./components/FeatureGrid"
import { DarkProductivityBlock } from "./components/DarkProductivityBlock"
import { PricingBentoGrid } from "./components/PricingBentoGrid"
import { FlavorShowcase } from "./components/FlavorShowcase"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-emerald-400 selection:text-black">
      {/* Floating Glass Navbar */}
      <FloatingNav />

      {/* Main Content Container (Max width 1600px aligned) */}
      <main className="w-full max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8 pt-4 pb-12 space-y-6 sm:space-y-8">
        <HeroSection />
        <FeatureGrid />
        <DarkProductivityBlock />
        <PricingBentoGrid />
        <FlavorShowcase />
        <Footer />
      </main>
    </div>
  )
}
