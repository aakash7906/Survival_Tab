import { useState, useEffect } from "react"
import { Navbar } from "./components/Navbar"
import { HomePage } from "./pages/HomePage"
import { FaqPage } from "./pages/FaqPage"
import { ContactUsPage } from "./pages/ContactUsPage"
import { TestimonialsPage } from "./pages/TestimonialsPage"
import { Footer } from "./components/Footer"
import { CartDrawer, type CartItem } from "./components/CartDrawer"
import type { ProductItem } from "./components/PurchaseSection"

type Page = "home" | "faq" | "contact" | "testimonials"

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home")
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

  // Sync route and clean up URL path (removing erroneous /hero or broken paths)
  useEffect(() => {
    const syncRouteFromUrl = () => {
      const rawPath = window.location.pathname.toLowerCase().replace(/^\/+|\/+$/g, "")
      const rawHash = window.location.hash.toLowerCase().replace(/^#+/, "")

      let targetPage: Page = "home"
      if (rawPath === "faq" || rawHash === "faq") {
        targetPage = "faq"
      } else if (
        rawPath === "contact" ||
        rawPath === "contact-us" ||
        rawHash === "contact" ||
        rawHash === "contact-us"
      ) {
        targetPage = "contact"
      } else if (
        rawPath === "testimonials" ||
        rawPath === "testimonial" ||
        rawHash === "testimonials" ||
        rawHash === "testimonial"
      ) {
        targetPage = "testimonials"
      }

      setCurrentPage(targetPage)

      // Clean URL: Strip any unwanted /hero path and standardize clean URL
      const cleanUrl = targetPage === "home" ? "/" : `/#${targetPage}`
      if (
        window.location.pathname !== "/" ||
        (targetPage === "home" && (window.location.hash === "#hero" || window.location.hash === ""))
      ) {
        window.history.replaceState(null, "", cleanUrl)
      }
    }

    syncRouteFromUrl()
    window.addEventListener("hashchange", syncRouteFromUrl)
    window.addEventListener("popstate", syncRouteFromUrl)
    return () => {
      window.removeEventListener("hashchange", syncRouteFromUrl)
      window.removeEventListener("popstate", syncRouteFromUrl)
    }
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
    window.history.pushState(null, "", "/")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNavigateFaq = () => {
    setCurrentPage("faq")
    window.history.pushState(null, "", "/#faq")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleOrderNow = () => {
    setCurrentPage("home")
    window.history.pushState(null, "", "/#purchase")
    setTimeout(() => {
      const el = document.querySelector("#purchase")
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }, 60)
  }

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans flex flex-col justify-between selection:bg-red-100 selection:text-red-900">
      {/* Official Header / Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        currentPage={currentPage}
        onNavigate={(page) => setCurrentPage(page as Page)}
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
      <Footer
        onNavigate={(page) => setCurrentPage(page as Page)}
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
