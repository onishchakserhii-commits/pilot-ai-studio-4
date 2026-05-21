'use client';

import { useModel } from '@/lib/ModelContext';

export default function ModelSelector() {
  const { models, selected, setSelected } = useModel();

  if (!models.length) return <p>Завантаження моделей…</p>;

  return (
    <select
      value={selected ?? ''}
      onChange={(e) => setSelected(e.target.value)}
      className="rounded border p-2"
    >
      <option disabled value="">
        — Виберіть модель —
      </option>
      {models.map((m) => (
        <option key={m} value={m}>
          {m}
        </option>
      ))}
    </select>
  );
}