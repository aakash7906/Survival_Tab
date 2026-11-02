import { Flame, ShieldCheck, Award, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative w-full rounded-[2.5rem] bg-black text-white p-8 sm:p-14 lg:p-16 border border-white/10 mt-12 mb-6 overflow-hidden">
      {/* Grain overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-white/10 pb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 border border-white/15 text-emerald-400">
                <Flame className="h-5 w-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                SURVIVAL TABS®
              </span>
            </div>
            <p className="body-spec text-zinc-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              The premier emergency food ration system engineered for survivalists, disaster response teams, wilderness explorers, and tactical readiness. 25-Year certified shelf life.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-zinc-300">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                Proudly Made in the USA
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-zinc-300">
                <Award className="h-3.5 w-3.5 text-emerald-400" />
                cGMP Certified
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="label-spec text-zinc-400 font-bold block">NAVIGATION</span>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#hero" className="hover:text-emerald-400 transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-emerald-400 transition-colors">
                  Nutritional Spec
                </a>
              </li>
              <li>
                <a href="#productivity" className="hover:text-emerald-400 transition-colors">
                  Deployment Protocol
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-emerald-400 transition-colors">
                  Ration Packs
                </a>
              </li>
              <li>
                <a href="#flavors" className="hover:text-emerald-400 transition-colors">
                  Flavors & Taste
                </a>
              </li>
            </ul>
          </div>

          {/* Mission & Retail */}
          <div className="lg:col-span-2 space-y-3">
            <span className="label-spec text-zinc-400 font-bold block">SUPPORT & ORDERS</span>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <span className="text-zinc-500">Toll-Free:</span>{" "}
                <span className="text-white font-mono">1-800-453-3238</span>
              </li>
              <li>
                <span className="text-zinc-500">Hours:</span> Mon-Fri 8am - 5pm PST
              </li>
              <li>
                <span className="text-zinc-500">Shipping:</span> Worldwide Expedited
              </li>
              <li>
                <a href="#pricing" className="text-emerald-400 hover:underline">
                  Wholesale & Bulk Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / Back to Top */}
          <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end space-y-4">
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs text-zinc-300 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <div className="text-xs text-zinc-500 lg:text-right">
              Emergency Preparedness Standard &bull; Established Formula
            </div>
          </div>

        </div>

        {/* Bottom Legal Notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} SurvivalTabs&reg;. All Rights Reserved. Based on SurvivalTabs.com.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-zinc-400 cursor-pointer">Privacy Policy</span>
            <span>&bull;</span>
            <span className="hover:text-zinc-400 cursor-pointer">Terms of Service</span>
            <span>&bull;</span>
            <span className="hover:text-zinc-400 cursor-pointer">Shelf-Life Warranty</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
