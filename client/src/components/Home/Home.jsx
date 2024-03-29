import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getEvents } from "../../redux/actions/eventActions";
import { getCommittees } from "../../redux/actions/committeeActions";

import SideBar from "./SideBar";
import EventDetail from "./EventDetail";
import "./Home.css";

const Home = ({ getEvents, events, getCommittees, committees }) => {
  useEffect(() => {
    getCommittees();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    getEvents();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    events.sort((a, b) => {
      var dateA = new Date(a.startTime),
        dateB = new Date(b.startTime);
      return dateA - dateB;
    });
  }, [events]);

  return (
    <div className="entire-page">
      <div id="main-page">
        <div className="main-header">Upcoming Events</div>
        <div id="events-container">
          <div className="main-event">
            {events.splice(0, 1).map((event) => (
              <EventDetail
                key={event._id}
                URL={
                  process.env.PUBLIC_URL +
                  "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/91873401_10159808570233066_8270082192713973760_o.jpg?_nc_cat=103&_nc_sid=b386c4&_nc_ohc=p1BHxMzZBAEAX8MXlSW&_nc_ht=scontent-lga3-1.xx&oh=651d2f661db11f7086e3f2471429c3d9&oe=5EB67789"
                }
                event={event}
                mainEvent={true}
              />
            ))}
          </div>
          {events.splice(1, 3).map((event) => (
            <div className="event-item" key={event._id}>
              <EventDetail
                key={event._id}
                URL={
                  process.env.PUBLIC_URL +
                  "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/91873401_10159808570233066_8270082192713973760_o.jpg?_nc_cat=103&_nc_sid=b386c4&_nc_ohc=p1BHxMzZBAEAX8MXlSW&_nc_ht=scontent-lga3-1.xx&oh=651d2f661db11f7086e3f2471429c3d9&oe=5EB67789"
                }
                event={event}
                mainEvent={false}
              />
            </div>
          ))}
        </div>
      </div>
      <div id="side-bar">
        <SideBar committees={committees}/>
      </div>
    </div>
  );
};

Home.propTypes = {
  getEvents: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
  getCommittees: PropTypes.func.isRequired,
  committees: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  events: state.event.events,
  committees: state.committee.committees
});

export default connect(mapStateToProps, { getEvents, getCommittees })(Home);