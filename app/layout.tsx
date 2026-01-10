import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeSwitcher } from "@/components/theme-switcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. METADATA: The "Head" of your document
export const metadata: Metadata = {
  metadataBase: new URL("https://souradeep.dev"), // REPLACE with your actual domain
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://souradeep.dev",
    title: "Souradeep Banerjee | Systems Engineer",
    description: "Building high-performance engines, emulators, and low-latency infrastructure.",
    siteName: "Souradeep Banerjee",
    images: [
      {
        url: "/og-image.png", // You should add an Open Graph image in public/ folder
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
  
  // 2. JSON-LD: The "Knowledge Graph" Signal
  // This connects "Souradeep Banerjee" to "Souradeep1101"
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Souradeep Banerjee",
    "url": "https://souradeep.dev",
    "image": "https://souradeep.dev/og-image.png", // Or your profile picture URL
    "sameAs": [
      "https://github.com/Souradeep1101",
      "https://www.linkedin.com/in/Souradeep1101",
      "https://twitter.com/Souradeep1101",
      "https://www.youtube.com/channel/UCv4ctQjbqZ0tq8lxchYkm2g",
      "https://search.asu.edu/profile/4997799" // VERY IMPORTANT: Links you to ASU
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
        {/* Inject the JSON-LD script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-background text-foreground",
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
        </ThemeProvider>
      </body>
    </html>
  );
}