import React, { Component }  from 'react';
import CommitteeForm from'./CommitteeForm';
import './AddCommittee.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from 'react-bootstrap/Toast';

const AddCommittee = () => (
    <div className="add-user-pg">
        <header className="header">ADD COMMITTEE</header>
        <div className="add-details">
            <div id="container">
                <CommitteeForm className="account-details"  />
                <ToastContainer autoClose={2000} hideProgressBar={true} />
            </div>
        </div>
    </div>
)

export default AddCommittee;