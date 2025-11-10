'use client';

const OPTIONS = ['All', 'Open', 'In Progress', 'On Hold', 'Resolved'];

export default function StatusFilter({ value = 'All', onChange = () => {} }) {
  return (
    <label className="flex items-center gap-2">
      <span>Status:</span>
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
