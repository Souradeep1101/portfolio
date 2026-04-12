"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { IconCircleCheckFilled } from "@tabler/icons-react";

export function ArchitectureSection() {
  return (
    <div className="flex flex-col border-y border-white/5 bg-[#0a0a0a]/50">
      
      {/* 1. IDE Showcase Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <BlurFade delay={0.4} inView>
             <div className="relative rounded-3xl border border-white/5 overflow-hidden w-full bg-[#121212] p-6 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#85adff]/5 to-transparent pointer-events-none" />
                 <img src="/images/ide.png" alt="IDE Interface" className="rounded-xl w-full h-auto object-cover opacity-90 drop-shadow-2xl mix-blend-lighten" />
             </div>
          </BlurFade>

          <BlurFade delay={0.5} inView>
             <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold font-sans text-white leading-tight tracking-tight">
                   The Power of a Modern IDE,<br/>Applied to Hardware Simulation
                </h2>
                <p className="text-lg text-slate-400 font-sans leading-relaxed">
                   CyclopsMIPS leverages C++23 and OpenGL 3.3 to provide a hardware-accelerated interface that remains fluid even during high-frequency simulation. No more laggy web-based tools—experience the raw speed of native code.
                </p>
                
                <div className="space-y-4 pt-2">
                   <div className="flex items-center gap-4">
                      <IconCircleCheckFilled className="text-[#85adff] w-6 h-6 flex-shrink-0" />
                      <span className="text-white font-sans text-lg font-medium">Threaded Sync for non-blocking UI</span>
                   </div>
                   <div className="flex items-center gap-4">
                      <IconCircleCheckFilled className="text-[#85adff] w-6 h-6 flex-shrink-0" />
                      <span className="text-white font-sans text-lg font-medium">Real-time L1 Cache telemetry</span>
                   </div>
                   <div className="flex items-center gap-4">
                      <IconCircleCheckFilled className="text-[#85adff] w-6 h-6 flex-shrink-0" />
                      <span className="text-white font-sans text-lg font-medium">Custom Assembly Highlighting</span>
                   </div>
                </div>
             </div>
          </BlurFade>
        </div>
      </section>

      {/* 2. Dual-Stack Architecture Section */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto py-32 text-center w-full relative">
        <BlurFade delay={0.6} inView>
           <h2 className="text-4xl md:text-5xl font-bold font-sans text-white mb-4 tracking-tight">Dual-Stack Architecture</h2>
           <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-24">A SYMPHONY OF BACKEND LOGIC AND FRONTEND VISUALS</p>
        </BlurFade>

        <div className="relative flex flex-col md:flex-row justify-between items-stretch max-w-4xl mx-auto">
            {/* Center Timeline */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
            
            {/* Left Block - CyclopsCore */}
            <BlurFade delay={0.65} inView className="w-full md:w-[45%] flex flex-col items-end text-right space-y-6 pt-12 relative">
               {/* Dot connection */}
               <div className="absolute -right-[calc(10%+2px)] md:-right-[calc(11.11%_-_1px)_+_11.11%] top-[66px] w-1.5 h-1.5 rounded-full bg-[#85adff] hidden md:block shadow-[0_0_10px_#85adff]" style={{ transform: "translateX(250%)" }} />
               
               <div className="w-full">
                 <h3 className="text-3xl font-bold font-sans text-[#85adff] mb-2 tracking-tight">CyclopsCore</h3>
                 <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-6">THE ENGINE ROOM</p>
               </div>
               
               <div className="bg-[#121212]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 w-full flex flex-col gap-5 text-sm font-mono text-slate-300">
                  <div className="flex justify-end items-center gap-4">C++23 Modern Standard <span className="w-1.5 h-1.5 rounded-full bg-[#85adff]" /></div>
                  <div className="flex justify-end items-center gap-4">Synchronous MemoryBus <span className="w-1.5 h-1.5 rounded-full bg-[#85adff]" /></div>
                  <div className="flex justify-end items-center gap-4">Configurable L1 Caches <span className="w-1.5 h-1.5 rounded-full bg-[#85adff]" /></div>
                  <div className="flex justify-end items-center gap-4">True 5-stage CPU Pipeline <span className="w-1.5 h-1.5 rounded-full bg-[#85adff]" /></div>
               </div>
            </BlurFade>

            {/* Right Block - CyclopsApp */}
            <BlurFade delay={0.7} inView className="w-full md:w-[45%] flex flex-col items-start text-left space-y-6 mt-20 md:mt-64 relative">
               {/* Dot connection */}
               <div className="absolute -left-[calc(10%+2px)] md:-left-[calc(11.11%_-_1px)_+_11.11%] top-[18px] w-1.5 h-1.5 rounded-full bg-[#c180ff] hidden md:block shadow-[0_0_10px_#c180ff]" style={{ transform: "translateX(-250%)" }} />
               
               <div className="w-full">
                 <h3 className="text-3xl font-bold font-sans text-[#c180ff] mb-2 tracking-tight">CyclopsApp</h3>
                 <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-6">THE COMMAND CENTER</p>
               </div>
               
               <div className="bg-[#121212]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 w-full flex flex-col gap-5 text-sm font-mono text-slate-300">
                  <div className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-[#c180ff]" /> OpenGL 3.3 Rendering</div>
                  <div className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-[#c180ff]" /> Dear ImGui Advanced UI</div>
                  <div className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-[#c180ff]" /> Docking & Multi-window</div>
                  <div className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-[#c180ff]" /> Multi-Threaded Sync</div>
               </div>
            </BlurFade>
        </div>
      </section>

    </div>
  );
}
