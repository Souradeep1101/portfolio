import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/private/', 
        '/_site/',    // Block old Jekyll build artifacts
        '/vendor/',   // Block old Jekyll dependencies
        '/api/',      // Block internal Next.js APIs
      ],
    },
    sitemap: 'https://souradeep.dev/sitemap.xml',
  };
}