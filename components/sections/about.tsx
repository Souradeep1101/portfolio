"use client";

import { DATA } from "@/data/resume";
import { GlassCard } from "@/components/ui/glass-card";
import { IconBrandGithub } from "@tabler/icons-react";
import { GitHubCalendar } from "react-github-calendar";
import { BlurFade } from "@/components/ui/blur-fade";

export function AboutSection() {
  return (
    <section id="about" className="px-6 md:px-12 max-w-5xl mx-auto py-24">
      <BlurFade delay={0.1}>
        <h2 className="text-3xl font-bold text-foreground mb-8">About Me</h2>
      </BlurFade>
      
      <BlurFade delay={0.25} inView>
        <GlassCard>
          <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed mb-8">
            <p className="whitespace-pre-wrap text-lg">{DATA.summary}</p>
            <p className="mt-4">
              I am currently focused on <strong className="text-foreground">Low-Latency Systems</strong> and{" "}
              <strong className="text-foreground">Computer Architecture</strong>.
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex items-center gap-2 mb-6">
              <IconBrandGithub className="text-foreground" size={20} />
              <h3 className="text-lg font-semibold text-foreground">Engineering Velocity</h3>
            </div>
            <div className="flex justify-center w-full overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
              <GitHubCalendar
                username="souradeep1101"
                colorScheme="dark"
                blockSize={12}
                blockMargin={4}
                fontSize={12}
              />
            </div>
          </div>
        </GlassCard>
      </BlurFade>
    </section>
  );
}