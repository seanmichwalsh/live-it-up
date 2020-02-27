import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import momentTimezonePlugin from "@fullcalendar/moment-timezone";
import interactionPlugin from "@fullcalendar/interaction";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "moment/min/moment.min.js";
import { getEvents } from "./../../redux/actions/eventActions";
import "./Calendar.css";

const Calendar = ({ getEvents, events }) => {
  const [correctFormat, setCorrectFormat] = useState([]);

  useEffect(() => {
    getEvents();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    events.forEach(event => {
      setCorrectFormat(
        correctFormat.push({
          title: event.eventName,
          start: event.startTime.substring(0, 19),
          end: event.endTime.substring(0, 19)
        })
      );
    });
    //eslint-disable-next-line
  }, [events]);

  return (
    <div id="calendarPage">
      <header id="header">
        <div id="add-edit-box">
          <div className="dropdown">
            <a
              href="/addevent"
              className="btn btn-secondary btn-small active"
              role="button"
              aria-pressed="true"
            >
              ADD EVENT
            </a>
          </div>
        </div>
      </header>
      <FullCalendar
        defaultView="dayGridMonth"
        aspectRatio="1"
        plugins={[momentTimezonePlugin, dayGridPlugin, interactionPlugin]}
        timezone="America/New_York"
        eventTimeFormat={{
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          meridiem: false
        }}
        events={correctFormat}
        eventColor="b259a0"
        eventTextColor="#f4f4f4"
        header={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
        }}
        dateClick={(calEvent, jsEvent, view) => {
          alert("Event: " + calEvent.title);
          alert("Coordinates: " + jsEvent.pageX + "," + jsEvent.pageY);
          alert("View: " + view.name);
        }}
      />
    </div>
  );
};

Calendar.propTypes = {
  getEvents: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  events: state.event.events
});

export default connect(mapStateToProps, { getEvents })(Calendar);
