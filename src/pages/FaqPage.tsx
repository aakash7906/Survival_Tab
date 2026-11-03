import { useState } from "react"
import {
  ChevronDown,
  HelpCircle,
  Search,
  CheckCircle2,
} from "lucide-react"

export interface FaqItem {
  id: string
  category: "all" | "general" | "storage" | "nutrition" | "flavors" | "ordering"
  question: string
  answer: string
  highlights?: string[]
}

const faqData: FaqItem[] = [
  {
    id: "what-are-survival-tabs",
    category: "general",
    question: "What are The Survival Tabs and how are they different from normal food?",
    answer:
      "The Survival Tabs are the premier lightweight, compact emergency food ration system. Unlike traditional survival food that is bulky, requires cooking, and produces substantial metabolic waste, The Survival Tabs are engineered to be 99% bio-available. Just 12 chewable tablets per day provide 100% of the US RDA for 15 essential vitamins and minerals, keeping you sustained, nourished, and alert with zero cooking or preparation required.",
    highlights: [
      "Originally formulated around early space program requirements",
      "99% absorption rate into the bloodstream with minimal digestive strain",
      "100% US RDA of 15 essential vitamins and minerals",
    ],
  },
  {
    id: "calorie-concept",
    category: "nutrition",
    question: "How can 12 tabs (240 calories) sustain a person for an entire day?",
    answer:
      "Standard food is largely excreted as undigested bulk waste, requiring immense digestive energy from your organs. The Survival Tabs use exceptionally high-grade protein, healthy fatty acids, and essential carbohydrates that are nearly 100% absorbed by your body. Furthermore, the protein profile prevents 'tissue cannibalism' (where your body consumes its own muscle for amino acids). In 90% of survival scenarios, having complete micronutrition and clean energy gives you the vital margin of survival.",
    highlights: [
      "Prevents muscle wasting (tissue cannibalism)",
      "Supplies clean fatty acids for sustained mental focus",
      "Quick carbohydrates without blood sugar crashes",
    ],
  },
  {
    id: "shelf-life-storage",
    category: "storage",
    question: "What is the shelf life and how should they be stored?",
    answer:
      "The Survival Tabs carry an official certified shelf life of 25 years from the date of manufacture. The canisters are sealed with food-grade nitrogen to eliminate oxygen and moisture. Independent laboratory testing on tablets stored across varying climates confirmed zero degradation in nutritional value or flavor. For optimal longevity, store in a cool, dry place away from direct sunlight.",
    highlights: [
      "Certified 25-Year Shelf Life",
      "Nitrogen-packed tamper-proof vacuum seal",
      "Withstands high ambient temperature fluctuations",
    ],
  },
  {
    id: "preparation-and-consumption",
    category: "general",
    question: "Do I need water, a stove, or preparation to eat them?",
    answer:
      "No preparation, water, or cooking is required. The Survival Tabs are completely ready-to-eat chewable tablets. You simply chew them slowly or let them dissolve in your mouth. This makes them ideal for 'drop-everything-and-go' situations, vehicle gloveboxes, bug-out bags, and situations where clean potable water or cooking fire may be scarce.",
    highlights: [
      "Zero water or heat required",
      "Chewable or dissolve in mouth",
      "Instant fuel during wilderness or disaster scenarios",
    ],
  },
  {
    id: "flavors-available",
    category: "flavors",
    question: "What flavors are available and what do they taste like?",
    answer:
      "The Survival Tabs come in 5 delicious, naturally flavored varieties: Natural Banana, Roasted Chocolate, Wild Strawberry, Butterscotch / Maple, and Vanilla Malt. Unlike chalky MREs, they have a pleasant, smooth malt-tablet texture with a sweet, comforting flavor profile.",
    highlights: [
      "5 delicious flavors: Banana, Chocolate, Strawberry, Butterscotch, Vanilla Malt",
      "Pleasant chewable tablet consistency",
      "Loved by both adults and children",
    ],
  },
  {
    id: "gluten-and-allergens",
    category: "nutrition",
    question: "Are The Survival Tabs gluten-free, Non-GMO, and preservative-free?",
    answer:
      "Yes. The Survival Tabs are 100% Gluten-Free, Non-GMO, and contain zero artificial chemical preservatives. They contain non-fat dry milk solids as a primary high-purity protein source, combined with high-grade vegetable oils (sunflower/safflower oil) and laboratory-verified pharmaceutical grade vitamins.",
    highlights: [
      "Gluten-Free certified",
      "Non-GMO formulation",
      "No chemical preservatives or artificial fillers",
    ],
  },
  {
    id: "how-many-tabs-in-bottle",
    category: "ordering",
    question: "How many tablets come in each bottle, and how long does one bottle last?",
    answer:
      "Each 24 oz canister contains 180 chewable tablets. At the full recommended survival ration of 12 tablets per day, one bottle provides a 15-day complete emergency food supply for one adult. If used as a nutritional supplement alongside other emergency food or forage, one bottle can easily last 30 to 60 days.",
    highlights: [
      "180 chewable tabs per canister",
      "15 days of 100% full survival rations",
      "Up to 60 days of nutritional support",
    ],
  },
  {
    id: "usage-schedule",
    category: "general",
    question: "What is the recommended daily schedule for taking the tablets?",
    answer:
      "We recommend taking 1 tablet every hour to hour-and-a-half during your waking hours (totaling 12 tablets across a 12-to-16-hour day). Chewing one tablet slowly every hour keeps your metabolism steady, eliminates hunger pangs, provides continuous glucose to the brain, and ensures steady physical stamina.",
    highlights: [
      "1 tablet per hour during waking day",
      "Prevents energy dips and keeps hunger satisfied",
      "Consistent nutrient absorption throughout the day",
    ],
  },
  {
    id: "made-in-usa-quality",
    category: "ordering",
    question: "Where are The Survival Tabs made and what quality standards are followed?",
    answer:
      "The Survival Tabs are 100% manufactured in the United States in an FDA-inspected, cGMP (Current Good Manufacturing Practices) certified facility. Every batch undergoes rigorous microbiological and potency testing to guarantee 100% label accuracy and 25-year stability.",
    highlights: [
      "Proudly Made in the USA",
      "cGMP certified manufacturing facility",
      "Rigorous laboratory quality control",
    ],
  },
  {
    id: "shipping-and-bulk",
    category: "ordering",
    question: "What are your shipping policies and do you offer bulk discounts?",
    answer:
      "We ship worldwide. All domestic orders over $150 qualify for Fast Free Standard Shipping. For disaster response agencies, government contracts, search and rescue squads, or wholesale distribution, we provide bulk pallet pricing and tax-exempt purchasing options.",
    highlights: [
      "Free domestic shipping on orders over $150",
      "Worldwide expedited international shipping available",
      "Discounts for first responders, SAR teams, and bulk purchases",
    ],
  },
]

