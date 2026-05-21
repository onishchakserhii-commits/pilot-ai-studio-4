// src/lib/openrouter.ts
// Simple wrapper for OpenRouter API (https://openrouter.ai)
import { DEFAULT_MODEL } from '@/lib/openrouterConfig';
//   const response = await getOpenRouterCompletion({
//     model: 'openai/gpt-4o-mini',
//     prompt: 'Hello',
//     apiKey: process.env.OPENROUTER_API_KEY!
//   });

export interface OpenRouterOptions {
  /** Model identifier, e.g. "openai/gpt-4o-mini" or "anthropic/claude-3.5-sonnet" */
  model: string;
  /** Prompt or messages (Chat format) */
  messages: { role: 'system' | 'user' | 'assistant'; content: string }[];
  /** Optional temperature (default 0.7) */
  temperature?: number;
  /** Optional max tokens */
  max_tokens?: number;
  /** Optional top_p */
  top_p?: number;
}

export interface OpenRouterResponse {
  /** Generated text */
  text: string;
  /** Full raw response from OpenRouter */
  raw: any;
}

/**
 * Calls OpenRouter with the provided options.
 * Returns the generated text and the raw JSON response.
 */
export async function getOpenRouterCompletion(
  opts: OpenRouterOptions,
  apiKey: string
): Promise<OpenRouterResponse> {
  const endpoint = 'https://openrouter.ai/api/v1/chat/completions';
  const body = {
    model: opts.model ?? DEFAULT_MODEL,
    messages: opts.messages,
    temperature: opts.temperature ?? 0.7,
    max_tokens: opts.max_tokens,
    top_p: opts.top_p,
  };

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
      // OpenRouter recommends sending a custom header to identify usage
      'X-Title': 'Antigravity-Stack',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`OpenRouter request failed: ${res.status} ${res.statusText}\n${err}`);
  }

  const data = await res.json();
  // According to OpenRouter spec, the generated message is in choices[0].message.content
  const text = data?.choices?.[0]?.message?.content ?? '';
  return { text, raw: data };
}

/**
 * Fetches the list of available models from OpenRouter.
 * Returns an array of model identifiers (e.g., "openai/gpt-4o-mini").
 */
export async function getOpenRouterModels(apiKey: string): Promise<string[]> {
  const endpoint = 'https://openrouter.ai/api/v1/models';
  const res = await fetch(endpoint, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Failed to fetch OpenRouter models: ${res.status} ${res.statusText}\n${err}`);
  }

  const data = await res.json();
  // The response contains a "data" array with objects that have an "id" field.
  const models = data?.data?.map((m: any) => m.id) ?? [];
  return models;
}
