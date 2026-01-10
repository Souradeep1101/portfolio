"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { 
    IconBrandGithub, 
    IconBrandLinkedin, 
    IconBrandX, 
    IconBrandReddit, 
    IconBrandYoutube, 
    IconSchool,
    IconMail,
    IconBrandDiscord
} from "@tabler/icons-react";
import { BlurFade } from "@/components/ui/blur-fade";

const socials = [
  { name: "GitHub", url: "https://github.com/Souradeep1101", icon: <IconBrandGithub size={20} />, handle: "@Souradeep1101" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/Souradeep1101", icon: <IconBrandLinkedin size={20} />, handle: "Souradeep Banerjee" },
  { name: "X (Twitter)", url: "https://twitter.com/Souradeep1101", icon: <IconBrandX size={20} />, handle: "@Souradeep1101" },
  { name: "ASU Profile", url: "https://search.asu.edu/profile/4997799", icon: <IconSchool size={20} />, handle: "Student Directory" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UCv4ctQjbqZ0tq8lxchYkm2g", icon: <IconBrandYoutube size={20} />, handle: "Channel" },
  { name: "Reddit", url: "https://www.reddit.com/user/Souradeep1101/", icon: <IconBrandReddit size={20} />, handle: "u/Souradeep1101" },
  { name: "Discord", url: "https://discord.com/users/souradeep1101", icon: <IconBrandDiscord size={20} />, handle: "souradeep1101" },
  { name: "Email", url: "mailto:sbaner92@asu.edu", icon: <IconMail size={20} />, handle: "sbaner92@asu.edu" }
];

export function ContactSection() {
  return (
    <section id="contact" className="px-6 md:px-12 max-w-5xl mx-auto py-24">
      <BlurFade delay={0.1}>
        <h2 className="text-3xl font-bold text-foreground mb-12">Connect</h2>
      </BlurFade>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {socials.map((social, idx) => (
          <BlurFade key={social.name} delay={0.2 + idx * 0.05} inView>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <GlassCard className="h-full flex flex-col items-center justify-center gap-3 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer">
                <div className={`p-3 rounded-full bg-accent/50 border border-border transition-colors text-muted-foreground group-hover:text-primary group-hover:bg-primary/10`}>
                  {social.icon}
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-foreground">{social.name}</p>
                  <p className="text-xs text-muted-foreground group-hover:text-primary/80 transition-colors">{social.handle}</p>
                </div>
              </GlassCard>
            </a>
          </BlurFade>
        ))}
      </div>

      <BlurFade delay={0.5}>
        <div className="mt-20 text-center border-t border-border pt-8">
            <p className="text-muted-foreground text-sm">
              Designed & Engineered by <span className="text-foreground font-semibold">Souradeep Banerjee</span>
            </p>
            <p className="text-muted-foreground/60 text-xs mt-2 font-mono">
              System: Next.js 14 / Tailwind / Framer Motion / Vercel
            </p>
        </div>
      </BlurFade>
    </section>
  );
}