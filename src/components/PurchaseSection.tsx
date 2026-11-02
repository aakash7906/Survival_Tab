import { useState } from "react"
import { Check, ShoppingCart } from "lucide-react"

export interface ProductItem {
  id: string
  name: string
  flavor: string
  price: number
  isNew?: boolean
  illustration: string
}

const products: ProductItem[] = [
  {
    id: "st-chocolate",
    name: "Survival Tabs Chocolate",
    flavor: "Chocolate",
    price: 39.95,
    illustration: "🍫 Roasted Cocoa",
  },
  {
    id: "st-banana",
    name: "Survival Tabs Banana",
    flavor: "Banana",
    price: 39.95,
    isNew: true,
    illustration: "🍌 Natural Banana",
  },
  {
    id: "st-strawberry",
    name: "Survival Tabs Strawberry",
    flavor: "Strawberry",
    price: 39.95,
    illustration: "🍓 Wild Berry",
  },
  {
    id: "st-butterscotch",
    name: "Survival Tabs Butterscotch",
    flavor: "Butterscotch",
    price: 39.95,
    illustration: "🍁 Butterscotch",
  },
  {
    id: "st-vanilla",
    name: "Survival Tabs Vanilla Malt",
    flavor: "Vanilla Malt",
    price: 39.95,
    illustration: "🌼 Vanilla Bean",
  },
]

interface PurchaseSectionProps {
  onAddToCart: (item: ProductItem) => void
}

export function PurchaseSection({ onAddToCart }: PurchaseSectionProps) {
  const [addedId, setAddedId] = useState<string | null>(null)

  const handleAdd = (p: ProductItem) => {
    onAddToCart(p)
    setAddedId(p.id)
    setTimeout(() => setAddedId(null), 1500)
  }

  return (
    <section id="purchase" className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        
        {/* Camping Photo Banner directly from Screenshot */}
        <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-sm bg-zinc-900">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=2000&auto=format&fit=crop')`,
            }}
          />
        </div>

        {/* Section Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-zinc-900">
            Purchase Survival Tabs
          </h2>
          <div className="h-0.5 w-16 bg-red-600 mx-auto" />
        </div>

        {/* 5 Authentic Product Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((p) => {
            const isAdded = addedId === p.id

            return (
              <div
                key={p.id}
                className="flex flex-col items-center justify-between text-center p-4 rounded-xl border border-zinc-200 bg-white hover:shadow-lg transition-all"
              >
                {/* Bottle Visual Mockup with Yellow Label */}
                <div className="relative w-28 h-40 bg-zinc-900 rounded-lg p-1 border-2 border-zinc-700 flex flex-col items-center justify-between my-2 shadow">
                  {p.isNew && (
                    <span className="absolute -top-2 -right-2 rounded-full bg-red-600 text-white text-[9px] font-black px-1.5 py-0.5 shadow">
                      NEW!
                    </span>
                  )}
                  <div className="w-12 h-3 bg-zinc-600 rounded-t-sm" />
                  <div className="w-full flex-1 my-1 rounded bg-yellow-400 p-1 text-zinc-950 flex flex-col items-center justify-between">
                    <div className="flex items-center gap-0.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-600 border border-black" />
                      <span className="text-[6px] font-black">SURVIVAL TABS</span>
                    </div>
                    <div className="text-[8px] font-black text-red-700 leading-tight">
                      {p.flavor}
                    </div>
                    <div className="text-[6px] text-zinc-800 font-semibold">
                      100% US RDA
                    </div>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-900 rounded-b" />
                </div>

                {/* Flavor Illustration */}
                <div className="text-xs text-zinc-500 font-medium my-1">
                  {p.illustration}
                </div>

                {/* Name & Price */}
                <div className="my-2 space-y-1">
                  <h3 className="text-xs font-bold text-zinc-900 line-clamp-1">
                    {p.name}
                  </h3>
                  <div className="text-sm font-black text-zinc-950">
                    ${p.price.toFixed(2)}
                  </div>
                </div>

                {/* Action */}
                <button
                  onClick={() => handleAdd(p)}
                  className={`w-full mt-2 rounded-lg py-2 px-3 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    isAdded
                      ? "bg-emerald-600 text-white"
                      : "bg-red-600 hover:bg-red-700 text-white shadow-sm"
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="h-3.5 w-3.5" />
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="h-3 w-3" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
