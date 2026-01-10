"use client";

import { DATA } from "@/data/resume";
import { GlassCard } from "@/components/ui/glass-card";
import { IconSchool, IconBook } from "@tabler/icons-react";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

export function EducationSection() {
  return (
    <section id="education" className="px-6 md:px-12 max-w-5xl mx-auto py-24">
      <BlurFade delay={0.1}>
        <h2 className="text-3xl font-bold text-foreground mb-12 flex items-center gap-3">
          <IconSchool className="text-primary" />
          Education
        </h2>
      </BlurFade>
      
      <div className="grid grid-cols-1 gap-6">
        {DATA.education.map((edu, idx) => (
          <BlurFade key={edu.school} delay={0.2 + idx * 0.1} inView>
            <GlassCard className="relative overflow-hidden group">
              
              {/* Background Decoration - DYNAMIC THEME COLOR */}
              <div className="absolute top-0 right-0 p-32 bg-primary/10 blur-[100px] rounded-full pointer-events-none transition-colors duration-500" />

              <div className="flex flex-col md:flex-row justify-between items-start gap-6 relative z-10">
                
                <div className="flex-1 flex gap-4">
                  {/* LOGO */}
                  <div className="h-16 w-16 rounded-xl bg-white p-1.5 border border-border shrink-0 overflow-hidden hidden md:block">
                      <Image 
                          src={edu.logoUrl} 
                          alt={edu.school}
                          width={64} 
                          height={64} 
                          className="object-contain w-full h-full"
                      />
                  </div>

                  <div className="space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-2xl font-bold text-foreground">{edu.school}</h3>
                          <span className="px-3 py-1 text-xs font-bold text-primary-foreground bg-primary rounded-full">
                              GPA {edu.gpa}
                          </span>
                      </div>
                      
                      <p className="text-lg text-primary/80 font-medium">{edu.degree}</p>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mt-1">
                          {edu.honors.map((honor, i) => (
                              <span key={honor} className="flex items-center gap-2">
                                  {i > 0 && <span className="text-muted-foreground/40">•</span>}
                                  {honor}
                              </span>
                          ))}
                      </div>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="font-mono text-muted-foreground text-sm border border-border px-3 py-1 rounded-full bg-accent/30">
                      {edu.start} — {edu.end}
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground mb-4">
                      <IconBook size={16} className="text-primary/70" />
                      <span>Relevant Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                          <span 
                              key={course} 
                              className="px-3 py-1.5 text-xs font-mono text-muted-foreground bg-accent/50 border border-white/5 rounded-md hover:text-primary hover:border-primary/30 transition-colors"
                          >
                              {course}
                          </span>
                      ))}
                  </div>
              </div>

            </GlassCard>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}