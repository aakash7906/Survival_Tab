import { Phone } from "lucide-react"

export function WhiteFooter() {
  return (
    <footer id="contact" className="w-full bg-[#111111] text-zinc-300 py-14 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-xs">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative h-9 w-9 rounded-full bg-red-600 border border-white flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg tracking-tight text-white leading-none">
                  SURVIVAL TABS<span className="text-red-500 text-xs">®</span>
                </span>
                <span className="text-xs font-serif italic text-amber-400 font-semibold leading-none mt-0.5">
                  &ldquo;Just In Case&rdquo;
                </span>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-block rounded bg-zinc-800 border border-zinc-700 px-3 py-1 font-bold text-amber-400 text-[10px] tracking-wider uppercase">
                MADE IN THE USA GUARANTEE
              </span>
            </div>
            
            <p className="text-zinc-400 text-[11px] leading-relaxed max-w-xs">
              The premier emergency food ration system engineered for disaster preparedness, wilderness survival, and long-term storage.
            </p>
          </div>

          {/* Company */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-yellow-500 uppercase tracking-wider text-[11px]">
              COMPANY
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#concept" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#emergency" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#purchase" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#purchase" className="hover:text-white transition-colors">Terms &amp; Conditions</a></li>
            </ul>
          </div>

          {/* Retail / Wholesale */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-yellow-500 uppercase tracking-wider text-[11px]">
              RETAIL / WHOLESALE
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#purchase" className="hover:text-white transition-colors">Distributors</a></li>
              <li><a href="#purchase" className="hover:text-white transition-colors">Wholesale Opportunity</a></li>
              <li><a href="#purchase" className="hover:text-white transition-colors">Affiliates</a></li>
              <li><a href="#purchase" className="hover:text-white transition-colors">Order Status</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Customer Support</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-yellow-500 uppercase tracking-wider text-[11px]">
              CONNECT
            </h4>
            <div className="space-y-2 text-zinc-400">
              <div className="flex items-center gap-1.5 text-white font-semibold">
                <Phone className="h-3.5 w-3.5 text-yellow-500" />
                <a href="tel:800-453-3238" className="hover:text-yellow-400">
                  800-453-3238
                </a>
              </div>
              <div className="text-[10px] text-zinc-400">
                Toll Free Direct Line
              </div>

              {/* Social icons */}
              <div className="pt-2 flex items-center gap-2">
                {["FB", "TW", "IN", "YT"].map((s) => (
                  <span
                    key={s}
                    className="flex h-6 w-6 items-center justify-center rounded bg-zinc-800 text-[10px] font-bold text-zinc-300 hover:bg-red-600 hover:text-white transition-colors cursor-pointer"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-zinc-800 text-center text-[11px] text-zinc-500">
          &copy; {new Date().getFullYear()} The Survival Tabs. All Rights Reserved. (survivaltabs.com)
        </div>

      </div>
    </footer>
  )
}
