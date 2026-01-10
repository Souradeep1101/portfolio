import { getPosts } from "@/lib/mdx";
import { Navbar } from "@/components/navbar";
import { MouseGlow } from "@/components/mouse-glow"; // Consistent FX
import Link from "next/link";
import { IconArrowRight, IconBrandGithub } from "@tabler/icons-react";

export const metadata = {
  title: "Engineering Logs | Souradeep Banerjee",
  description: "Technical writings on Systems Engineering, C++, and High-Performance Computing.",
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="min-h-screen bg-background text-muted-foreground font-sans selection:bg-purple-500/30 pb-24 relative">
      
      {/* Global FX */}
      <MouseGlow />
      
      {/* Background Gradients (Subtler for reading) */}
      <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-20%] h-[600px] w-[600px] rounded-full bg-emerald-900/10 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-900/10 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        
        <div className="px-6 md:px-12 max-w-4xl mx-auto pt-32">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 border-b border-border pb-8">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Engineering Logs</h1>
                <p className="text-muted-foreground text-lg max-w-xl">
                    Documenting my journey through low-level systems, competitive programming, and engine architecture.
                </p>
            </div>
            
            <Link 
                href="https://github.com/Souradeep1101" 
                target="_blank"
                className="group flex items-center gap-3 px-5 py-3 text-sm font-medium text-muted-foreground bg-accent/50 border border-border rounded-full hover:bg-white/10 hover:text-white transition-all hover:scale-105"
            >
                <IconBrandGithub size={18} />
                <span>Subscribe via GitHub</span>
            </Link>
          </div>
          
          {/* Post List */}
          <div className="space-y-4">
            {posts.map((post, idx) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="block group relative p-6 sm:p-8 rounded-2xl bg-accent/50 border border-white/5 hover:border-emerald-500/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-3">
                  <h2 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">
                    {post.metadata.title}
                  </h2>
                  <span className="font-mono text-sm text-slate-500 shrink-0 border border-border px-2 py-1 rounded-md">
                    {post.metadata.publishedAt}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
                  {post.metadata.summary}
                </p>

                <div className="flex items-center justify-between mt-4">
                    {/* Tags */}
                    <div className="flex gap-2">
                        {post.metadata.tags?.map((tag) => (
                            <span key={tag} className="px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider bg-background/40 text-muted-foreground border border-border group-hover:border-emerald-500/20 group-hover:text-secondary/80 transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Read More Arrow */}
                    <div className="flex items-center gap-2 text-sm text-secondary font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        Read Article <IconArrowRight size={16} />
                    </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}