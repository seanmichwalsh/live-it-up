import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPointsReport } from "./../../redux/actions/pointsActions";
import AdminViewItem from "./AdminViewItem";
import "./AdminView.css";

const AdminView = ({ user, tempUser, points, getPointsReport }) => {
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
          <div id="add-edit-box">
            <div className="dropdown">
              <a
                href="/addpoints"
                className="btn btn-secondary btn-small active"
                role="button"
                aria-pressed="true"
              >
                ADD
              </a>
            </div>
          </div>
        </header>
      </div>
      <div id="mainPG">
        <div id="points-display">
          <div id="display-header">
            <div>{tempUser}'s Points Summary</div>
          </div>
          <div id="user-table">
            <table data-toggle="table" className="table table-bordered">
              <thead>
                <tr>
                  <th>Member</th>
                  <th>
                    Semester
                    <div className="dropdown">
                      <div>
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
                    </div>
                  </th>
                  <th>Category 1 Points</th>
                  <th>Category 2 Points</th>
                  <th>Category 3 Points</th>
                  <th>Committee Points</th>
                  <th>PLC</th>
                  <th>Auxilliary Committee</th>
                  <th>Office Hours</th>
                  <th>Committee Meetings</th>
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
  user: PropTypes.object,
  tempUser: PropTypes.string.isRequired,
  points: PropTypes.object.isRequired,
  getPointsReport: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getPointsReport })(AdminView);
