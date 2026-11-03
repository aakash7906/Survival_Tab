import { Phone, Mail, ArrowUp } from "lucide-react"
import { FacebookIcon, TwitterIcon, LinkedinIcon, YoutubeIcon, InstagramIcon } from "./ui/SocialIcons"

interface FooterProps {
  onNavigate?: (page: string) => void
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNav = (href: string, page = "home") => {
    onNavigate?.(page)
    if (page === "about" || href === "about") {
      onNavigate?.("about")
      window.history.pushState(null, "", "/about")
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    if (page === "privacy" || href === "privacy") {
      onNavigate?.("privacy")
      window.history.pushState(null, "", "/privacy-policy")
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    if (page === "terms" || href === "terms") {
      onNavigate?.("terms")
      window.history.pushState(null, "", "/terms-and-conditions")
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    if (page === "make-money" || href.startsWith("make-money")) {
      onNavigate?.("make-money")
      const hash = href.includes("#") ? href.substring(href.indexOf("#")) : ""
      window.history.pushState(null, "", `/make-money${hash}`)
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash)
          if (el) el.scrollIntoView({ behavior: "smooth" })
        }, 80)
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      return
    }
    if (page === "wholesale" || href === "wholesale" || href === "wholesale-distributor") {
      onNavigate?.("wholesale")
      window.history.pushState(null, "", "/wholesale-distributor")
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    if (page === "dropship" || href === "dropship" || href === "drop-shipping") {
      onNavigate?.("dropship")
      window.history.pushState(null, "", "/drop-shipping")
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    if (page === "export" || href === "export" || href === "foreign-export") {
      onNavigate?.("export")
      window.history.pushState(null, "", "/foreign-export")
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    if (page === "affiliate" || href === "affiliate" || href === "affiliate-program") {
      onNavigate?.("affiliate")
      window.history.pushState(null, "", "/affiliate-program")
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    if (page === "faq" || href === "faq") {
      window.history.pushState(null, "", "/faq")
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    if (page === "testimonials" || href === "testimonials") {
      onNavigate?.("testimonials")
      window.history.pushState(null, "", "/testimonials")
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    if (page === "contact" || href === "contact") {
      onNavigate?.("contact")
      window.history.pushState(null, "", "/contact")
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    if (href === "hero" || href === "/" || page === "home") {
      window.history.pushState(null, "", "/")
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    if (href === "purchase") {
      window.history.pushState(null, "", "/purchase")
    }
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }, 60)
  }

  return (
    <footer id="contact" className="w-full bg-background border-t border-border mt-12 sm:mt-16 pt-10 sm:pt-14 pb-8 text-muted-foreground">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10 sm:space-y-12">

        {/* Main Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/images/survival_tabs_logo_outlined.png"
                alt="Survival Tabs"
                className="h-9 w-auto object-contain"
              />
            </div>
            <div className="space-y-1.5 text-xs text-muted-foreground leading-relaxed">
              <p className="font-bold text-xs uppercase tracking-wider text-amber-600">
                GOOD FOR YOU AMERICA
              </p>
              <p>110 S. Bismark Street</p>
              <p>Concordia, Missouri, 64020</p>
              <p>United States</p>
            </div>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-primary">
              COMPANY
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><button onClick={() => handleNav("about", "about")} className="hover:text-emerald-600 transition-colors cursor-pointer text-left">About</button></li>
              <li><button onClick={() => handleNav("#purchase", "home")} className="hover:text-emerald-600 transition-colors cursor-pointer text-left">Products</button></li>
              <li><button onClick={() => handleNav("#emergency", "home")} className="hover:text-emerald-600 transition-colors cursor-pointer text-left">News</button></li>
              <li><button onClick={() => handleNav("privacy", "privacy")} className="hover:text-emerald-600 transition-colors cursor-pointer text-left">Privacy Policy</button></li>
              <li><button onClick={() => handleNav("terms", "terms")} className="hover:text-emerald-600 transition-colors cursor-pointer text-left">Terms &amp; Conditions</button></li>
            </ul>
          </div>

          {/* Resell / Promote Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-primary">
              RESELL / PROMOTE
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><button onClick={() => handleNav("make-money", "make-money")} className="hover:text-emerald-600 transition-colors cursor-pointer text-left">Make Money</button></li>
              <li>
                <button onClick={() => handleNav("wholesale", "wholesale")} className="hover:text-emerald-600 transition-colors cursor-pointer text-left flex items-center gap-1.5">
                  <span className="text-[9px] text-muted-foreground">▶</span>
                  <span>Wholesale Distributor</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("dropship", "dropship")} className="hover:text-emerald-600 transition-colors cursor-pointer text-left flex items-center gap-1.5">
                  <span className="text-[9px] text-muted-foreground">▶</span>
                  <span>Drop Shipping</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("export", "export")} className="hover:text-emerald-600 transition-colors cursor-pointer text-left flex items-center gap-1.5">
                  <span className="text-[9px] text-muted-foreground">▶</span>
                  <span>Foreign Export</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("affiliate", "affiliate")} className="hover:text-emerald-600 transition-colors cursor-pointer text-left flex items-center gap-1.5">
                  <span className="text-[9px] text-muted-foreground">▶</span>
                  <span>Affiliate Program</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Us & Follow Us Column */}
          <div className="lg:col-span-3 space-y-4">
            <div className="space-y-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-primary">
                Contact Us
              </h4>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-emerald-600 shrink-0" />
                  <a href="tel:800-944-1511" className="hover:text-emerald-600 transition-colors font-medium">
                    800-944-1511
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-emerald-600 shrink-0" />
                  <a href="mailto:Sales@FoodReserves.com" className="hover:text-emerald-600 transition-colors font-medium">
                    Sales@FoodReserves.com
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <h4 className="font-bold text-xs uppercase tracking-wider text-primary">
                Follow Us
              </h4>
              <div className="flex items-center gap-2">
                {[
                  {
                    name: "Facebook",
                    href: "https://www.facebook.com/TheSurvivalTabs/",
                    icon: FacebookIcon,
                  },
                  {
                    name: "Twitter / X",
                    href: "https://twitter.com/SurvivalTabs",
                    icon: TwitterIcon,
                  },
                  {
                    name: "LinkedIn",
                    href: "https://www.linkedin.com/company/survivaltabs/",
                    icon: LinkedinIcon,
                  },
                  {
                    name: "YouTube",
                    href: "https://www.youtube.com/@TheSurvivalTabs",
                    icon: YoutubeIcon,
                  },
                  {
                    name: "Instagram",
                    href: "https://www.instagram.com/survivaltabs/",
                    icon: InstagramIcon,
                  },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-secondary-foreground hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-300 transition-all cursor-pointer"
                      title={item.name}
                      aria-label={item.name}
                    >
                      <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Back to top button & copyright */}
        <div className="pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground text-center sm:text-left">
          <div>
            &copy; 2026 Survival Tabs
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-1.5 text-primary hover:text-emerald-600 font-semibold cursor-pointer transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer;
