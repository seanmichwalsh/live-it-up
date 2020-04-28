import "./AdminView.css";
import React from "react";
import PropTypes from "prop-types";
import AdminPointsTable from "./AdminPointsTable";

const AdminView = ({ user, onChange }) => {
  return (
    <div className="directory-page">
      <div className="top-bar">
        <header id="header">
          <div id="header-text">POINTS</div>
          <div id="add-edit-box" className="to-member">
            <div className="dropdown">
              <a
                href="/addpoints"
                className="btn btn-secondary btn-small active"
                id="addButton"
                role="button"
                aria-pressed="true"
              >
                ADD
              </a>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-secondary btn-small active"
                id="toMemberButton"
                aria-pressed="true"
                onClick={() => onChange()}
              >
                To Member View
              </button>
            </div>
          </div>
        </header>
      </div>
      <div id="mainPG">
        <div id="points-display">
          <div id="display-header">
            <div>
              {user.firstName + " " + user.lastName}'s Admin Points Summary
            </div>
          </div>
          <div id="user-table">
            <AdminPointsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

AdminView.propTypes = {
  user: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdminView;
