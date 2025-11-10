'use client';

export default function TicketCard({ ticket, inQueue = false, onAdd = () => {} }) {
  const { title, priority, status, assignee, updatedAt } = ticket;

  return (
    <li className="rounded border border-white/10 p-3 bg-white/5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-300 mt-1">
            <span className="mr-3">Priority: {priority}</span>
            <span className="mr-3">Status: {status}</span>
            <span className="mr-3">Assignee: {assignee}</span>
            <span>Updated: {new Date(updatedAt).toLocaleString()}</span>
          </p>
        </div>

        <button
          className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={inQueue}
          onClick={() => onAdd(ticket.id)}
        >
          {inQueue ? 'In Queue' : 'Add to My Queue'}
        </button>
      </div>

      {inQueue && (
        <p className="text-xs text-blue-300 mt-2">This ticket is already in your queue.</p>
      )}
    </li>
  );
}
