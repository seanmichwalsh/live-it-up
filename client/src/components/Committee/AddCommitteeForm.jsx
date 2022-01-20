import React, { useState } from "react";
import "./AddCommittee.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addCommittee } from "../../redux/actions/committeeActions";

const AddCommitteeForm = ({ addCommittee }) => {
  const defaultCommitteeType = "Event Planning";
  const [name, setName] = useState("");
  const [type, setType] = useState(defaultCommitteeType);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [meetingDay, setMeetingDay] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || type === "") {
      toast("Please fill in every required field!");
    } else {
      const newCommittee = {
        name: name,
        type: type,
        startTime: startTime,
        endTime: endTime,
        meetingDay: meetingDay
      };
      addCommittee(newCommittee);
      //Clear Fields
      setName(defaultCommitteeType);
      setType(defaultCommitteeType);
    }
  };

  return (
    <form id="committee-details">
      <span className="sub-header">Committee Details</span>
      <div className="form-row">
        <div className="form-group col-md-12 text-left">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Committee Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-12 text-left">
          <label htmlFor="type">Type of Committee</label>
          <select
            type="text"
            className="form-control"
            id="type"
            placeholder="Event Planning"
            onChange={(e) => setType(e.target.value)}
            value={type}
            required
          >
            <option value="Event Planning">Event Planning</option>
            <option value="Auxiliary">Auxiliary</option>
          </select>
        </div>
        <div className="form-group col-md-3 text-left">
          <label htmlFor="type">Start Time</label>
          <input
            type="time"
            className="form-control"
            id="startTime"
            onChange={(e) => setStartTime(e.target.value)}
            value={startTime}
            required
          />
        </div>
        <div className="form-group col-md-3 text-left">
          <label htmlFor="type">End Time</label>
          <input
            type="time"
            className="form-control"
            id="endTime"
            placeholder="9:00"
            onChange={(e) => setEndTime(e.target.value)}
            value={endTime}
            required
          />
        </div>
        <div className="form-group col-md-3 text-left">
          <label htmlFor="meetingDay">Meeting Day</label>
          <select
            type="text"
            className="form-control"
            id="meetingDay"
            placeholder="Choose a day"
            onChange={(e) => setMeetingDay(e.target.value)}
            value={meetingDay}
            required
          >
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        id="add-button"
        className="btn btn-secondary"
        onClick={onSubmit}
      >
        Add Committee
      </button>
    </form>
  );
};

AddCommitteeForm.propTypes = {
  addCommittee: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  committees: state.committees,
  current: state.current,
});

export default connect(mapStateToProps, { addCommittee })(AddCommitteeForm);
