import { config } from 'dotenv';
config({ path: '.env.local' });

async function test() {
  const { aiChatbotForClientInquiries } = await import('./flows/ai-chatbot-for-client-inquiries');
  console.log("Testing with 'Audit gratuit de votre présence en ligne'...");
  try {
    const res = await aiChatbotForClientInquiries({ message: "Audit gratuit de votre présence en ligne" });
    console.log("Result:", JSON.stringify(res, null, 2));
  } catch (err) {
    console.error("Error:", err);
  }
}

test();
