import React from "react";
import AddGMMForm from "./AddGMMForm";
import "./AddGMM.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddGMM = () => (
  <div className="add-user-pg">
    <header className="header">ADD GMM</header>
    <div className="add-details">
      <div id="container">
        <AddGMMForm className="account-details" />
        <ToastContainer autoClose={2000} hideProgressBar={true} />
      </div>
    </div>
  </div>
);

export default AddGMM;
