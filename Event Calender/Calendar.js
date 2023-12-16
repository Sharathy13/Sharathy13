import React from 'react';
import Event from './Event';

const Calendar = ({ events }) => {
  return (
    <div className="calendar">
      {events.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  );
};

export default Calendar