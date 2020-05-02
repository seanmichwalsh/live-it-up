import React from "react";
import "./EventDetail.css";
import Moment from "moment";

const EventDetail = ({ URL, event, mainEvent }) => {
  return (
    <div className="eventDetail">
      <img className="eventPic" src={URL} alt=""></img>
      <div className={`description ${mainEvent}`}>
        <div className="left">
          <div>Name: {event.eventName}</div>
          <div>Date: {Moment(event.startTime).format("ddd, MMMM DD, Y")}</div>
        </div>
        <div className="right">
          <div>
            Time: {
                  Moment(event.startTime).format("h:mm") +
                  " - " +
                  Moment(event.endTime).format("h:mm a")
                }
          </div>
          <div>Location: {event.location}</div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
