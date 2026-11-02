import { useState } from "react"
import { Sparkles, Check } from "lucide-react"

interface Flavor {
  id: string
  name: string
  tag: string
  color: string
  description: string
  notes: string[]
  isNew?: boolean
}

const flavors: Flavor[] = [
  {
    id: "banana",
    name: "Banana Cream",
    tag: "NEW RELEASE",
    color: "from-amber-400/20 to-yellow-500/10 border-yellow-500/30",
    description: "Smooth, sweet natural banana profile with balanced vanilla undertones. High palatability during prolonged stress situations.",
    notes: ["Natural banana essence", "Electrolyte potassium fortified", "Pleasant chewable texture"],
    isNew: true,
  },
  {
    id: "chocolate",
    name: "Rich Chocolate",
    tag: "BESTSELLER",
    color: "from-amber-900/30 to-amber-950/20 border-amber-800/30",
    description: "Deep roasted cocoa taste that satisfies caloric cravings and provides psychological comfort in survival scenarios.",
    notes: ["Real cocoa bean extract", "Natural antioxidant polyphenols", "No chalky aftertaste"],
  },
  {
    id: "vanilla",
    name: "Pure Vanilla",
    tag: "CLASSIC",
    color: "from-stone-200/10 to-stone-400/5 border-stone-400/20",
    description: "Mellow Madagascar-inspired vanilla bean flavor. Easy on the palate for continuous daily use over weeks.",
    notes: ["Pure vanilla infusion", "Mild and non-irritating", "Ideal for sensitive stomachs"],
  },
  {
    id: "strawberry",
    name: "Wild Strawberry",
    tag: "POPULAR",
    color: "from-rose-500/20 to-pink-500/10 border-rose-500/30",
    description: "Crisp berry flavor with a gentle tart finish to stimulate salivation and maintain hydration comfort.",
    notes: ["Natural berry extract", "Vitamin C enriched", "Invigorating fruity profile"],
  },
  {
    id: "butterscotch",
    name: "Golden Butterscotch",
    tag: "FAVORITE",
    color: "from-orange-400/20 to-amber-600/10 border-amber-500/30",
    description: "Rich caramelized sugar and butterscotch aroma. High energy perception and sustained oral satisfaction.",
    notes: ["Golden caramel notes", "Sustained flavor release", "Morale-boosting taste"],
  },
]

export function FlavorShowcase() {
  const [selectedFlavor, setSelectedFlavor] = useState<string>("banana")

  const current = flavors.find((f) => f.id === selectedFlavor) || flavors[0]

  return (
    <section
      id="flavors"
      className="relative w-full rounded-[2.5rem] bg-gradient-to-b from-[#18181B] to-black text-white p-8 sm:p-14 lg:p-20 shadow-2xl border border-white/10 my-8 sm:my-12 overflow-hidden"
    >
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <span className="label-spec text-emerald-400 font-bold tracking-widest inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              FLAVOR PALATABILITY ENGINEERING
            </span>
            <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-white">
              Emergency Food That Actually Tastes Good.
            </h2>
            <p className="body-spec text-zinc-400 max-w-xl text-sm sm:text-base">
              Survival psychology demonstrates that flavor fatigue causes food refusal during crises. Our 5 distinct flavor profiles maintain appetite and morale.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 border border-emerald-400/30 px-4 py-2 text-xs text-emerald-300">
            <Sparkles className="h-4 w-4 text-emerald-400" />
            <span>Featuring 3 New Flavor Formulas</span>
          </div>
        </div>

        {/* Flavor Selector Tabs */}
        <div className="flex overflow-x-auto pb-2 gap-3 scrollbar-none">
          {flavors.map((fl) => {
            const isSelected = selectedFlavor === fl.id
            return (
              <button
                key={fl.id}
                onClick={() => setSelectedFlavor(fl.id)}
                className={`relative flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? "bg-white text-zinc-950 shadow-[0_0_20px_rgba(255,255,255,0.25)] scale-105"
                    : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                <span>{fl.name}</span>
                {fl.isNew && (
                  <span className="rounded-full bg-emerald-400 text-zinc-950 px-2 py-0.5 text-[9px] font-extrabold">
                    NEW
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Flavor Showcase Card */}
        <div className="rounded-[2rem] bg-white/[0.04] backdrop-blur-[16px] border border-white/10 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">
                {current.name} Ration Formula
              </span>
              <span className="rounded-full bg-emerald-400/15 border border-emerald-400/30 px-3 py-1 text-xs font-semibold text-emerald-300">
                {current.tag}
              </span>
            </div>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {current.description}
            </p>
            <div className="space-y-2.5 pt-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
                Sensory & Formulation Characteristics:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {current.notes.map((note, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-xl bg-black/40 border border-white/10 p-3 text-xs text-zinc-200"
                  >
                    <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl bg-black/60 border border-white/10 p-6 space-y-4">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
              NUTRITIONAL FACTS (PER 12 TABS / 24H)
            </div>
            <div className="divide-y divide-white/10 text-xs">
              <div className="flex justify-between py-2 text-zinc-300">
                <span>Serving Size</span>
                <span className="font-semibold text-white">12 Chewable Tablets</span>
              </div>
              <div className="flex justify-between py-2 text-zinc-300">
                <span>Bio-Absorption Absorption</span>
                <span className="font-semibold text-emerald-400">99.0%</span>
              </div>
              <div className="flex justify-between py-2 text-zinc-300">
                <span>15 Essential Daily Vitamins</span>
                <span className="font-semibold text-white">100% RDA</span>
              </div>
              <div className="flex justify-between py-2 text-zinc-300">
                <span>Shelf Life Duration</span>
                <span className="font-semibold text-emerald-400">25 Years Certified</span>
              </div>
              <div className="flex justify-between py-2 text-zinc-300">
                <span>Preparation Requirement</span>
                <span className="font-semibold text-white">None (Chew Directly)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
