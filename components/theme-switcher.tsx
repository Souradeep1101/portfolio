"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { IconPalette, IconCheck } from "@tabler/icons-react"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const themes = [
    { id: "system", name: "Eclipse (Default)", color: "bg-purple-500" },
    { id: "cyberpunk", name: "Cyberpunk", color: "bg-pink-500" },
    { id: "matrix", name: "Matrix", color: "bg-green-500" },
    { id: "midnight", name: "Midnight", color: "bg-blue-500" },
  ]

  return (
    <div className="fixed bottom-6 left-24 z-50">
      <div className="group relative flex flex-col items-center"> 
        
        {/* The Menu (Now rendered ABOVE the button in DOM order, but positioned bottom-up) */}
        {/* Added 'pb-3' to create an invisible bridge between menu and button */}
        <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col gap-1 p-2 rounded-xl border border-border bg-black/90 backdrop-blur-md min-w-[160px] shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200">
            {themes.map((t) => (
                <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`flex items-center justify-between px-3 py-2 text-xs font-mono rounded-lg transition-colors ${
                    theme === t.id ? "bg-white/10 text-white" : "text-muted-foreground hover:bg-white/5 hover:text-white"
                }`}
                >
                <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${t.color}`} />
                    {t.name}
                </div>
                {theme === t.id && <IconCheck size={12} />}
                </button>
            ))}
            
            {/* INVISIBLE BRIDGE: Keeps the menu open while moving mouse down to button */}
            <div className="absolute top-full left-0 w-full h-4 bg-transparent" />
        </div>

        {/* Toggle Button */}
        <button className="h-10 w-10 rounded-full bg-background border border-border shadow-2xl flex items-center justify-center text-muted-foreground hover:text-primary transition-colors z-50">
          <IconPalette size={20} />
        </button>

      </div>
    </div>
  )
}