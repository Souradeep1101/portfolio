import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects Manager | Souradeep Banerjee",
  description: "Explore the technical projects, emulators, and high-performance engines developed by Souradeep Banerjee. Focused on systems programming, computer architecture, and low-latency infrastructure.",
  openGraph: {
    title: "Projects Manager | Souradeep Banerjee",
    description: "Explore technical projects in systems programming and computer architecture.",
    type: "website",
    url: "https://souradeep.dev/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects Manager | Souradeep Banerjee",
    description: "Technical projects exploring the intersection of hardware and software.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
