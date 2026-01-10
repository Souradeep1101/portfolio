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

/** * 1. SEO METADATA
 * Using 'metadataBase' and 'alternates.canonical' ensures Google understands 
 * that your multiple redirected paths belong to one primary URL.
 */
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
  
  /** * 2. JSON-LD (STRUCTURED DATA)
   * This explicitly links your domain to your identity across the web.
   */
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
        {/* Injecting Structured Data for Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
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
        </ThemeProvider>
      </body>
    </html>
  );
}