import { getPostBySlug, getPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Navbar } from "@/components/navbar";
import { MouseGlow } from "@/components/mouse-glow";
import Link from "next/link";
import { IconArrowLeft, IconCalendar } from "@tabler/icons-react";
import { TracingBeam } from "@/components/ui/tracing-beam";

// Generate static params for all posts (SSG)
export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// UPDATE: params is now defined as a Promise
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // FIX: Await the params to extract the slug
  const { slug } = await params;
  
  const post = getPostBySlug(slug);

  return (
    <main className="min-h-screen bg-background text-muted-foreground font-sans selection:bg-purple-500/30 pb-24 relative">
      <MouseGlow />
      <div className="relative z-10">
        <Navbar />

        {/* Added 'pt-32' to push content down from fixed navbar */}
        <div className="pt-32 px-6"> 
          <TracingBeam className="px-6">
            
            <article className="max-w-3xl mx-auto relative">
              {/* Back Button */}
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white mb-8 transition-colors"
              >
                <IconArrowLeft size={16} />
                Back to Logs
              </Link>

              {/* Header */}
              <div className="mb-12 space-y-4">
                <div className="flex items-center gap-3 text-sm font-mono text-primary">
                    <span className="flex items-center gap-1">
                        <IconCalendar size={14} /> 
                        {post.metadata.publishedAt}
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                  {post.metadata.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    {post.metadata.summary}
                </p>
              </div>

              {/* Content */}
              <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-primary prose-pre:bg-accent/50 prose-pre:border prose-pre:border-border prose-code:text-purple-300">
                <MDXRemote source={post.content} />
              </div>
            </article>

          </TracingBeam>
        </div>
      </div>
    </main>
  );
}