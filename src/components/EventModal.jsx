import React, { useState } from "react";

const EventModal = ({ day, events, onAddEvent, onDeleteEvent, onClose }) => {
  const [newEvent, setNewEvent] = useState({ name: "", startTime: "", endTime: "", description: "" });

  const handleAddEvent = () => {
    onAddEvent(day, newEvent);
    setNewEvent({ name: "", startTime: "", endTime: "", description: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Events for Day {day}</h2>
        <ul className="mb-4">
          {events.map((event, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span>{event.name} ({event.startTime} - {event.endTime})</span>
              <button
                className="text-red-500"
                onClick={() => onDeleteEvent(day, index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Event Name"
          className="w-full border p-2 mb-2 rounded"
          value={newEvent.name}
          onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
        />
        <input
          type="time"
          className="w-full border p-2 mb-2 rounded"
          value={newEvent.startTime}
          onChange={(e) => setNewEvent({ ...newEvent, startTime: e.target.value })}
        />
        <input
          type="time"
          className="w-full border p-2 mb-2 rounded"
          value={newEvent.endTime}
          onChange={(e) => setNewEvent({ ...newEvent, endTime: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="w-full border p-2 mb-2 rounded"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
        />
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
          <button onClick={handleAddEvent} className="bg-blue-500 text-white px-4 py-2 rounded">Add Event</button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
