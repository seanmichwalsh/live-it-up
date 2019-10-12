import React, { Component } from "react";
import $ from "jquery";
import "fullcalendar";
import "moment/min/moment.min.js";
import "fullcalendar/dist/fullcalendar.css";
import "fullcalendar/dist/fullcalendar.js";
import "./Calendar.css";

class Calendar extends Component {
  componentDidMount() {
    const { calendar } = this.refs;
    $("#calendar").fullCalendar({
      events: [
        {
          title: "event1",
          start: "2019-03-01"
        },
        {
          title: "Gt Night In",
          start: "2019-03-05",
          end: "2019-03-07",
          url: "https://studentcenter.gatech.edu/events/gt-night"
        },
        {
          title: "event3",
          start: "2019-03-09T13:30:00",
          allDay: false // will make the time show
        }
      ],
      eventColor: "#93681",
      timeFormat: "h(:mm)",
      eventTextColor: "#f4f4f4",
      header: {
        left: "prev,next today",
        center: "title",
        right: "month,listMonth"
      }
    });
    $("#calendar").fullCalendar({ events: this.props.events });
    $("#calendar").fullCalendar("option", "aspectRatio", 1);
    $("#calendar").fullCalendar({
      eventClick: function(calEvent, jsEvent, view) {
        alert("Event: " + calEvent.title);
        alert("Coordinates: " + jsEvent.pageX + "," + jsEvent.pageY);
        alert("View: " + view.name);
      }
    });
  }

  render() {
    return (
        <div id="calendarPage">
            <div id="calendar" />
        </div>
        
    )
  }
}

export default Calendar;