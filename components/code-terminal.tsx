"use client";

import { useEffect, useState, useRef } from "react";
import { IconTerminal2 } from "@tabler/icons-react";

// The "Boot Sequence" lines
const lines = [
  { text: "initializing_systems...", cmd: false, color: "text-muted-foreground", delay: 10 },
  { text: "loading_kernel_modules (cyclops_mips)... [OK]", cmd: false, color: "text-secondary", delay: 400 },
  { text: "alloc_pages(Order::Zero) ... [OK]", cmd: false, color: "text-secondary", delay: 200 },
  { text: "mounting_vfs (ext4)... [OK]", cmd: false, color: "text-secondary", delay: 300 },
  { text: "spawning_process: portfolio_daemon (PID 1)", cmd: false, color: "text-foreground", delay: 500 },
  { text: "connection_established: visitor@127.0.0.1", cmd: false, color: "text-foreground", delay: 200 },
  { text: "access_granted: root", cmd: false, color: "text-secondary", delay: 300 },
  { text: "welcome_user(Souradeep)", cmd: false, color: "text-primary", delay: 600 },
];

export function CodeTerminal() {
  const [displayedLines, setDisplayedLines] = useState<typeof lines>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isBooted, setIsBooted] = useState(false); // Track if animation is done
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      setIsBooted(true); // Animation finished
      return;
    }

    const currentLine = lines[currentLineIndex];

    const timeout = setTimeout(() => {
      if (currentCharIndex < currentLine.text.length) {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          if (newLines.length <= currentLineIndex) {
            newLines.push({ ...currentLine, text: currentLine.text[currentCharIndex] });
          } else {
            newLines[currentLineIndex].text = currentLine.text.slice(0, currentCharIndex + 1);
          }
          return newLines;
        });
        setCurrentCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }, currentLine.delay);
      }
    }, 20); // Typing speed

    return () => clearTimeout(timeout);
  }, [currentLineIndex, currentCharIndex]);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [displayedLines, isBooted]);

  return (
    <div className="w-full max-w-lg rounded-xl border border-border bg-card/50 backdrop-blur-xl shadow-2xl overflow-hidden transition-colors duration-500 hover:border-primary/30">
      
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground/50">
          <IconTerminal2 size={12} />
          <span>zsh — 80x24</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        ref={scrollRef}
        className="p-6 font-mono text-sm h-[320px] overflow-y-auto space-y-2 scrollbar-hide"
      >
        {displayedLines.map((line, i) => (
          <div key={i} className={`${line.color} break-words`}>
            <span className="opacity-50 mr-2">➜</span>
            {line.text}
          </div>
        ))}

        {/* THE FINAL BLINKING CURSOR 
            Only appears when isBooted = true.
            It mimics a prompt waiting for user input.
        */}
        {isBooted && (
            <div className="text-foreground flex items-center">
                <span className="text-secondary font-bold mr-2">➜</span>
                <span className="text-blue-400 font-bold mr-2">~</span>
                {/* The Blinking Block */}
                <span className="inline-block w-2.5 h-5 bg-muted-foreground animate-pulse" />
            </div>
        )}
      </div>
    </div>
  );
}