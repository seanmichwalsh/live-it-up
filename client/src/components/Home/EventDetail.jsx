import React from "react";
import "./EventDetail.css";

const EventDetail = ({ URL, name, date, time, location, mainEvent }) => {
  return (
    <div className="eventDetail">
      <img className="pic" src={URL} alt=""></img>
      <div className={`description ${mainEvent}`}>
        <div className="left">
          <div>Name: {name}</div>
          <div>Date: {date}</div>
        </div>
        <div className="right">
          <div>Time: {time} </div>
          <div>Location: {location}</div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
