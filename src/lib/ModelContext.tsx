'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getOpenRouterModels } from '@/lib/openrouter';

type ModelContextType = {
  models: string[];
  selected: string | null;
  setSelected: (model: string) => void;
};

const ModelContext = createContext<ModelContextType | undefined>(undefined);

export function ModelProvider({ children }: { children: ReactNode }) {
  const [models, setModels] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  // 1️⃣ Завантажити список моделей один раз
  useEffect(() => {
    (async () => {
      try {
        const list = await getOpenRouterModels(
          // використовуйте публічний ключ, який доступний у браузері
          process.env.NEXT_PUBLIC_OPENROUTER_API_KEY!
        );
        setModels(list);
        // Якщо раніше вже обирали – читаємо з localStorage
        const saved = localStorage.getItem('openrouter-model');
        if (saved && list.includes(saved)) setSelected(saved);
        else if (list.length) setSelected(list[0]); // дефолтний перший
      } catch (e) {
        console.error('Не вдалось отримати моделі OpenRouter:', e);
      }
    })();
  }, []);

  // 2️⃣ Запам’ятати вибір у localStorage
  const handleSelect = (model: string) => {
    setSelected(model);
    localStorage.setItem('openrouter-model', model);
  };

  return (
    <ModelContext.Provider
      value={{ models, selected, setSelected: handleSelect }}
    >
      {children}
    </ModelContext.Provider>
  );
}

// Хук‑зручка
export function useModel() {
  const ctx = useContext(ModelContext);
  if (!ctx) throw new Error('useModel must be used within ModelProvider');
  return ctx;
}