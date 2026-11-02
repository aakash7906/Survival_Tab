export function EmergencyRationsSection() {
  return (
    <section id="emergency" className="w-full py-12 sm:py-16 bg-white border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-14">
        
        {/* Made in the USA Globe & Flag Graphic from Screenshot */}
        <div className="shrink-0 flex flex-col items-center text-center">
          <div className="relative flex items-center justify-center">
            {/* Globe */}
            <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-sky-600 via-blue-600 to-emerald-500 shadow-lg flex items-center justify-center text-white border-2 border-white">
              <span className="text-2xl font-black tracking-tight">USA</span>
            </div>
            {/* USA Flag badge banner */}
            <div className="absolute -bottom-2.5 rounded bg-red-600 border border-white px-3 py-0.5 text-white shadow font-black text-[10px] tracking-wider whitespace-nowrap">
              MADE IN THE USA
            </div>
          </div>
        </div>

        {/* Text Block directly from survivaltabs.com */}
        <div className="space-y-4 text-center md:text-left flex-1">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950 uppercase">
            EMERGENCY FOOD RATIONS
          </h2>

          <div className="space-y-3 text-zinc-700 text-sm sm:text-base leading-relaxed">
            <p className="font-semibold text-zinc-900">
              The Survival Tabs reliable backup for the &ldquo;drop-everything-and-go&rdquo; scenario.
            </p>
            <p className="font-bold text-red-600">
              60 Days Food Supply Order (1 Jar)
            </p>
            <p>
              For stay-at-home home protection, the Survival Tabs are a solid emergency, shelf-stable, compact backup food supply.
            </p>
            <p>
              The Survival Tabs emergency food rations provide 100% of the US RDA of 15 essential vitamins and minerals for emergency nutrition and survival food kits. Highly assimilated and compact.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
