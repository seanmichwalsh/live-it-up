import React from "react";
import AddCommitteeForm from "./AddCommitteeForm";
import "./AddCommittee.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCommittee = () => (
  <div className="entire-pg">
    <header className="main-header">ADD COMMITTEE</header>
      <div id="container">
        <AddCommitteeForm className="committee-details" />
        <ToastContainer autoClose={2000} hideProgressBar={true} />
      </div>
  </div>
);

export default AddCommittee;
