"use client";

import { useState, useEffect } from "react";
import { IconActivity, IconCpu, IconWifi } from "@tabler/icons-react";

export function SystemMonitor() {
  const [mounted, setMounted] = useState(false);
  const [latency, setLatency] = useState(24);
  
  // Randomize latency slightly to make it look "alive"
  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setLatency(prev => {
        const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
        return Math.max(12, Math.min(40, prev + change));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-2">
      <div className="flex items-center gap-3 px-4 py-2 rounded-lg border border-border bg-background/80 backdrop-blur-md shadow-2xl text-xs font-mono text-muted-foreground hover:border-white/20 transition-colors cursor-help">
        
        {/* Status Indicator */}
        <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-secondary font-bold tracking-wider">SYSTEM ONLINE</span>
        </div>

        <div className="w-px h-3 bg-white/10 mx-1" />

        {/* Fake Stats */}
        <div className="flex items-center gap-1.5">
            <IconActivity size={12} className="text-slate-500" />
            <span>MEM: 14%</span>
        </div>

        <div className="w-px h-3 bg-white/10 mx-1" />
        
        <div className="flex items-center gap-1.5">
            <IconWifi size={12} className="text-slate-500" />
            <span>{latency}ms</span>
        </div>

        <div className="w-px h-3 bg-white/10 mx-1" />

        <div className="flex items-center gap-1.5">
            <IconCpu size={12} className="text-slate-500" />
            <span>x86_64</span>
        </div>

      </div>
    </div>
  );
}