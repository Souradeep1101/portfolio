"use client";

import { motion } from "framer-motion";
import {
  IconTimeline,
  IconBrush,
  IconBucketDroplet,
  IconMovie,
  IconColorPicker,
  IconDeviceFloppy,
} from "@tabler/icons-react";

const FEATURES = [
  {
    id: "01",
    span: "md:col-span-8",
    icon: IconTimeline,
    title: "CSP-Style Timeline",
    description:
      "Cel exposure blocks, loop markers, and ruler scrubbing. Optimized for traditional frame-by-frame workflows with millisecond precision.",
    accent: "border-l-4 border-[#00e5ff]",
    extra: (
      <div className="mt-8 flex gap-1 items-end h-10">
        {[
          { w: "w-1", h: "h-5", o: "opacity-30" },
          { w: "w-14", h: "h-10", o: "opacity-60" },
          { w: "w-1", h: "h-5", o: "opacity-30" },
          { w: "w-1", h: "h-3", o: "opacity-10" },
          { w: "w-1", h: "h-3", o: "opacity-10" },
          { w: "w-10", h: "h-7", o: "opacity-40" },
          { w: "w-4", h: "h-4", o: "opacity-20" },
          { w: "w-1", h: "h-6", o: "opacity-30" },
        ].map((bar, i) => (
          <div
            key={i}
            className={`${bar.w} ${bar.h} bg-[#00e5ff] ${bar.o} shrink-0`}
          />
        ))}
      </div>
    ),
  },
  {
    id: "02",
    span: "md:col-span-4",
    icon: IconBrush,
    title: "Advanced Brush Engine",
    description:
      "Pressure-sensitive Taper, Scatter, and Hardness controls with real-time Bézier smoothing.",
    accent: "",
    watermark: "BRSH",
  },
  {
    id: "03",
    span: "md:col-span-4",
    icon: IconBucketDroplet,
    title: "Fill Bucket (G)",
    description:
      "Precise scanline seed-fill with adjustable tolerance and gap-closing logic.",
    accent: "",
    tag: "Instant Pixel Traversal",
  },
  {
    id: "04",
    span: "md:col-span-4",
    icon: IconColorPicker,
    title: "HSV Colour Wheel",
    description:
      "Dockable HSV picker with triangle SV picker, hex input, and 32 user-defined swatches.",
    accent: "",
    tag: "Bidirectionally Linked",
  },
  {
    id: "05",
    span: "md:col-span-8",
    icon: IconMovie,
    title: "Universal Export",
    description:
      "Pro-grade output to MP4 (H.264/ProRes), APNG, and GIF via headless ffmpeg integration. Zero-loss preservation of colour profiles.",
    accent: "",
    formats: ["PNG SEQ", "APNG", "MP4 H.264", "PRORES", "GIF"],
  },
  {
    id: "06",
    span: "md:col-span-12",
    icon: IconDeviceFloppy,
    title: ".cyclops Project Format",
    description:
      "Custom hand-written binary with zlib-compressed pixel data, full layer/keyframe metadata, and FPS/loop region state. Save, load, and version-control your entire production pipeline.",
    accent: "border-l-4 border-[#ffdf96]",
    wide: true,
  },
];

export function FeatureGrid() {
  return (
    <section className="py-24 px-6 md:px-8 bg-[#131313]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div>
            <h2 className="font-sans font-black text-4xl uppercase tracking-tighter text-[#e5e2e1]">
              Phase 2 Features
            </h2>
            <div className="h-[3px] w-16 bg-[#00e5ff] mt-3" />
          </div>
          <p className="font-mono text-[10px] text-[#bac9cc]/60 tracking-[0.2em] uppercase">
            Production-Ready Toolset v2.0
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {FEATURES.map((f, idx) => {
            const Icon = f.icon;
            const bg =
              f.id === "01"
                ? "bg-[#201f1f]"
                : f.id === "05"
                ? "bg-[#2a2a2a]"
                : f.id === "06"
                ? "bg-[#1a1a18]"
                : "bg-[#1c1b1b]";

            return (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                className={`${f.span} ${bg} ${f.accent} p-8 relative overflow-hidden group cursor-default`}
              >
                {/* Icon + module tag */}
                <div className="flex justify-between items-start mb-10">
                  <div className="p-2 bg-[#00e5ff]/5 border border-[#00e5ff]/10 text-[#00e5ff] group-hover:border-[#00e5ff]/30 transition-colors">
                    <Icon size={22} />
                  </div>
                  <span className="font-mono text-[9px] text-[#bac9cc]/25 tracking-widest">
                    MODULE_{f.id}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-xl text-[#e5e2e1] uppercase tracking-tight mb-3">
                  {f.title}
                </h3>
                <p className="font-sans text-sm text-[#bac9cc] leading-relaxed max-w-md">
                  {f.description}
                </p>

                {/* Extras */}
                {f.extra}

                {f.tag && (
                  <div className="mt-6 inline-block font-mono text-[9px] text-[#00e5ff] bg-[#00e5ff]/8 border border-[#00e5ff]/15 px-2 py-1 uppercase tracking-wider">
                    {f.tag}
                  </div>
                )}

                {f.watermark && (
                  <div className="absolute bottom-3 right-4 font-mono text-5xl font-black text-[#bac9cc]/5 select-none pointer-events-none">
                    {f.watermark}
                  </div>
                )}

                {f.formats && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {f.formats.map((fmt) => (
                      <span
                        key={fmt}
                        className="font-mono text-[9px] text-[#bac9cc]/50 border border-[#3b494c]/50 px-2 py-0.5 tracking-wider"
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>
                )}

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#00e5ff] to-transparent group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
