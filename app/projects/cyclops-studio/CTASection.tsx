"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IconBrandGithub, IconPlayerPlay } from "@tabler/icons-react";
import Image from "next/image";

const SHORTCUTS = [
  { key: "B", action: "Brush tool" },
  { key: "E", action: "Eraser tool" },
  { key: "G", action: "Fill Bucket" },
  { key: "I", action: "Eyedropper" },
  { key: "Space", action: "Play / Pause" },
  { key: "Ctrl+Z", action: "Undo" },
  { key: "Ctrl+Y", action: "Redo" },
  { key: "Ctrl+S", action: "Save project" },
  { key: "Ctrl+E", action: "Export dialog" },
];

const FOOTER_LINKS = ["GitHub", "Documentation", "Architecture", "Release Notes"];

export function CTASection() {
  return (
    <>
      {/* Shortcut reference strip */}
      <section className="py-16 px-6 md:px-8 bg-[#131313] border-y border-[#3b494c]/15">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="font-mono text-[9px] text-[#bac9cc]/40 uppercase tracking-[0.3em] mb-8 text-center"
          >
            Keyboard Shortcuts
          </motion.p>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-px bg-[#3b494c]/10 border border-[#3b494c]/10">
            {SHORTCUTS.map((s, i) => (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                viewport={{ once: true }}
                className="bg-[#131313] hover:bg-[#1c1b1b] transition-colors p-4 flex flex-col items-center gap-2 group"
              >
                <kbd className="font-mono text-[10px] text-[#00e5ff] border border-[#00e5ff]/20 bg-[#00e5ff]/5 px-2 py-0.5 group-hover:border-[#00e5ff]/50 transition-colors">
                  {s.key}
                </kbd>
                <span className="font-mono text-[8px] text-[#bac9cc]/40 uppercase tracking-wider text-center">
                  {s.action}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-8 text-center relative overflow-hidden">
        {/* BG Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
          <Image
            fill
            src="/images/cyclops-bg-pattern.png"
            alt=""
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Radial glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] bg-[#00e5ff]/5 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] text-[#00e5ff] uppercase tracking-[0.4em] mb-6"
          >
            CyclopsStudio v2.4.0
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            viewport={{ once: true }}
            className="font-sans font-black text-5xl md:text-7xl uppercase tracking-tighter mb-14 text-[#e5e2e1] leading-[1]"
          >
            Start Animating with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c3f5ff] to-[#00e5ff]">
              CyclopsStudio.
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#"
              className="flex items-center gap-3 px-10 py-5 bg-[#00e5ff] text-[#001f24] font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_0_40px_rgba(0,229,255,0.25)] active:scale-[0.97]"
            >
              <IconPlayerPlay size={18} className="fill-current" />
              Watch Demo
            </a>
            <a
              href="https://github.com/Souradeep1101/CyclopsStudio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-10 py-5 bg-[#1c1b1b] text-[#e5e2e1] font-black text-xs uppercase tracking-widest hover:bg-[#2a2a2a] border border-[#3b494c]/50 transition-all active:scale-[0.97]"
            >
              <IconBrandGithub size={18} />
              GitHub Source
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            viewport={{ once: true }}
            className="mt-12 font-mono text-[9px] text-[#bac9cc]/25 tracking-[0.5em] uppercase"
          >
            Built for creators who demand performance.
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-10 px-8 bg-[#0e0e0e] border-t border-[#00e5ff]/8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-sans font-black text-sm text-[#c3f5ff] uppercase tracking-tighter">
              CyclopsStudio
            </span>
            <span className="font-mono text-[9px] text-gray-700 uppercase tracking-widest">
              v2.4.0-alpha | Powered by GPU Acceleration
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {FOOTER_LINKS.map((l) => (
              <Link
                key={l}
                href="#"
                className="font-mono text-[9px] uppercase tracking-widest text-gray-700 hover:text-[#c3f5ff] transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>

          <div className="font-mono text-[9px] uppercase tracking-widest text-gray-700">
            © 2026 CYCLOPS_CORE_SYSTEMS
          </div>
        </div>
      </footer>
    </>
  );
}
