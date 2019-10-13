import React from "react";
import AddCommitteeTimesForm from "./AddCommitteeTimesForm";
import "./AddCommitteeTimes.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCommitteeTimes = () => (
  <div className="add-user-pg">
    <header className="header">ADD COMMITTEE TIMES</header>
    <div className="add-details">
      <div id="container">
        <AddCommitteeTimesForm className="account-details" />
        <ToastContainer autoClose={2000} hideProgressBar={true} />
      </div>
    </div>
  </div>
);

export default AddCommitteeTimes;
