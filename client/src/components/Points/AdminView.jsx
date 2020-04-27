import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPointsReport } from "./../../redux/actions/pointsActions";
import AdminViewItem from "./AdminViewItem";
import "./AdminView.css";

const AdminView = ({ user, points, getPointsReport, onChange }) => {
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
            <table
              data-toggle="table"
              className="table table-bordered table-hover table-responsive-sm admin-view"
              id="table"
              >
              <thead>
                <tr>
                <th data-field="uid" data-sortable="true">Member</th>
                  <th scope="col">
                    Semester
                    <div className="dropdown">
                      <select
                        onChange={(e) => setSemester(e.target.value)}
                        value={semester}
                      >
                        <option value=""></option>
                        <option value="2019fall">Fall 2019</option>
                        <option value="2020spring">Spring 2020</option>
                        <option value="2020summer">Summer 2020</option>
                      </select>
                    </div>
                  </th>
                  <th data-field="group1" data-sortable="true">Category 1 Points</th>
                  <th data-field="group2" data-sortable="true">Category 2 Points</th>
                  <th data-field="group3" data-sortable="true">Category 3 Points</th>
                  <th data-field="committeeEvents" data-sortable="true">Committee Events</th>
                  <th data-field="plc" data-sortable="true">PLC</th>
                  <th data-field="aux" data-sortable="true">Auxilliary</th>
                  <th data-field="officeHours" data-sortable="true">Office Hours</th>
                  <th data-field="committeeMeetings" data-sortable="true">Committee Meetings</th>
                </tr>
              </thead>
              <tbody>
                  {Object.keys(points).map((username) => (
                    <AdminViewItem
                      points={points}
                      username={username}
                      key={username}
                    />
                  ))}
                </tbody>
            </table>
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
  points: PropTypes.object.isRequired,
  getPointsReport: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getPointsReport })(AdminView);
