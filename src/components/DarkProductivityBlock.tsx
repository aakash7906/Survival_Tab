import { useState } from "react"
import { Terminal } from "lucide-react"

export function DarkProductivityBlock() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: "01",
      title: "Chewable Sublingual Uptake",
      description:
        "Place one tablet in mouth every 1 to 2 hours. Sublingual absorption bypasses prolonged gastrointestinal transit, providing instant glycogen stabilization without requiring boiled water or cooking gear.",
      tag: "RAPID DEPLOYMENT",
    },
    {
      number: "02",
      title: "Precision Micronutrient Delivery",
      description:
        "Formulated with 100% of 15 essential daily vitamins and minerals. Restores electrolyte homeostasis, prevents muscle catabolism, and maintains peak cognitive decision-making during crisis.",
      tag: "METABOLIC DEFENSE",
    },
    {
      number: "03",
      title: "Cryo-Barrier 25-Year Stability",
      description:
        "Sealed in high-density pharmaceutical polymer with oxygen absorber inserts. Survives thermal shock extremes (-20°F to 140°F) with verified 25-year nutritional bioavailability.",
      tag: "SURVIVAL ASSURANCE",
    },
  ]

  return (
    <section
      id="productivity"
      className="relative w-full rounded-[2.5rem] bg-[#18181B] text-white p-8 sm:p-14 lg:p-20 shadow-2xl border border-white/10 my-8 sm:my-12 overflow-hidden"
    >
      {/* Grayscale Grid Lineart Overlay */}
      <div className="absolute inset-0 grid-lineart opacity-70 pointer-events-none" />

      {/* Grain Texture Overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* Subtle bottom-heavy radial gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#18181B]/50 to-black/90 pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="mb-12 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="label-spec text-emerald-400 font-bold tracking-widest">
              DEPLOYMENT PROTOCOL
            </span>
          </div>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl">
            Streamlined Sustenance for High-Stress Operations.
          </h2>
          <p className="body-spec text-zinc-400 text-sm sm:text-base">
            Every step is engineered for simplicity when standard logistics break down.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: List of numbered steps in rounded-2xl boxes */}
          <div className="lg:col-span-6 space-y-4">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border ${
                    isSelected
                      ? "bg-white/[0.08] border-emerald-400/40 shadow-xl scale-[1.02]"
                      : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-2xl font-bold text-emerald-400">
                        {step.number}
                      </span>
                      <h3 className="font-bold text-lg text-white tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                    <span className="label-spec text-[9px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                      {step.tag}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed pl-9">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Right Column: 3D-transformed mock-up window rotated 3 degrees */}
          <div className="lg:col-span-6 flex justify-center perspective-1000 py-6">
            <div className="relative w-full max-w-lg transition-transform duration-500 ease-out transform lg:rotate-3 hover:rotate-0">
              
              {/* Window Frame */}
              <div className="rounded-2xl border border-white/15 bg-black/80 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden">
                
                {/* Window Title Bar */}
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-white/[0.04]">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 font-mono text-xs text-zinc-400">
                      spec-matrix.v25.json
                    </span>
                  </div>
                  <Terminal className="h-4 w-4 text-zinc-400" />
                </div>

                {/* Window Code Content */}
                <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-zinc-300 space-y-2">
                  <div className="text-zinc-500">// SurvivalTabs Military Spec Sheet 2026</div>
                  <div className="text-emerald-400">&#123;</div>
                  <div className="pl-4">
                    <span className="text-zinc-400">"product"</span>:{" "}
                    <span className="text-yellow-300">"The Survival Tabs"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">"ration_standard"</span>:{" "}
                    <span className="text-yellow-300">"12 tablets / 24 hours"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">"shelf_life_verified"</span>:{" "}
                    <span className="text-emerald-400">"25 Years Sealed"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">"bioavailability"</span>:{" "}
                    <span className="text-emerald-400">0.99</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">"nutritional_payload"</span>: &#123;
                    <div className="pl-4 text-zinc-300">
                      <div>"vitamin_a": "100% US RDA",</div>
                      <div>"vitamin_c": "100% US RDA",</div>
                      <div>"vitamin_d_e_k": "100% US RDA",</div>
                      <div>"vitamin_b_complex": "100% US RDA",</div>
                      <div>"iron_zinc_calcium": "100% US RDA"</div>
                    </div>
                    &#125;,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">"operational_temp"</span>:{" "}
                    <span className="text-yellow-300">"-20°F to 140°F"</span>
                  </div>
                  <div className="text-emerald-400">&#125;</div>
                </div>

                {/* Sub-bar status */}
                <div className="border-t border-white/10 px-4 py-2.5 bg-white/[0.02] flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                  <span>MEM: 100% STABLE</span>
                  <span className="text-emerald-400">USA CERTIFIED cGMP</span>
                </div>

              </div>

              {/* Bounce animated status tag at the bottom-right */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 z-20 animate-status-bounce">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400 text-zinc-950 font-bold text-xs px-4 py-2 shadow-[0_10px_25px_rgba(52,211,153,0.4)] border border-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-zinc-950 animate-ping" />
                  <span>● LIVE SPEC: 100% MISSION READY</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
