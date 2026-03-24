"use client";

import { DATA } from "@/data/resume";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { BlurFade } from "@/components/ui/blur-fade";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 md:px-12 max-w-5xl mx-auto py-24">
      <BlurFade delay={0.1}>
        <h2 className="text-3xl font-bold text-foreground mb-12">Selected Works</h2>
      </BlurFade>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DATA.projects.map((project, idx) => (
          <BlurFade key={project.title} delay={0.2 + idx * 0.1} inView className="h-full">
            <GlassCard
              className={cn(
                "h-full",
                idx === 0 || idx === 3 ? "md:col-span-2" : ""
              )}
            >
              <div className="flex flex-col h-full justify-between space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    {project.active && (
                      <span className="flex items-center gap-1 text-xs text-secondary border border-secondary/50 bg-secondary/10 px-2 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />{" "}
                        Active
                      </span>
                    )}
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-muted-foreground bg-accent/50 border border-border px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        className="text-sm font-medium flex items-center gap-1 text-foreground hover:text-primary transition-colors"
                      >
                        View Source <IconArrowUpRight size={16} />
                      </Link>
                    ))}
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