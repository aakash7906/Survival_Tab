import { Check, ShieldCheck, Sparkles } from "lucide-react"
import { ActionButton } from "@/components/ui/ActionButton"

interface RationPlan {
  id: string
  title: string
  tagline: string
  tabsCount: string
  days: string
  price: string
  popular?: boolean
  image: string
  features: string[]
  flavors: string[]
}

const rationPlans: RationPlan[] = [
  {
    id: "15-day",
    title: "15-Day Go-Bag Supply",
    tagline: "Ultra-compact vehicle & hiking survival pack",
    tabsCount: "180 Chewable Tablets",
    days: "15 Days Emergency Food",
    price: "$49.95",
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1000&auto=format&fit=crop",
    features: [
      "180 Tablets (12 tabs/day ration)",
      "100% Daily Essential Vitamins",
      "99% Bio-Availability Cellular Uptake",
      "25-Year Hermetic Seal Life",
      "Weighs Under 1.8 lbs (Ultralight)",
    ],
    flavors: ["Chocolate", "Vanilla", "Banana"],
  },
  {
    id: "30-day",
    title: "30-Day Emergency Reserve",
    tagline: "The gold standard home & cabin preparedness kit",
    tabsCount: "360 Chewable Tablets",
    days: "30 Days Emergency Food",
    price: "$89.95",
    popular: true,
    image: "https://images.unsplash.com/photo-1470246973918-29a93221c455?q=80&w=1000&auto=format&fit=crop",
    features: [
      "360 Tablets (Full Month Sustenance)",
      "100% Recommended Daily Intake",
      "Zero Water or Cooking Required",
      "25-Year Certified Shelf Life",
      "Free Priority Domestic Shipping",
    ],
    flavors: ["Chocolate", "Vanilla", "Strawberry", "Butterscotch", "Banana"],
  },
  {
    id: "60-day",
    title: "60-Day Master Bunker Pack",
    tagline: "Maximum long-term security for families & crews",
    tabsCount: "720 Chewable Tablets",
    days: "60 Days Emergency Food",
    price: "$169.95",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop",
    features: [
      "720 Tablets (Dual Sealed Canisters)",
      "Complete 15-Vitamin Profile",
      "Extreme Temperature Resilient",
      "25-Year Guarantee with Nitrogen Flush",
      "Includes Survival Preparedness Manual",
    ],
    flavors: ["All 5 Flavors Variety Selection"],
  },
]

export function PricingBentoGrid() {
  return (
    <section
      id="pricing"
      className="w-full rounded-[2.5rem] bg-[#F4F4F5] text-zinc-900 p-8 sm:p-14 lg:p-20 shadow-xl border border-zinc-200/80 my-8 sm:my-12 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="label-spec text-zinc-500 font-bold tracking-widest inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            DIRECT DEPLOYMENT RATIONS
          </span>
          <h2 className="heading-display text-4xl sm:text-5xl text-zinc-950">
            Emergency Food Rations Bento Grid
          </h2>
          <p className="text-zinc-600 font-light text-base sm:text-lg">
            Choose your mission profile. Sealed in high-density canisters with 25-year guaranteed stability. Made in the USA.
          </p>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {rationPlans.map((plan) => {
            const isPopular = plan.popular

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between bg-white rounded-[2rem] border transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] overflow-hidden ${
                  isPopular
                    ? "border-emerald-500/80 shadow-lg ring-2 ring-emerald-400/20"
                    : "border-zinc-200/80 shadow-sm"
                }`}
              >
                {/* Top Half: 64px (or high impact banner) with gradient-to-black bottom overlay */}
                <div className="relative h-44 w-full overflow-hidden bg-zinc-900">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                    style={{ backgroundImage: `url('${plan.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  {/* Badges on image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white border border-white/15">
                      {plan.days}
                    </span>
                    {isPopular && (
                      <span className="rounded-full bg-emerald-400 text-zinc-950 px-3 py-1 text-[11px] font-bold shadow-md inline-flex items-center gap-1">
                        <Sparkles className="h-3 w-3" />
                        MOST POPULAR
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="text-xs font-mono text-emerald-300 tracking-wider">
                      {plan.tabsCount}
                    </div>
                    <div className="font-bold text-xl tracking-tight leading-tight">
                      {plan.title}
                    </div>
                  </div>
                </div>

                {/* Bottom Half: Padding 1.5rem, secondary text for features, price, and full-width Action Button */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-baseline justify-between border-b border-zinc-100 pb-4">
                      <div>
                        <span className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
                          {plan.price}
                        </span>
                        <span className="text-xs text-zinc-500 ml-1">/ one-time order</span>
                      </div>
                      <span className="label-spec text-zinc-400 text-[9px]">25-YR LIFE</span>
                    </div>

                    <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                      {plan.tagline}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2.5 pt-1">
                      {plan.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-700">
                          <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                            <Check className="h-2.5 w-2.5 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Flavor selection tag */}
                    <div className="pt-2">
                      <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider block mb-1.5">
                        Available Flavors:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {plan.flavors.map((fl) => (
                          <span
                            key={fl}
                            className="rounded-md bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-700 border border-zinc-200"
                          >
                            {fl}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Full-width Action Button */}
                  <div className="pt-2">
                    <ActionButton
                      variant={isPopular ? "emerald" : "dark"}
                      className="w-full"
                      onClick={() => {
                        alert(`Selected ${plan.title} (${plan.price}). Ready for checkout.`)
                      }}
                    >
                      <span>Order {plan.days.split(" ")[0]} Rations</span>
                    </ActionButton>
                  </div>

                </div>

              </div>
            )
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="rounded-2xl bg-white border border-zinc-200/80 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-emerald-400">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-zinc-900">
                100% Shelf-Life & Satisfaction Warranty
              </div>
              <div className="text-xs text-zinc-500 font-normal">
                Manufactured in FDA-registered, cGMP-certified facilities in the United States of America.
              </div>
            </div>
          </div>
          <div className="text-xs text-zinc-500 font-medium">
            Toll-Free Support: <strong className="text-zinc-900 font-semibold">1-800-453-3238</strong>
          </div>
        </div>

      </div>
    </section>
  )
}
