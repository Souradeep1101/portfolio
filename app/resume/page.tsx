import { ResumeContent } from "@/components/resume-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Souradeep Banerjee",
  description: "View the professional resume of Souradeep Banerjee, Systems Engineer and Computer Science Student at Arizona State University.",
  openGraph: {
    title: "Resume | Souradeep Banerjee",
    description: "Systems Engineer specialising in C++, Low-Latency Systems, and High-Performance Computing.",
    url: "https://souradeep.dev/resume",
  },
};

export default function ResumePage() {
  return <ResumeContent />;
}