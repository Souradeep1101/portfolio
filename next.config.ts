import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  async redirects() {
    return [
      // 1. Map old top-level Jekyll pages to your new section anchors
      {
        source: "/about",
        destination: "/#about",
        permanent: true, // Sends a 308 (Permanent) status to Google
      },
      {
        source: "/work",
        destination: "/#experience",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/#projects",
        permanent: true,
      },

      // 2. Redirect old placeholder blogs (Jekyll default posts) to your new index
      // Matches paths like /blog/welcome-to-jekyll/ or /blog/post-chat/
      {
        source: "/blog/:slug*",
        destination: "/blog",
        permanent: true,
      },

      // 3. Cleanup junk pages found in your Search Console
      {
        source: "/page2",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;