import { useState, type FormEvent } from "react"
import {
  DollarSign,
  PackageCheck,
  Store,
  Share2,
  Send,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  Globe,
  Truck,
  ShieldCheck,
  FileText,
} from "lucide-react"

interface MakeMoneyPageProps {
  onNavigateHome?: () => void
  onNavigateContact?: () => void
}

export function MakeMoneyPage({ onNavigateHome, onNavigateContact }: MakeMoneyPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    program: "Affiliate Program",
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

  const scrollToApply = (programName: string) => {
    setFormData((prev) => ({ ...prev, program: programName }))
    const el = document.getElementById("partner-application")
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
        <span className="text-zinc-900 font-semibold">Make Money</span>
      </nav>

      {/* Main Header / Banner */}
      <section className="relative rounded-2xl sm:rounded-3xl bg-white border border-zinc-200 p-6 sm:p-10 lg:p-14 shadow-xs overflow-hidden text-center space-y-4 sm:space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1 text-xs font-bold text-emerald-800 tracking-wider uppercase">
          <DollarSign className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
          <span>MAKE MONEY WITH US!</span>
        </div>

        <h1 className="text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-zinc-900 max-w-4xl mx-auto leading-tight">
          3 WAYS TO MAKE MONEY <br className="hidden sm:inline" />
          <span className="text-zinc-900 font-serif font-normal italic tracking-normal">WITH SURVIVAL TABS!</span>
        </h1>

        <div className="h-1 w-20 bg-red-600 mx-auto rounded-full" />

        <p className="text-base sm:text-lg lg:text-xl font-medium text-zinc-700 max-w-2xl mx-auto">
          Making money has never been easier with Survival Tabs!
        </p>
      </section>

      {/* 3 Core Programs Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Card 1: Affiliate Program */}
        <div
          id="affiliate"
          className="flex flex-col justify-between rounded-2xl bg-white border border-zinc-200 p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-lg transition-all group"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 group-hover:scale-105 transition-transform">
                <Share2 className="h-7 w-7" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                Online Referral
              </span>
            </div>

            <h2 className="text-xl font-black text-zinc-900 uppercase tracking-tight">
              AFFILIATE PROGRAM
            </h2>

            <p className="text-sm text-zinc-600 leading-relaxed">
              Earn generous commissions on Every Retail Purchase made by Customers you refer to SurvivalTabs.com.
            </p>

            <ul className="space-y-2 pt-2 text-xs text-zinc-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Real-time link tracking &amp; 30-day cookies</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Monthly direct payouts &amp; banners</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Zero inventory or customer service required</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-zinc-100">
            <button
              onClick={() => scrollToApply("Affiliate Program")}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold py-3 text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Learn more!</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Card 2: Dropship Program */}
        <div
          id="dropship"
          className="flex flex-col justify-between rounded-2xl bg-white border border-zinc-200 p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-lg transition-all group"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-700 border border-amber-100 group-hover:scale-105 transition-transform">
                <PackageCheck className="h-7 w-7" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                Direct Delivery
              </span>
            </div>

            <h2 className="text-xl font-black text-zinc-900 uppercase tracking-tight">
              DROPSHIP PROGRAM
            </h2>

            <p className="text-sm text-zinc-600 leading-relaxed">
              Let us ship Survival Tabs to your Customer on your behalf...with your logo on the Packing Slip!
            </p>

            <ul className="space-y-2 pt-2 text-xs text-zinc-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Custom branded packing slips with your logo</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Same-day dispatch from US warehouse</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>No warehouse storage fees or holding risks</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-zinc-100">
            <button
              onClick={() => scrollToApply("Dropship Program")}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold py-3 text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Get the details!</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Card 3: Wholesale Program */}
        <div
          id="wholesale"
          className="flex flex-col justify-between rounded-2xl bg-white border border-zinc-200 p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-lg transition-all group"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-100 group-hover:scale-105 transition-transform">
                <Store className="h-7 w-7" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Bulk Margin
              </span>
            </div>

            <h2 className="text-xl font-black text-zinc-900 uppercase tracking-tight">
              WHOLESALE PROGRAM
            </h2>

            <p className="text-sm text-zinc-600 leading-relaxed">
              Profit from selling Survival Tabs in your online or offline venue...your Shop or Online Store!
            </p>

            <ul className="space-y-2 pt-2 text-xs text-zinc-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>High wholesale volume margins &amp; tier discounts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Retail shelf-ready packaging &amp; barcode support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>25-year shelf life eliminates expiration waste</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-zinc-100">
            <button
              onClick={() => scrollToApply("Wholesale Program")}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold py-3 text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Find out more!</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Global / Foreign Export Section */}
      <section
        id="export"
        className="rounded-2xl sm:rounded-3xl bg-zinc-900 text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-zinc-800"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 border border-red-500/40 px-3.5 py-1 text-xs font-bold text-red-400 uppercase tracking-wider">
              <Globe className="h-3.5 w-3.5 text-red-400" />
              <span>FOREIGN EXPORT &bull; WORLDWIDE DISTRIBUTION</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white leading-tight">
              International &amp; Government Bulk Export
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed">
              We export Survival Tabs worldwide to government agencies, military suppliers, search &amp; rescue units, humanitarian organizations, and international retail distributors.
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-semibold text-zinc-300 pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Full customs export compliance
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="h-4 w-4 text-emerald-400" />
                Pallet &amp; container freight ready
              </span>
              <span className="flex items-center gap-1.5">
                <FileText className="h-4 w-4 text-emerald-400" />
                Certificate of analysis provided
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-end justify-center">
            <button
              onClick={() => scrollToApply("Foreign Export")}
              className="inline-flex items-center gap-2 rounded-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Request Export Quote</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Partner Application Form */}
      <section
        id="partner-application"
        className="rounded-2xl sm:rounded-3xl bg-white border border-zinc-200 p-6 sm:p-10 lg:p-14 shadow-xs space-y-8"
      >
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600">
            Get Started Today
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 uppercase">
            Partner &amp; Reseller Application
          </h2>
          <div className="h-0.5 w-16 bg-red-600 mx-auto" />
          <p className="text-xs sm:text-sm text-zinc-600">
            Submit your details below and our partnership team will reach out within 24 hours with complete price lists, commission structures, and onboarding materials.
          </p>
        </div>

        {isSubmitted ? (
          <div className="max-w-xl mx-auto rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white mx-auto shadow">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-emerald-950">
              Application Received!
            </h3>
            <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
              Thank you for your interest in partnering with Survival Tabs. Our wholesale &amp; partner team has received your submission for the <strong>{formData.program}</strong> and will follow up with you promptly.
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
            {/* Program Selector Tabs */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                Program of Interest
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  "Affiliate Program",
                  "Dropship Program",
                  "Wholesale Program",
                  "Foreign Export",
                ].map((prog) => (
                  <button
                    key={prog}
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, program: prog }))
                    }}
                    className={`py-2 px-3 text-xs font-semibold rounded-xl border text-center transition-all cursor-pointer ${
                      formData.program === prog
                        ? "bg-zinc-900 text-white border-zinc-900 shadow-xs"
                        : "bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100"
                    }`}
                  >
                    {prog}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 000-0000"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                  Company / Store Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Survival Store LLC"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                Website or Social Channel URL
              </label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                placeholder="https://yourstore.com"
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                Tell Us About Your Sales Channels / Audience
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly describe your business, estimated monthly volume, or existing customer base..."
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all cursor-pointer disabled:opacity-70"
            >
              {isSubmitting ? (
                <span>Submitting Application...</span>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Submit Partnership Application</span>
                </>
              )}
            </button>
          </form>
        )}
      </section>

      {/* Direct Contact Bar */}
      <section className="rounded-2xl bg-zinc-50 border border-zinc-200 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-zinc-900 flex items-center gap-2">
            <Store className="h-4 w-4 text-emerald-600" />
            <span>Prefer to Speak with Our Partner Team Directly?</span>
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600">
            Our reseller specialists are available Monday through Friday to discuss custom distribution terms.
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

export default MakeMoneyPage;
