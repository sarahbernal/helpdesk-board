"use client";

import TicketCard from "./TicketCard";

export default function TicketList({ tickets = [], queue = [], onAddToQueue = () => {} }) {
  const queuedIds = new Set(
    Object.keys(queue));

  if (!tickets.length) {
    return (
      <p className="status-msg" role="status">
        No tickets match your filters.
      </p>
    );
  }

  return (
    <section className="tickets-grid" aria-label="Tickets">
      {tickets.map((t) => (
        <TicketCard
          key={t.id}
          ticket={t}
          queued={queuedIds.has(t.id)}
          onAdd={onAddToQueue}
        />
      ))}
    </section>
  );
}
