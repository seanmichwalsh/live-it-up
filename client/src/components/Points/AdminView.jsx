import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPointsReport } from "./../../redux/actions/pointsActions";

const AdminView = ({ points, getPointsReport }) => {
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
            <div>Member Points Summary</div>
          </div>
          <div id="user-table">
            <table data-toggle="table" className="table table-bordered">
              <thead>
                {Object.keys(points).map((username) => (
                  <tr className="tr-className-1" data-title="bootstrap table">
                    <td>{username}</td>
                    <td className="td-className-1" data-title="bootstrap table">
                      <a className="date" href="/#">
                        {points[username].semester}
                      </a>
                    </td>
                    <td className="group1">{points[username].group1}</td>
                    <td className="group2">{points[username].group2}</td>
                    <td className="group3">{points[username].group3}</td>
                    <td className="committeeEvents">
                      {points[username].committeeEvents}
                    </td>
                    <td className="plc">{points[username].plc}</td>
                    <td className="aux">{points[username].aux}</td>
                    <td className="officeHours">
                      {points[username].officeHours}
                    </td>
                    <td className="committeeMeetings">
                      {points[username].committeeMeetings}
                    </td>
                  </tr>
                ))}
              </thead>
              <tbody>
                {
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
                }
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
  points: PropTypes.object.isRequired,
  getPointsReport: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getPointsReport })(AdminView);
