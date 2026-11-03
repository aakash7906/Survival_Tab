import { Clock, ShieldCheck, Truck } from "lucide-react"

export function Hero() {
  const scrollToPurchase = () => {
    const el = document.querySelector("#purchase")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-white">
      {/* Hero Wilderness Image Banner from survivaltabs.com with responsive height */}
      <div className="relative w-full min-h-[480px] sm:min-h-[520px] lg:h-[560px] rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-900 shadow-md">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2400&auto=format&fit=crop')`,
          }}
        />
        {/* Soft dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Hero Content */}
        <div className="relative z-10 h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between py-6 sm:py-10 lg:py-12 text-white text-center sm:text-left">
          
          {/* Main Brand & Bottle Lockup */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 my-auto">
            <div className="space-y-3 sm:space-y-4 max-w-xl">
              {/* Target Brand Logo from public/images */}
              <div className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-md px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-2xl border border-white/20">
                <img
                  src="/images/survival_tabs_logo_outlined.png"
                  alt="Survival Tabs"
                  className="h-8 sm:h-11 md:h-12 w-auto object-contain"
                />
              </div>

              <h1 className="text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white drop-shadow-md leading-tight">
                The Best Nutrition in the Smallest Packaging
              </h1>

              <p className="text-zinc-200 text-xs sm:text-base font-medium max-w-lg leading-relaxed">
                Emergency food rations providing 100% of 15 essential vitamins and minerals. Certified 25-year shelf life.
              </p>

              <div className="pt-1 sm:pt-2">
                <button
                  onClick={scrollToPurchase}
                  className="rounded-full bg-red-600 hover:bg-red-700 text-white font-bold px-5 sm:px-6 py-2.5 text-xs sm:text-sm shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95"
                >
                  Order Rations Now
                </button>
              </div>
            </div>

            {/* Authentic Bottle Image seamlessly blended without harsh white background */}
            <div className="relative shrink-0 flex flex-col items-center justify-center group translate-y-0 sm:translate-y-6 lg:translate-y-12">
              {/* Soft warm ambient lighting behind bottle */}
              <div className="absolute inset-0 bg-amber-400/20 blur-3xl rounded-full scale-110 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-70" />
              
              <img
                src="/images/banana.png"
                alt="The Survival Tabs Banana"
                className="relative z-10 h-44 sm:h-56 lg:h-72 w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.55)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Authentic Pill Badges with Made in USA */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-2.5 lg:gap-3 pt-4 border-t border-white/20 text-[11px] sm:text-xs font-semibold">
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-black/50 backdrop-blur-md px-2.5 sm:px-3.5 py-1.5 border border-white/15">
              <Clock className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              <span>25-Year Shelf Life</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-black/50 backdrop-blur-md px-2.5 sm:px-3.5 py-1.5 border border-white/15">
              <Truck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span>Free Shipping Over $150</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-black/50 backdrop-blur-md px-2.5 sm:px-3.5 py-1.5 border border-white/15">
              <ShieldCheck className="h-3.5 w-3.5 text-red-400 shrink-0" />
              <span>Gluten-Free &amp; Non-GMO</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-black/50 backdrop-blur-md px-2.5 sm:px-3.5 py-1.5 border border-white/15">
              <img
                src="/images/made-in-usa.png"
                alt="Made in USA"
                className="h-3.5 sm:h-4 w-auto object-contain shrink-0"
              />
              <span>Made in the USA</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero;
