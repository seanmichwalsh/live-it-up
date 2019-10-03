import React, { useState, useEffect } from "react";
import $ from "jquery";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import "./AddPoints.css";
import { PropTypes } from "prop-types";
import { getUsers } from "./../../redux/actions/userActions";
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

