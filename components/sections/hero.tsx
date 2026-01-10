"use client";

import { DATA } from "@/data/resume";
import Link from "next/link";
import { CodeTerminal } from "@/components/code-terminal";
import { HyperText } from "@/components/ui/hyper-text";
import { motion } from "framer-motion";

export function HeroSection() {
  // Split name for layout
  const names = DATA.name.split(" ");
  const firstName = names[0];
  const lastName = names.slice(1).join(" ");

  return (
    <section 
      id="home" 
      /* FIX: Changed min-h-[90vh] to dynamic padding. 
         pt-32 ensures the content doesn't sit under the fixed navbar on mobile.
         pb-12 reduces the massive gap to the skills section.
      */
      className="relative flex flex-col justify-center px-6 md:px-12 max-w-6xl mx-auto pt-32 pb-12 md:min-h-[90vh] md:pt-20"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        
        {/* Left Column: Text & Buttons (Animated) */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            /* Space-y-6 on mobile, space-y-8 on desktop */
            className="space-y-6 md:space-y-8 flex-1 items-start"
        >
          
          {/* Stacked Name Container */}
          <div className="flex flex-col items-start select-none">
            <HyperText
              text={firstName}
              className="text-5xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground leading-[0.9]"
              duration={1000}
            />
            <HyperText
              text={lastName}
              className="text-5xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground leading-[0.9] -mt-1 md:-mt-4"
              duration={1200} 
            />
          </div>

          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            {DATA.description}
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4">
            {Object.values(DATA.contact.social).map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                className="px-5 py-2.5 md:px-6 md:py-3 rounded-full border border-border bg-accent/50 hover:bg-accent hover:border-primary/50 transition-all text-foreground text-sm md:text-base font-medium"
              >
                {social.name}
              </Link>
            ))}
            <Link
              href="/resume"
              className="px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-foreground text-background hover:bg-foreground/90 transition text-sm md:text-base font-bold"
            >
              View Resume
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Terminal (Animated Slide In) */}
        <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
             /* Added w-full and a tighter margin-top for mobile to close the gap */
             className="flex-1 w-full mt-8 md:mt-0 flex justify-center md:justify-end"
        >
          <CodeTerminal />
        </motion.div>
      </div>
    </section>
  );
}