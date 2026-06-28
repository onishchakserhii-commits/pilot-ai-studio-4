import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase-admin';

export async function GET() {
  try {
    const snapshot = await db.collection('blog_posts').get();
    const batch = db.batch();
    snapshot.docs.forEach(doc => batch.delete(doc.ref));
    await batch.commit();
    return NextResponse.json({ success: true, count: snapshot.size });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
