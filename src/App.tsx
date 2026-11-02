import { useState } from "react"
import { WhiteNavbar } from "./components/WhiteNavbar"
import { WhiteHero } from "./components/WhiteHero"
import { EmergencyRationsSection } from "./components/EmergencyRationsSection"
import { PurchaseSection, type ProductItem } from "./components/PurchaseSection"
import { NutritionFactsSection } from "./components/NutritionFactsSection"
import { SurvivalConceptSection } from "./components/SurvivalConceptSection"
import { WhiteFooter } from "./components/WhiteFooter"
import { CartDrawer, type CartItem } from "./components/CartDrawer"

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: {
        id: "st-banana",
        name: "Survival Tabs Banana",
        flavor: "Banana",
        price: 39.95,
        isNew: true,
        illustration: "🍌 Natural Banana",
      },
      quantity: 1,
    },
  ])

  const [cartOpen, setCartOpen] = useState(false)

  const handleAddToCart = (product: ProductItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { product, quantity: 1 }]
    })
  }

  const handleRemoveFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== id))
  }

  const handleClearCart = () => {
    setCart([])
  }

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-yellow-300 selection:text-zinc-950 font-sans flex flex-col justify-between">
      <div>
        {/* Header Navigation */}
        <WhiteNavbar cartCount={totalCartCount} onOpenCart={() => setCartOpen(true)} />

        {/* Minimal Main Sections from survivaltabs.com */}
        <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <WhiteHero />
          <EmergencyRationsSection />
          <PurchaseSection onAddToCart={handleAddToCart} />
          <NutritionFactsSection />
          <SurvivalConceptSection />
        </main>
      </div>

      {/* Footer */}
      <WhiteFooter />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onRemove={handleRemoveFromCart}
        onClear={handleClearCart}
      />
    </div>
  )
}
