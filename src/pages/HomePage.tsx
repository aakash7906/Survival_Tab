import { Hero } from "../components/Hero"
import { EmergencyRationsSection } from "../components/EmergencyRationsSection"
import { PurchaseSection, type ProductItem } from "../components/PurchaseSection"
import { NutritionFactsSection } from "../components/NutritionFactsSection"
import { SurvivalConceptSection } from "../components/SurvivalConceptSection"

interface HomePageProps {
  onAddToCart: (product: ProductItem) => void
}

export function HomePage({ onAddToCart }: HomePageProps) {
  return (
    <main className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-4 sm:pt-6 lg:pt-8 pb-12">
      <Hero />
      <EmergencyRationsSection />
      <PurchaseSection onAddToCart={onAddToCart} />
      <NutritionFactsSection />
      <SurvivalConceptSection />
    </main>
  )
}

export default HomePage
