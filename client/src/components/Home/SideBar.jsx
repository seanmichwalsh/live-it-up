import React from "react";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Moment from "moment";

import "./SideBar.css";

const fakeData = [
  {
    active: "true",
    _id: "5d37ce521ab55f4f04d722ec",
    name: "Ramblin' Nights",
    startTime: "2019-09-20T10:00:00.000Z",
    endTime: "2019-09-20T10:00:00.000Z",
    meetingDay: "Monday",
    type: "Event Planning",
    __v: 0,
  },
  {
    active: "true",
    _id: "5d37ce521ab55f4f04d722bc",
    name: "Ramblin' Nights",
    startTime: "2019-09-20T10:00:00.000Z",
    endTime: "2019-09-20T10:00:00.000Z",
    meetingDay: "Wednesday",
    type: "Event Planning",
    __v: 0,
  },
];

const SideBar = ({ committees }) => {
  return (
    <div id="side-bar">
      <div id="gmm-header">
        <div className="panelHeader">Next GMM</div>
        <button id="circleIcon">
          <a href="/#">
            <FontAwesomeIcon id="icon" icon={faPlusCircle} />
          </a>
        </button>
      </div>
      <div className="text">
        <div className="text">Lorem ipsum dolor sit amet, consectetur.</div>
      </div>
      <div className="panelHeader">COMMITTEE TIMES</div>

      {/* once sean pushes data call with committee fixes replace {fakeData} with {committees} */}
      <div className="text">
        <div className="eachDay">
          <div className="dayOfWeekHeader">Monday</div>
          {(fakeData !== undefined && fakeData !== null && fakeData)
            .filter((committee) => committee.meetingDay === "Monday")
            .map((committee) => (
              <div key={committee._id}>
                {committee.name}: {Moment(committee.startTime).format("h:mm a")}
              </div>
            ))}
        </div>
        <div className="eachDay">
          <div className="dayOfWeekHeader">Tuesday</div>
          {(fakeData !== undefined && fakeData !== null && fakeData)
            .filter((committee) => committee.meetingDay === "Tuesday")
            .map((committee) => (
              <div key={committee._id}>
                {committee.name}: {Moment(committee.startTime).format("h:mm a")}
              </div>
            ))}
        </div>
        <div className="eachDay">
          <div className="dayOfWeekHeader">Wednesday</div>
          {(fakeData !== undefined && fakeData !== null && fakeData)
            .filter((committee) => committee.meetingDay === "Wednesday")
            .map((committee) => (
              <div key={committee._id}>
                {committee.name}: {Moment(committee.startTime).format("h:mm a")}
              </div>
            ))}
        </div>
        <div className="eachDay">
          <div className="dayOfWeekHeader">Thursday</div>
          {(fakeData !== undefined && fakeData !== null && fakeData)
            .filter((committee) => committee.meetingDay === "Thursday")
            .map((committee) => (
              <div key={committee._id}>
                {committee.name}: {Moment(committee.startTime).format("h:mm a")}
              </div>
            ))}
        </div>
        <div className="eachDay">
          <div className="dayOfWeekHeader">Friday</div>
          {(fakeData !== undefined && fakeData !== null && fakeData)
            .filter((committee) => committee.meetingDay === "Friday")
            .map((committee) => (
              <div key={committee._id}>
                {committee.name}: {Moment(committee.startTime).format("h:mm a")}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
