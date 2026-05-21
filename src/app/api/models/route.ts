// src/app/api/models/route.ts
import { NextResponse } from 'next/server';
import { getOpenRouterModels } from '@/lib/openrouter';

export async function GET() {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      throw new Error('OPENROUTER_API_KEY is not set in environment');
    }
    const models = await getOpenRouterModels(apiKey);
    return NextResponse.json({ models });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
