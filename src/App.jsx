import React from "react";
import Calendar from "./components/Calender.jsx";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-center text-2xl font-bold mb-6"> Event Calendar</h1>
      <Calendar />
    </div>
  );
}

export default App;
