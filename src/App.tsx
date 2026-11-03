import { useState, useEffect } from "react"
import { WhiteNavbar } from "./components/Navbar"
import { HomePage } from "./pages/HomePage"
import { FaqPage } from "./pages/FaqPage"
import { ContactUsPage } from "./pages/ContactUsPage"
import { TestimonialsPage } from "./pages/TestimonialsPage"
import { WhiteFooter } from "./components/Footer"
import { CartDrawer, type CartItem } from "./components/CartDrawer"
import type { ProductItem } from "./components/PurchaseSection"

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "faq" | "contact" | "testimonials">("home")
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

  // Listen to hash changes for smooth deep-linking
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === "#faq") {
        setCurrentPage("faq")
      } else if (window.location.hash === "#contact") {
        setCurrentPage("contact")
      } else if (window.location.hash === "#testimonials") {
        setCurrentPage("testimonials")
      } else if (window.location.hash === "#hero" || !window.location.hash) {
        setCurrentPage("home")
      }
    }
    handleHash()
    window.addEventListener("hashchange", handleHash)
    return () => window.removeEventListener("hashchange", handleHash)
  }, [])

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

  const handleNavigateHome = () => {
    setCurrentPage("home")
    window.location.hash = "#hero"
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNavigateFaq = () => {
    setCurrentPage("faq")
    window.location.hash = "#faq"
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleOrderNow = () => {
    setCurrentPage("home")
    window.location.hash = "#purchase"
    setTimeout(() => {
      const el = document.querySelector("#purchase")
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }, 60)
  }

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans flex flex-col justify-between selection:bg-red-100 selection:text-red-900">
      {/* Official Header / Navbar */}
      <WhiteNavbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        currentPage={currentPage}
        onNavigate={(page) => setCurrentPage(page as "home" | "faq" | "contact" | "testimonials")}
      />

      {/* Dedicated Page Views: Toggle between HomePage, FaqPage, ContactUsPage, and TestimonialsPage */}
      {currentPage === "faq" && (
        <FaqPage onNavigateHome={handleNavigateHome} />
      )}

      {currentPage === "contact" && (
        <ContactUsPage
          onNavigateHome={handleNavigateHome}
          onNavigateFaq={handleNavigateFaq}
        />
      )}

      {currentPage === "testimonials" && (
        <TestimonialsPage
          onNavigateHome={handleNavigateHome}
          onOrderNow={handleOrderNow}
        />
      )}

      {currentPage === "home" && (
        <HomePage onAddToCart={handleAddToCart} />
      )}

      {/* Official Footer */}
      <WhiteFooter
        onNavigate={(page) => setCurrentPage(page as "home" | "faq" | "contact" | "testimonials")}
      />

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
