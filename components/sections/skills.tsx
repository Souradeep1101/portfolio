"use client";

import Marquee from "react-fast-marquee";
import { BlurFade } from "@/components/ui/blur-fade";

const skills = [
  "C++23", "Rust", "CUDA", "OpenGL", "Vulkan", "Python", "Linux Kernel", "Docker", "CMake", "Assembly (MIPS)", "Next.js", "PostgreSQL"
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 overflow-hidden relative">
      {/* Fades the edges so the marquee looks seamless */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
      
      <BlurFade delay={0.1}>
        <h2 className="text-center text-xl font-semibold text-muted-foreground mb-12 uppercase tracking-widest">
          Technical Arsenal
        </h2>
      </BlurFade>

      <BlurFade delay={0.2}>
        <Marquee gradient={false} speed={40} className="py-4">
          {skills.map((skill) => (
            <div 
              key={skill} 
              className="mx-8 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-foreground font-mono text-sm hover:border-primary/50 hover:text-primary hover:bg-primary/10 transition-all cursor-default backdrop-blur-sm shadow-[0_0_10px_rgba(255,255,255,0.05)]"
            >
              {skill}
            </div>
          ))}
        </Marquee>
      </BlurFade>
    </section>
  );
}