// data/resume.tsx
import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";

export const DATA = {
  name: "Souradeep Banerjee",
  initials: "SB",
  url: "https://souradeep.dev",
  location: "Tempe, Arizona",
  description:
    "Systems Engineer & CS Student at ASU. Building high-performance engines, emulators, and low-latency infrastructure.",
  summary:
    "I am a Computer Science student specializing in Systems Engineering. I build bare-metal software, including cycle-accurate CPU emulators and high-performance rendering engines. I focus on C++, Memory Management, and Computer Architecture.",
  avatarUrl: "/me.png", // Add your photo to public/me.png
  skills: [
    "C++ (17/20/23)",
    "OpenGL 4.6",
    "MIPS Assembly",
    "CUDA",
    "Linux Kernel",
    "Docker",
    "CMake",
    "Python",
    "Next.js",
  ],
  contact: {
    email: "sbaner92@asu.edu",
    tel: "+14807433328",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/souradeep1101",
        icon: IconBrandGithub,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/souradeep1101",
        icon: IconBrandLinkedin,
      },
    },
  },
  education: [
    {
      school: "Arizona State University",
      degree: "Bachelor of Science in Computer Science (Software Engineering)",
      start: "Aug 2024",
      end: "May 2027",
      gpa: "3.53",
      honors: ["Dean's List", "New American University Scholar"],
      logoUrl: "/logos/asu.png",
      coursework: [
        "Data Structures & Algorithms",
        "Computer Architecture",
        "Operating Systems",
        "Competitive Programming",
        "Distributed Systems",
        "Information Assurance: Cybersecurity",
        "Principles of Programming Language",
        "Theoretical Computer Science",
        "Computer Ethics"
      ]
    },
  ],
  work: [
    {
      company: "Cruv.org",
      href: "https://cruv.org",
      badges: [],
      location: "Remote",
      title: "Software Engineering Intern",
      logoUrl: "/logos/cruv.svg",
      start: "Jan 2023",
      end: "Jan 2024",
      logoBg: "bg-background border-white/20",
      description:
        "Optimized mobile data transport layer reducing API latency by 75% (3.2s to 0.8s). Engineered scalable client-side architecture and enforced strict type safety contracts.",
    },
  ],
  projects: [
    {
      title: "Cyclops MIPS",
      dates: "Nov 2025 - Present",
      active: true,
      description:
        "A cycle-accurate MIPS R2000 CPU Emulator capable of executing binary machine code. Features 5-Stage Pipelining, Forwarding Unit, and a custom Two-Pass Assembler.",
      technologies: ["C++23", "ImGui", "GTest", "CMake"],
      links: [
        {
          type: "Source",
          href: "https://github.com/souradeep1101/CyclopsMips", // Update if different
          icon: <IconBrandGithub className="size-3" />,
        },
      ],
      image: "/cyclops-mips.png", // Add a screenshot to public folder
    },
    {
      title: "Cyclops Studio",
      dates: "Oct 2025 - Present",
      active: true,
      description:
        "High-performance animation engine using Modern OpenGL (DSA). Features zero-copy Layer Compositing and a custom Linear Arena Allocator for particle simulation.",
      technologies: ["C++23", "OpenGL 4.6", "ImGui"],
      links: [
        {
          type: "Source",
          href: "https://github.com/souradeep1101/CyclopsStudio",
          icon: <IconBrandGithub className="size-3" />,
        },
      ],
      image: "/cyclops-studio.png",
    },
    {
      title: "Joint DiT",
      dates: "Jul 2025 - Oct 2025",
      active: false,
      description:
        "Designed a novel multimodal architecture for synchronized audio/video generation, solving OOM bottlenecks via query chunking.",
      technologies: ["Python", "PyTorch", "CUDA"],
      links: [
        {
          type: "Source",
          href: "https://github.com/souradeep1101/JointDiT",
          icon: <IconBrandGithub className="size-3" />,
        },
      ],
      image: "/joint-dit.png",
    },
  ],
};