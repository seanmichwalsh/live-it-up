import React, { useEffect } from "react";
import $ from "jquery";
import "fullcalendar";
import "moment/min/moment.min.js";
import "fullcalendar/dist/fullcalendar.css";
import "fullcalendar/dist/fullcalendar.js";
import "./Calendar.css";
import eventsJSON from "./events.json";

const Calendar = () => {
  useEffect(() => {
    $("#calendar").fullCalendar({
      events: eventsJSON,
      eventColor: "#b259a0",
      timeFormat: "h(:mm)",
      eventTimeFormat: {
        // like '14:30:00'
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        meridiem: false
      },
      eventTextColor: "#f4f4f4",
      header: {
        left: "prev,next today",
        center: "title",
        right: "month,listMonth"
      }
    });
    $("#calendar").fullCalendar("option", "aspectRatio", 1);
    $("#calendar").fullCalendar({
      eventClick: function(calEvent, jsEvent, view) {
        alert("Event: " + calEvent.title);
        alert("Coordinates: " + jsEvent.pageX + "," + jsEvent.pageY);
        alert("View: " + view.name);
      }
    });
    //eslint-disable-next-line
  }, []);

  return (
    <div id="calendarPage">
      <header id="header">
        <div id="add-edit-box">
          <div className="dropdown">
            <a
              href="/addevent"
              class="btn btn-secondary btn-small active"
              role="button"
              aria-pressed="true"
            >
              ADD EVENT
            </a>
          </div>
        </div>
      </header>
      <div id="calendar" />
    </div>
  );
};

export default Calendar;
