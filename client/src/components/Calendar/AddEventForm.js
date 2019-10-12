import React, { useState, useEffect } from "react";
import "./AddEvent.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addEvent } from "../../redux/actions/eventActions";
import { getCommittees } from "../../redux/actions/committeeActions";

const AddEventForm = ({ addEvent }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [committees, setCommittee] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    getCommittees();
    //eslint-disable-next-line
  }, [committees]);

  const onSubmit = e => {
    e.preventDefault();
    if (name === "" || location === "") {
      toast("Please fill in every required field!");
    } else {
      const newEvent = {
        name: name,
        location: location
      };
      addEvent(newEvent);
      //Clear Fields

      setName("");
      setLocation("");
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
        <div className="form-group col-md-4 text-left">
          <label htmlFor="committees">Committee</label>
          <select
            id="committees"
            className="form-control"
            required
            onChange={e => setCommittee(e.target.value)}
          >
            <option selected disabled value="">
              Choose...
            </option>
            {/* {committees
              .filter(committee => committee.type === "Primary")
              .map(committee => (
                <option key={committee._id} value={committee._id}>
                  {committee.name}
                </option>
              ))} */}
          </select>
        </div>
        <div className="form-group col-md-4 text-left">
            <label htmlFor="type">Date</label>
            <input
                type="text"
                className="form-control"
                id="type"
                placeholder="2019-10-23"
                onChange={e => setDate(e.target.value)}
                value={date}
                required
            />
            </div>
            <div className="form-group col-md-2 text-left">
            <label htmlFor="type">Start Time</label>
            <input
                type="text"
                className="form-control"
                id="type"
                placeholder="7:00"
                onChange={e => setStartTime(e.target.value)}
                value={startTime}
                required
            />
            </div>
            <div className="form-group col-md-2 text-left">
            <label htmlFor="type">End Time</label>
            <input
                type="text"
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
  committees: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  events: state.events,
  committees: state.committee.committees
});

export default connect(
  mapStateToProps,
  { addEvent, getCommittees }
)(AddEventForm);
