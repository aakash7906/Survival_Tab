import React from "react"
import { ArrowUpRight } from "lucide-react"

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  icon?: React.ReactNode
  variant?: "light" | "dark" | "emerald"
  className?: string
}

export function ActionButton({
  children,
  icon,
  variant = "light",
  className = "",
  ...props
}: ActionButtonProps) {
  if (variant === "dark") {
    return (
      <button
        className={`group inline-flex items-center justify-between gap-3 bg-zinc-900 text-white rounded-full pl-6 pr-2 py-2 font-medium text-sm border border-white/10 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg cursor-pointer ${className}`}
        {...props}
      >
        <span className="tracking-tight">{children}</span>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-zinc-950 group-hover:bg-zinc-200 transition-colors duration-300">
          {icon || <ArrowUpRight className="h-4 w-4" />}
        </div>
      </button>
    )
  }

  if (variant === "emerald") {
    return (
      <button
        className={`group inline-flex items-center justify-between gap-3 bg-emerald-400 text-zinc-950 rounded-full pl-6 pr-2 py-2 font-semibold text-sm hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_25px_rgba(52,211,153,0.35)] cursor-pointer ${className}`}
        {...props}
      >
        <span className="tracking-tight">{children}</span>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-emerald-400 group-hover:bg-zinc-800 transition-colors duration-300">
          {icon || <ArrowUpRight className="h-4 w-4" />}
        </div>
      </button>
    )
  }

  return (
    <button
      className={`group inline-flex items-center justify-between gap-3 bg-white text-zinc-900 rounded-full pl-6 pr-2 py-2 font-medium text-sm hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl cursor-pointer ${className}`}
      {...props}
    >
      <span className="tracking-tight">{children}</span>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white group-hover:bg-zinc-700 transition-colors duration-300">
        {icon || <ArrowUpRight className="h-4 w-4" />}
      </div>
    </button>
  )
}
