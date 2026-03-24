import { Navbar } from "@/components/navbar";
import { MouseGlow } from "@/components/mouse-glow";
import { CommandMenu } from "@/components/command-menu";
import { SystemMonitor } from "@/components/system-monitor";

// Section Imports
import { HeroSection } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { HonorsSection } from "@/components/sections/honors";
import { LeadershipSection } from "@/components/sections/leadership";
import { EducationSection } from "@/components/sections/education";
import { LibrarySection } from "@/components/sections/library";
import { WritingSection } from "@/components/sections/writing";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-muted-foreground font-sans selection:bg-primary/30 pb-24 relative overflow-x-hidden">
      
      {/* --- BACKGROUND AMBIENCE (FIXED) --- */}
      {/* Replaced hardcoded 'purple' with 'primary' and 'secondary' */}
      <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-20%] h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px] transition-colors duration-700 ease-in-out" />
          <div className="absolute top-[30%] right-[-20%] h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[120px] transition-colors duration-700 ease-in-out" />
          <div className="absolute bottom-[-10%] left-[0%] h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px] transition-colors duration-700 ease-in-out" />
      </div>

      {/* --- MAIN CONTENT LAYER --- */}
      <div className="relative z-10">
        
        {/* 1. INTRODUCTION */}
        <HeroSection />          
        <SkillsSection />        
        <AboutSection />         
        
        {/* 2. TECHNICAL WORK */}
        <ProjectsSection />      
        <ExperienceSection />    
        
        {/* 3. ACHIEVEMENTS (Grouped) */}
        <div className="space-y-0">
            <HonorsSection />    
            <LeadershipSection />
        </div>

        {/* 4. ACADEMICS */}
        <EducationSection />     
        
        {/* 5. INTELLECTUAL DEPTH (Grouped) */}
        <div className="space-y-0">
             <LibrarySection />
             <WritingSection /> 
        </div>
        
        {/* 6. FOOTER */}
        <ContactSection />       
      </div>
    </main>
  );
}