import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddPoints.css";
import AddPointsForm from './AddPointsForm';

const AddPoints = () => (
  <div className="add-user-pg">
    <header className="header">ADD POINTS</header>
    <div className="add-details">
      <AddPointsForm />
      <ToastContainer autoClose={2000} hideProgressBar={true} />
    </div>
  </div>
);

export default AddPoints;

