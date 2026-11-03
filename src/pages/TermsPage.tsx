import {
  ShieldCheck,
  Lock,
  CreditCard,
  Server,
  FileCheck2,
  Mail,
  ArrowLeft,
  CheckCircle2,
  Building2,
} from "lucide-react"

interface TermsPageProps {
  onNavigateHome?: () => void
  onNavigateContact?: () => void
}

export function TermsPage({ onNavigateHome, onNavigateContact }: TermsPageProps) {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-24">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
        <button
          onClick={onNavigateHome}
          className="hover:text-red-600 transition-colors cursor-pointer"
        >
          Home
        </button>
        <span>/</span>
        <span className="text-zinc-900 font-semibold">Terms and Conditions</span>
      </nav>

      {/* Header Banner */}
      <section className="relative rounded-2xl sm:rounded-3xl bg-white border border-zinc-200 p-6 sm:p-10 lg:p-14 shadow-xs overflow-hidden text-center space-y-4 sm:space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-xs font-bold text-red-700 tracking-wider uppercase">
          <ShieldCheck className="h-3.5 w-3.5 text-red-600 shrink-0" />
          <span>OFFICIAL COMPLIANCE &bull; SECURITY STATEMENT</span>
        </div>

        <h1 className="text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-zinc-900 max-w-3xl mx-auto leading-tight">
          Terms and Conditions
        </h1>

        <div className="h-1 w-20 bg-red-600 mx-auto rounded-full" />

        <div className="space-y-3 max-w-3xl mx-auto">
          <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider text-zinc-900">
            SECURITY STATEMENT
          </h2>
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            This site is owned and operated by Food Reserve, inc. We value and respect the privacy and security concerns of all our clients and agents. The following statement discloses the Security Policy for the website.
          </p>
        </div>
      </section>

      {/* Security Pillars Grid */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Pillar 1: Locked-Down Data Center & Firewalls */}
          <div className="flex flex-col justify-between rounded-2xl bg-white border border-zinc-200 p-6 sm:p-8 space-y-4 shadow-xs hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-700 border border-red-200">
                  <Server className="h-5 w-5" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-0.5 rounded-full border border-red-200">
                  Data Center
                </span>
              </div>

              <h3 className="text-lg font-bold text-zinc-900">
                Information Security &amp; Infrastructure
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Information security is critical to our business. The information is gathered on secure computers and is stored in a locked-down data center. We use firewalls and other security technology, as well as implement the highest industry-standard security practices.
              </p>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                We also require that any personally identifiable consumer information sent to us be encrypted using Secure Socket Layer (SSL) encryption.
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>Locked-down storage facility</span>
            </div>
          </div>

          {/* Pillar 2: SSL Encryption via Starfield Technologies */}
          <div className="flex flex-col justify-between rounded-2xl bg-white border border-zinc-200 p-6 sm:p-8 space-y-4 shadow-xs hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
                  <Lock className="h-5 w-5" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  128-Bit SSL
                </span>
              </div>

              <h3 className="text-lg font-bold text-zinc-900">
                Transaction Encryption &amp; Protection
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                To ensure that every transaction is protected, we use advanced encryption technology; we treat your credit card and personal information with the highest standards of confidentiality and safety.
              </p>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                To ensure that all of our transactions are protected, we use 128-bit encryption SSL provided by Starfield Technologies.
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>Certified Starfield SSL encryption</span>
            </div>
          </div>

          {/* Pillar 3: Authorize.Net & Visa CISP Compliance */}
          <div className="flex flex-col justify-between rounded-2xl bg-white border border-zinc-200 p-6 sm:p-8 space-y-4 shadow-xs hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <CreditCard className="h-5 w-5" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Visa CISP Compliant
                </span>
              </div>

              <h3 className="text-lg font-bold text-zinc-900">
                Authorize.Net Payment Gateway
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                At Food Reserve, inc. , all credit card processing is performed through Authorize.Net. Authorize.Net is an industry-leading provider of secure, reliable Internet-based payment solutions.
              </p>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                They have been independently validated as compliant with the Visa Cardholder Information Security Program (CISP). CISP establishes a set of twelve industry-wide requirements designed to protect sensitive information from being compromised. Authorize.Net is committed to protecting the confidentiality and integrity of credit card and personal data of cardholders that make purchases from merchants using the Authorize.Net payment gateway.
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>12 Visa CISP security benchmarks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Monitoring & Policy Modifications */}
      <section className="rounded-2xl bg-zinc-50 border border-zinc-200 p-6 sm:p-8 space-y-3">
        <div className="flex items-center gap-2.5 text-zinc-900 font-bold text-sm sm:text-base">
          <FileCheck2 className="h-5 w-5 text-red-600 shrink-0" />
          <span>Continuous Website Monitoring &amp; Modifications</span>
        </div>
        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
          We continually monitor our website to assure that your privacy is respected. We reserve the right to modify, update and change portions of this policy as we see fit.
        </p>
      </section>

      {/* Questions Regarding Food Reserve, inc. */}
      <section className="rounded-2xl sm:rounded-3xl bg-zinc-900 text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-zinc-800 space-y-6">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 border border-red-500/40 px-3.5 py-1 text-xs font-bold text-red-400 uppercase tracking-wider">
            <Building2 className="h-3.5 w-3.5 text-red-400" />
            <span>DIRECT INQUIRIES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            Questions Regarding Food Reserve, inc..
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed">
            If you have any questions regarding the Food Reserve, inc. Security Statement, please contact us at{" "}
            <a
              href="mailto:info@Survivaltabs.com"
              className="text-amber-400 hover:text-amber-300 underline font-semibold transition-colors"
            >
              info@Survivaltabs.com
            </a>{" "}
            or contact our Customer Care department Toll Free at at{" "}
            <a
              href="tel:800-944-1511"
              className="text-amber-400 hover:text-amber-300 underline font-semibold transition-colors"
            >
              800-944-1511
            </a>
            .
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={onNavigateHome}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-zinc-100 text-zinc-900 px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Home</span>
          </button>
          <button
            onClick={onNavigateContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
          >
            <Mail className="h-4 w-4 text-emerald-400" />
            <span>Contact Customer Support</span>
          </button>
        </div>

        {/* Legal Trademark Notice */}
        <div className="pt-4 border-t border-zinc-800 text-[11px] text-zinc-400 italic">
          Authorize.Net is a registered trademark of Lightbridge, Inc.
        </div>
      </section>
    </div>
  )
}

export default TermsPage;
