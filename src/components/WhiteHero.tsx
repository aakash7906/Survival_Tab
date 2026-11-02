import { ShieldCheck, Truck, Clock } from "lucide-react"

export function WhiteHero() {
  const scrollToPurchase = () => {
    const el = document.querySelector("#purchase")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-white">
      {/* Hero Wilderness Image Banner from survivaltabs.com */}
      <div className="relative w-full h-[460px] sm:h-[520px] rounded-2xl overflow-hidden bg-zinc-900 shadow-md">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2400&auto=format&fit=crop')`,
          }}
        />
        {/* Soft dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-between py-10 sm:py-14 text-white text-center sm:text-left">
          
          {/* Main Brand & Bottle Lockup */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 my-auto">
            <div className="space-y-4 max-w-xl">
              {/* Target Brand Logo */}
              <div className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20">
                <div className="relative h-8 w-8 rounded-full bg-red-600 border border-white flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-black text-xl tracking-tight leading-none text-white">
                    SURVIVAL TABS<span className="text-red-500 text-xs">®</span>
                  </span>
                  <span className="text-xs font-serif italic text-amber-300 font-semibold leading-none mt-0.5">
                    &ldquo;Just In Case&rdquo;
                  </span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-md">
                The Best Nutrition in the Smallest Packaging
              </h1>

              <p className="text-zinc-200 text-sm sm:text-base font-medium max-w-lg">
                Emergency food rations providing 100% of 15 essential vitamins and minerals. Certified 25-year shelf life.
              </p>

              <div>
                <button
                  onClick={scrollToPurchase}
                  className="rounded-full bg-red-600 hover:bg-red-700 active:scale-95 text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                >
                  Order Survival Tabs
                </button>
              </div>
            </div>

            {/* Authentic Canister Graphic */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="w-36 h-52 sm:w-44 sm:h-60 rounded-xl bg-zinc-900 border-2 border-zinc-600 p-1.5 flex flex-col items-center justify-between shadow-2xl">
                <div className="w-16 h-3.5 bg-zinc-700 rounded-t-sm" />
                <div className="w-full flex-1 my-1.5 rounded bg-yellow-400 p-2 text-zinc-950 flex flex-col items-center justify-between text-center shadow-inner">
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-red-600 border border-black" />
                    <span className="text-[8px] font-black tracking-tight">SURVIVAL TABS</span>
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[7px] uppercase font-bold text-zinc-800">
                      Emergency Food Ration
                    </div>
                    <div className="text-xs font-black text-red-700 leading-tight">
                      Banana Flavor
                    </div>
                    <div className="text-[7px] font-bold text-zinc-900">
                      15 Essential Vitamins & Minerals
                    </div>
                  </div>
                  <div className="w-full border-t border-black/20 pt-0.5 flex justify-between text-[7px] font-bold text-zinc-800">
                    <span>MADE IN USA</span>
                    <span>25-YR LIFE</span>
                  </div>
                </div>
                <div className="w-full h-2.5 bg-zinc-900 rounded-b" />
              </div>
            </div>
          </div>

          {/* 3 Authentic Pill Badges from Screenshot */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-4 border-t border-white/20 text-xs font-semibold">
            <div className="flex items-center gap-2 rounded-full bg-black/50 backdrop-blur-md px-4 py-1.5 border border-white/15">
              <Clock className="h-3.5 w-3.5 text-amber-400" />
              <span>25-Year Shelf Life</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-black/50 backdrop-blur-md px-4 py-1.5 border border-white/15">
              <Truck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Free Shipping On Orders Over $150</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-black/50 backdrop-blur-md px-4 py-1.5 border border-white/15">
              <ShieldCheck className="h-3.5 w-3.5 text-red-400" />
              <span>Gluten-Free & Non-GMO</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
