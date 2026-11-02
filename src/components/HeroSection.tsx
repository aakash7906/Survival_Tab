import { ShieldCheck, Zap, Award } from "lucide-react"
import { ActionButton } from "@/components/ui/ActionButton"
import { GlassStatCard } from "@/components/ui/GlassStatCard"

export function HeroSection() {
  const scrollToPricing = () => {
    const el = document.querySelector("#pricing")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToFeatures = () => {
    const el = document.querySelector("#features")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-zinc-950 flex flex-col justify-center"
    >
      {/* Abstract Background Image with 60% opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-luminosity scale-105 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2400&auto=format&fit=crop')`,
        }}
      />

      {/* Gradient Overlay from zinc-950/40 to zinc-950/90 */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/70 to-zinc-950/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      {/* Grain Overlay at 15% Opacity */}
      <div className="absolute inset-0 grain-overlay" />

      {/* Massive Background Typography 'SURVIVE' at 22vw with 3% opacity and blur */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[22vw] font-black tracking-tighter text-white opacity-[0.03] blur-[1px] leading-none whitespace-nowrap">
          SURVIVE
        </span>
      </div>

      {/* Content Container (Max width 1600px aligned) */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 py-28 sm:py-32 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography Block */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 animate-fade-in-up">
            {/* Top Label with Emerald Highlight */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] backdrop-blur-[12px] border border-white/10 px-3.5 py-1.5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span className="label-spec text-white tracking-widest">
                OFFICIAL EMERGENCY FOOD RATIONS • MADE IN USA
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="heading-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] text-white">
              The Best Nutrition in the{" "}
              <span className="bg-gradient-to-r from-white via-zinc-200 to-emerald-400 bg-clip-text text-transparent">
                Smallest Packaging.
              </span>
            </h1>

            {/* Subtext Body */}
            <p className="body-spec text-base sm:text-lg lg:text-xl text-zinc-400 max-w-2xl leading-relaxed">
              Developed for extreme wilderness endurance and disaster preparedness. Just 12 chewable tabs daily deliver 100% of 15 essential vitamins and minerals with an unmatched 99% bio-absorption rate and 25-year shelf stability.
            </p>

            {/* Action Buttons & Trust Highlights */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <ActionButton onClick={scrollToPricing}>
                Get Emergency Rations
              </ActionButton>

              <button
                onClick={scrollToFeatures}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 border border-white/10 backdrop-blur-[12px] transition-all duration-300"
              >
                <span>Inspect Nutritional Spec</span>
              </button>
            </div>

            {/* Micro Trust Proof */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-zinc-400 border-t border-white/10 w-full max-w-lg">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Zero Preparation Needed</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-emerald-400" />
                <span>Non-GMO & Gluten Free</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-emerald-400" />
                <span>99% Bio-Absorption</span>
              </div>
            </div>
          </div>

          {/* Right Column: Vertical Stack of Glass Stats Cards */}
          <div className="lg:col-span-5 flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-4 animate-fade-in-up [animation-delay:200ms]">
            <GlassStatCard
              metric="25 YRS"
              label="Guaranteed Shelf Life"
              subtext="Hermetically sealed barrier impervious to moisture, oxidation, and heat."
              highlight
            />
            <GlassStatCard
              metric="99%"
              label="Bio-Availability"
              subtext="Nearly 100% absorbed by your body within minutes with zero digestion lag."
            />
            <GlassStatCard
              metric="100%"
              label="15 Essential Vitamins & Minerals"
              subtext="Full daily recommended intake to sustain physical vitality and mental clarity."
            />
            <GlassStatCard
              metric="12 TABS"
              label="Complete 24-Hour Sustenance"
              subtext="Replaces heavy canned rations with ultralight, pocket-sized rations."
            />
          </div>

        </div>
      </div>
    </section>
  )
}
