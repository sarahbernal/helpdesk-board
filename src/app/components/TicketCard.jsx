"use client";

export default function TicketCard({ ticket, queued = false, onAdd = () => {} }) {
  const {
    id,
    title,
    description,
    priority,
    status,
    assignee,
    updatedAt,
  } = ticket;

  const updated = new Date(updatedAt).toLocaleString();

  return (
    <article className={`card ${queued ? "card--queued" : ""}`}>
      <div className="card__meta">
        <span className={`badge badge--pri-${priority.toLowerCase()}`}>
          Priority: {priority}
        </span>
        <span className={`badge badge--status-${status.toLowerCase().replace(/\s+/g, "-")}`}>
          Status: {status}
        </span>
      </div>

      <h3 className="card__title">{title}</h3>
      <p className="card__desc">{description}</p>

      <dl className="card__details">
        <div>
          <dt>Assignee:</dt>
          <dd>{assignee}</dd>
        </div>
        <div>
          <dt>Updated:</dt>
          <dd>{updated}</dd>
        </div>
      </dl>

      <div className="card__actions">
        <button
          className="btn btn--primary"
          onClick={() => onAdd(ticket)}
          disabled={queued}
          aria-disabled={queued}
        >
          {queued ? "In My Queue" : "Add to My Queue"}
        </button>
      </div>
    </article>
  );
}
