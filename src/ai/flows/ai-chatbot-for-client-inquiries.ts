'use server';
/**
 * @fileOverview An AI chatbot flow for Aivello that answers client inquiries,
 * guides users to a free audit, or collects contact details for consultations.
 *
 * - aiChatbotForClientInquiries - A function that handles chatbot interactions.
 * - AiChatbotInput - The input type for the aiChatbotForClientInquiries function.
 * - AiChatbotOutput - The return type for the aiChatbotForClientInquiries function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiChatbotInputSchema = z.object({
  message: z.string().describe("The user's message or question to the chatbot."),
  history: z.array(z.object({
    role: z.enum(['user', 'bot']),
    text: z.string()
  })).optional().describe("Previous conversation history."),
});
export type AiChatbotInput = z.infer<typeof AiChatbotInputSchema>;

const AiChatbotOutputSchema = z.object({
  textResponse: z.string().describe("The chatbot's conversational response to the user."),
  suggestedAction: z
    .object({
      type: z
        .enum(['free_audit', 'request_contact_info', 'none'])
        .describe('The type of action suggested by the chatbot.'),
      details: z
        .string()
        .optional()
        .describe('Additional details or instructions for the suggested action.'),
    })
    .describe('An optional action suggested by the chatbot to guide the user.'),
});
export type AiChatbotOutput = z.infer<typeof AiChatbotOutputSchema>;

export async function aiChatbotForClientInquiries(input: AiChatbotInput): Promise<AiChatbotOutput> {
  return aiChatbotFlow(input);
}

const aiChatbotPrompt = ai.definePrompt({
  name: 'aiChatbotForClientInquiriesPrompt',
  input: { schema: AiChatbotInputSchema },
  output: { schema: AiChatbotOutputSchema },
  prompt: `You are Aivello, the highly professional, friendly, and persuasive AI assistant for Pilot AI Studio.
Pilot AI Studio is a premium digital agency in Switzerland (Suisse romande) that builds fast websites, AI chatbots, and automates routine tasks for small local businesses (clinics, restaurants, artisans, hotels).

Your ultimate goal is to convert website visitors into leads by convincing them to request a "Free Audit" (Audit gratuit).

Core Services:
- Web: Fast, high-conversion, mobile-first websites.
- AI: Smart customer support chatbots and automated lead generation.
- Automation: n8n flows to connect CRM, WhatsApp, and emails automatically.

RULES FOR YOUR RESPONSES:
1. **Match Language Exactly**: If the user writes in French, reply in French. If Ukrainian, reply in Ukrainian. If German, German.
2. **Be extremely concise and punchy**: Keep responses to 1-3 short sentences. Use line breaks. Do not write walls of text.
3. **Use emojis sparingly but effectively**: 🚀, ✨, 📈, 👋.
4. **Act human and empathetic**: Do NOT use phrases like "As an AI..." or "I can help you with...". Say "We build..." or "Our team can...". 
5. **Always drive towards the Audit**: If they ask about prices, services, or how we can help, give a very brief answer and immediately suggest: "The best way to start is with our Free Audit. Shall I direct you to the form?"
6. **Actions**: 
   - If they agree to the audit, want to start, or ask "how to begin", set \`suggestedAction.type\` to 'free_audit'.
   - If they ask to speak to a human or leave their contact, set \`suggestedAction.type\` to 'request_contact_info'.
   - Otherwise, 'none'.
{{#if history}}
Previous conversation:
{{#each history}}
{{this.role}}: {{this.text}}
{{/each}}
{{/if}}

Current user message: {{{message}}}`,
});

const aiChatbotFlow = ai.defineFlow(
  {
    name: 'aiChatbotForClientInquiriesFlow',
    inputSchema: AiChatbotInputSchema,
    outputSchema: AiChatbotOutputSchema,
  },
  async (input) => {
    const { output } = await aiChatbotPrompt(input);
    return output!;
  },
);
