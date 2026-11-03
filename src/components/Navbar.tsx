import { useState, useEffect } from "react"
import { ShoppingBag, Menu, X, Phone, ChevronRight, ShieldCheck } from "lucide-react"
import { SurvivalLogo } from "./SurvivalLogo"

interface NavLinkItem {
  label: string
  href: string
  badge?: string
}

interface WhiteNavbarProps {
  cartCount?: number
  onOpenCart?: () => void
  currentPage?: string
  onNavigate?: (page: string) => void
}

export function WhiteNavbar({
  cartCount = 0,
  onOpenCart,
  currentPage = "home",
  onNavigate,
}: WhiteNavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks: NavLinkItem[] = [
    { label: "Home", href: "#hero" },
    { label: "FAQ", href: "#faq" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact Us", href: "#contact" },
  ]

  const scrollTo = (href: string) => {
    setMobileOpen(false)

    if (href === "#faq") {
      onNavigate?.("faq")
      window.location.hash = "#faq"
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    if (href === "#testimonials") {
      onNavigate?.("testimonials")
      window.location.hash = "#testimonials"
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    if (href === "#contact") {
      onNavigate?.("contact")
      window.location.hash = "#contact"
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    if (currentPage !== "home") {
      onNavigate?.("home")
    }

    if (href === "#hero") {
      window.location.hash = "#hero"
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }, 60)
  }

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-[0_2px_15px_rgba(0,0,0,0.04)]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            scrollTo("#hero")
          }}
          className="shrink-0 transition-opacity hover:opacity-90"
        >
          <SurvivalLogo className="scale-95 sm:scale-100 origin-left" />
        </a>

        {/* Desktop Navigation Links (Visible on lg and larger screens) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isFaqActive = link.href === "#faq" && currentPage === "faq"
            const isContactActive = link.href === "#contact" && currentPage === "contact"
            const isTestimonialsActive = link.href === "#testimonials" && currentPage === "testimonials"
            const isActive = isFaqActive || isContactActive || isTestimonialsActive
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(link.href)
                }}
                className={`rounded-lg px-3 py-2 text-xs xl:text-sm font-medium transition-colors ${
                  isActive
                    ? "text-red-600 bg-red-50 font-semibold"
                    : "text-zinc-700 hover:text-red-600 hover:bg-zinc-100"
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Right CTA, Cart & Mobile Menu Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Phone pill on medium/desktop screens */}
          <a
            href="tel:800-453-3238"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 hover:text-zinc-950 px-3 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-emerald-600" />
            <span>800-453-3238</span>
          </a>

          {/* Desktop "Order Tabs" Primary Button */}
          <button
            onClick={() => scrollTo("#purchase")}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-red-600 hover:bg-red-700 text-white px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow transition-all cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>Order Tabs</span>
          </button>

          {/* Shopping Cart Button (Always visible on mobile & desktop) */}
          {onOpenCart && (
            <button
              onClick={onOpenCart}
              className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800 transition-all shadow-xs cursor-pointer"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="h-4 sm:h-5 w-4 sm:w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white shadow">
                  {cartCount}
                </span>
              )}
            </button>
          )}

          {/* Hamburger Menu Toggle Button (Visible on mobile & tablet < lg) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 lg:hidden hover:bg-zinc-100 hover:text-zinc-900 transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-red-600" />
            ) : (
              <Menu className="h-5 w-5 text-zinc-800" />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu Dropdown Panel */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-zinc-200 bg-white px-5 py-6 shadow-2xl transition-all duration-200">
          <div className="flex flex-col space-y-4">
            
            {/* Mobile Nav Links */}
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isFaqActive = link.href === "#faq" && currentPage === "faq"
                const isContactActive = link.href === "#contact" && currentPage === "contact"
                const isTestimonialsActive = link.href === "#testimonials" && currentPage === "testimonials"
                const isActive = isFaqActive || isContactActive || isTestimonialsActive
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo(link.href)
                    }}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-red-50 text-red-600"
                        : "text-zinc-800 hover:bg-red-50 hover:text-red-600"
                    }`}
                  >
                    <span>{link.label}</span>
                    <div className="flex items-center gap-2">
                      {link.badge && (
                        <span className="bg-red-100 text-red-700 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                          {link.badge}
                        </span>
                      )}
                      <ChevronRight className="h-4 w-4 text-zinc-400" />
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Mobile Action Buttons */}
            <div className="pt-3 border-t border-zinc-100 space-y-3">
              <button
                onClick={() => scrollTo("#purchase")}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold py-3 text-sm uppercase tracking-wider shadow-md transition-colors"
              >
                <span>Order Survival Tabs Now</span>
              </button>

              <a
                href="tel:800-453-3238"
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 py-2.5 text-xs font-semibold text-zinc-800 hover:bg-zinc-100 transition-colors"
              >
                <Phone className="h-4 w-4 text-emerald-600" />
                <span>Call Toll-Free: 800-453-3238</span>
              </a>
            </div>

            {/* Mobile Trust strip */}
            <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-zinc-500 font-medium text-center">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>Made in USA &bull; 25-Year Certified Shelf Life</span>
            </div>

          </div>
        </div>
      )}
    </header>
  )
}

export { WhiteNavbar as Navbar }
