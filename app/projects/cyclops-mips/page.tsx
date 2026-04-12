import { HeroSection } from "./HeroSection";
import { FeatureGrid } from "./FeatureGrid";
import { ArchitectureSection } from "./ArchitectureSection";
import { CyclopsMIPSSection } from "./CyclopsMIPSSection";
import { BuildInstructions } from "./BuildInstructions";
import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CyclopsMIPS | High-Fidelity Architecture Emulation",
  description: "A cycle-accurate MIPS R2000 emulator and pipeline simulator for visualization of computer architecture.",
  openGraph: {
    title: "CyclopsMIPS | High-Fidelity Architecture Emulation",
    description: "Visualize the pipeline, debug hazards, and explore computer architecture with a cycle-accurate MIPS R2000 emulator.",
    type: "website",
    url: "https://souradeep.dev/projects/cyclops-mips",
  },
  twitter: {
    card: "summary_large_image",
    title: "CyclopsMIPS | Educational MIPS Emulator",
    description: "Deep-dive into computer architecture with our cycle-accurate MIPS pipeline simulator.",
  },
};

export default function CyclopsMIPSPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-[#85adff]/30 pb-24 relative overflow-x-hidden pt-12">
      
      {/* Background Ambience matches the Stitch "Engineering Glassmorphism" system */}
      <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-5%] left-[-10%] h-[800px] w-[800px] rounded-full bg-[#85adff]/10 blur-[150px] transition-colors duration-700 ease-in-out" />
          <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[#c180ff]/10 blur-[150px] transition-colors duration-700 ease-in-out" />
      </div>

      <div className="relative z-10 px-6 max-w-7xl mx-auto">
        {/* Navigation */}
        <BlurFade delay={0.05}>
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#85adff] hover:text-white transition-colors py-8 group outline-none"
          >
            <IconArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </BlurFade>

        {/* Section Assembly */}
        <HeroSection />          
        <FeatureGrid />        
        <CyclopsMIPSSection />
        <ArchitectureSection />         
        <BuildInstructions />     
      </div>

      {/* Footer Branding */}
      <BlurFade delay={0.8} inView>
        <footer className="relative z-10 border-t border-white/5 py-12 mt-12 mb-6 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end md:items-start gap-8 font-mono text-[10px] text-slate-600 uppercase tracking-widest leading-relaxed">
           
           <div className="flex flex-col gap-2 max-w-md">
              <span className="text-white font-bold tracking-[0.2em] mb-1">CYCLOPSMIPS</span>
              <span>© 2026 CYCLOPSMIPS ARCHITECTURE. ALL RIGHTS RESERVED.</span>
              <span>SYSTEM_STATUS: <span className="text-green-500">STABLE</span> | MIT LICENSE</span>
           </div>

           <div className="flex flex-col gap-1 text-center items-center justify-center pt-2 max-w-sm hidden md:flex">
              <span>DEVELOPED WITH <span className="text-[#ff5f56]">♥</span> FOR THE NEXT GENERATION</span>
              <span>OF COMPUTER ARCHITECTS.</span>
           </div>

           <div className="flex gap-6 pt-2">
              <Link href="https://github.com/Souradeep1101/CyclopsMIPS" target="_blank" className="hover:text-white transition-colors">GITHUB</Link>
              <Link href="#" className="hover:text-white transition-colors">DISCORD</Link>
              <Link href="#" className="hover:text-white transition-colors">TWITTER</Link>
              <Link href="#" className="hover:text-white transition-colors">SPECS</Link>
           </div>

        </footer>
      </BlurFade>
    </main>
  );
}
