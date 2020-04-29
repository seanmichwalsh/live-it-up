import "./AdminView.css";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AdminPointsTable from "./AdminPointsTable";
import { getPointsReport } from "./../../redux/actions/pointsActions";

const AdminView = ({ user, points, onChange, getPointsReport }) => {
  const [semester, setSemester] = useState("2020spring");

  useEffect(() => {
    getPointsReport(semester);
    //eslint-disable-next-line
  }, [semester]);

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
            <AdminPointsTable
              points={points}
              semester={semester}
              onChange={(semester) => setSemester(semester)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  points: state.points.points,
});

AdminView.propTypes = {
  user: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  getPointsReport: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getPointsReport })(AdminView);
