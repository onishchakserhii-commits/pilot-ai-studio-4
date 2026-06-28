import { aiChatbotForClientInquiries } from './src/ai/flows/ai-chatbot-for-client-inquiries';

async function run() {
  try {
    const result = await aiChatbotForClientInquiries({ message: "привіт" });
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

run();
