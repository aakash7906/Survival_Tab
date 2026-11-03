export function SurvivalLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Official Outlined Logo from public/images */}
      <img
        src="/images/survival_tabs_logo_outlined.png"
        alt="The Survival Tabs - Just In Case"
        className="h-10 sm:h-12 w-auto object-contain drop-shadow-sm"
        onError={(e) => {
          // Fallback if image path fails
          e.currentTarget.style.display = 'none';
          const sibling = e.currentTarget.nextElementSibling as HTMLElement;
          if (sibling) sibling.style.display = 'flex';
        }}
      />

      {/* Vector Fallback if offline */}
      <div className="hidden items-center gap-2.5">
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 shadow-md border-2 border-red-700">
          <div className="absolute inset-1 rounded-full border border-red-200/50" />
          <div className="absolute inset-2.5 rounded-full border border-red-200/70" />
          <div className="absolute h-full w-[2px] bg-red-950/70" />
          <div className="absolute w-full h-[2px] bg-red-950/70" />
          <div className="relative z-10 h-2 w-2 rounded-full bg-primary-foreground shadow-sm" />
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-black text-xl tracking-tight text-primary uppercase font-sans">
            SURVIVAL TABS<span className="text-red-600 text-xs align-super">®</span>
          </span>
          <span className="text-[11px] font-serif italic text-amber-600 tracking-normal font-semibold">
            &ldquo;Just In Case&rdquo;
          </span>
        </div>
      </div>
    </div>
  )
}
