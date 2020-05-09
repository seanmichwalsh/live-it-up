import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddPoints.css";
import AddPointsForm from "./AddPointsForm";

const AddPoints = () => (
  <div className="entire-pg">
    <header className="main-header">ADD POINTS</header>
    <div id="point-container">
      <AddPointsForm />
      <ToastContainer autoClose={2000} hideProgressBar={true} />
    </div>
  </div>
);

export default AddPoints;
