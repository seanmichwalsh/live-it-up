import React, { useState, useEffect } from "react";
import "./AddEvent.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addEvent } from "../../redux/actions/eventActions";
import { getCommittees } from "../../redux/actions/committeeActions";
import Moment from "react-moment";
import moment from "moment-timezone";

const AddEventForm = ({ addEvent, committees, getCommittees }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [committee, setCommittee] = useState([]);
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    getCommittees();
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    if (
      name === "" ||
      location === "" ||
      date === null ||
      startTime === null ||
      endTime === null
    ) {
      toast("Please fill in every required field!");
    } else {
      console.log(startTime);
      console.log(endTime);
      console.log(`${date}T${startTime}:00`);
      console.log(`${date}T${endTime}:00`);

      const newEvent = {
        eventName: name,
        location: location,
        committees: committee,
        startTime: moment
          .tz(`${date}T${startTime}:00`, "America/New_York")
          .utc()
          .format(),
        endTime: moment
          .tz(`${date}T${endTime}:00`, "America/New_York")
          .utc()
          .format()
      };
      console.log(newEvent);
      addEvent(newEvent);
      //Clear Fields
      setName("");
      setLocation("");
      setCommittee("");
      setDate(new Date());
      setStartTime("");
      setEndTime("");
    }
  };

  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-6 text-left">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="GT Night at Six Flags"
            onChange={e => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className="form-group col-md-6 text-left">
          <label htmlFor="name">Location</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Six Flags"
            onChange={e => setLocation(e.target.value)}
            value={location}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-3 text-left">
          <label htmlFor="committees">Committee</label>
          <select
            id="committees"
            className="form-control"
            onChange={e => {
              committee.push(e.target.value);
              setCommittee(committee);
            }}
          >
            <option selected disabled value="">
              Choose...
            </option>
            {committees !== null &&
              committees.map(committee => (
                <option key={committee._id} value={committee._id}>
                  {committee.name}
                </option>
              ))}
          </select>
        </div>
        <div className="form-group col-md-3 text-left">
          <label htmlFor="type">Date</label>
          <input
            type="date"
            pattern="\d{4}-\d{2}-\d{2}"
            className="form-control"
            id="type"
            onChange={e => setDate(e.target.value)}
            value={date}
            required
          />
        </div>
        <div className="form-group col-md-3 text-left">
          <label htmlFor="type">Start Time</label>
          <input
            type="time"
            className="form-control"
            id="type"
            onChange={e => setStartTime(e.target.value)}
            value={startTime}
            required
          />
        </div>
        <div className="form-group col-md-3 text-left">
          <label htmlFor="type">End Time</label>
          <input
            type="time"
            className="form-control"
            id="type"
            placeholder="9:00"
            onChange={e => setEndTime(e.target.value)}
            value={endTime}
            required
          />
        </div>
      </div>
      <button
        type="submit"
        id="add-button"
        className="btn btn-secondary"
        onClick={onSubmit}
      >
        Add Event
      </button>
    </form>
  );
};

AddEventForm.propTypes = {
  addEvents: PropTypes.func.isRequired,
  committees: PropTypes.array.isRequired,
  getCommittees: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  events: state.events,
  committees: state.committee.committees
});

export default connect(mapStateToProps, { addEvent, getCommittees })(
  AddEventForm
);
