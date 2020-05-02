import React from "react";
import AddEventForm from "./AddEventForm";
import "./AddEvent.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddEvent = () => (
  <div className="entire-pg">
    <header className="main-header">ADD EVENT</header>
    <div>
      <div id="container">
        <AddEventForm id="addeventform" />
        <ToastContainer autoClose={2000} hideProgressBar={true} />
      </div>
    </div>
  </div>
);

export default AddEvent;
