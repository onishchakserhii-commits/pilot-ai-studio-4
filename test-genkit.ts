import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

const ai = genkit({
  plugins: [googleAI({ apiKey: process.env.GEMINI_API_KEY })],
});

async function run() {
  const models = await ai.registry.listActions();
  console.log("Models:", Object.keys(models).filter(k => k.startsWith('model')));
}
run();
