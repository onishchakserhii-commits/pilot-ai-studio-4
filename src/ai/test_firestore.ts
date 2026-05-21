import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD95VjMbLb-3ff9dfq5pDRKp26kI_Oa3hY",
  authDomain: "web-pilot-b89f1.firebaseapp.com",
  projectId: "web-pilot-b89f1",
  storageBucket: "web-pilot-b89f1.firebasestorage.app",
  messagingSenderId: "562055053881",
  appId: "1:562055053881:web:647aa8285224aba08d43e8",
  measurementId: "G-94E4HW9QYP"
};

async function test() {
  console.log("Initializing Firebase...");
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  console.log("Attempting to write to 'leads' collection...");
  try {
    const docRef = await addDoc(collection(db, "leads"), {
      name: "Test User",
      businessName: "Test Business",
      website: "test.ch",
      email: "test@example.com",
      phone: "+41791234567",
      message: "Test message from CLI script",
      status: "new",
      createdAt: new Date().toISOString()
    });
    console.log("Successfully wrote document to 'leads' with ID:", docRef.id);
  } catch (error) {
    console.error("Firestore write failed:", error);
  }
}

test();
