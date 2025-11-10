'use client';

const OPTIONS = ['All', 'Low', 'Medium', 'High', 'Critical'];

export default function PriorityFilter({ value = 'All', onChange = () => {} }) {
  return (
    <label className="flex items-center gap-2">
      <span>Priority:</span>
      <select
        className="bg-transparent border border-white/20 rounded px-3 py-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {OPTIONS.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </label>
  );
}
