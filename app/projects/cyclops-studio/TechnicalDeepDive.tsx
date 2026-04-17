"use client";

import { motion } from "framer-motion";

const TECH_ITEMS = [
  {
    tag: "MEMORY_MANAGEMENT",
    title: "Cyclops Binary Format",
    body: "Zlib-compressed .cyclops files for ultra-fast I/O. Reduced disk footprint by up to 85% compared to standard project files.",
  },
  {
    tag: "GRAPHICS_PIPELINE",
    title: "OpenGL 4.5 Quad Batching",
    body: "10,000+ quads per flush with 16 texture slots. Hardware-accelerated brush blending at 144 FPS+ even on high-density canvases.",
  },
  {
    tag: "ARCHITECTURE",
    title: "Engine.dll / App.exe Split",
    body: "Engine.dll handles all render and scene logic. App.exe is the UI consumer — zero reverse dependencies for maximum stability and reuse.",
  },
  {
    tag: "EXPORT_PIPELINE",
    title: "Headless ffmpeg Integration",
    body: "Background std::thread shells out to ffmpeg for video encoding. Progress tracked via std::atomic<float> polled from the UI every frame.",
  },
];

const PERF_BARS = [40, 45, 38, 42, 90, 44, 41, 56, 33, 48];

export function TechnicalDeepDive() {
  return (
    <section className="py-24 px-6 md:px-8 bg-[#0e0e0e] border-y border-[#3b494c]/15">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-20"
        >
          <p className="font-mono text-[10px] text-[#00e5ff] uppercase tracking-[0.4em] mb-4">
            Under The Hood
          </p>
          <h2 className="font-sans font-black text-4xl md:text-5xl uppercase tracking-tighter text-[#e5e2e1]">
            Engineered for Performance
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Technical points */}
          <div className="space-y-10">
            {TECH_ITEMS.map((item, i) => (
              <motion.div
                key={item.tag}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative pl-6 border-l border-[#00e5ff]/15 group"
              >
                {/* Animated accent dot */}
                <div className="absolute left-[-5px] top-1 w-2 h-2 border border-[#00e5ff]/40 bg-[#0e0e0e] group-hover:bg-[#00e5ff]/30 transition-colors" />
                <div className="font-mono text-[9px] text-[#00e5ff] uppercase tracking-[0.2em] mb-2">
                  {item.tag}
                </div>
                <h4 className="font-sans font-bold text-lg text-[#e5e2e1] uppercase tracking-tight mb-2">
                  {item.title}
                </h4>
                <p className="font-sans text-sm text-[#bac9cc] leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right: Perf monitor widget */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-60px" }}
            className="bg-[#131313] border border-[#3b494c]/30 shadow-2xl"
          >
            {/* Widget header */}
            <div className="px-6 py-4 border-b border-[#3b494c]/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-pulse" />
                <span className="font-mono text-[10px] text-[#00e5ff] uppercase tracking-wider">
                  Performance Monitor
                </span>
              </div>
              <div className="font-mono text-[10px] text-[#bac9cc]/50">
                60.0 FPS | 0.8 ms
              </div>
            </div>

            <div className="p-6">
              {/* Bar chart */}
              <div className="h-36 flex items-end gap-1 mb-6">
                {PERF_BARS.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.04, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={`flex-1 ${
                      h === 90 ? "bg-[#00e5ff]" : "bg-[#00e5ff]/20"
                    }`}
                  />
                ))}
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 border-t border-[#3b494c]/20 pt-5">
                {[
                  { label: "GPU Memory", value: "1.2 GB / 8 GB" },
                  { label: "CPU Threads", value: "12 Active" },
                  { label: "Draw Calls", value: "38 / frame" },
                  { label: "Quads / flush", value: "10,000+" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="font-mono text-[8px] text-[#bac9cc]/40 uppercase tracking-widest mb-1">
                      {label}
                    </div>
                    <div className="font-sans font-bold text-[#00e5ff] text-sm">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
