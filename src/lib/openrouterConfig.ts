// src/lib/openrouterConfig.ts
/**
 * Central configuration for OpenRouter used by Antigravity.
 * Allows you to set a default model via environment variable.
 *
 *   NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL=openai/gpt-4o-mini
 *
 * If the variable is not set, a safe fallback is used.
 */
export const DEFAULT_MODEL: string =
  process.env.NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL || 'openai/gpt-4o-mini';
