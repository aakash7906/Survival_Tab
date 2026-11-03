export function SurvivalConceptSection() {
  return (
    <section id="concept" className="w-full py-16 bg-white border-t border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center sm:text-left">

        {/* Title */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-light tracking-wide text-zinc-900 uppercase">
            SURVIVAL FOOD TAB CONCEPT
          </h2>
          <div className="h-0.5 w-16 bg-red-600 mx-auto" />
        </div>

        {/* Concept Video Player - Seamless edge-to-edge video fit with zero black side bars */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-zinc-200 aspect-video bg-transparent">
          <video
            src="/videos/survival-concept.mp4"
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-cover block"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Narrative Paragraphs verbatim from survivaltabs.com */}
        <div className="space-y-6 text-zinc-700 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
          <p className="font-medium text-zinc-900">
            Specifically designed for situations where storage space, weight, and extreme conditions make normal food impractical. 12 tabs per day provide 100% of US RDA for 15 vitamins and minerals.
          </p>

          <p>
            The basic concept behind Survival Tabs originated in the early space program. The primary requirement was to produce a food that could be consumed in zero gravity and cramped spaces, providing the maximum nutrition in the smallest volume.
          </p>

          <p>
            Our bodies require basic nutrients: Protein, Carbohydrates, and Fats along with essential vitamins and minerals. Most regular food is not completely assimilated by the body, generating considerable waste. The Survival Tabs are designed to be completely assimilated (99% absorption rate) so that almost every calorie and nutrient is absorbed and utilized directly.
          </p>

          <p>
            The protein used is of the highest quality and is completely digested, preventing your body from breaking down its own muscle tissue (tissue cannibalism). The fats are high-quality fatty acids that supply steady energy, while the carbohydrates furnish quick energy without stressing the kidneys or digestive system.
          </p>

          <p className="font-semibold text-zinc-950 border-l-2 border-red-600 pl-4 py-1 italic bg-zinc-50 rounded-r">
            Margin of Survival: In roughly 90% of survival situations, individuals can supplement the tabs with whatever small amounts of food they might find (wild game, edible plants, fish). Consuming 12 tablets a day gives the full margin of survival.
          </p>
        </div>

      </div>
    </section>
  )
}
