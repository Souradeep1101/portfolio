"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { IconPlayerPlay, IconCode, IconCpu } from "@tabler/icons-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 z-10">
          <BlurFade delay={0.1}>
            <div className="flex gap-3">
              <span className="px-3 py-1 rounded-full bg-[#121212] border border-[#85adff]/30 text-[10px] font-mono font-bold text-[#85adff] uppercase tracking-wider">
                VERSION 1.0
              </span>
              <span className="px-3 py-1 rounded-full bg-[#ff8439]/10 border border-[#ff8439]/30 text-[10px] font-mono font-bold text-[#ff8439] uppercase tracking-wider">
                STATUS: ACTIVE DEVELOPMENT
              </span>
            </div>
          </BlurFade>

          <BlurFade delay={0.15}>
            <h1 className="text-5xl md:text-[5rem] font-sans font-bold text-white leading-[1.05] tracking-tight">
              The Educational<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#85adff] to-[#c180ff]">
                MIPS Processor
              </span><br/>
              IDE
            </h1>
          </BlurFade>

          <BlurFade delay={0.2}>
            <p className="text-lg text-slate-400 font-sans max-w-lg leading-relaxed">
              Visualize the pipeline, debug hazards in real-time, and
              bridge the gap between high-level assembly and low-level
              machine state.
            </p>
          </BlurFade>

          <BlurFade delay={0.25}>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="https://youtu.be/IIRngWyxCRU?si=NqAj7FSo2VIVv1t8" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#85adff] text-black font-bold text-sm tracking-wide hover:bg-[#85adff]/90 transition-all shadow-[0_0_20px_rgba(133,173,255,0.3)]"
              >
                <IconPlayerPlay size={18} className="fill-current" />
                Watch Demo
              </a>
              <a 
                href="https://github.com/Souradeep1101/CyclopsMIPS" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#121212] border border-white/10 text-white font-bold text-sm tracking-wide hover:bg-white/5 transition-all"
              >
                <IconCode size={18} />
                View on GitHub
              </a>
            </div>
          </BlurFade>
        </div>

        {/* Right Content */}
        <BlurFade delay={0.3} className="relative z-10 flex justify-end">
           <div className="relative rounded-3xl border border-white/10 overflow-hidden w-full max-w-xl shadow-2xl bg-[#0a0a0a]">
               <img src="/images/microchip.png" alt="Processor" className="w-full h-[500px] object-cover opacity-90 mix-blend-lighten" />
               
               {/* Top Left Badge */}
               <div className="absolute top-6 left-6 inline-flex items-start gap-2 px-4 py-2 rounded-xl border border-white/10 bg-black/50 backdrop-blur-md">
                 <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse mt-1.5" />
                 <div className="flex flex-col text-left">
                   <span className="text-[10px] font-mono font-bold text-green-500 uppercase tracking-widest">System Live</span>
                   <span className="text-[10px] text-slate-400 font-mono">0.02ms Latency</span>
                 </div>
               </div>

               {/* Bottom Right Badge */}
               <div className="absolute bottom-6 right-6 p-4 rounded-full border border-white/10 bg-black/50 backdrop-blur-md">
                    <IconCpu size={28} className="text-[#85adff]" />
               </div>
           </div>
        </BlurFade>
        
      </div>
    </section>
  );
}
