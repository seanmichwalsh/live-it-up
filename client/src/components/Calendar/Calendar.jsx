import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import $ from "jquery";
import "fullcalendar";
import "moment/min/moment.min.js";
import "fullcalendar/dist/fullcalendar.css";
import "fullcalendar/dist/fullcalendar.js";
import "./Calendar.css";
import { getEvents } from "./../../redux/actions/eventActions";

const Calendar = ({ getEvents, events }) => {
  useEffect(() => {
    getEvents();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    const correctFormat = [];
    events.map(event => {
      correctFormat.push({
        title: event.eventName,
        start: event.startTime.substring(0, 19),
        end: event.endTime.substring(0, 19)
      });
    });
    $("#calendar").fullCalendar({
      events: correctFormat,
      eventColor: "#b259a0",
      // timeFormat: "h(:mm)",
      // eventTimeFormat: {
      //   // like '14:30:00'
      //   hour: "2-digit",
      //   minute: "2-digit",
      //   second: "2-digit",
      //   meridiem: false
      // },
      eventTextColor: "#f4f4f4",
      header: {
        left: "prev,next today",
        center: "title",
        right: "month,listMonth"
      }
    });
    $("#calendar").fullCalendar("addEventSource", correctFormat);
    $("#calendar").fullCalendar({ timezone: "America/New_York" });
    $("#calendar").fullCalendar("option", "aspectRatio", 1);
    $("#calendar").fullCalendar({
      eventClick: function(calEvent, jsEvent, view) {
        alert("Event: " + calEvent.title);
        alert("Coordinates: " + jsEvent.pageX + "," + jsEvent.pageY);
        alert("View: " + view.name);
      }
    });
  }, [events]);

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

Calendar.propTypes = {
  getEvents: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  events: state.event.events
});

export default connect(mapStateToProps, { getEvents })(Calendar);
