import { NextResponse } from 'next/server';
import { ai } from '@/ai/genkit';
import { db } from '@/lib/firebase-admin';
import { z } from 'genkit';

const BasePostSchema = z.object({
  slug: z.string().describe("A URL-friendly slug for the article in english, e.g., 'ai-in-swiss-retail'"),
  category: z.string().describe("A general category, e.g., 'Automation', 'AI', 'SEO'"),
  tags: z.array(z.string()),
  title: z.string(),
  excerpt: z.string().describe("A short summary for the blog listing page."),
  metaDescription: z.string().describe("A meta description for SEO."),
  content: z.string().describe("The full article body in Markdown format. Use headings, bold text, bullet points, and practical advice.")
});

const TranslatedPostSchema = z.object({
  title: z.string(),
  excerpt: z.string(),
  metaDescription: z.string(),
  content: z.string()
});

import { openAI } from '@genkit-ai/compat-oai/openai';

export const maxDuration = 60; // Allow Vercel to run this up to 60 seconds

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const today = new Date().toISOString().split('T')[0];
    
    // Choose a random topic from the user's preferred list to ensure variety
    const topics = [
      "Діджиталізація локального бізнесу у Швейцарії",
      "ШІ для бізнесу та автоматизація",
      "Поради щодо оптимізації веб-сайтів",
      "Анекдоти та швейцарський гумор про бізнес (додати трохи фану)"
    ];
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];

    // 1. Generate Base Post in French
    const { output: basePost } = await ai.generate({
      model: openAI.model('gpt-4o'),
      system: `You are an expert copywriter and SEO specialist for Pilot AI Studio (Aivello), a digital agency in Swiss Romandy. 
Your task is to write a highly engaging, SEO-optimized blog article about: "${randomTopic}".
The article should be practical, insightful, and targeted at small local businesses (restaurants, salons, garages, clinics) in Switzerland.
Make sure the markdown content is well-structured.
IMPORTANT: You MUST write the entire article ONLY in French ('fr').`,
      prompt: "Generate the new blog post for today in French.",
      output: { schema: BasePostSchema }
    });

    if (!basePost) {
      throw new Error("Failed to generate base content");
    }

    // 2. Translate to other languages in parallel
    const targetLangs = ['ua', 'en', 'it', 'de'];
    
    const translations = await Promise.all(
      targetLangs.map(async (lang) => {
        const { output } = await ai.generate({
          model: openAI.model('gpt-4o-mini'),
          system: `You are an expert translator. Translate the provided French blog post into the target language code '${lang}'. 
Ensure the translation is natural, maintains the Markdown formatting perfectly, and is SEO-optimized for the target language.
IMPORTANT: Write strictly in '${lang}'. Do NOT mix languages.`,
          prompt: `Translate this into '${lang}':\n\nTitle: ${basePost.title}\nExcerpt: ${basePost.excerpt}\nMeta: ${basePost.metaDescription}\n\nContent:\n${basePost.content}`,
          output: { schema: TranslatedPostSchema }
        });
        
        if (!output) throw new Error(`Translation failed for ${lang}`);
        return { language: lang, ...output };
      })
    );

    const allPosts = [
      { language: 'fr', title: basePost.title, excerpt: basePost.excerpt, metaDescription: basePost.metaDescription, content: basePost.content },
      ...translations
    ];

    const { slug, category, tags } = basePost;

    // Save each translation to Firestore
    const batch = db.batch();
    const createdAt = new Date().toISOString();

    for (const post of allPosts) {
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

    return NextResponse.json({ success: true, slug, message: "Blog post generated and translated successfully." });
  } catch (error: any) {
    console.error("Cron generation error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
