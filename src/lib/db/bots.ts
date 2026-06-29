import { doc, getDoc, setDoc, updateDoc, serverTimestamp, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './client';

export interface BotConfig {
  id: string; // usually same as user uid
  userId: string;
  name: string;
  greeting: string;
  systemPrompt: string;
  primaryColor: string;
  createdAt: any;
  updatedAt: any;
}

export async function getBotConfig(userId: string): Promise<BotConfig | null> {
  const docRef = doc(db, 'bots', userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data() as BotConfig;
  }
  return null;
}

export async function saveBotConfig(userId: string, data: Partial<BotConfig>) {
  const docRef = doc(db, 'bots', userId);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
  } else {
    await setDoc(docRef, {
      id: userId,
      userId,
      name: 'Aivello Assistant',
      greeting: 'Hello! How can I help you today?',
      systemPrompt: 'You are a helpful assistant.',
      primaryColor: '#3b82f6',
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  }
}
