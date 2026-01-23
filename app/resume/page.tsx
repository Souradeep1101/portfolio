"use client";

import { Navbar } from "@/components/navbar";
import { IconDownload, IconArrowLeft, IconBrandGithub, IconVersions, IconCode } from "@tabler/icons-react";
import Link from "next/link";

export default function ResumePage() {
  // 1. Define your Magic Link here
  const LATEST_RESUME_URL = "https://github.com/souradeep1101/resume/releases/latest/download/resume-systems.pdf";
  
  // 2. Define your Variants (if you have them)
  const FULLSTACK_RESUME_URL = "https://github.com/souradeep1101/resume/releases/latest/download/resume-fullstack.pdf";

  return (
    <main className="min-h-screen bg-background relative flex flex-col items-center">
      <div className="fixed top-6 z-50">
        <Navbar />
      </div>

      {/* HEADER */}
      <section className="w-full max-w-5xl mx-auto pt-32 px-6 flex flex-col md:flex-row justify-between items-end gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white tracking-tight">Resume</h1>
          <p className="text-muted-foreground mt-2 max-w-lg">
            This is my primary Systems Engineering resume. It is written in LaTeX and compiled automatically via GitHub Actions.
          </p>
        </div>
        
        <div className="flex gap-3">
            <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
                <IconArrowLeft size={16} /> Back
            </Link>

            {/* DYNAMIC DOWNLOAD BUTTON */}
            <a
                href={LATEST_RESUME_URL}
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black font-bold hover:bg-slate-200 transition-colors"
            >
                <IconDownload size={18} />
                Download PDF
            </a>
        </div>
      </section>

      {/* PDF VIEWER (Uses local file for stability) */}
      <section className="w-full max-w-5xl px-4 md:px-0 flex-1 pb-12">
        <div className="relative w-full aspect-[8.5/11] rounded-xl overflow-hidden border border-border shadow-2xl bg-accent/50 backdrop-blur-sm">
            <object
                data="/resume.pdf" // Keep a static copy in public/resume.pdf for preview
                type="application/pdf"
                className="w-full h-full"
            >
                <div className="flex flex-col items-center justify-center h-full text-center p-8 text-muted-foreground">
                    <p className="mb-4">Unable to embed PDF.</p>
                    <a href={LATEST_RESUME_URL} className="underline text-primary">Download instead</a>
                </div>
            </object>
        </div>
      </section>

      {/* VARIANTS & SOURCE CODE */}
      <section className="w-full max-w-5xl px-6 pb-24">
        <div className="border-t border-border pt-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <IconVersions className="text-primary" />
                Versions & Variants
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Variant: Full Stack */}
                {/* <a 
                    href={FULLSTACK_RESUME_URL}
                    className="group flex items-center justify-between p-4 rounded-lg border border-border bg-accent/50 hover:bg-white/10 transition-all"
                >
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                            <IconCode size={20} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors">Full Stack Version</h3>
                            <p className="text-xs text-slate-500">Optimized for Web & Cloud roles</p>
                        </div>
                    </div>
                    <IconDownload size={18} className="text-slate-500 group-hover:text-white" />
                </a> */}

                {/* Link to Repo (Since it's public now!) */}
                <a 
                    href="https://github.com/souradeep1101/resume"
                    target="_blank"
                    className="group flex items-center justify-between p-4 rounded-lg border border-border bg-accent/50 hover:bg-white/10 transition-all"
                >
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center text-primary">
                            <IconBrandGithub size={20} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">LaTeX Source Code</h3>
                            <p className="text-xs text-slate-500">View the commit history</p>
                        </div>
                    </div>
                    {/* External Link Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-500 group-hover:text-white h-[18px] w-[18px]"
                    >
                      <path d="M17 7l-10 10" />
                      <path d="M8 7h9v9" />
                    </svg>
                </a>

            </div>
        </div>
      </section>
      
    </main>
  );
}