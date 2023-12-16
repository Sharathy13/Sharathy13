import React, { useState } from 'react';

const EventForm = ({ onAddEvent }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !date || !description) {
      alert('Please fill in all fields');
      return;
    }

    onAddEvent({ title, date, description });
    setTitle('');
    setDate('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label>Date:</label>
      <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />

      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm
