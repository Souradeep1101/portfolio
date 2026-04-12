"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const carouselItems = [
  {
    type: "video",
    youtubeId: "IIRngWyxCRU",
    alt: "CyclopsMIPS Demo Video",
    caption: "CyclopsMIPS Live Demo - Educational Pipeline Visualization"
  },
  {
    type: "image",
    src: "/images/cyclops-mips-logo.png",
    alt: "CyclopsMIPS Mascot Logo",
    caption: "@2026 CyclopsMIPS - Digital Mascot & Branding • Design Inspired by GCC Wiki"
  },
  {
    type: "image",
    src: "/images/cyclops-mips-ide.png",
    alt: "CyclopsMIPS IDE Preview",
    caption: "MIPS Educator IDE - Integrated Architecture Debugger Interface"
  }
];

export function CyclopsMIPSSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % carouselItems.length);
  const prev = () => setIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);

  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto py-40 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <BlurFade delay={0.1} inView>
           <div className="space-y-8">
              <div className="flex flex-col items-start pt-4">
                <span className="text-[10px] font-mono font-bold text-[#c180ff] uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full bg-[#c180ff]/10 border border-[#c180ff]/20 mb-8">
                    Product Roadmap
                </span>
                <h2 className="text-5xl md:text-6xl font-black font-sans text-white tracking-tight leading-[1.1]">
                    CyclopsMIPS
                </h2>
              </div>
              
              <p className="text-xl text-slate-200 font-sans font-medium leading-relaxed">
                  "Currently working on the first stable release of it."
              </p>
              
              <p className="text-lg text-slate-400 font-sans leading-relaxed">
                  CyclopsMIPS is being redesigned from the ground up to provide the most fluid and robust 
                  hardware exploration environment. We are focusing on extreme stability, real-time 
                  telemetry, and a polished user experience for computer architects.
              </p>
              
              <div className="flex gap-4 pt-4">
                  <button 
                    onClick={prev}
                    className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-all text-slate-400 hover:text-white"
                  >
                      <IconChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={next}
                    className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-all text-slate-400 hover:text-white"
                  >
                      <IconChevronRight size={24} />
                  </button>
              </div>
           </div>
        </BlurFade>

        {/* Right Side: Carousel */}
        <BlurFade delay={0.2} inView>
           <div className="relative group aspect-square lg:aspect-[4/3] rounded-3xl border border-white/5 bg-[#121212] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#c180ff]/5 to-transparent pointer-events-none" />
                
                <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute inset-0 flex flex-col"
                    >
                        <div className="flex-1 p-2 flex items-center justify-center overflow-hidden">
                            {carouselItems[index].type === "video" ? (
                                <div className="w-full h-full p-4">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${carouselItems[index].youtubeId}?rel=0&modestbranding=1`}
                                        title={carouselItems[index].alt}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="rounded-xl shadow-lg aspect-video w-full h-full"
                                    ></iframe>
                                </div>
                            ) : (
                                <img 
                                  src={carouselItems[index].src} 
                                  alt={carouselItems[index].alt} 
                                  className="max-w-full max-h-full object-contain rounded-xl shadow-lg" 
                                />
                            )}
                        </div>
                        <div className="bg-black/40 backdrop-blur-md px-6 py-4 border-t border-white/5">
                            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest items-center flex gap-3">
                                <span className="w-1 h-1 rounded-full bg-[#c180ff]" />
                                {carouselItems[index].caption}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Progress Indicators */}
                <div className="absolute top-6 right-6 flex gap-2">
                    {carouselItems.map((_, i) => (
                        <div 
                          key={i}
                          className={`h-1.5 transition-all duration-300 rounded-full ${i === index ? 'w-8 bg-[#c180ff]' : 'w-2 bg-white/20'}`}
                        />
                    ))}
                </div>
           </div>
        </BlurFade>

      </div>
    </section>
  );
}
