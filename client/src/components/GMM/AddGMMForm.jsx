import React, { useState } from "react";
import "./AddGMM.css";
// import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { addGMM } from "../../redux/actions/GMMActions";

const AddGMMForm = ({ addGMM }) => {
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (date === "" || location === "" || time === "") {
      toast("Please fill in every required field!");
    } else {
      const newGMM = {
        date: date,
        location: location,
        time: time,
      };
      addGMM(newGMM);
      //Clear Fields
      setDate("");
      setLocation("");
      setTime("");
    }
  };

  return (
    <form className="account-details" id="account-details-form">
      <span className="ac-header">GMM Details</span>
      <div className="form-row">
        <div className="form-group col-md-12 text-left">
          <label htmlFor="date">Date</label>
          <input
            type="text"
            className="form-control"
            id="date"
            placeholder="Date"
            onChange={e => setDate(e.target.value)}
            value={date}
            required
          />
        </div>
      </div>
      <div className="form-row div-half input-left">
        <div className="form-group col-md-12 text-left">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            placeholder="Student Center"
            onChange={e => setLocation(e.target.value)}
            value={location}
            required
          />
        </div>
      </div>
      <div className="form-row div-half">
        <div className="form-group col-md-12 text-left">
          <label htmlFor="time">Time</label>
          <input
            type="text"
            className="form-control"
            id="time"
            placeholder="Time"
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
        Add GMM
      </button>
    </form>
  );
};

// AddGMMForm.propTypes = {
//   addGMM: PropTypes.func.isRequired
// };

// const mapStateToProps = state => ({
//   GMMs: state.GMMs,
//   current: state.current
// });

export default AddGMMForm;
