import React, { Component } from "react";
import CommitteeForm from "../CommitteeForm";
import CommitteeAccess from "../CommitteeAccess";
import "./AddCommittee.css";

const EditCommittee = () => {
  return (
    <div className="entire-pg">
      <header className="main-header">EDIT COMMITTEE</header>
      <div className="committee-details">
        <div className="alert alert-success hidden" id="success-alert">
          <button
            type="button"
            id="close-button"
            className="close"
            onClick={this.exitAlert}
          >
            x
          </button>
          <span className="glyphicon glyphicon-ok"></span> Committee has been
          added!
        </div>
        <div id="container">
          <CommitteeForm/>
          <CommitteeAccess />
        </div>
        <button type="button" id="add-button" className="btn btn-secondary">
          Add Committee
        </button>
      </div>
    </div>
  );
};

EditCommittee.PropTypes = {};

export default EditCommittee;
