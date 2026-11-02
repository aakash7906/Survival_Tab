import { CheckCircle2, ShieldCheck } from "lucide-react"

export function NutritionFactsSection() {
  const nutrients = [
    { name: "Vitamin A", amount: "5,000 IU", rda: "100%" },
    { name: "Vitamin C", amount: "60 mg", rda: "100%" },
    { name: "Vitamin D3", amount: "400 IU", rda: "100%" },
    { name: "Vitamin E", amount: "30 IU", rda: "100%" },
    { name: "Thiamin (B1)", amount: "1.5 mg", rda: "100%" },
    { name: "Riboflavin (B2)", amount: "1.7 mg", rda: "100%" },
    { name: "Niacin (B3)", amount: "20 mg", rda: "100%" },
    { name: "Vitamin B6", amount: "2.0 mg", rda: "100%" },
    { name: "Folic Acid", amount: "400 mcg", rda: "100%" },
    { name: "Vitamin B12", amount: "6.0 mcg", rda: "100%" },
    { name: "Biotin", amount: "300 mcg", rda: "100%" },
    { name: "Pantothenic Acid", amount: "10 mg", rda: "100%" },
    { name: "Calcium", amount: "250 mg", rda: "25%" },
    { name: "Iron", amount: "18 mg", rda: "100%" },
    { name: "Zinc", amount: "15 mg", rda: "100%" },
  ]

  return (
    <section
      id="nutrition"
      className="w-full rounded-2xl bg-white border border-zinc-200 p-6 sm:p-10 shadow-sm my-8"
    >
      <div className="space-y-8">
        
        {/* Title & Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] font-bold tracking-widest uppercase text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full inline-block">
            100% US RECOMMENDED DAILY ALLOWANCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-zinc-900">
            Official Nutrition Facts Sheet
          </h2>
          <div className="h-0.5 w-16 bg-red-600 mx-auto" />
          <p className="text-xs sm:text-sm text-zinc-600 pt-1">
            Based on a daily survival ration of 12 chewable tablets (240 calories, 99% bio-assimilated).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
          
          {/* FDA Nutrition Facts Label Box */}
          <div className="lg:col-span-5 rounded-xl bg-zinc-50 border-2 border-zinc-900 p-5 font-mono text-zinc-900 shadow">
            <div className="border-b-8 border-zinc-900 pb-2">
              <h3 className="font-sans font-black text-3xl tracking-tight leading-none">
                Nutrition Facts
              </h3>
              <p className="font-sans text-xs text-zinc-600 mt-1">
                Serving Size: 12 Chewable Tablets (3.9g each)
              </p>
              <p className="font-sans text-xs text-zinc-600">
                Servings Per Container: 15 to 60 Days
              </p>
            </div>

            <div className="border-b-4 border-zinc-900 py-2 flex justify-between items-baseline font-sans">
              <div>
                <span className="text-xs font-bold">Amount Per Serving</span>
                <div className="font-black text-2xl">Calories 240</div>
              </div>
              <span className="text-xs text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded">
                99% Bio-Absorbed
              </span>
            </div>

            <div className="divide-y divide-zinc-300 text-xs font-sans">
              <div className="flex justify-between py-1.5 font-bold">
                <span>Total Fat 12g</span>
                <span>18%</span>
              </div>
              <div className="flex justify-between py-1 pl-4 text-zinc-600">
                <span>Essential Fatty Acids 12g</span>
                <span></span>
              </div>
              <div className="flex justify-between py-1.5 font-bold">
                <span>Sodium 140mg</span>
                <span>6%</span>
              </div>
              <div className="flex justify-between py-1.5 font-bold">
                <span>Total Carbohydrate 31g</span>
                <span>10%</span>
              </div>
              <div className="flex justify-between py-1.5 font-bold">
                <span>Protein 4g (100% Bio-Value)</span>
                <span>8%</span>
              </div>
            </div>

            <div className="border-t-4 border-zinc-900 pt-2 text-[10px] text-zinc-500 font-sans leading-tight">
              * Percent Daily Values are based on a 2,000 calorie diet. Specially engineered to sustain life and eliminate muscular catabolism during acute crises.
            </div>
          </div>

          {/* 15 Essential Vitamins & Minerals Table */}
          <div className="lg:col-span-7 rounded-xl bg-zinc-50 border border-zinc-200 p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
              <h4 className="font-bold text-sm sm:text-base text-zinc-900">
                15 Essential Vitamins & Minerals (100% US RDA)
              </h4>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                Laboratory Verified
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {nutrients.map((n, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-white rounded-lg border border-zinc-200/80 px-3 py-2"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-zinc-800">{n.name}</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-zinc-500">{n.amount}</span>
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px]">
                      {n.rda}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-xs text-zinc-600 flex items-center gap-2 border-t border-zinc-200">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>
                Non-GMO &bull; Gluten Free &bull; Zero Artificial Preservatives &bull; Sealed with Nitrogen
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
