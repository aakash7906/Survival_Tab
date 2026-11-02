export function SurvivalLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Iconic Red Target Crosshair */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 shadow-md border-2 border-red-700">
        {/* Outer target ring */}
        <div className="absolute inset-1 rounded-full border border-red-200/50" />
        {/* Inner target ring */}
        <div className="absolute inset-2.5 rounded-full border border-red-200/70" />
        {/* Crosshair lines */}
        <div className="absolute h-full w-[2px] bg-red-950/70" />
        <div className="absolute w-full h-[2px] bg-red-950/70" />
        {/* Center dot */}
        <div className="relative z-10 h-2 w-2 rounded-full bg-white shadow-sm" />
      </div>

      <div className="flex flex-col leading-none">
        <span className="font-black text-xl tracking-tight text-zinc-950 uppercase font-sans">
          SURVIVAL TABS<span className="text-red-600 text-xs align-super">®</span>
        </span>
        <span className="text-[11px] font-serif italic text-amber-600 tracking-normal font-semibold">
          &ldquo;Just In Case&rdquo;
        </span>
      </div>
    </div>
  )
}
