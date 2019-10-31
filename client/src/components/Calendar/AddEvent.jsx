import React from "react";
import AddEventForm from "./AddEventForm";
import "./AddEvent.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddEvent = () => (
  <div className="add-user-pg">
    <header className="header">ADD EVENT</header>
    <div className="add-details">
      <div id="container">
        <AddEventForm id="addeventform" />
        <ToastContainer autoClose={2000} hideProgressBar={true} />
      </div>
    </div>
  </div>
);

export default AddEvent;
