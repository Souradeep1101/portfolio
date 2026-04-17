"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IconPlayerPlay, IconTerminal2, IconBrush, IconEraser, IconBucketDroplet, IconStack2 } from "@tabler/icons-react";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 md:px-8 py-24 overflow-hidden min-h-[100vh]">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(#00e5ff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Cyan radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[#00e5ff]/5 blur-[120px] pointer-events-none" />

      <div className="z-10 text-center max-w-5xl w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 border border-[#00e5ff]/20 bg-[#00e5ff]/5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#00e5ff]">
            v2.4.0 Stable Build
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[1] text-[#e5e2e1] mb-8 uppercase"
        >
          Professional{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c3f5ff] via-[#00e5ff] to-[#00daf3]">
            GPU-Accelerated
          </span>{" "}
          2D Animation Studio.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-lg text-[#bac9cc] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Built from scratch in C++17 for high-fidelity anime production workflows.
          Low latency, high throughput, zero compromises.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://github.com/Souradeep1101/CyclopsStudio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-10 py-5 bg-[#00e5ff] text-[#001f24] font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_0_30px_rgba(0,229,255,0.3)] active:scale-[0.97]"
          >
            <IconPlayerPlay size={18} className="fill-current" />
            Watch Demo
          </a>
          <button className="flex items-center justify-center gap-3 px-10 py-5 border border-[#3b494c] bg-transparent text-[#c3f5ff] font-black text-xs uppercase tracking-widest hover:bg-[#201f1f] transition-all active:scale-[0.97]">
            Explore Engine Architecture
            <IconTerminal2 size={18} />
          </button>
        </motion.div>
      </div>

      {/* UI Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="mt-20 w-full max-w-6xl relative shadow-[0_40px_120px_rgba(0,229,255,0.08)]"
      >
        {/* Window chrome */}
        <div className="bg-[#2a2a2a] border border-[#3b494c]/50 px-4 py-2.5 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffb4ab]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffeac0]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#c3f5ff]" />
          </div>
          <div className="font-mono text-[10px] text-[#bac9cc]/40 tracking-widest">
            cyclops_studio_engine_v2.4.exe
          </div>
          <div className="w-10" />
        </div>

        {/* Editor body */}
        <div className="flex border border-t-0 border-[#3b494c]/30 bg-[#131313]" style={{ height: "480px" }}>
          {/* Tool panel */}
          <div className="w-12 bg-[#201f1f] border-r border-[#3b494c]/20 flex flex-col items-center py-5 gap-6 shrink-0">
            {[
              { Icon: IconBrush, active: true },
              { Icon: IconEraser, active: false },
              { Icon: IconBucketDroplet, active: false },
              { Icon: IconStack2, active: false },
            ].map(({ Icon, active }, i) => (
              <div
                key={i}
                className={`w-8 h-8 flex items-center justify-center transition-colors ${
                  active ? "text-[#00e5ff]" : "text-[#bac9cc]/30"
                }`}
              >
                <Icon size={18} />
              </div>
            ))}
          </div>

          {/* Canvas viewport */}
          <div className="flex-1 relative overflow-hidden">
            <Image
              fill
              src="/images/cyclops-engine-preview.png"
              alt="CyclopsStudio engine viewport preview"
              className="object-cover opacity-50 grayscale brightness-50"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            {/* Scan line overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,229,255,0.015) 2px, rgba(0,229,255,0.015) 4px)",
              }}
            />
            {/* Center marquee */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-1/2 h-1/2 border border-[#00e5ff]/15 border-dashed animate-pulse" />
            </div>
            {/* Corner rulers */}
            <div className="absolute top-2 left-2 text-[8px] font-mono text-[#00e5ff]/20 select-none">
              1920×1080
            </div>
            <div className="absolute bottom-2 right-2 text-[8px] font-mono text-[#00e5ff]/20 select-none">
              F:24 | FPS:24
            </div>
          </div>

          {/* Properties panel */}
          <div className="w-56 bg-[#1c1b1b] border-l border-[#3b494c]/20 p-4 hidden md:block shrink-0">
            <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#bac9cc]/40 mb-5">
              Properties
            </div>
            <div className="space-y-3">
              {[
                { label: "Layer", value: "Rough_L0", w: "w-full" },
                { label: "Opacity", value: "100%", w: "w-3/4" },
                { label: "Blend", value: "Normal", w: "w-1/2" },
              ].map(({ label, value, w }) => (
                <div key={label} className="space-y-1">
                  <div className="font-mono text-[8px] text-[#bac9cc]/30 uppercase tracking-widest">{label}</div>
                  <div className={`h-[1px] bg-[#00e5ff]/10 ${w}`} />
                  <div className="font-mono text-[9px] text-[#bac9cc]/50">{value}</div>
                </div>
              ))}
            </div>
            {/* Colour swatch strip */}
            <div className="mt-6 flex gap-1 flex-wrap">
              {["#00e5ff", "#c3f5ff", "#ffdf96", "#ffb4ab", "#bac9cc", "#353534"].map((c) => (
                <div key={c} className="w-5 h-5 border border-white/5" style={{ background: c }} />
              ))}
            </div>
          </div>
        </div>

        {/* Timeline strip */}
        <div className="bg-[#1c1b1b] border border-t-0 border-[#3b494c]/30 px-4 py-2 flex items-center gap-3 overflow-hidden">
          <div className="font-mono text-[8px] text-[#bac9cc]/40 shrink-0">TIMELINE</div>
          <div className="flex gap-px flex-1 overflow-hidden h-5 items-end">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className={`flex-1 ${i >= 4 && i <= 11 ? "bg-[#00e5ff]/60" : i >= 16 && i <= 22 ? "bg-[#00e5ff]/40" : "bg-[#3b494c]/30"}`}
                style={{ minHeight: i === 7 ? "100%" : "40%" }}
              />
            ))}
          </div>
          <div className="font-mono text-[8px] text-[#00e5ff]/50 shrink-0">F:07</div>
        </div>
      </motion.div>
    </section>
  );
}
