import React, { useState } from 'react';
import './App.css';
import Calendar from './Calendar';
import EventForm from './EventForm';

function App() {
  const [events, setEvents] = useState([
    { id: 1, title: 'Meeting', date: '2023-11-30', description: 'Discuss project updates' },
    { id: 2, title: 'Birthday Party', date: '2023-12-10', description: 'Celebrate a friend\'s birthday' },
  ]);

  const addEvent = (event) => {
    setEvents([...events, { id: events.length + 1, ...event }]);
  };

  return (
    <div className="App">
      <h1>Event Calendar</h1>
      <EventForm onAddEvent={addEvent} />
      <Calendar events={events} />
    </div>
  );
}

export default App

