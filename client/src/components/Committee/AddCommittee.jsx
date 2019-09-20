import React from "react";
import AddCommitteeForm from "./AddCommitteeForm";
import "./AddCommittee.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCommittee = () => (
  <div className="add-user-pg">
    <header className="header">ADD COMMITTEE</header>
    <div className="add-details">
      <div id="container">
        <AddCommitteeForm className="account-details" />
        <ToastContainer autoClose={2000} hideProgressBar={true} />
      </div>
    </div>
  </div>
);

export default AddCommittee;
