import {
  Clock,
  Zap,
  Shield,
  Activity,
  Flame,
  Droplets,
  PackageCheck,
  CheckCircle2,
} from "lucide-react"

export function FeatureGrid() {
  const features = [
    {
      icon: Clock,
      label: "25-Year Certified Shelf Life",
      desc: "Industrial nitrogen flush sealing guarantees zero nutritional decay over 2.5 decades.",
    },
    {
      icon: Zap,
      label: "99% Bio-Availability Matrix",
      desc: "Engineered for immediate cellular absorption, bypassing heavy GI digestive stress.",
    },
    {
      icon: Flame,
      label: "100% Daily Essential Nutrients",
      desc: "Full spectrum of 15 crucial vitamins, electrolytes, and minerals per 12 chewable tabs.",
    },
    {
      icon: Droplets,
      label: "Zero Water or Cooking Required",
      desc: "Ready to consume instantly in pitch-black conditions, blizzards, floods, or vehicles.",
    },
    {
      icon: PackageCheck,
      label: "Compact Mil-Spec Packaging",
      desc: "Replaces 40+ lbs of heavy canned emergency goods with a single ultralight bottle.",
    },
    {
      icon: Shield,
      label: "Manufactured in USA Standards",
      desc: "Strict cGMP pharmaceutical-grade facility standards with non-GMO, gluten-free ingredients.",
    },
  ]

  return (
    <section
      id="features"
      className="w-full rounded-[2.5rem] bg-[#F4F4F5] text-zinc-900 p-8 sm:p-14 lg:p-20 shadow-xl border border-zinc-200/80 my-8 sm:my-12 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Sticky Header + 2x3 Grid */}
        <div className="lg:col-span-6 lg:sticky lg:top-24 space-y-10">
          <div className="space-y-4">
            <span className="label-spec text-zinc-500 font-bold tracking-widest inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              BIOLOGICAL INTEGRITY ARCHITECTURE
            </span>
            <h2 className="heading-display text-4xl sm:text-5xl lg:text-[3.25rem] text-zinc-950">
              Engineered for the Most Hostile Conditions.
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              Traditional food rations spoil, require boiling water, and weigh down emergency go-bags. The Survival Tabs proprietary chewable formula provides concentrated nutritional survival rations that preserve cognitive alertness and stamina.
            </p>
          </div>

          {/* 2x3 Grid of Icon + Label Pairs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {features.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white p-5 border border-zinc-200/70 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-md hover:border-zinc-300"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 text-emerald-400 mb-3 shadow-inner">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-zinc-900 text-sm tracking-tight mb-1">
                    {item.label}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Column: Large Display Card with 105% hover scale image + Floating Glass System Analysis */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="group relative rounded-[2rem] overflow-hidden bg-zinc-950 border border-zinc-900 shadow-2xl min-h-[580px] flex flex-col justify-end p-6 sm:p-8">
            
            {/* Background Product / Wilderness Image with 105% scale */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1800&auto=format&fit=crop')`,
              }}
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
            
            {/* Product Badge Header */}
            <div className="relative z-10 flex items-center justify-between mb-auto pt-2">
              <span className="rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-white border border-white/15">
                Ration Container: Model-60D
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md px-3 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/30">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                Active Formulation
              </span>
            </div>

            {/* Floating Glass 'System Analysis' Component */}
            <div className="relative z-10 rounded-2xl bg-black/65 backdrop-blur-[20px] border border-white/15 p-6 shadow-2xl text-white space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <Activity className="h-5 w-5 text-emerald-400" />
                  <span className="font-semibold text-sm tracking-tight">System Analysis & Bio-Metrics</span>
                </div>
                <span className="text-[10px] font-mono tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  STATUS: OPTIMAL
                </span>
              </div>

              {/* Progress bars and status indicators */}
              <div className="space-y-3.5">
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1.5">
                    <span className="text-zinc-300">Digestive Bio-Absorption Rate</span>
                    <span className="text-emerald-400 font-mono">99.0%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full w-[99%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium mb-1.5">
                    <span className="text-zinc-300">15 Essential Vitamins & Micronutrients</span>
                    <span className="text-white font-mono">100% US RDA</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium mb-1.5">
                    <span className="text-zinc-300">Weight Reduction vs Heavy MRE/Cans</span>
                    <span className="text-emerald-300 font-mono">-92.4%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full w-[92%]" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs border-t border-white/10">
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>Chewable / Sublingual</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>Hermetic Foil Seal</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
