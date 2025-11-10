'use client';

import { useEffect, useMemo, useState } from 'react';

import TicketList from './TicketList.jsx';
import StatusFilter from './StatusFilter.jsx';
import PriorityFilter from './PriorityFilter.jsx';
import SearchBox from './SearchBox.jsx';
import MyQueueSummary from './MyQueueSummary.jsx';
import StatusMessage from './StatusMessage.jsx';

export default function Board() {

  const [tickets, setTickets]   = useState([]);     
  const [loading, setLoading]   = useState(true);  
  const [error, setError]       = useState('');    

  const [status, setStatus]     = useState('All');  
  const [priority, setPriority] = useState('All');  
  const [query, setQuery]       = useState('');    


  const [queue, setQueue]       = useState({});


  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        const res = await fetch('/api/tickets', { cache: 'no-store' });
        if (!res.ok) throw new Error(`API ${res.status}`);
        const data = await res.json();
        if (!cancelled) {
          setTickets(data);
          setError('');
        }
      } catch (err) {
        if (!cancelled) setError(`Failed to load tickets: ${err.message}`);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);


  useEffect(() => {
    const statusSeq   = ['Open', 'In Progress', 'On Hold', 'Resolved'];
    const prioritySeq = ['Low', 'Medium', 'High', 'Critical'];

    const nextIn = (arr, cur) => {
      const i = arr.indexOf(cur);
      return arr[(i + 1) % arr.length];
    };

    const interval = setInterval(() => {
      setTickets(prev => {
        if (!prev.length) return prev;


        const i = Math.floor(Math.random() * prev.length);
        const t = prev[i];
        const change = Math.random() < 0.5 ? 'status' : 'priority';

        const updated = {
          ...t,
          updatedAt: new Date().toISOString(),
          ...(change === 'status'
            ? { status: nextIn(statusSeq, t.status) }
            : { priority: nextIn(prioritySeq, t.priority) }),
        };

        const copy = [...prev];
        copy[i] = updated;
        return copy;
      });
    }, 7000); 

    return () => clearInterval(interval);
  }, []);


  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tickets.filter(t => {
      const statusOk   = status === 'All'    || t.status === status;
      const priorityOk = priority === 'All'  || t.priority === priority;
      const textOk     = !q || (t.title + ' ' + t.description).toLowerCase().includes(q);
      return statusOk && priorityOk && textOk;
    });
  }, [tickets, status, priority, query]);

  const queuedTickets = useMemo(
    () => tickets.filter(t => queue[t.id]),
    [tickets, queue]
  );

  const isEmpty = !loading && !error && filtered.length === 0;

  function addToQueue(id) {
    setQueue(prev => ({ ...prev, [id]: true }));
  }

  function removeFromQueue(id) {
    setQueue(prev => {
      const { [id]: _omit, ...rest } = prev;
      return rest;
    });
  }

  function clearQueue() {
    setQueue({});
  }

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-2">Helpdesk Ticket Board</h1>


      <StatusMessage loading={loading} error={error} isEmpty={isEmpty} />


      <div className="flex gap-3 items-center my-3">
        <StatusFilter value={status} onChange={setStatus} />
        <PriorityFilter value={priority} onChange={setPriority} />
        <SearchBox value={query} onChange={setQuery} placeholder="Search tickets…" />
      </div>


      <MyQueueSummary
        items={queuedTickets}
        onRemove={removeFromQueue}
        onClear={clearQueue}
      />


      <TicketList
        tickets={filtered}
        queue={queue}
        onAddToQueue={addToQueue}
        onRemoveFromQueue={removeFromQueue}
      />
    </section>
  );
}
