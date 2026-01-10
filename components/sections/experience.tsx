"use client";

import { DATA } from "@/data/resume";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 md:px-12 max-w-5xl mx-auto py-24">
      <BlurFade delay={0.1}>
        <h2 className="text-3xl font-bold text-foreground mb-12">Experience</h2>
      </BlurFade>
      
      <div className="space-y-12 ml-5"> 
        {DATA.work.map((role, idx) => {
          // LOGIC: Custom background for logos with transparent backgrounds
          const isCruv = role.company.includes("Cruv");
          
          return (
            <BlurFade key={role.company} delay={0.2 + idx * 0.1} inView>
              <div className="relative pl-20 border-l border-border group">
                {/* TIMELINE LOGO NODE */}
                <div 
                    className={`absolute -left-[20px] top-0 h-10 w-10 rounded-full border overflow-hidden flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${
                        // FIX: If it's Cruv, use a dark background (bg-zinc-900) and dark border.
                        // Otherwise, use the default white background.
                        isCruv 
                            ? "bg-zinc-900 border-zinc-800" 
                            : (role.logoBg ? role.logoBg : "bg-white border-border")
                    }`}
                >
                   {role.logoUrl ? (
                       <Image 
                          src={role.logoUrl} 
                          alt={role.company}
                          width={40} 
                          height={40} 
                          className={
                              // FIX: Adjust padding or object-fit specific to the logo
                              isCruv ? "object-contain p-2" : "object-contain p-1.5"
                          }
                       />
                   ) : (
                       <span className="font-bold text-black">{role.company[0]}</span>
                   )}
                </div>

                {/* CONTENT */}
                <div className="flex flex-col space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between min-h-[40px]">
                        <h3 className="text-xl font-bold text-foreground">{role.company}</h3>
                        <span className="text-sm text-muted-foreground font-mono">
                            {role.start} — {role.end}
                        </span>
                    </div>
                    
                    <p className="text-lg text-primary/80">{role.title}</p>
                    <p className="text-muted-foreground leading-relaxed max-w-3xl">
                    {role.description}
                    </p>
                </div>
              </div>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}