"use client";

import Link from "next/link";
import { IconTerminal2 } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "/#about" }, 
  { name: "Work", href: "/projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Logs", href: "/blog" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      {/* 1. Added 'max-w-full' and 'overflow-x-auto' 
          2. Added 'scrollbar-hide' (you may need to add this to your globals.css)
      */}
      <div className="flex items-center gap-4 md:gap-6 rounded-full border border-border bg-background/60 px-4 md:px-6 py-3 backdrop-blur-md shadow-2xl max-w-full overflow-x-auto no-scrollbar">
        
        <Link 
          href="/" 
          className="flex-shrink-0 flex items-center gap-2 text-white hover:text-primary transition-colors"
        >
          <IconTerminal2 size={20} />
          <span className="font-bold tracking-tight hidden sm:block">SOURADEEP</span>
        </Link>

        <div className="h-4 w-px bg-white/10 hidden sm:block flex-shrink-0" />

        <div className="flex items-center gap-4 md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs md:text-sm font-medium text-muted-foreground hover:text-white transition-colors whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="h-4 w-px bg-white/10 hidden sm:block flex-shrink-0" />

        <button 
          onClick={() => window.dispatchEvent(new CustomEvent("open-command-menu"))}
          className="flex items-center gap-1.5 text-[10px] font-mono font-medium text-slate-500 border border-border px-2 py-1.5 rounded-md bg-accent/50 hover:bg-accent hover:text-white transition-all select-none flex-shrink-0 active:scale-95"
          title="Open Search (Cmd+K)"
        >
            <span className="hidden sm:inline">CMD</span>
            <span className="text-slate-600 hidden sm:inline">+</span>
            <span className="hidden sm:inline">K</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="sm:hidden"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
        </button>
      </div>
    </nav>
  );
}