import React from 'react';

const Event = ({ event }) => {
  return (
    <div className="event">
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.description}</p>
    </div>
  );
};

export default Event
