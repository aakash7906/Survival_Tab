import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight, Flame } from "lucide-react"

export function FloatingNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Overview", href: "#hero" },
    { label: "Nutrition Spec", href: "#features" },
    { label: "Bio-System", href: "#productivity" },
    { label: "Ration Packs", href: "#pricing" },
    { label: "Flavors", href: "#flavors" },
  ]

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-5xl transition-all duration-500 rounded-full border border-white/10 backdrop-blur-[20px] p-[1.5px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] ${
          scrolled ? "bg-black/85" : "bg-black/60"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-3 sm:px-6">
          {/* Brand */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              scrollTo("#hero")
            }}
            className="flex items-center gap-2.5 font-bold tracking-tight text-white group"
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 border border-white/15 text-emerald-400 group-hover:scale-110 transition-transform">
              <Flame className="h-4 w-4" />
              <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-sm sm:text-base font-extrabold tracking-tight">SURVIVAL TABS</span>
              <span className="label-spec text-[9px] text-emerald-400 font-bold hidden xs:inline">MIL-SPEC</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(link.href)
                }}
                className="rounded-full px-4 py-2 text-xs font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollTo("#pricing")}
              className="group hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-zinc-950 px-4 py-1.5 text-xs font-semibold hover:bg-emerald-400 hover:text-zinc-950 hover:scale-105 transition-all duration-300 shadow-md cursor-pointer"
            >
              <span>Get Rations</span>
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 text-white group-hover:bg-zinc-950 transition-colors">
                <ArrowUpRight className="h-3 w-3" />
              </div>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/90 md:hidden hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="mt-2 rounded-[2rem] border border-white/10 bg-black/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden animate-fade-in-up">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo(link.href)
                  }}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-white/10">
                <button
                  onClick={() => scrollTo("#pricing")}
                  className="w-full flex items-center justify-between rounded-full bg-emerald-400 text-zinc-950 px-5 py-3 text-sm font-semibold hover:bg-emerald-300 transition-colors"
                >
                  <span>Order Survival Tabs</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
