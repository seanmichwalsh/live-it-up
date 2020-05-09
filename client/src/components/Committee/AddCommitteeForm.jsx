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

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || type === "") {
      toast("Please fill in every required field!");
    } else {
      const newCommittee = {
        name: name,
        type: type,
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
