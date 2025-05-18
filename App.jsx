import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    category: '',
    location: '',
    date: '',
    organizer: ''
  });

  // Fetch events
  useEffect(() => {
    axios.get('/api/events')
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/events', newEvent)
      .then(res => setEvents([...events, res.data]))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Community Pulse</h1>
      
      {/* Event Creation Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={e => setNewEvent({...newEvent, title: e.target.value})}
        />
        <input
          type="text"
          placeholder="Category"
          value={newEvent.category}
          onChange={e => setNewEvent({...newEvent, category: e.target.value})}
        />
        <button type="submit">Create Event</button>
      </form>

      {/* Event List */}
      <div>
        {events.map(event => (
          <div key={event._id}>
            <h3>{event.title}</h3>
            <p>{event.category} • {event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
