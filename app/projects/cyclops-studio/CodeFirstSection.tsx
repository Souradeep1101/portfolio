"use client";

import { motion } from "framer-motion";
import { IconCircleCheck } from "@tabler/icons-react";

const STATS = [
  { label: "LOC", value: "~9,000", sub: "C++17 Source" },
  { label: "LIBS", value: "8", sub: "Vendored, Zero pkg mgr" },
  { label: "FPS", value: "144+", sub: "High-density canvas" },
  { label: "DELTA", value: "<0.5ms", sub: "Avg frame time" },
];

const CHECK_ITEMS = [
  "8,000+ lines of clean C++17",
  "Zero external package managers — vendored git submodules only",
  "Native Stylus/Tablet support via Windows Ink API",
  "DLL-split Engine/App for maximum stability and reuse",
  "glBlitFramebuffer VRAM snapshots for O(1) undo",
];

const CODE_LINES = [
  { tokens: [{ t: "void ", c: "#ffdf96" }, { t: "Renderer2D::Flush", c: "#c3f5ff" }, { t: "() {", c: "#bac9cc" }] },
  { tokens: [{ t: "  // Batch quads by texture slot", c: "#bac9cc/35" }] },
  { tokens: [{ t: "  for", c: "#00e5ff" }, { t: " (uint32_t i = 0; i < m_TextureSlotIndex; i++) {", c: "#bac9cc" }] },
  { tokens: [{ t: "    m_TextureSlots", c: "#bac9cc" }, { t: "[i]", c: "#ffdf96" }, { t: "->Bind(i);", c: "#bac9cc" }] },
  { tokens: [{ t: "  }", c: "#bac9cc" }] },
  { tokens: [] }, // blank line
  { tokens: [{ t: "  RenderCommand::DrawIndexed", c: "#c3f5ff" }, { t: "(m_VertexArray, m_IndexCount);", c: "#bac9cc" }] },
  { tokens: [{ t: "  m_Stats.DrawCalls", c: "#bac9cc" }, { t: "++;", c: "#bac9cc" }] },
  { tokens: [{ t: "  m_IndexCount = 0;", c: "#bac9cc" }] },
  { tokens: [{ t: "  m_TextureSlotIndex = 1;", c: "#bac9cc" }] },
  { tokens: [{ t: "}", c: "#bac9cc" }] },
];

export function CodeFirstSection() {
  return (
    <section className="py-24 px-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#3b494c]/20 mb-20 border border-[#3b494c]/20"
        >
          {STATS.map(({ label, value, sub }) => (
            <div key={label} className="bg-[#131313] px-6 py-8 group hover:bg-[#1c1b1b] transition-colors">
              <div className="font-mono text-[8px] text-[#bac9cc]/40 uppercase tracking-[0.2em] mb-2">{label}</div>
              <div className="font-sans font-black text-3xl text-[#00e5ff] group-hover:text-[#c3f5ff] transition-colors">
                {value}
              </div>
              <div className="font-mono text-[9px] text-[#bac9cc]/40 mt-1">{sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Main 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-sans font-black text-4xl uppercase tracking-tighter mb-6 leading-tight text-[#e5e2e1]"
            >
              Code is the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c3f5ff] to-[#00e5ff]">
                First-Class
              </span>{" "}
              Citizen.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-sans text-[#bac9cc] leading-relaxed mb-10"
            >
              No bulky frameworks, no electron wrappers. CyclopsStudio is a native
              C++ beast built for hardware directness — compiles with Ninja in
              seconds, runs at bare-metal speed.
            </motion.p>
            <div className="space-y-4">
              {CHECK_ITEMS.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <IconCircleCheck size={16} className="text-[#00e5ff] mt-0.5 shrink-0" />
                  <span className="font-mono text-xs text-[#bac9cc] uppercase tracking-wider">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Code block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow backdrop */}
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#00e5ff]/4 blur-3xl pointer-events-none" />

            <div className="bg-[#0e0e0e] border border-[#3b494c]/30 relative overflow-hidden">
              {/* File tab */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#1c1b1b] border-b border-[#3b494c]/30">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#00e5ff]" />
                  <span className="font-mono text-[9px] text-[#bac9cc]/60 tracking-widest">
                    Renderer2D.cpp
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 bg-[#00e5ff]" />
                  <div className="w-1.5 h-1.5 bg-[#00e5ff]/30" />
                  <div className="w-1.5 h-1.5 bg-[#00e5ff]/10" />
                </div>
              </div>

              {/* Code lines */}
              <div className="p-5 overflow-x-auto">
                {CODE_LINES.map((line, li) => (
                  <div key={li} className="flex items-start gap-4 leading-6 min-h-[1.5rem]">
                    <span className="font-mono text-[10px] text-[#3b494c] select-none w-4 shrink-0 text-right mt-px">
                      {li + 1}
                    </span>
                    <div className="font-mono text-[11px] whitespace-pre">
                      {line.tokens.map((tok, ti) => (
                        <span key={ti} style={{ color: tok.c?.includes("/") ? undefined : tok.c }}>
                          {tok.t}
                        </span>
                      ))}
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
