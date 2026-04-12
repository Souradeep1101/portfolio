"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { IconCopy, IconCheck } from "@tabler/icons-react";
import { useState } from "react";

export function BuildInstructions() {
  const [copied, setCopied] = useState(false);
  
  const snippet = `git clone https://github.com/Souradeep1101/CyclopsMIPS.git
cd CyclopsMIPS
cmake -B out/build
cmake --build out/build`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="px-6 md:px-12 max-w-6xl mx-auto py-24 mb-24">
       <BlurFade delay={0.7} inView>
         <div className="bg-[#121212] border border-white/5 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)]">
            
            {/* Window Header bar */}
            <div className="bg-[#1a1a1a] border-b border-white/5 flex items-center px-6 py-4">
               <div className="flex gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
               </div>
               <div className="flex-1 text-center text-[11px] font-mono font-medium text-slate-500 tracking-wider">
                  cyclops_mips@kernel: ~
               </div>
            </div>

            {/* Split Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 p-10 md:p-16 gap-16 items-center">
               
               {/* Left Side: Info */}
               <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold font-sans text-white tracking-tight">Build From Source</h2>
                  <p className="text-slate-400 font-sans leading-relaxed text-sm max-w-sm">
                     Ready to contribute? Clone the repository and compile the binaries locally using CMake. Compatible with modern compilers and Windows systems.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 pt-6">
                     <span className="px-3.5 py-1.5 text-[10px] font-mono font-semibold bg-white/5 border border-white/10 rounded-full text-slate-400 uppercase tracking-widest hover:border-white/20 transition-colors">C++23</span>
                     <span className="px-3.5 py-1.5 text-[10px] font-mono font-semibold bg-white/5 border border-white/10 rounded-full text-slate-400 uppercase tracking-widest hover:border-white/20 transition-colors">CMAKE 3.20+</span>
                     <span className="px-3.5 py-1.5 text-[10px] font-mono font-semibold bg-white/5 border border-white/10 rounded-full text-slate-400 uppercase tracking-widest hover:border-white/20 transition-colors">WINDOWS 10/11</span>
                  </div>
               </div>

               {/* Right Side: Terminal Block */}
               <div className="group relative bg-[#050505] p-8 rounded-2xl border border-white/10 font-mono text-xs leading-relaxed space-y-5 shadow-inner">
                  
                  <div className="flex text-slate-300">
                     <span className="text-[#85adff] mr-4 w-4 shrink-0">$</span>
                     <span>git clone<br/><span className="text-slate-400">https://github.com/Souradeep1101/CyclopsMIPS.git</span></span>
                  </div>
                  
                  <div className="flex text-slate-300">
                     <span className="text-[#85adff] mr-4 w-4 shrink-0">$</span>
                     <span>cd CyclopsMIPS</span>
                  </div>
                  
                  <div className="flex text-slate-300">
                     <span className="text-[#85adff] mr-4 w-4 shrink-0">$</span>
                     <span>cmake -B out/build</span>
                  </div>
                  
                  <div className="flex text-slate-300">
                     <span className="text-[#85adff] mr-4 w-4 shrink-0">$</span>
                     <span>cmake --build out/build</span>
                  </div>
                  
                  <div className="pt-4 text-[#27c93f] font-semibold opacity-90">
                     Build successful. Binary available at<br/>
                     ./out/build/CyclopsMIPS.exe
                  </div>

                  <button 
                    onClick={copyToClipboard}
                    className="absolute top-4 right-4 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                    title="Copy commands"
                  >
                    {copied ? (
                      <IconCheck size={16} className="text-green-500" />
                    ) : (
                      <IconCopy size={16} className="text-slate-400" />
                    )}
                  </button>
               </div>

            </div>
         </div>
       </BlurFade>
    </section>
  );
}