interface FaqPageProps {
  onNavigateHome?: () => void
}

export function FaqPage({  onNavigateHome }: FaqPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({})

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {}
    faqData.forEach((item) => {
      allOpen[item.id] = true
    })
    setOpenIds(allOpen)
  }

  const collapseAll = () => {
    setOpenIds({})
  }

  // Filter items based on active category & search query
  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory
    const query = searchQuery.toLowerCase().trim()
    const matchesSearch =
      !query ||
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query) ||
      item.highlights?.some((h) => h.toLowerCase().includes(query))
    return matchesCategory && matchesSearch
  })

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "general", label: "General & Concept" },
    { id: "nutrition", label: "Nutrition & Bio-Availability" },
    { id: "storage", label: "25-Yr Shelf Life" },
    { id: "flavors", label: "Flavors & Taste" },
    { id: "ordering", label: "Orders & Shipping" },
  ]

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 pt-4 sm:pt-6 lg:pt-8 pb-16">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
        <button
          onClick={onNavigateHome}
          className="hover:text-red-600 transition-colors cursor-pointer"
        >
          Home
        </button>
        <span>/</span>
        <span className="text-zinc-900 font-semibold">Frequently Asked Questions</span>
      </nav>

      {/* Header Banner */}
      <div className="relative rounded-3xl bg-white border border-zinc-200 p-8 sm:p-12 lg:p-14 shadow-xs overflow-hidden text-center space-y-5">  
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-zinc-900 max-w-3xl mx-auto">
          Frequently Asked Questions
        </h1>

        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about the 25-year emergency food ration system,
          bio-availability, daily consumption protocols, and long-term storage.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto pt-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. shelf life, flavors, calories, water)..."
              className="w-full pl-11 pr-4 py-3 text-sm rounded-full bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-400 hover:text-zinc-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Category Pills & Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-zinc-900 text-white shadow-xs"
                  : "bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-50 hover:text-zinc-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Expand / Collapse Controls */}
        <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 shrink-0">
          <button
            onClick={expandAll}
            className="hover:text-red-600 transition-colors cursor-pointer"
          >
            Expand All
          </button>
          <span>&bull;</span>
          <button
            onClick={collapseAll}
            className="hover:text-red-600 transition-colors cursor-pointer"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Accordion Questions List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-zinc-200 p-8 space-y-3">
            <HelpCircle className="h-10 w-10 text-zinc-300 mx-auto" />
            <h3 className="font-bold text-zinc-900 text-base">No matching questions found</h3>
            <p className="text-xs text-zinc-500">
              Try adjusting your search terms or browse all categories above.
            </p>
            <button
              onClick={() => {
                setSearchQuery("")
                setActiveCategory("all")
              }}
              className="mt-2 text-xs font-bold text-red-600 hover:underline cursor-pointer"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        ) : (
          filteredFaqs.map((item, index) => {
            const isOpen = !!openIds[item.id]
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 bg-white overflow-hidden ${
                  isOpen
                    ? "border-red-200 shadow-sm ring-1 ring-red-50"
                    : "border-zinc-200 hover:border-zinc-300"
                }`}
              >
                {/* Accordion Header / Toggle */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-[11px] font-bold text-zinc-600 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="font-bold text-zinc-900 text-sm sm:text-base leading-snug">
                      {item.question}
                    </span>
                  </div>

                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                      isOpen
                        ? "bg-red-50 border-red-200 text-red-600 rotate-180"
                        : "bg-zinc-50 border-zinc-200 text-zinc-400"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Accordion Content Panel */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-zinc-100 space-y-4 text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
                    <p className="text-zinc-700">{item.answer}</p>

                    {item.highlights && item.highlights.length > 0 && (
                      <div className="pt-2 rounded-xl bg-zinc-50 p-4 border border-zinc-200/80 space-y-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 block">
                          Key Takeaways:
                        </span>
                        <ul className="space-y-1.5 text-xs text-zinc-700">
                          {item.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default FaqPage
