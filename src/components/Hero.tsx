import { ArrowUpRight, Clock, ShieldCheck, Truck, Zap } from "lucide-react"

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative w-full min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] flex flex-col justify-between overflow-hidden bg-zinc-950 text-white selection:bg-red-600 selection:text-white"
    >
      {/* Background Image with Enhanced Brightness & Transparent Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center sm:bg-center brightness-110 contrast-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2600&auto=format&fit=crop')`,
          }}
        />
        {/* Clean, lightweight transparent overlay allowing full image clarity */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-black/15 to-black/40" />
      </div>

      {/* Top Header Strip inside Hero (Technical coordinates & Origin badge like reference) */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 pt-6 sm:pt-8 flex items-center justify-between text-[11px] sm:text-xs font-mono uppercase tracking-widest">
        {/* Left: Red spec block + Coordinates */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/15 backdrop-blur-md">
          <span className="inline-block h-2 w-2 bg-red-600 animate-pulse rounded-full" />
          <span className="text-zinc-200 font-semibold tracking-wider">
            39°05&apos;N 93°34&apos;W
          </span>
          <span className="hidden md:inline text-zinc-500">/</span>
          <span className="hidden md:inline text-zinc-300">
            MIL-SPEC EMERGENCY NUTRITION
          </span>
        </div>
      </div>

      {/* Main Center Content (Badge, Massive Heading, Subtitle, Dual CTAs) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 my-auto text-center flex flex-col items-center">
        
        {/* Center Pill / Brand Stamp - Enlarged & Shifted Upwards */}
        <div className="inline-flex items-center gap-3 sm:gap-3.5 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-black/60 border border-white/25 backdrop-blur-md -translate-y-3 sm:-translate-y-5 md:-translate-y-6 mb-8 sm:mb-12 text-xs sm:text-sm md:text-base tracking-wider font-mono text-zinc-100 uppercase shadow-2xl transition-transform duration-300">
          <img
            src="/images/survival_tabs_logo_outlined.png"
            alt="Survival Tabs"
            className="h-5 sm:h-6 md:h-7 w-auto object-contain"
          />
          <span className="text-red-500 font-black text-xs sm:text-sm">▲</span>
          <span className="font-bold text-white tracking-wider">THE SURVIVAL TABS</span>
          <span className="text-zinc-500">/</span>
          <span className="text-zinc-300 font-medium">EST. 1960s</span>
        </div>

        {/* Primary Hero Heading (Massive, Clean Sans-Serif with period like reference) */}
        <h1 className="text-3xl min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] max-w-4xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          The best nutrition in the smallest packaging.
        </h1>

        {/* Centered Descriptive Paragraph */}
        <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-zinc-100 max-w-2xl font-normal leading-relaxed drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
          Emergency food rations providing 100% of 15 essential vitamins and minerals.
        </p>

        {/* Dual Call-to-Action Buttons (Reference image layout: Red Primary + Dark Translucent Secondary) */}
        <div className="mt-8 sm:mt-10 flex flex-col min-[480px]:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          {/* Primary Action Button */}
          <button
            onClick={() => scrollTo("#purchase")}
            className="w-full min-[480px]:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-7 sm:px-8 py-3.5 sm:py-4 shadow-xl hover:shadow-red-600/25 transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>ORDER RATIONS NOW</span>
            <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
          </button>

          {/* Secondary Action Button */}
          <button
            onClick={() => scrollTo("#nutrition")}
            className="w-full min-[480px]:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-black/50 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 font-bold text-xs sm:text-sm uppercase tracking-widest px-7 sm:px-8 py-3.5 sm:py-4 backdrop-blur-md transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>NUTRITION FACTS</span>
            <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
          </button>
        </div>

      </div>

      {/* Bottom Technical Spec Bar (Matching reference baseline details) */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/40 backdrop-blur-md px-4 sm:px-8 lg:px-12 py-3.5 sm:py-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-4 text-xs font-medium text-zinc-300">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-amber-400 shrink-0" />
            <span>25-Year Certified Shelf Life</span>
          </div>

          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-red-500 shrink-0" />
            <span>99% Immediate Bio-Absorption</span>
          </div>

          <div className="flex items-center gap-2">
            <Truck className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Free Shipping Over $150</span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-blue-400 shrink-0" />
            <span>100% US RDA of 15 Vitamins &amp; Minerals</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
