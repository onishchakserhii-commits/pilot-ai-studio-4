import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  metaDescription: string;
  category: string;
  tags: string[];
  language: string;
  createdAt: string;
};

export function getAllPosts(lang: string = 'fr'): BlogPost[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const matterResult = matter(fileContents);

      return {
        id: slug,
        slug,
        content: matterResult.content,
        ...matterResult.data,
      } as BlogPost;
    });

  return allPosts
    .filter((post) => post.language === lang)
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  if (!fs.existsSync(contentDirectory)) {
    return undefined;
  }
  
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return undefined;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    id: slug,
    slug,
    content: matterResult.content,
    ...matterResult.data,
  } as BlogPost;
}
