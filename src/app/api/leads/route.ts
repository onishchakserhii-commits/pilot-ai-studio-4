import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase-admin';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Add server timestamp and status
    const docData = {
      ...data,
      status: 'new',
      createdAt: new Date().toISOString(),
    };

    const docRef = await db.collection('leads').add(docData);

    return NextResponse.json({ success: true, id: docRef.id });
  } catch (error) {
    console.error('Error saving lead:', error);
    return NextResponse.json({ success: false, error: 'Failed to save lead' }, { status: 500 });
  }
}
