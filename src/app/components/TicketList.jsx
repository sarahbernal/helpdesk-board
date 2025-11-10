'use client';
import TicketCard from './TicketCard';

export default function TicketList({ tickets = [], queue = [], onAddToQueue = () => {} }) {
 
  const queuedIds = new Set(queue.map((t) => (typeof t === 'string' ? t : t.id)));

  if (!tickets.length) {
    return <p className="text-sm text-gray-400">TicketList placeholder</p>;
  }

  return (
    <ul className="mt-4 space-y-3">
      {tickets.map((t) => (
        <TicketCard
          key={t.id}            
          ticket={t}
          inQueue={queuedIds.has(t.id)}
          onAdd={onAddToQueue}
        />
      ))}
    </ul>
  );
}

