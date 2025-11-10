'use client';

export default function StatusMessage({ loading, error, isEmpty }) {
  if (loading) return <p className="text-sm text-blue-300">Loading…</p>;
  if (error)   return <p className="text-sm text-red-400">Unable to load tickets.</p>;
  if (isEmpty) return <p className="text-sm text-gray-400">No tickets match your filters.</p>;
  return null;
}
