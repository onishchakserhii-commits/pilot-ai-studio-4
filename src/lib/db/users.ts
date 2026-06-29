import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './client';

export interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  plan: 'free' | 'pro' | 'enterprise';
  createdAt: any;
  updatedAt: any;
}

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data() as UserProfile;
  }
  return null;
}

export async function createUserProfile(uid: string, email: string, displayName?: string) {
  const docRef = doc(db, 'users', uid);
  const newProfile: UserProfile = {
    uid,
    email,
    displayName,
    plan: 'free',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };
  await setDoc(docRef, newProfile);
  return newProfile;
}

export async function updateUserProfile(uid: string, data: Partial<UserProfile>) {
  const docRef = doc(db, 'users', uid);
  await updateDoc(docRef, {
    ...data,
    updatedAt: serverTimestamp(),
  });
}
