import { ai } from './src/ai/genkit';
import { db } from './src/lib/firebase-admin';
import { z } from 'genkit';
import { openAI } from '@genkit-ai/compat-oai/openai';
import dotenv from 'dotenv';
dotenv.config();

const GeneratedPostSchema = z.object({
  slug: z.string(),
  category: z.string(),
  tags: z.array(z.string()),
  posts: z.array(z.object({
    language: z.enum(['fr', 'ua', 'en', 'it', 'de']),
    title: z.string(),
    excerpt: z.string(),
    metaDescription: z.string(),
    content: z.string()
  }))
});

async function main() {
  try {
    console.log("Generating post with OpenAI...");
    const { output } = await ai.generate({
      model: openAI.model('gpt-4o-mini'), // Use mini for faster testing
      system: `You are an expert copywriter. Write a tiny 2-sentence blog post about Swiss chocolate for small business. Output exactly the languages required.`,
      prompt: "Generate the test post.",
      output: { schema: GeneratedPostSchema }
    });

    if (!output || !output.posts) {
      throw new Error("Failed to generate content");
    }

    const { slug, category, tags, posts } = output;
    console.log(`Generated slug: ${slug}`);
    console.log(`Saving to Firestore...`);

    const batch = db.batch();
    const createdAt = new Date().toISOString();

    for (const post of posts) {
      const docRef = db.collection('blog_posts').doc(`${slug}_${post.language}`);
      batch.set(docRef, {
        slug,
        category,
        tags,
        language: post.language,
        title: post.title,
        excerpt: post.excerpt,
        metaDescription: post.metaDescription,
        content: post.content,
        createdAt,
        isFirestore: true
      });
    }

    await batch.commit();
    console.log("Success!");
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

main();
