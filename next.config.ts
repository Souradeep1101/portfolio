import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* We remove trailingSlash: true. 
     Next.js will now handle both versions, but won't force a slash 
     that breaks your MDX file lookups.
  */

  async redirects() {
    return [
      // 1. Static Page Mapping (Supporting both slash and no-slash for SEO)
      { source: '/about/', destination: '/#about', permanent: true },
      { source: '/about', destination: '/#about', permanent: true },
      
      { source: '/work/', destination: '/#experience', permanent: true },
      { source: '/work', destination: '/#experience', permanent: true },
      
      { source: '/projects/', destination: '/#projects', permanent: true },
      { source: '/projects', destination: '/#projects', permanent: true },
      
      // Found in your legacy sitemap
      { source: '/work/cruv/', destination: '/#experience', permanent: true },
      { source: '/work/cruv', destination: '/#experience', permanent: true }, 
      
      // 2. Blog Logic
      // This ensures that if someone visits /blog/old-post/, 
      // they are sent to the clean /blog/old-post (no slash) so MDX works.
      { source: '/blog/:slug/', destination: '/blog/:slug', permanent: true },
      
      // 3. SEO Cleanup (Redirecting dead Jekyll paths to relevant new areas)
      { source: '/categories', destination: '/', permanent: true },
      { source: '/tags', destination: '/', permanent: true },
      { source: '/posts', destination: '/blog', permanent: true },
      { source: '/page2', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;