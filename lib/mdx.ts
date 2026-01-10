import fs from "fs";
import path from "path";
import matter from "gray-matter";

const rootDirectory = path.join(process.cwd(), "content");

export type Post = {
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    tags?: string[];
  };
  slug: string;
  content: string;
};

export function getPostBySlug(slug: string): Post {
  const filePath = path.join(rootDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    metadata: { ...data } as Post["metadata"],
    slug,
    content,
  };
}

export function getPosts(): Post[] {
  const files = fs.readdirSync(rootDirectory);

  const posts = files
    .filter((file) => path.extname(file) === ".mdx")
    .map((file) => {
      // Use path.parse to get only the filename without extension
      const slug = path.parse(file).name; 
      return getPostBySlug(slug);
    });

  return posts.sort((a, b) =>
    new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  );
}