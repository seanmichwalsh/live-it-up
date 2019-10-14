import React, { useState, useEffect } from "react";
import "./AddEvent.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addEvent } from "../../redux/actions/eventActions";
import { getCommittees } from "../../redux/actions/committeeActions";

const AddEventForm = ({ addEvent, committees, getCommittees }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [committee, setCommittee] = useState([]);
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    getCommittees();
  }, [committee]);

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
      // time manipulation to send to api
      // new Date(year, month, date, hours, minutes, seconds, ms)
      var newDate = new Date(date);
      var newStart = new Date(
        newDate.getYear(),
        newDate.getMonth(),
        newDate.getDate(),
        startTime.substring(0, 2),
        startTime.substring(3)
      );
      var newEnd = new Date(
        newDate.getYear(),
        newDate.getMonth(),
        newDate.getDate(),
        endTime.substring(0, 2),
        endTime.substring(3)
      );
      const newEvent = {
        name: name,
        location: location,
        committees: committee,
        startTime: newStart,
        endTime: newEnd
      };
      addEvent(newEvent);
      //Clear Fields
      setName("");
      setLocation("");
      setCommittee("");
      setDate(new Date());
      setStartTime(new Date());
      setEndTime(new Date());
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
              committees
                .filter(committee => committee.type === "Primary")
                .map(committee => (
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

export default connect(
  mapStateToProps,
  { addEvent, getCommittees }
)(AddEventForm);
