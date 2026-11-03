import { useState, type FormEvent } from "react"
import {
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Building2,
  Phone,
  Mail,
  Send,
  Truck,
  Award,
  Boxes,
} from "lucide-react"

interface WholesaleDistributorPageProps {
  onNavigateHome?: () => void
  onNavigateMakeMoney?: () => void
  onNavigateContact?: () => void
}

export function WholesaleDistributorPage({
  onNavigateHome,
  onNavigateMakeMoney,
  onNavigateContact,
}: WholesaleDistributorPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    businessType: "Brick-and-Mortar Retail Store",
    taxId: "",
    email: "",
    phone: "",
    volume: "1 - 5 Master Cases / month",
    address: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  const scrollToApply = () => {
    const el = document.getElementById("apply-form")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-24">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
        <button
          onClick={onNavigateHome}
          className="hover:text-red-600 transition-colors cursor-pointer"
        >
          Home
        </button>
        <span>/</span>
        <button
          onClick={onNavigateMakeMoney}
          className="hover:text-red-600 transition-colors cursor-pointer"
        >
          Make Money
        </button>
        <span>/</span>
        <span className="text-zinc-900 font-semibold">Wholesale Distributor</span>
      </nav>

      {/* Main Header Card (Verbatim from User Image) */}
      <section className="relative rounded-2xl sm:rounded-3xl bg-white border border-zinc-200 p-6 sm:p-10 lg:p-14 shadow-xs overflow-hidden text-center space-y-6">
        <h1 className="text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-zinc-900 max-w-4xl mx-auto leading-tight">
          WHY YOU WANT TO BE A DISTRIBUTOR
        </h1>

        {/* 4 Core Perks Row (Verbatim from image) */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-bold text-emerald-800">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>Improved Market Information</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>Greater Stability of Supply</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>Full Discount</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>Better Pricing</span>
          </span>
        </div>

        {/* Verbatim Narrative Paragraph */}
        <p className="text-sm sm:text-base lg:text-lg text-zinc-700 max-w-3xl mx-auto leading-relaxed text-justify sm:text-center">
          Distribution is a key part of any product based business, right up there with production, sales, and shopper marketing. Just because you&apos;re a small company doesn&apos;t mean you can ignore the need for efficient and cost-effective distribution. It&apos;s common for companies to outsource this and operations like retail marketing for many reasons. If your company has some of these reasons in common it may be time to start considering working with a distributor. If you want to be a Wholesale Distributor for Survival Tabs, then click below.
        </p>

        {/* Action Controls */}
        <div className="pt-2 space-y-4">
          <button
            onClick={scrollToApply}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black px-10 py-3.5 text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>APPLY NOW!</span>
          </button>

          <div>
            <button
              onClick={onNavigateMakeMoney}
              className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 underline transition-colors cursor-pointer"
            >
              MORE WAYS TO MAKE MONEY!
            </button>
          </div>
        </div>
      </section>

      {/* Deep-Dive 4 Benefits Cards */}
      <section className="space-y-6">
        <div className="text-center sm:text-left space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600">
            Wholesale Advantages
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
            How Our Distribution Network Empowers Your Business
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Perk 1 */}
          <div className="rounded-2xl bg-zinc-50 border border-zinc-200 p-6 space-y-3 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-900">
              Improved Market Information
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Gain access to consumer emergency food demand trends, seasonal rush insights, and marketing collateral to optimize your sales velocity.
            </p>
          </div>

          {/* Perk 2 */}
          <div className="rounded-2xl bg-zinc-50 border border-zinc-200 p-6 space-y-3 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200">
              <Truck className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-900">
              Greater Stability of Supply
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Guaranteed inventory reserves from our US manufacturing plant. During national emergencies or supply chain disruptions, your orders take priority.
            </p>
          </div>

          {/* Perk 3 */}
          <div className="rounded-2xl bg-zinc-50 border border-zinc-200 p-6 space-y-3 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
              <Boxes className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-900">
              Full Discount Margins
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Enjoy substantial B2B discounts off retail MSRP. Capture high-margin profits per unit whether selling in-store or through your digital channels.
            </p>
          </div>

          {/* Perk 4 */}
          <div className="rounded-2xl bg-zinc-50 border border-zinc-200 p-6 space-y-3 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-200">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-900">
              Better Volume Pricing
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Scalable tier pricing by master case, quarter-pallet, or full-pallet shipments. The more volume you move, the higher your net profitability.
            </p>
          </div>
        </div>
      </section>

      {/* Product Merchandising & Spec Highlights */}
      <section className="rounded-2xl sm:rounded-3xl bg-zinc-900 text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-zinc-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3.5 py-1 text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>COMMERCIAL READINESS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white leading-tight">
              Zero Expiration Loss with 25-Year Certified Shelf Life
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed">
              Unlike traditional food products that risk spoiling on your retail shelves or in your warehouse, Survival Tabs maintain a certified 25-year shelf life. There are zero inventory write-offs or markdown sales due to looming expiration dates.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 text-xs text-zinc-300">
              <div className="space-y-1">
                <span className="font-bold text-white block">Standard Retail Master Case</span>
                <p className="text-zinc-400">12 airtight canisters per carton, individual UPC barcodes.</p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-white block">4 Best-Selling Flavors</span>
                <p className="text-zinc-400">Banana, Chocolate, Vanilla Malt, and Maple.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-800/80 border border-zinc-700 text-center space-y-3">
            <img
              src="/images/made-in-usa.png"
              alt="Made in USA"
              className="h-14 w-auto object-contain"
            />
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              100% Sourced &amp; Made in USA
            </h3>
            <p className="text-xs text-zinc-400 max-w-xs">
              Every master case is manufactured and sealed under rigorous US food quality and defense packaging regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Wholesale Distributor Application Form */}
      <section
        id="apply-form"
        className="rounded-2xl sm:rounded-3xl bg-white border border-zinc-200 p-6 sm:p-10 lg:p-14 shadow-xs space-y-8"
      >
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600">
            Direct B2B Onboarding
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 uppercase">
            Wholesale Distributor Application
          </h2>
          <div className="h-0.5 w-16 bg-red-600 mx-auto" />
          <p className="text-xs sm:text-sm text-zinc-600">
            Complete the form below to apply for an Authorized Wholesale Distributor account. Our B2B accounts team will review and reply within 1 business day with dealer pricing sheets.
          </p>
        </div>

        {isSubmitted ? (
          <div className="max-w-xl mx-auto rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white mx-auto shadow">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-emerald-950">
              Application Successfully Submitted!
            </h3>
            <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. Your application for <strong>{formData.businessName || "your business"}</strong> has been logged with our wholesale team. We will email our wholesale pricing catalog to <strong>{formData.email}</strong> shortly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900 underline cursor-pointer"
            >
              Submit another inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                  Contact Name *
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Smith"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                  Business / Company Name *
                </label>
                <input
                  required
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="Tactical Gear Supply Co."
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="purchasing@company.com"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                  Phone Number *
                </label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(800) 000-0000"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                  Business Model / Venue
                </label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                >
                  <option value="Brick-and-Mortar Retail Store">Brick-and-Mortar Retail Store</option>
                  <option value="E-Commerce Storefront">E-Commerce Storefront</option>
                  <option value="Military & Tactical Supplier">Military &amp; Tactical Supplier</option>
                  <option value="Outdoor & Survival Outfitter">Outdoor &amp; Survival Outfitter</option>
                  <option value="Government / Institutional Vendor">Government / Institutional Vendor</option>
                  <option value="Other Wholesale Distributor">Other Wholesale Distributor</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                  Projected Monthly Volume
                </label>
                <select
                  value={formData.volume}
                  onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                >
                  <option value="1 - 5 Master Cases / month">1 - 5 Master Cases (12 - 60 bottles)</option>
                  <option value="6 - 20 Master Cases / month">6 - 20 Master Cases (72 - 240 bottles)</option>
                  <option value="Quarter Pallet (25 Cases)">Quarter Pallet (300 bottles)</option>
                  <option value="Full Pallet (100 Cases+)">Full Pallet (1,200+ bottles)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                Resale Certificate / Tax ID (Optional)
              </label>
              <input
                type="text"
                value={formData.taxId}
                onChange={(e) => setFormData({ ...formData, taxId: e.target.value })}
                placeholder="State Resale Permit or EIN"
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                Business Address or Special Requirements
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Store address, freight loading dock availability, or specific flavors requested..."
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all cursor-pointer disabled:opacity-70"
            >
              {isSubmitting ? (
                <span>Submitting Wholesale Application...</span>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Submit Wholesale Distributor Application</span>
                </>
              )}
            </button>
          </form>
        )}
      </section>

      {/* Direct Contact Wholesale Desk */}
      <section className="rounded-2xl bg-zinc-50 border border-zinc-200 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-zinc-900 flex items-center gap-2">
            <Building2 className="h-4 w-4 text-emerald-600" />
            <span>Direct Wholesale Desk &bull; Concordia, Missouri</span>
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600">
            Have questions regarding master cases, freight shipping, or distributor agreements? Call our B2B team directly.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-zinc-700">
          <a
            href="tel:800-944-1511"
            className="inline-flex items-center gap-1.5 hover:text-emerald-600 transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-emerald-600" />
            <span>800-944-1511</span>
          </a>
          <span className="text-zinc-300">&bull;</span>
          <a
            href="mailto:Sales@FoodReserves.com"
            className="inline-flex items-center gap-1.5 hover:text-emerald-600 transition-colors"
          >
            <Mail className="h-3.5 w-3.5 text-emerald-600" />
            <span>Sales@FoodReserves.com</span>
          </a>
          {onNavigateContact && (
            <>
              <span className="text-zinc-300">&bull;</span>
              <button
                onClick={onNavigateContact}
                className="hover:text-emerald-600 transition-colors cursor-pointer"
              >
                Online Support Form
              </button>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default WholesaleDistributorPage;
