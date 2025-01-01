// import React, { useState } from "react";
// import "./Calendar.css";

// const Calendar = () => {
//   // State to track current month and year
//   const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
//   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
//   // State to track events
//   const [events, setEvents] = useState([]);

//   // Function to generate the days in a month
//   const generateCalendar = (month, year) => {
//     const firstDay = new Date(year, month, 1).getDay(); // Day of the week for the 1st day of the month
//     const lastDate = new Date(year, month + 1, 0).getDate(); // Last date of the month
//     const days = Array.from({ length: lastDate }, (_, i) => i + 1);
//     const weeks = [];

//     let week = Array(7).fill(null);
//     let dayCounter = 1;

//     // Fill the first week
//     for (let i = firstDay; i < 7; i++) {
//       if (dayCounter <= lastDate) {
//         week[i] = dayCounter++;
//       }
//     }
//     weeks.push(week);

//     // Fill the rest of the weeks
//     while (dayCounter <= lastDate) {
//       week = Array(7).fill(null);
//       for (let i = 0; i < 7; i++) {
//         if (dayCounter <= lastDate) {
//           week[i] = dayCounter++;
//         }
//       }
//       weeks.push(week);
//     }

//     return weeks;
//   };

//   // Generate the days for the current month
//   const calendarDays = generateCalendar(currentMonth, currentYear);

//   // Handle the next and previous month navigation
//   const handlePrevMonth = () => {
//     if (currentMonth === 0) {
//       setCurrentMonth(11);
//       setCurrentYear(currentYear - 1);
//     } else {
//       setCurrentMonth(currentMonth - 1);
//     }
//   };

//   const handleNextMonth = () => {
//     if (currentMonth === 11) {
//       setCurrentMonth(0);
//       setCurrentYear(currentYear + 1);
//     } else {
//       setCurrentMonth(currentMonth + 1);
//     }
//   };

//   // Handle adding an event
//   const addEvent = (date) => {
//     const eventName = prompt("Enter event name:");
//     if (eventName) {
//       setEvents([...events, { date, eventName }]);
//     }
//   };

//   // Handle removing an event
//   const removeEvent = (date) => {
//     const updatedEvents = events.filter(event => event.date !== date);
//     setEvents(updatedEvents);
//   };

//   // Get events for a specific day
//   const getEventsForDay = (date) => {
//     return events.filter(event => event.date === date);
//   };

//   return (
//     <div className="calendar">
//       <div className="calendar-header">
//         <button onClick={handlePrevMonth}>Prev</button>
//         <span>{`${new Date(currentYear, currentMonth).toLocaleString("default", {
//           month: "long",
//         })} ${currentYear}`}</span>
//         <button onClick={handleNextMonth}>Next</button>
//       </div>
//       <div className="calendar-body">
//         {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
//           <div
//             key={index}
//             className={`calendar-day ${index === 0 || index === 6 ? "weekend" : ""}`}
//           >
//             {day}
//           </div>
//         ))}
//         {calendarDays.map((week, weekIndex) => (
//           <React.Fragment key={weekIndex}>
//             {week.map((day, dayIndex) => (
//               <div
//                 key={dayIndex}
//                 className={`calendar-date ${dayIndex === 0 || dayIndex === 6 ? "weekend" : ""}`}
//                 onClick={() => day && addEvent(day)} // Click to add event
//               >
//                 {day && (
//                   <div>
//                     {day}
//                     {getEventsForDay(day).length > 0 && (
//                       <div className="event-list">
//                         {getEventsForDay(day).map((event, index) => (
//                           <div key={index} className="event">
//                             {event.eventName}
//                             <button
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 removeEvent(day); // Remove event
//                               }}
//                             >
//                               X
//                             </button>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Calendar;

import React, { useState } from "react";
import "./Calendar.css";

const Calendar = () => {
  // State to track current month and year
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  // State to track events
  const [events, setEvents] = useState([]);

  // Get today's date
  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();
  const todayDay = today.toLocaleString("default", { weekday: "long" });

  // Function to generate the days in a month
  const generateCalendar = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay(); // Day of the week for the 1st day of the month
    const lastDate = new Date(year, month + 1, 0).getDate(); // Last date of the month
    const days = Array.from({ length: lastDate }, (_, i) => i + 1);
    const weeks = [];

    let week = Array(7).fill(null);
    let dayCounter = 1;

    // Fill the first week
    for (let i = firstDay; i < 7; i++) {
      if (dayCounter <= lastDate) {
        week[i] = dayCounter++;
      }
    }
    weeks.push(week);

    // Fill the rest of the weeks
    while (dayCounter <= lastDate) {
      week = Array(7).fill(null);
      for (let i = 0; i < 7; i++) {
        if (dayCounter <= lastDate) {
          week[i] = dayCounter++;
        }
      }
      weeks.push(week);
    }

    return weeks;
  };

  // Generate the days for the current month
  const calendarDays = generateCalendar(currentMonth, currentYear);

  // Handle the next and previous month navigation
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Handle adding an event
  const addEvent = (date) => {
    const eventName = prompt("Enter event name:");
    if (eventName) {
      setEvents([...events, { date, eventName }]);
    }
  };

  // Handle removing an event
  const removeEvent = (date) => {
    const updatedEvents = events.filter(event => event.date !== date);
    setEvents(updatedEvents);
  };

  // Get events for a specific day
  const getEventsForDay = (date) => {
    return events.filter(event => event.date === date);
  };

  return (
    <div className="calendar">
      {/* Display today's date and day */}
      <div className="calendar-today">
        <h3>Today is {`${todayDay}, ${todayDate} ${new Date(todayYear, todayMonth).toLocaleString("default", { month: "long" })} ${todayYear}`}</h3>
      </div>

      <div className="calendar-header">
        <button onClick={handlePrevMonth}>Prev</button>
        <span>{`${new Date(currentYear, currentMonth).toLocaleString("default", {
          month: "long",
        })} ${currentYear}`}</span>
        <button onClick={handleNextMonth}>Next</button>
      </div>
      <div className="calendar-body">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${index === 0 || index === 6 ? "weekend" : ""}`}
          >
            {day}
          </div>
        ))}
        {calendarDays.map((week, weekIndex) => (
          <React.Fragment key={weekIndex}>
            {week.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className={`calendar-date ${
                  dayIndex === 0 || dayIndex === 6 ? "weekend" : ""
                } ${day === todayDate && currentMonth === todayMonth && currentYear === todayYear ? "today" : ""}`} // Highlight today
                onClick={() => day && addEvent(day)} // Click to add event
              >
                {day && (
                  <div>
                    {day}
                    {getEventsForDay(day).length > 0 && (
                      <div className="event-list">
                        {getEventsForDay(day).map((event, index) => (
                          <div key={index} className="event">
                            {event.eventName}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                removeEvent(day); // Remove event
                              }}
                            >
                              X
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Calendar;

