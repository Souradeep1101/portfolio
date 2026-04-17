import { HeroSection } from "./HeroSection";
import { FeatureGrid } from "./FeatureGrid";
import { TechnicalDeepDive } from "./TechnicalDeepDive";
import { CodeFirstSection } from "./CodeFirstSection";
import { CTASection } from "./CTASection";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CyclopsStudio | GPU-Accelerated 2D Animation",
  description:
    "Professional GPU-Accelerated 2D Animation Studio built from scratch in C++17 for high-fidelity anime production workflows.",
  openGraph: {
    title: "CyclopsStudio | Professional GPU-Accelerated 2D Animation",
    description:
      "Low latency, high throughput, zero compromises. A native C++ beast designed for hardware directness.",
    type: "website",
    url: "https://souradeep.dev/projects/cyclops-studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "CyclopsStudio | 2D Animation Engine",
    description: "Built from scratch in C++17 for high-fidelity animation workflows.",
  },
};

export default function CyclopsStudioPage() {
  return (
    <main
      className="min-h-screen overflow-x-hidden"
      style={{ background: "#131313", color: "#e5e2e1" }}
    >
      {/* Thin sticky top bar with back link */}
      <div className="sticky top-16 z-40 bg-[#131313]/80 backdrop-blur-md border-b border-[#3b494c]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-3 flex items-center justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-[#00e5ff] hover:text-white transition-colors group outline-none"
          >
            <IconArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Projects
          </Link>
          <span className="font-mono text-[9px] text-[#bac9cc]/30 uppercase tracking-widest hidden md:block">
            CyclopsStudio / v2.4.0
          </span>
        </div>
      </div>

      {/* Page Sections */}
      <HeroSection />
      <FeatureGrid />
      <TechnicalDeepDive />
      <CodeFirstSection />
      <CTASection />
    </main>
  );
}
