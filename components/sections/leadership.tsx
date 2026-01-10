"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { IconUsers, IconBulb } from "@tabler/icons-react";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

const leadership = [
  {
    role: "Manager of Industry Programs",
    org: "ACM at ASU",
    date: "Oct 2025 - Present",
    description: "Leading technical operations and industry relations. Automated internal newsletters using Docker & React.",
    image: "/logos/acm.svg", 
    // Uses 'text-primary' so it adapts to Cyberpunk/Matrix
    icon: <IconUsers className="text-primary" size={32} /> 
  },
  {
    role: "AI Scholar",
    org: "Grand Challenges Scholars Program",
    date: "Aug 2024 - Present",
    description: "Conducting interdisciplinary research on Generative AI applications for the 'Joy of Living' theme.",
    image: "/logos/gcsp.webp", 
    // Uses 'text-secondary' for contrast
    icon: <IconBulb className="text-secondary" size={32} />
  }
];

export function LeadershipSection() {
  return (
    <section id="leadership" className="px-6 md:px-12 max-w-5xl mx-auto py-24">
      <BlurFade delay={0.1}>
        <h2 className="text-3xl font-bold text-foreground mb-12 flex items-center gap-3">
          <IconUsers className="text-primary" />
          Leadership
        </h2>
      </BlurFade>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {leadership.map((item, idx) => (
          <BlurFade key={idx} delay={0.2 + idx * 0.1} inView>
            <GlassCard className="group hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                
                {item.image ? (
                    <div className="h-20 w-20 rounded-full bg-white border border-border flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-105 transition-transform">
                       <Image 
                          src={item.image} 
                          alt={item.org}
                          width={80} 
                          height={80} 
                          className="object-cover w-full h-full"
                       />
                    </div>
                ) : (
                    <div className="h-20 w-20 rounded-full bg-accent/50 border border-border flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                      {item.icon}
                    </div>
                )}
                
                <div className="space-y-2 pt-1">
                  <div>
                      <h3 className="text-lg font-bold text-foreground leading-tight">{item.role}</h3>
                      <p className="text-sm text-primary/80 font-medium">{item.org}</p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                  </p>
                  
                  <div className="pt-2">
                      <span className="text-xs font-mono text-muted-foreground border border-border px-2 py-1 rounded-md bg-background/20">
                          {item.date}
                      </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}