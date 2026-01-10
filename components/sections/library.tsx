"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { IconBook } from "@tabler/icons-react";
import { BlurFade } from "@/components/ui/blur-fade";

const books = [
  {
    title: "Operating Systems: Three Easy Pieces",
    author: "Remzi H. Arpaci-Dusseau",
    status: "Reading",
    thoughts: "The gold standard for understanding virtualization, concurrency, and persistence. Currently implementing the scheduling algorithms in C++.",
    color: "border-primary/50 text-primary" // Dynamic Theme Color
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: "Randal E. Bryant",
    status: "Reference",
    thoughts: "My go-to guide for linking, loading, and low-level optimization. The chapters on Cache Memories changed how I write loops.",
    color: "border-secondary/50 text-secondary" // Dynamic Theme Color
  },
  {
    title: "Effective C++",
    author: "Scott Meyers",
    status: "Completed",
    thoughts: "Essential for moving from 'C with Classes' to modern RAII and template metaprogramming patterns.",
    color: "border-muted-foreground/50 text-muted-foreground"
  }
];

export function LibrarySection() {
  return (
    <section id="library" className="px-6 md:px-12 max-w-5xl mx-auto py-24">
      <BlurFade delay={0.1}>
        <h2 className="text-3xl font-bold text-foreground mb-12 flex items-center gap-3">
          <IconBook className="text-muted-foreground" />
          Knowledge Base
        </h2>
      </BlurFade>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((book, idx) => (
            <BlurFade key={book.title} delay={0.2 + idx * 0.1} inView>
              <GlassCard className="flex flex-col h-full hover:bg-white/5 transition-colors">
                  <div className="flex-1">
                      <div className="flex justify-between items-start mb-4">
                          <div className={`px-2 py-1 text-[10px] uppercase tracking-wider font-bold border rounded-full ${book.color}`}>
                              {book.status}
                          </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-foreground mb-1 leading-tight">{book.title}</h3>
                      <p className="text-sm text-muted-foreground/60 mb-4">by {book.author}</p>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed italic">
                          "{book.thoughts}"
                      </p>
                  </div>
              </GlassCard>
            </BlurFade>
        ))}
      </div>
    </section>
  );
}