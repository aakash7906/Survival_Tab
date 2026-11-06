import { useState, useEffect } from "react"
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
    illustration: "🍌 Natural Banana",
    image: "/images/banana.png",
  },
  {
    id: "Orange",
    name: "Survival Tabs Orange",
    flavor: "Orange",
    price: 39.95,
    illustration: "🍊 Orange",
    image: "/images/orange.png",
  },
  {
    id: "st-Maple",
    name: "Survival Tabs Maple",
    flavor: "Maple",
    price: 39.95,
    illustration: "🍁 Maple",
    image: "/images/maple.png",
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

const bannerImages = [
  { src: "/banners/trekking-camping-hiking-and-wild-life-concept.jpeg", alt: "Trekking and Camping Wilderness Adventure" },
  { src: "/banners/friends-camping-at-campsite.jpeg", alt: "Friends Camping at Scenic Campsite" },
  { src: "/banners/party-camping-of-men-and-women-group-at-forest.jpeg", alt: "Group Forest Camping and Outdoor Exploration" },
  { src: "/banners/everest-base-camp-mountains-landscape.jpeg", alt: "Everest Base Camp High Altitude Expedition" },
  { src: "/banners/ama-dablam-mountain-in-himalaya-inspirational-2.jpeg", alt: "Ama Dablam Mountain Summit Expedition" },
  { src: "/banners/alaskan-large.jpg", alt: "Alaskan Wilderness Survival Experience" },
  { src: "/banners/airman-alaska_large.jpg", alt: "Airman Alaska Survival Preparedness" },
  { src: "/banners/apollo-mission.jpeg", alt: "Apollo Mission Space Heritage" },
  { src: "/banners/astronaut-in-outer-space-PLEE4QR.jpeg", alt: "Astronaut in Outer Space Space Food Nutrition" },
]

interface PurchaseSectionProps {
  onAddToCart: (item: ProductItem) => void
}

export function PurchaseSection({ onAddToCart }: PurchaseSectionProps) {
  const [addedId, setAddedId] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-swipe every 1.5 seconds (1500ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
    }, 1500)
    return () => clearInterval(timer)
  }, [])

  const handleAdd = (p: ProductItem) => {
    onAddToCart(p)
    setAddedId(p.id)
    setTimeout(() => setAddedId(null), 1500)
  }

  return (
    <section id="purchase" className="w-full py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4 space-y-10">

        {/* Camping & Adventure Photo Banner Carousel - Auto-Swipes every 1.5s */}
        <div className="relative w-full h-56 min-[480px]:h-72 sm:h-80 md:h-[420px] lg:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm bg-primary">
          {bannerImages.map((img, idx) => (
            <div
              key={img.src}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}

          {/* Subtle bottom gradient & dot indicators */}
          <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 bg-gradient-to-t from-primary/60 to-transparent z-20 pointer-events-none" />

          {/* Dots Indicator */}
          <div className="absolute bottom-3 sm:bottom-4 inset-x-0 flex items-center justify-center gap-1.5 sm:gap-2 z-30">
            {bannerImages.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentSlide(dotIdx)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${dotIdx === currentSlide
                    ? "w-6 sm:w-8 bg-primary-foreground"
                    : "w-1.5 sm:w-2 bg-primary-foreground/50 hover:bg-primary-foreground/80"
                  }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl min-[400px]:text-3xl sm:text-4xl font-light tracking-tight text-primary">
            Purchase Survival Tabs
          </h2>
          <div className="h-0.5 w-16 bg-red-600 mx-auto" />
        </div>

        {/* 5 Authentic Product Columns with Official Bottle Images */}
        <div className="grid grid-cols-1 min-[340px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5 lg:gap-6">
          {products.map((p) => {
            const isAdded = addedId === p.id

            return (
              <div
                key={p.id}
                className="flex flex-col items-center justify-between text-center p-3.5 sm:p-4 rounded-2xl border border-border bg-card hover:shadow-lg transition-all"
              >
                {/* Official Product Bottle Image from public/images */}
                <div className="relative w-full h-36 min-[400px]:h-40 sm:h-48 lg:h-52 flex items-center justify-center p-2 my-1 sm:my-2 group">
                  {p.isNew && (
                    <span className="absolute top-0 right-1 sm:right-2 z-10 rounded-full bg-red-600 text-primary-foreground text-[9px] font-black px-2 py-0.5 shadow-sm">
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
                <div className="text-[11px] sm:text-xs font-semibold text-muted-foreground mb-1">
                  {p.illustration}
                </div>

                {/* Product Title */}
                <h3 className="font-bold text-xs sm:text-sm text-primary leading-tight mb-2">
                  {p.name}
                </h3>

                {/* Price */}
                <div className="font-black text-base sm:text-lg text-primary mb-3">
                  ${p.price.toFixed(2)}
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAdd(p)}
                  className={`w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${isAdded
                      ? "bg-emerald-600 text-primary-foreground"
                      : "bg-red-600 hover:bg-red-700 text-primary-foreground shadow-sm hover:shadow active:scale-95"
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
