"use client";

import Link from "next/link";
import { IconTerminal2 } from "@tabler/icons-react";

// UPDATE: Added "/" before hashes so links work from the /blog page too.
// Added "Logs" pointing to your new archive.
const navItems = [
  { name: "About", href: "/#about" }, 
  { name: "Work", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Logs", href: "/blog" }, // <--- The New Link
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="flex items-center gap-6 rounded-full border border-border bg-background/60 px-6 py-3 backdrop-blur-md shadow-2xl">
        
        {/* Logo / Home */}
        <Link 
          href="/" 
          className="flex items-center gap-2 text-white hover:text-primary transition-colors"
        >
          <IconTerminal2 size={20} />
          <span className="font-bold tracking-tight hidden sm:block">SOURADEEP</span>
        </Link>

        {/* Divider */}
        <div className="h-4 w-px bg-white/10 hidden sm:block" />

        {/* Links */}
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="h-4 w-px bg-white/10 hidden md:block" />

        {/* CMD+K Hint */}
        <div className="hidden md:flex items-center gap-1.5 text-[10px] font-mono font-medium text-slate-500 border border-border px-2 py-1 rounded-md bg-accent/50 select-none">
            <span>CMD</span>
            <span className="text-slate-600">+</span>
            <span>K</span>
        </div>

      </div>
    </nav>
  );
}