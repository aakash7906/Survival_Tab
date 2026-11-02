import { useState } from "react"
import { Check, ShoppingCart } from "lucide-react"

export interface ProductItem {
  id: string
  name: string
  flavor: string
  price: number
  isNew?: boolean
  illustration: string
  image: string
}

const products: ProductItem[] = [
  {
    id: "st-chocolate",
    name: "Survival Tabs Chocolate",
    flavor: "Chocolate",
    price: 39.95,
    illustration: "🍫 Roasted Cocoa",
    image: "/images/chocolate.png",
  },
  {
    id: "st-banana",
    name: "Survival Tabs Banana",
    flavor: "Banana",
    price: 39.95,
    isNew: true,
    illustration: "🍌 Natural Banana",
    image: "/images/banana.png",
  },
  {
    id: "st-strawberry",
    name: "Survival Tabs Strawberry",
    flavor: "Strawberry",
    price: 39.95,
    illustration: "🍓 Wild Berry",
    image: "/images/orange.jpg",
  },
  {
    id: "st-butterscotch",
    name: "Survival Tabs Butterscotch",
    flavor: "Butterscotch",
    price: 39.95,
    illustration: "🍁 Butterscotch",
    image: "/images/maple.jpg",
  },
  {
    id: "st-vanilla",
    name: "Survival Tabs Vanilla Malt",
    flavor: "Vanilla Malt",
    price: 39.95,
    illustration: "🌼 Vanilla Bean",
    image: "/images/vanila malt.png",
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

        {/* 5 Authentic Product Columns with Official Bottle Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((p) => {
            const isAdded = addedId === p.id

            return (
              <div
                key={p.id}
                className="flex flex-col items-center justify-between text-center p-4 rounded-xl border border-zinc-200 bg-white hover:shadow-lg transition-all"
              >
                {/* Official Product Bottle Image from public/images */}
                <div className="relative w-full h-44 sm:h-52 flex items-center justify-center p-2 my-2 group">
                  {p.isNew && (
                    <span className="absolute top-0 right-2 z-10 rounded-full bg-red-600 text-white text-[9px] font-black px-2 py-0.5 shadow-sm">
                      NEW!
                    </span>
                  )}
                  <img
                    src={p.image}
                    alt={p.name}
                    className="max-h-full max-w-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Flavor Illustration */}
                <div className="text-xs font-semibold text-zinc-500 mb-1">
                  {p.illustration}
                </div>

                {/* Product Title */}
                <h3 className="font-bold text-sm text-zinc-900 leading-tight mb-2">
                  {p.name}
                </h3>

                {/* Price */}
                <div className="font-black text-lg text-zinc-950 mb-3">
                  ${p.price.toFixed(2)}
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAdd(p)}
                  className={`w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isAdded
                      ? "bg-emerald-600 text-white"
                      : "bg-red-600 hover:bg-red-700 text-white shadow-sm hover:shadow"
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                      <span>Added!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="h-3.5 w-3.5" />
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
