"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { IconTrophy, IconAward, IconCertificate, IconFlag } from "@tabler/icons-react";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

const awards = [
  {
    title: "CodePath Advanced Software Engineering",
    rank: "Top 5% (Honors)",
    description: "Earned 'Advanced' certification. Mastered complex graph algorithms, DP, and system design patterns.",
    image: "/logos/codepath.jpg",
    icon: <IconCertificate className="text-primary" size={24} />,
    date: "Dec 2025"
  },
  {
    title: "ICPC Rocky Mountain Regional Contest 2025",
    rank: "Regional Finalist",
    description: "Selected to represent ASU. Competed against top university teams in the Rocky Mountain region.",
    image: "/logos/icpc.svg",
    icon: <IconFlag className="text-primary" size={24} />,
    date: "Nov 2025"
  },
  {
    title: "GCN GlobeStrat Hackathon 2025",
    rank: "2nd Place Winner",
    description: "Built 'Zipe', a map-based social platform. Awarded $250 prize for 'Map-In-Motion' track.",
    image: "/logos/gcn.jpg", 
    icon: <IconAward className="text-secondary" size={24} />,
    date: "Nov 2025"
  },
  {
    title: "ICPC North American Qualifier (NAQ) 2025",
    rank: "2nd Place (ASU Site)",
    description: "Solved 5 algorithmic problems under strict time constraints. Ranked top 2 among university teams.",
    image: "/logos/icpc.svg",
    icon: <IconTrophy className="text-primary" size={24} />,
    date: "Oct 2025"
  }
];

export function HonorsSection() {
  return (
    <section id="honors" className="px-6 md:px-12 max-w-5xl mx-auto py-24">
      <BlurFade delay={0.1}>
        <h2 className="text-3xl font-bold text-foreground mb-12 flex items-center gap-3">
          <IconTrophy className="text-primary" />
          Honors & Awards
        </h2>
      </BlurFade>
      
      <div className="grid grid-cols-1 gap-4">
        {awards.map((award, idx) => (
          <BlurFade key={idx} delay={0.2 + idx * 0.1} inView>
            <GlassCard className="flex flex-col md:flex-row gap-6 items-start md:items-center group hover:bg-white/5 transition-colors">
              
              {award.image ? (
                  <div className="h-20 w-20 rounded-full bg-white border border-border flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-105 transition-transform">
                      <Image 
                          src={award.image} 
                          alt={award.title}
                          width={80} 
                          height={80} 
                          className="object-cover w-full h-full" 
                      />
                  </div>
              ) : (
                  <div className="h-20 w-20 rounded-full bg-accent/50 border border-border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {award.icon}
                  </div>
              )}

              <div className="flex-1 w-full">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{award.title}</h3>
                      <span className="text-xs font-mono text-muted-foreground border border-border px-2 py-0.5 rounded-full mt-1 md:mt-0 w-fit">{award.date}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-semibold text-secondary bg-secondary/10 px-2 py-0.5 rounded-md border border-secondary/20">
                          {award.rank}
                      </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{award.description}</p>
              </div>

            </GlassCard>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}