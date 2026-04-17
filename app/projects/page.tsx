"use client";

import { useState, useMemo } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconSearch } from "@tabler/icons-react";

// Project Type
type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  slug: string;
};

// Initial Data
const PROJECTS_DATA: Project[] = [
  {
    id: "1",
    title: "CyclopsMIPS",
    description:
      "A high-performance MIPS emulator and pipeline simulator built for educational architecture visualization.",
    techStack: ["C++23", "OpenGL", "CMake"],
    slug: "cyclops-mips",
  },
  {
    id: "2",
    title: "CyclopsStudio",
    description:
      "Professional GPU-Accelerated 2D Animation Studio built from scratch for high-fidelity anime production workflows.",
    techStack: ["C++17", "OpenGL 4.5", "Dear ImGui", "GLFW"],
    slug: "cyclops-studio",
  },
];

export default function ProjectsManagerPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Derived dynamically from projects array
  const allTechStack = useMemo(() => {
    const techSet = new Set<string>();
    PROJECTS_DATA.forEach((p) => p.techStack.forEach((t) => techSet.add(t)));
    return Array.from(techSet).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower);

      const matchesFilters =
        activeFilters.length === 0 ||
        activeFilters.every((filter) => project.techStack.includes(filter));

      return matchesSearch && matchesFilters;
    });
  }, [searchQuery, activeFilters]);

  const toggleFilter = (tech: string) => {
    setActiveFilters((prev) =>
      prev.includes(tech) ? prev.filter((f) => f !== tech) : [...prev, tech]
    );
  };

  return (
    <main className="min-h-screen bg-background text-muted-foreground font-sans selection:bg-primary/30 pb-24 relative overflow-x-hidden pt-32">
      {/* Background Ambience matches index page */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-20%] h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px] transition-colors duration-700 ease-in-out" />
        <div className="absolute top-[30%] right-[-20%] h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[120px] transition-colors duration-700 ease-in-out" />
        <div className="absolute bottom-[-10%] left-[0%] h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px] transition-colors duration-700 ease-in-out" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <BlurFade delay={0.05}>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 cursor-default">
            Projects Manager
          </h1>
        </BlurFade>

        {/* Controls Section */}
        <BlurFade delay={0.1}>
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="relative group max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <IconSearch
                  size={20}
                  className="text-muted-foreground group-focus-within:text-primary transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Search by title or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-accent/30 border border-border rounded-xl py-3.5 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all backdrop-blur-md shadow-sm"
              />
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap gap-2.5 items-center">
              {allTechStack.map((tech) => {
                const isActive = activeFilters.includes(tech);
                return (
                  <button
                    key={tech}
                    onClick={() => toggleFilter(tech)}
                    className={cn(
                      "text-sm font-medium px-4 py-2 rounded-full border transition-all duration-300 backdrop-blur-sm",
                      isActive
                        ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                        : "bg-accent/30 border-border text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                    )}
                  >
                    {tech}
                  </button>
                );
              })}
              {activeFilters.length > 0 && (
                <button
                  onClick={() => setActiveFilters([])}
                  className="text-sm font-semibold px-4 py-2 rounded-full text-destructive hover:bg-destructive/10 transition-colors ml-2"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </BlurFade>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, idx) => (
              <BlurFade
                key={project.id}
                delay={0.15 + idx * 0.05}
                inView
                className="h-full"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="block h-full group outline-none"
                >
                  <GlassCard className="h-full group-hover:border-primary/50 group-hover:-translate-y-1 group-focus-visible:ring-2 group-focus-visible:ring-primary/50 transition-all duration-300">
                    <div className="flex flex-col h-full justify-between space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs font-medium text-muted-foreground bg-accent/50 border border-border px-2.5 py-1 rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </BlurFade>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 text-center py-20 bg-accent/20 border border-border rounded-2xl backdrop-blur-md">
              <p className="text-lg text-muted-foreground">
                No projects found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilters([]);
                }}
                className="mt-4 text-primary hover:text-primary-foreground hover:bg-primary px-4 py-2 rounded-full transition-colors font-medium border border-primary/50"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
