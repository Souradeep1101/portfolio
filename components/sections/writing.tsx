// ❌ NO "use client" here (Server Component)
import { getPosts } from "@/lib/mdx"; 
import Link from "next/link";
import { GlassCard } from "@/components/ui/glass-card";
import { IconArticle, IconArrowRight, IconCalendar } from "@tabler/icons-react";
import { BlurFade } from "@/components/ui/blur-fade";

export function WritingSection() {
  const allPosts = getPosts();
  const latestPosts = allPosts.slice(0, 3);

  return (
    <section id="writing" className="px-6 md:px-12 max-w-5xl mx-auto py-24">
      <BlurFade delay={0.1}>
        <h2 className="text-3xl font-bold text-foreground mb-12 flex items-center gap-3">
          <IconArticle className="text-secondary" />
          Engineering Logs
        </h2>
      </BlurFade>
      
      <div className="grid grid-cols-1 gap-4">
        {latestPosts.map((post, idx) => (
          <BlurFade key={post.slug} delay={0.2 + idx * 0.1} inView>
            <GlassCard className="group cursor-pointer hover:border-secondary/30 transition-colors">
              <Link href={`/blog/${post.slug}`} className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
                  
                  <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3 text-xs font-mono text-secondary mb-1">
                          <span className="flex items-center gap-1">
                              <IconCalendar size={12} /> {post.metadata.publishedAt}
                          </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors">
                          {post.metadata.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                          {post.metadata.summary}
                      </p>

                      <div className="flex gap-2 pt-2">
                          {post.metadata.tags?.map((tag) => (
                              <span key={tag} className="px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider bg-secondary/5 text-secondary border border-secondary/20">
                                  {tag}
                              </span>
                          ))}
                      </div>
                  </div>

                  <div className="shrink-0 flex items-center justify-center h-10 w-10 rounded-full border border-border bg-accent group-hover:bg-secondary/10 group-hover:border-secondary/30 transition-all group-hover:scale-110">
                      <IconArrowRight className="text-muted-foreground group-hover:text-secondary" size={18} />
                  </div>

              </Link>
            </GlassCard>
          </BlurFade>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-transparent hover:border-foreground"
        >
            View Full Archive <IconArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}