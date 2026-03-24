import { getPostBySlug, getPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { IconArrowLeft, IconCalendar } from "@tabler/icons-react";
import { TracingBeam } from "@/components/ui/tracing-beam"; 
import { Metadata } from "next";

import remarkGfm from "remark-gfm";      
import remarkMath from "remark-math";    
import rehypeKatex from "rehype-katex";  

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
      return {};
  }

  const { title, summary, publishedAt } = post.metadata;
  const ogImage = `/og-image.png`; 

  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
      type: "article",
      publishedTime: publishedAt,
      url: `https://souradeep.dev/blog/${slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: summary,
      images: [ogImage],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const mdxOptions = {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeKatex],
  };

  return (
    // 1. Removed 'pb-24' from here so main doesn't have untracked space
    <main className="min-h-screen bg-background text-muted-foreground font-sans selection:bg-purple-500/30 relative">
      <div className="relative z-10">
        <div className="pt-32 px-6"> 
          {/* Tracing Beam tracks everything inside it */}
          <TracingBeam className="px-6">
            
            {/* 2. Added 'pb-24' here. Now the beam tracks this padding! */}
            <article className="max-w-3xl mx-auto relative pb-24">
              
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white mb-8 transition-colors"
              >
                <IconArrowLeft size={16} />
                Back to Logs
              </Link>

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
                
                <div className="text-xl text-muted-foreground leading-relaxed">
                    <MDXRemote 
                        source={post.metadata.summary} 
                        options={{ mdxOptions }} 
                    />
                </div>
              </div>

              <div className="prose prose-invert prose-lg max-w-none 
                  prose-headings:text-white 
                  prose-a:text-primary 
                  prose-pre:bg-accent/50 prose-pre:border prose-pre:border-border 
                  prose-code:text-purple-300
                  prose-table:border-collapse prose-th:border prose-th:border-slate-700 prose-td:border prose-td:border-slate-700 prose-th:p-2 prose-td:p-2">
                
                <MDXRemote 
                    source={post.content} 
                    options={{ mdxOptions }} 
                />
                
              </div>
            </article>

          </TracingBeam>
        </div>
      </div>
    </main>
  );
}