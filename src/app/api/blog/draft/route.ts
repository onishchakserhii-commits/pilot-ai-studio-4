
import { initializeFirebase } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { NextResponse } from 'next/server';

/**
 * Endpoint for n8n to push new blog post drafts.
 * Expected body: title, slug, excerpt, content, metaDescription, category, tags, language, sourceTopic, socialPost
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firestore } = initializeFirebase();

    const {
      title,
      slug,
      excerpt,
      content,
      metaDescription,
      category,
      tags,
      language,
      sourceTopic,
      socialPost,
      author = 'AI Assistant'
    } = body;

    if (!title || !slug || !content || !language) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const docRef = await addDoc(collection(firestore, 'blogPosts'), {
      title,
      slug,
      excerpt,
      content,
      metaDescription,
      category,
      tags: tags || [],
      language,
      status: 'draft',
      author,
      sourceTopic: sourceTopic || '',
      socialPost: socialPost || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return NextResponse.json({ id: docRef.id, success: true }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating blog draft:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
