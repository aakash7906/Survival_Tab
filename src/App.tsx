import { useState, useEffect } from "react"
import { Navbar } from "./components/Navbar"
import { HomePage } from "./pages/HomePage"
import { FaqPage } from "./pages/FaqPage"
import { ContactUsPage } from "./pages/ContactUsPage"
import { TestimonialsPage } from "./pages/TestimonialsPage"
import { AboutPage } from "./pages/AboutPage"
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage"
import { TermsPage } from "./pages/TermsPage"
import { MakeMoneyPage } from "./pages/MakeMoneyPage"
import { WholesaleDistributorPage } from "./pages/WholesaleDistributorPage"
import { DropShippingPage } from "./pages/DropShippingPage"
import { ForeignExportPage } from "./pages/ForeignExportPage"
import { AffiliateProgramPage } from "./pages/AffiliateProgramPage"
import { Footer } from "./components/Footer"
import { CartDrawer, type CartItem } from "./components/CartDrawer"
import type { ProductItem } from "./components/PurchaseSection"

type Page =
  | "home"
  | "faq"
  | "contact"
  | "testimonials"
  | "about"
  | "privacy"
  | "terms"
  | "make-money"
  | "wholesale"
  | "dropship"
  | "export"
  | "affiliate"

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
        rawPath === "about" ||
        rawPath === "about-us" ||
        rawHash === "about" ||
        rawHash === "about-us"
      ) {
        targetPage = "about"
      } else if (
        rawPath === "privacy" ||
        rawPath === "privacy-policy" ||
        rawHash === "privacy" ||
        rawHash === "privacy-policy"
      ) {
        targetPage = "privacy"
      } else if (
        rawPath === "terms" ||
        rawPath === "terms-and-conditions" ||
        rawPath === "terms-conditions" ||
        rawHash === "terms" ||
        rawHash === "terms-and-conditions" ||
        rawHash === "terms-conditions"
      ) {
        targetPage = "terms"
      } else if (
        rawPath === "make-money" ||
        rawPath === "makemoney" ||
        rawPath === "resell" ||
        rawPath === "promote" ||
        rawHash === "make-money" ||
        rawHash === "makemoney" ||
        rawHash === "resell" ||
        rawHash === "promote"
      ) {
        targetPage = "make-money"
      } else if (
        rawPath === "wholesale" ||
        rawPath === "wholesale-distributor" ||
        rawPath === "distributor" ||
        rawHash === "wholesale" ||
        rawHash === "wholesale-distributor" ||
        rawHash === "distributor"
      ) {
        targetPage = "wholesale"
      } else if (
        rawPath === "dropship" ||
        rawPath === "drop-shipping" ||
        rawPath === "dropshipping" ||
        rawHash === "dropship" ||
        rawHash === "drop-shipping" ||
        rawHash === "dropshipping"
      ) {
        targetPage = "dropship"
      } else if (
        rawPath === "export" ||
        rawPath === "foreign-export" ||
        rawPath === "international" ||
        rawHash === "export" ||
        rawHash === "foreign-export" ||
        rawHash === "international"
      ) {
        targetPage = "export"
      } else if (
        rawPath === "affiliate" ||
        rawPath === "affiliate-program" ||
        rawPath === "affiliates" ||
        rawHash === "affiliate" ||
        rawHash === "affiliate-program" ||
        rawHash === "affiliates"
      ) {
        targetPage = "affiliate"
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

      {currentPage === "about" && (
        <AboutPage
          onNavigateHome={handleNavigateHome}
          onOrderNow={handleOrderNow}
        />
      )}

      {currentPage === "privacy" && (
        <PrivacyPolicyPage
          onNavigateHome={handleNavigateHome}
          onNavigateContact={() => {
            setCurrentPage("contact")
            window.history.pushState(null, "", "/#contact")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        />
      )}

      {currentPage === "terms" && (
        <TermsPage
          onNavigateHome={handleNavigateHome}
          onNavigateContact={() => {
            setCurrentPage("contact")
            window.history.pushState(null, "", "/#contact")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        />
      )}

      {currentPage === "make-money" && (
        <MakeMoneyPage
          onNavigateHome={handleNavigateHome}
          onNavigateContact={() => {
            setCurrentPage("contact")
            window.history.pushState(null, "", "/#contact")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        />
      )}

      {currentPage === "wholesale" && (
        <WholesaleDistributorPage
          onNavigateHome={handleNavigateHome}
          onNavigateMakeMoney={() => {
            setCurrentPage("make-money")
            window.history.pushState(null, "", "/#make-money")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          onNavigateContact={() => {
            setCurrentPage("contact")
            window.history.pushState(null, "", "/#contact")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        />
      )}

      {currentPage === "dropship" && (
        <DropShippingPage
          onNavigateHome={handleNavigateHome}
          onNavigateMakeMoney={() => {
            setCurrentPage("make-money")
            window.history.pushState(null, "", "/#make-money")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          onNavigateContact={() => {
            setCurrentPage("contact")
            window.history.pushState(null, "", "/#contact")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        />
      )}

      {currentPage === "export" && (
        <ForeignExportPage
          onNavigateHome={handleNavigateHome}
          onNavigateMakeMoney={() => {
            setCurrentPage("make-money")
            window.history.pushState(null, "", "/#make-money")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          onNavigateContact={() => {
            setCurrentPage("contact")
            window.history.pushState(null, "", "/#contact")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        />
      )}

      {currentPage === "affiliate" && (
        <AffiliateProgramPage
          onNavigateHome={handleNavigateHome}
          onNavigateMakeMoney={() => {
            setCurrentPage("make-money")
            window.history.pushState(null, "", "/#make-money")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          onNavigateContact={() => {
            setCurrentPage("contact")
            window.history.pushState(null, "", "/#contact")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
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
