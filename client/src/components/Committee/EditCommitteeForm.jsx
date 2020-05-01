import React, { useState, useEffect } from "react";
import "./AddCommittee.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import { updateCommittee } from "../../redux/actions/committeeActions";

const EditCommitteeForm = ({ updateCommittee, current }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    if (current) {
      setName(current.name);
      setType(current.type);
    }
  }, [current]);

  const onSubmit = (e) => {
    e.preventDefault();
    const newCommittee = {
      name: name,
      type: type,
    };
    updateCommittee(newCommittee);
    //Clear Fields
    setName("");
    setType("");
  };

  return (
    <form className="committee-details">
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
        <div className="form-group col-md-6 text-left">
          <label htmlFor="type">Type of Committee</label>
          <input
            type="text"
            className="form-control"
            id="type"
            placeholder="Event Planning"
            onChange={(e) => setType(e.target.value)}
            value={type}
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
        Add Committee
      </button>
    </form>
  );
};

EditCommitteeForm.propTypes = {
  updateCommittee: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  committees: state.committees,
  current: state.current,
});

export default connect(mapStateToProps, { updateCommittee })(EditCommitteeForm);
