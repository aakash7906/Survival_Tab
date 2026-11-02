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
        image: "/images/banana.png",
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
    <div className="min-h-screen bg-white text-zinc-900 font-sans flex flex-col justify-between selection:bg-red-100 selection:text-red-900">
      {/* Official White Header / Navbar */}
      <WhiteNavbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
      />

      {/* Main Content Layout with responsive margin between navbar and WhiteHero */}
      <main className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-4 sm:pt-6 lg:pt-8 pb-12">
        <WhiteHero />
        <EmergencyRationsSection />
        <PurchaseSection onAddToCart={handleAddToCart} />
        <NutritionFactsSection />
        <SurvivalConceptSection />
      </main>

      {/* Official White Footer */}
      <WhiteFooter />

      {/* Sliding Slide-over Cart Drawer */}
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
