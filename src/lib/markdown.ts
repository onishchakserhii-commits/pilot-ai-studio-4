import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { db } from './firebase-admin';

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

export async function getAllPosts(lang: string = 'fr'): Promise<BlogPost[]> {
  let localPosts: BlogPost[] = [];
  
  if (fs.existsSync(contentDirectory)) {
    const fileNames = fs.readdirSync(contentDirectory);
    localPosts = fileNames
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
      })
      .filter((post) => post.language === lang);
  }

  let firestorePosts: BlogPost[] = [];
  try {
    const snapshot = await db.collection('blog_posts')
      .where('language', '==', lang)
      .get();
      
    snapshot.forEach(doc => {
      firestorePosts.push({
        id: doc.id,
        ...doc.data()
      } as BlogPost);
    });
  } catch (error) {
    console.error("Error fetching from Firestore:", error);
  }

  return [...localPosts, ...firestorePosts].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export async function getPostBySlug(slug: string, lang: string = 'fr'): Promise<BlogPost | undefined> {
  // Try local first
  if (fs.existsSync(contentDirectory)) {
    const fullPath = path.join(contentDirectory, `${slug}.md`);
    if (fs.existsSync(fullPath)) {
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      if (matterResult.data.language === lang || !matterResult.data.language) {
        return {
          id: slug,
          slug,
          content: matterResult.content,
          ...matterResult.data,
        } as BlogPost;
      }
    }
  }

  // Try Firestore
  try {
    const snapshot = await db.collection('blog_posts')
      .where('slug', '==', slug)
      .where('language', '==', lang)
      .limit(1)
      .get();
      
    if (!snapshot.empty) {
      const doc = snapshot.docs[0];
      return {
        id: doc.id,
        ...doc.data()
      } as BlogPost;
    }
  } catch (error) {
    console.error("Error fetching from Firestore:", error);
  }

  return undefined;
}
