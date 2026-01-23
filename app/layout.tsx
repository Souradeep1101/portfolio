import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css"; // Ensures Math equations render correctly
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Analytics } from "@vercel/analytics/react"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://souradeep.dev"),
  title: {
    default: "Souradeep Banerjee | Systems Engineer",
    template: "%s | Souradeep Banerjee",
  },
  description: "Systems Engineer & CS Student at ASU. Specializing in C++, Low-Latency Systems, and High-Performance Computing.",
  keywords: [
    "Souradeep Banerjee",
    "Souradeep1101",
    "Systems Engineer",
    "C++ Developer",
    "Arizona State University",
    "Software Engineer",
    "Low Latency",
  ],
  authors: [{ name: "Souradeep Banerjee" }],
  creator: "Souradeep Banerjee",
  alternates: {
    canonical: "https://souradeep.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://souradeep.dev",
    title: "Souradeep Banerjee | Systems Engineer",
    description: "Building high-performance engines, emulators, and low-latency infrastructure.",
    siteName: "Souradeep Banerjee",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Souradeep Banerjee Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Souradeep Banerjee | Systems Engineer",
    description: "Building high-performance engines, emulators, and low-latency infrastructure.",
    images: ["/og-image.png"],
    creator: "@Souradeep1101",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Souradeep Banerjee",
    "url": "https://souradeep.dev",
    "image": "https://souradeep.dev/og-image.png",
    "sameAs": [
      "https://github.com/Souradeep1101",
      "https://www.linkedin.com/in/Souradeep1101",
      "https://twitter.com/Souradeep1101",
      "https://www.youtube.com/channel/UCv4ctQjbqZ0tq8lxchYkm2g",
      "https://search.asu.edu/profile/4997799"
    ],
    "jobTitle": "Systems Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Arizona State University"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className={cn(
          "min-h-screen font-sans antialiased bg-background text-foreground transition-colors duration-300",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="cyberpunk"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <ThemeSwitcher />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}