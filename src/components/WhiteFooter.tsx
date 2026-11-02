import { Phone, Mail, ArrowUp } from "lucide-react"
import { FacebookIcon, TwitterIcon, LinkedinIcon, YoutubeIcon } from "./ui/SocialIcons"

export function WhiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer id="contact" className="w-full bg-[#FFFFFF] border-t border-slate-200 mt-16 pt-14 pb-8 text-slate-700">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 space-y-12">

        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/images/survival_tabs_logo_outlined.png"
                alt="Survival Tabs"
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              The premier emergency food ration system engineered for disaster response, outdoor expeditions, and survivalist readiness. 25-Year certified shelf life.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
                <img
                  src="/images/made-in-usa.png"
                  alt="Made in USA"
                  className="h-4 w-auto object-contain"
                />
                <span>MADE IN THE USA GUARANTEE</span>
              </div>
            </div>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900">
              COMPANY
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#hero" className="hover:text-emerald-600 transition-colors">Overview</a></li>
              <li><a href="#features" className="hover:text-emerald-600 transition-colors">Features</a></li>
              <li><a href="#productivity" className="hover:text-emerald-600 transition-colors">System Matrix</a></li>
              <li><a href="#pricing" className="hover:text-emerald-600 transition-colors">Ration Plans</a></li>
              <li><a href="#nutrition" className="hover:text-emerald-600 transition-colors">Nutrition Facts</a></li>
            </ul>
          </div>

          {/* Retail & Wholesale */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900">
              RETAIL / WHOLESALE
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#pricing" className="hover:text-emerald-600 transition-colors">Authorized Distributors</a></li>
              <li><a href="#pricing" className="hover:text-emerald-600 transition-colors">Wholesale Opportunities</a></li>
              <li><a href="#pricing" className="hover:text-emerald-600 transition-colors">Affiliate Network</a></li>
              <li><a href="#pricing" className="hover:text-emerald-600 transition-colors">Order Tracking &amp; Status</a></li>
              <li><a href="#contact" className="hover:text-emerald-600 transition-colors">Government &amp; Bulk Quotes</a></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900">
              CONNECT &bull; SUPPORT
            </h4>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Toll Free: <strong className="text-slate-900">660-463-2158</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-600 shrink-0" />
                <a href="mailto:support@survivaltabs.com" className="hover:text-emerald-600 transition-colors">
                  support@survivaltabs.com
                </a>
              </div>
              <div className="text-[11px] text-slate-400 pt-1">
                Hours: Monday &ndash; Friday, 8:00 AM &ndash; 5:00 PM PST
              </div>

              {/* Social media icons with authentic Lucide SVG icons */}
              <div className="pt-3 flex items-center gap-2.5">
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
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-9 w-9 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-300 transition-all cursor-pointer shadow-xs"
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
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 SurvivalTabs&reg;. All Rights Reserved. Pure Light Theme Architecture.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-1.5 text-slate-700 hover:text-emerald-600 font-semibold cursor-pointer transition-colors"
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
