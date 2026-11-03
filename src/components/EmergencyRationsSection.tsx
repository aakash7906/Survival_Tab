import { ShieldCheck, PackageCheck, Zap, Droplets, Clock } from "lucide-react"

export function EmergencyRationsSection() {
  return (
    <section id="emergency" className="w-full py-14 sm:py-18 lg:py-20 bg-white border-y border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Full-Width Expanded Section Header - Spans across image and content */}
        <div className="space-y-2 text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 uppercase">
            EMERGENCY FOOD RATIONS
          </h2>
          <p className="text-base sm:text-lg text-zinc-800 font-semibold leading-snug max-w-4xl">
            The Survival Tabs reliable backup for the &ldquo;drop-everything-and-go&rdquo; scenario.
          </p>
        </div>

        {/* 2-Column Content Layout Below the Expanded Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Made in the USA Official Emblem Showcase */}
          <div className="lg:col-span-5 h-full flex flex-col">
            <div className="relative w-full h-full min-h-[320px] sm:min-h-[380px] lg:min-h-full flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-zinc-50 border border-zinc-200/90 shadow-sm group hover:border-red-200 transition-all duration-300">
              
              {/* Subtle Ambient Radial Highlight */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-zinc-100/50 rounded-3xl pointer-events-none" />

              {/* Large Made In USA Emblem */}
              <div className="relative z-10 w-full flex items-center justify-center my-auto py-4">
                <img
                  src="/images/made-in-usa.png"
                  alt="Made in the USA - The Survival Tabs Certified Standard"
                  className="w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] h-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>

            </div>
          </div>

          {/* Right Column: 60 Days Supply, Description & 4 Pillars */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* 60 Days Supply Highlight Banner */}
            <div className="rounded-2xl bg-red-50 border border-red-200 p-4 sm:p-5 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white shadow-sm">
                <PackageCheck className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-black text-red-700 text-base sm:text-lg uppercase tracking-tight">
                  60 Days Food Supply Order (1 Canister)
                </h3>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                  One compact 24 oz jar delivers 15 days of complete, 100% daily survival rations, or up to 60 days of vital supplemental nutrition when rations are stretched.
                </p>
              </div>
            </div>

            {/* Core Description Text */}
            <div className="space-y-3 text-zinc-600 text-sm sm:text-base leading-relaxed">
              <p>
                For stay-at-home protection or rapid vehicle bug-out readiness, The Survival Tabs are a solid, shelf-stable, ultra-compact backup food supply.
              </p>
              <p>
                The Survival Tabs emergency food rations provide <strong>100% of the US RDA of 15 essential vitamins and minerals</strong> for emergency nutrition and disaster survival kits. Highly assimilated and engineered for immediate cellular fuel.
              </p>
            </div>

            {/* 4 Feature Key Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-left">
              <div className="rounded-xl bg-zinc-50 border border-zinc-200/80 p-3.5 flex items-start gap-3">
                <Droplets className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-bold text-zinc-900 text-xs block">Zero Water or Heat Needed</span>
                  <p className="text-[11px] text-zinc-500 leading-tight">Ready to chew straight from the canister. No stove or clean water required.</p>
                </div>
              </div>

              <div className="rounded-xl bg-zinc-50 border border-zinc-200/80 p-3.5 flex items-start gap-3">
                <Zap className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-bold text-zinc-900 text-xs block">99% Bio-Availability</span>
                  <p className="text-[11px] text-zinc-500 leading-tight">Nearly 100% of calories and nutrients are absorbed directly with minimal waste.</p>
                </div>
              </div>

              <div className="rounded-xl bg-zinc-50 border border-zinc-200/80 p-3.5 flex items-start gap-3">
                <Clock className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-bold text-zinc-900 text-xs block">25-Year Certified Shelf Life</span>
                  <p className="text-[11px] text-zinc-500 leading-tight">Vacuum-sealed with food-grade nitrogen to guarantee long-term stability.</p>
                </div>
              </div>

              <div className="rounded-xl bg-zinc-50 border border-zinc-200/80 p-3.5 flex items-start gap-3">
                <ShieldCheck className="h-4 w-4 text-zinc-700 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-bold text-zinc-900 text-xs block">Prevents Muscle Wasting</span>
                  <p className="text-[11px] text-zinc-500 leading-tight">High-purity protein formulation halts tissue cannibalism in scarcity.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
