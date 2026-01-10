import { cn } from "@/lib/utils"; // Ensure you have a utils file or remove 'cn' and just use template literals

export function GlassCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-border bg-accent/50 p-6 backdrop-blur-md transition-all hover:bg-white/10 ${className}`}>
      {children}
    </div>
  );
}