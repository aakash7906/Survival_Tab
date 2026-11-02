import { useState } from "react"
import { ShoppingBag, Menu, X, Phone } from "lucide-react"
import { SurvivalLogo } from "./SurvivalLogo"

interface WhiteNavbarProps {
  cartCount?: number
  onOpenCart?: () => void
}

export function WhiteNavbar({ cartCount = 0, onOpenCart }: WhiteNavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Emergency Rations", href: "#emergency" },
    { label: "Purchase Tabs", href: "#purchase" },
    { label: "The Concept", href: "#concept" },
    { label: "Nutrition Spec", href: "#nutrition" },
    { label: "Contact Us", href: "#contact" },
  ]

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200/80 shadow-[0_2px_15px_rgba(0,0,0,0.04)]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            scrollTo("#hero")
          }}
        >
          <SurvivalLogo />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(link.href)
              }}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-zinc-700 hover:text-red-600 hover:bg-zinc-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA & Cart */}
        <div className="flex items-center gap-3">
          <a
            href="tel:800-453-3238"
            className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-950 px-3 py-1.5 rounded-full border border-zinc-200 bg-zinc-50"
          >
            <Phone className="h-3.5 w-3.5 text-emerald-600" />
            <span>800-453-3238</span>
          </a>

          <button
            onClick={() => scrollTo("#purchase")}
            className="flex items-center gap-2 rounded-full bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span>Order Tabs</span>
          </button>

          {onOpenCart && (
            <button
              onClick={onOpenCart}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800 transition-colors shadow-sm"
              aria-label="View Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white shadow">
                  {cartCount}
                </span>
              )}
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 lg:hidden hover:bg-zinc-50"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-zinc-200 bg-white px-6 py-4 shadow-xl lg:hidden animate-fade-in-up">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(link.href)
                }}
                className="rounded-lg px-4 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 hover:text-red-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-zinc-100 flex items-center justify-between">
              <span className="text-xs text-zinc-500">Toll-Free Phone:</span>
              <a href="tel:800-453-3238" className="text-sm font-bold text-red-600">
                800-453-3238
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
