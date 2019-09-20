import React, { Component } from "react";
import CommitteeForm from "../CommitteeForm";
import CommitteeAccess from "../CommitteeAccess";
import "./AddCommittee.css";

const EditCommittee = () => {
  return (
    <div className="add-user-pg">
      <header className="header">ADD COMMITTEE</header>
      <div className="add-details">
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
          <CommitteeForm className="account-details" />
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
