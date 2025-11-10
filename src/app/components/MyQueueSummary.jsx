'use client';

export default function MyQueueSummary({ items = [], onRemove, onClear }) {
  if (!items.length) {
    return (
      <section className="mt-8">
        <h2 className="text-xl font-semibold">My Queue (0)</h2>
        <p className="text-sm text-gray-400">No tickets queued.</p>
      </section>
    );
  }

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">My Queue ({items.length})</h2>
        <button
          className="px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-white text-sm"
          onClick={onClear}
        >
          Clear Queue
        </button>
      </div>

      <ul className="mt-3 space-y-2">
        {items.map(t => (
          <li key={t.id} className="flex items-center justify-between rounded border border-gray-700 px-3 py-2">
            <span className="truncate">{t.title}</span>
            <button
              className="ml-3 px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 text-sm"
              onClick={() => onRemove(t.id)}
              aria-label={`Remove ${t.title} from queue`}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
