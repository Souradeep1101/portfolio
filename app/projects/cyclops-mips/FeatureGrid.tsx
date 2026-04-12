"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { 
  IconCpu, 
  IconChartBar, 
  IconDeviceDesktop, 
  IconDatabase, 
  IconTerminal2, 
  IconBolt 
} from "@tabler/icons-react";

const features = [
  {
    title: "Cycle-Accuracy",
    description: "Precise emulation of the MIPS R2000 instruction set with exact timing for every micro-operation.",
    icon: IconCpu,
    color: "text-[#85adff]"
  },
  {
    title: "Pipeline Visualizer",
    description: "Real-time state tracking across all 5 stages of the pipeline: Fetch, Decode, Execute, Memory, Write-back.",
    icon: IconChartBar,
    color: "text-[#c180ff]"
  },
  {
    title: "OpenGL Debugger",
    description: "High-performance graphics layer for step-by-step memory inspection and stack trace visualization.",
    icon: IconDeviceDesktop,
    color: "text-[#85adff]"
  },
  {
    title: "Memory Mapping",
    description: "Dynamic address space allocation with support for page fault handling and cache Simulation.",
    icon: IconDatabase,
    color: "text-[#ff8439]"
  },
  {
    title: "Native Terminal",
    description: "Integrated UART console for direct interaction with the simulated environment via serial I/O.",
    icon: IconTerminal2,
    color: "text-[#c180ff]"
  },
  {
    title: "Interrupt Handling",
    description: "Complete support for exception vectors and hardware interrupts with priority scheduling.",
    icon: IconBolt,
    color: "text-[#85adff]"
  }
];

export function FeatureGrid() {
  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto py-24">
      <BlurFade delay={0.3}>
        <div className="flex flex-col items-start mb-16">
            <span className="text-[10px] font-mono font-bold text-[#85adff] uppercase tracking-widest mb-3">
              Core Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-sans text-white tracking-tight">Engineered for Understanding</h2>
        </div>
      </BlurFade>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <BlurFade key={feature.title} delay={0.35 + idx * 0.05} inView>
            <div className="group relative h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#85adff]/50 hover:bg-[#85adff]/5 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <feature.icon size={56} className={feature.color} />
                </div>
                
                <div className="mb-6 inline-flex p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#85adff]/50 transition-colors">
                    <feature.icon size={24} className={feature.color} />
                </div>
                
                <h3 className="text-xl font-bold font-sans text-white mb-3">
                    {feature.title}
                </h3>
                
                <p className="text-sm font-sans text-slate-400 leading-relaxed">
                    {feature.description}
                </p>
                
                {/* Micro-animation highlight */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#85adff] group-hover:w-full transition-all duration-500" />
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
