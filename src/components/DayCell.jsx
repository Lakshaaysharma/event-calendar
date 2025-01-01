import React, { useState } from "react";
import EventModal from "./EventModal";

const DayCell = ({ day, events, onAddEvent, onDeleteEvent }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div
      className="p-4 border text-center cursor-pointer hover:bg-gray-100"
      onClick={() => setModalOpen(true)}
    >
      <span className="font-semibold">{day}</span>
      {events.map((event, index) => (
        <div key={index} className="text-xs mt-1 bg-blue-500 text-white px-2 rounded">
          {event.name}
        </div>
      ))}
      {isModalOpen && (
        <EventModal
          day={day}
          events={events}
          onAddEvent={onAddEvent}
          onDeleteEvent={onDeleteEvent}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default DayCell;

