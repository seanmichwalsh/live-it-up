import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from 'moment';

import { getEvents } from "../../redux/actions/eventActions";

import SideBar from "./SideBar";
import EventDetail from "./EventDetail";
import "./Home.css";

const Home = ({ getEvents, events }) => {
  //eslint-disable-next-line
  // const [event, setEvent] = useState([]);

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
    // setEvent(events);
  }, [events]);

  return (
    <div className="entire-page">
      <div className="main-page">
        <div className="main-header">Upcoming Events</div>
        <div id="main-event">
          {events.splice(0, 1).map((event) => (
            <EventDetail
              key={event._id}
              URL={
                process.env.PUBLIC_URL +
                "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/91873401_10159808570233066_8270082192713973760_o.jpg?_nc_cat=103&_nc_sid=b386c4&_nc_ohc=p1BHxMzZBAEAX8MXlSW&_nc_ht=scontent-lga3-1.xx&oh=651d2f661db11f7086e3f2471429c3d9&oe=5EB67789"
              }
              name={event.eventName}
              date={Moment(event.startTime).format("ddd, MMMM DD, Y")}
              time={
                Moment(event.startTime).format("h:mm") + " - " 
                + Moment(event.endTime).format("h:mm a")
              }
              location={event.location}
            />
          ))}
        </div>
        <div id="events-container">
          {events.splice(1, 4).map((event) => (
            <EventDetail
              key={event._id}
              URL={
                process.env.PUBLIC_URL +
                "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/91873401_10159808570233066_8270082192713973760_o.jpg?_nc_cat=103&_nc_sid=b386c4&_nc_ohc=p1BHxMzZBAEAX8MXlSW&_nc_ht=scontent-lga3-1.xx&oh=651d2f661db11f7086e3f2471429c3d9&oe=5EB67789"
              }
              name={event.eventName}
              // date={event.startTime.substring(0, 10)}
              date={Moment(event.startTime).format("ddd, MMMM DD, Y")}
              time={
                Moment(event.startTime).format("h:mm") + " - " 
                + Moment(event.endTime).format("h:mm a")
              }
              location={event.location}
            />
          ))}
        </div>
      </div>
      <div className="side-bar">
        <SideBar />
      </div>
    </div>
  );
};

Home.propTypes = {
  getEvents: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  events: state.event.events,
});

export default connect(mapStateToProps, { getEvents })(Home);
