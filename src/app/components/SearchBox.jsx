'use client';

export default function SearchBox({ value = '', onChange = () => {} }) {
  return (
    <label className="flex items-center gap-2 w-full max-w-xl">
      <span>Search:</span>
      <input
        type="text"
        placeholder="title or description"
        className="w-full bg-transparent border border-white/20 rounded px-3 py-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
