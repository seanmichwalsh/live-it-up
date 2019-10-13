import React, { useState } from "react";
import "./AddCommitteeTimes.css";
// import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { addCommitteeTimes } from "../../redux/actionsdCommitteeTimesActions";

const AddCommitteeTimesForm = ({ addCommitteeTimes }) => {
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (name === "" || day === "" || time === "") {
      toast("Please fill in every required field!");
    } else {
      const newCommitteeTimes = {
        name: name,
        day: day,
        time: time,
      };
      addCommitteeTimes(newCommitteeTimes);
      //Clear Fields
      setName("");
      setDay("");
      setTime("");
    }
  };

  return (
    <form id="committee-form">
      <div className="form-row">
        <div className="form-group col-md-12 text-left">
          <label htmlFor="name">Committee Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            onChange={e => setName(e.target.value)}
            value={name}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6 text-left">
          <label htmlFor="day">Day</label>
          <input
            type="text"
            className="form-control"
            id="day"
            placeholder="M, T, W, R, F"
            onChange={e => setDay(e.target.value)}
            value={day}
            required
          />
        </div>
        <div className="form-group col-md-6 text-left">
          <label htmlFor="time">Time</label>
          <input
            type="text"
            className="form-control"
            id="time"
            placeholder="9:00am"
            onChange={e => setTime(e.target.value)}
            value={time}
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
        Add Committee Time
      </button>
    </form>
  );
};

// AddCommitteeTimesForm.propTypes = {
//   addCommitteeTimes: PropTypes.func.isRequired
// };

// const mapStateToProps = state => ({
//   CommitteeTimess: state.CommitteeTimess,
//   current: state.current
// });

export default AddCommitteeTimesForm;
