"use client";

import * as React from "react";
import { Command } from "cmdk";
import { 
  IconSearch, 
  IconHome, 
  IconUser, 
  IconCode, 
  IconBriefcase, 
  IconBrandGithub, 
  IconBrandLinkedin, 
  IconFileText,
  IconArticle, // New Icon
  IconBook     // New Icon
} from "@tabler/icons-react";
import { useRouter } from "next/navigation"; // Use Next.js Router

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter(); // Initialize router

  // 1. Toggle Logic
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    const handleOpenEvent = () => setOpen(true);

    document.addEventListener("keydown", down);
    window.addEventListener("open-command-menu", handleOpenEvent);
    
    return () => {
      document.removeEventListener("keydown", down);
      window.removeEventListener("open-command-menu", handleOpenEvent);
    };
  }, []);

  // 2. Scroll Lock
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [open]);

  // 3. Helper to run command and close menu
  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-background/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={() => setOpen(false)}
    >
      <div 
        className="w-full max-w-lg overflow-hidden rounded-xl border border-white/20 bg-background/80 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <Command 
            loop 
            label="Command Menu" 
            className="w-full"
            onKeyDown={(e) => {
                if (e.key === "Escape") setOpen(false);
            }}
        >
          <div className="flex items-center border-b border-border px-4">
            <IconSearch className="mr-2 h-5 w-5 text-slate-500" />
            <Command.Input 
                autoFocus 
                placeholder="Type a command or search..." 
                className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 text-white disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          
          <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden py-2 px-2">
            <Command.Empty className="py-6 text-center text-sm text-slate-500">No results found.</Command.Empty>
            
            {/* --- WRITING GROUP (NEW) --- */}
            <Command.Group heading="Writing & Logs" className="text-xs font-medium text-slate-500 px-2 mb-2">
               <Command.Item 
                value="engineering logs blog writing" 
                onSelect={() => runCommand(() => router.push("/blog"))}
                className="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white"
              >
                <IconArticle className="mr-2 h-4 w-4 text-secondary" /> Engineering Logs
              </Command.Item>
            </Command.Group>

            {/* --- NAVIGATION GROUP --- */}
            <Command.Group heading="Navigation" className="text-xs font-medium text-slate-500 px-2 mb-2">
              <Command.Item 
                value="home" 
                onSelect={() => runCommand(() => router.push("/"))}
                className="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white"
              >
                <IconHome className="mr-2 h-4 w-4" /> Home
              </Command.Item>
              
              <Command.Item 
                value="about" 
                onSelect={() => runCommand(() => router.push("/#about"))}
                className="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white"
              >
                <IconUser className="mr-2 h-4 w-4" /> About
              </Command.Item>
              
              <Command.Item 
                value="projects work" 
                onSelect={() => runCommand(() => router.push("/projects"))}
                className="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white"
              >
                <IconCode className="mr-2 h-4 w-4" /> Projects
              </Command.Item>
              
              <Command.Item 
                value="experience" 
                onSelect={() => runCommand(() => router.push("/#experience"))}
                className="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white"
              >
                <IconBriefcase className="mr-2 h-4 w-4" /> Experience
              </Command.Item>

              <Command.Item 
                value="library reading books" 
                onSelect={() => runCommand(() => router.push("/#library"))}
                className="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white"
              >
                <IconBook className="mr-2 h-4 w-4" /> Library
              </Command.Item>
            </Command.Group>

            {/* --- SOCIALS GROUP --- */}
            <Command.Group heading="Socials" className="text-xs font-medium text-slate-500 px-2 mb-2 mt-4">
              <Command.Item 
                value="github" 
                onSelect={() => runCommand(() => window.open("https://github.com/souradeep1101", "_blank"))}
                className="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white"
              >
                <IconBrandGithub className="mr-2 h-4 w-4" /> GitHub
              </Command.Item>
              
              <Command.Item 
                value="linkedin" 
                onSelect={() => runCommand(() => window.open("https://linkedin.com/in/souradeep1101", "_blank"))}
                className="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white"
              >
                <IconBrandLinkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Command.Item>
              
              <Command.Item 
                value="resume cv" 
                onSelect={() => runCommand(() => window.open("/resume", "_self"))}
                className="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white"
              >
                <IconFileText className="mr-2 h-4 w-4" /> View Resume
              </Command.Item>
            </Command.Group>
          </Command.List>
          
          <div className="border-t border-border px-4 py-2 text-[10px] text-slate-500 flex justify-between">
             <span>Type to search...</span>
             <div className="flex gap-2">
                <span>Select: ↵</span>
                <span>Close: Esc</span>
             </div>
          </div>
        </Command>
      </div>
    </div>
  );
}