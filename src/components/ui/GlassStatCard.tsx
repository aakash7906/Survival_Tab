import { cn } from "@/lib/utils"

interface GlassStatCardProps {
  metric: string
  label: string
  subtext?: string
  className?: string
  highlight?: boolean
}

export function GlassStatCard({
  metric,
  label,
  subtext,
  className,
  highlight = false,
}: GlassStatCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-5 transition-all duration-300 hover:scale-105 hover:bg-white/[0.08] relative overflow-hidden group",
        "bg-white/[0.05] backdrop-blur-[12px] border border-white/10 shadow-2xl",
        highlight && "border-emerald-400/30 bg-emerald-950/10",
        className
      )}
    >
      <div className="flex flex-col gap-1 relative z-10">
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
            {metric}
          </span>
          {highlight && (
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          )}
        </div>
        <span className="text-sm font-medium text-white/90 tracking-tight">{label}</span>
        {subtext && <span className="text-xs text-white/60">{subtext}</span>}
      </div>
      {/* Subtle emerald gradient ambient glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/0 via-emerald-500/0 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  )
}
