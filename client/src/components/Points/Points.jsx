import React, { useEffect, useState } from "react";
//import $ from "jquery";
import "./Points.css";
//import pointsJson from "./testNew.json";
//import detailsJson from "./pointsDetail.json";
import { PropTypes } from "prop-types";
import { getUser } from "../../redux/actions/userActions";
import {
  getPointsReport,
  getUserReport,
  getPointsDetailForUser,
  getUserPointsReport
} from "../../redux/actions/pointsActions";
import { connect } from "react-redux";
import RequirementPoints from "./RequirementPoints";

const Points = ({
  getUser,
  user,
  userPointDetails,
  getPointsDetailForUser,
  getPointsReport,
  getUserPointsReport,
  //getUserReport,
  points,
  pointsReport

}) => {
  const [userChange, setUserChange] = useState({
    semester: "202002",
    adminStatus: true

  });

  const tempUser = "mwoodson7"; // Not required once user works (getme api call)
  const isAdmin = true; // Not required once user works (getme api call)

  useEffect(() => {
    getUser(tempUser); 
    if (user !== null && user !== undefined) {
      setUserChange({
        semester: userChange.semester,
        // adminStatus: user.isAdmin // Add back when user is functional
        adminStatus: isAdmin // Used for testing purposes until user is connected
      });
    }
    if (userChange.adminStatus) {
      getPointsReport(userChange.semester);
    } else {
      getPointsDetailForUser(tempUser);
      getUserPointsReport(userChange.semester, tempUser);
    }
    //eslint-disable-next-line
  }, [userChange.semester]);

  var detailData = userPointDetails;
  var title = null;
  var header = null;
  var details = null;

    title = <div>Member Points Summary</div>;

    details = Object.keys(points).map((username, index) => (
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
        <td className="committeeEvents">{points[username].committeeEvents}</td>
        <td className="plc">{points[username].plc}</td>
        <td className="aux">{points[username].aux}</td>
        <td className="officeHours">{points[username].officeHours}</td>
        <td className="committeeMeetings">
          {points[username].committeeMeetings}
        </td>
      </tr>
    ));
    header = (
      <tr>
        <th>Member</th>
        <th>
          Semester
          <div className="dropdown">
            <div>
              <select
                onChange={e =>
                  setUserChange({
                    adminStatus: userChange.adminStatus,
                    semester: e.target.value
                  })
                }
                value={userChange.semester}
              >
                <option value=""></option>
                <option value="201908">Fall 2019</option>
                <option value="202002">Spring 2020</option>
                <option value="202005">Summer 2020</option>
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
    );
  // }

  var memberView = (
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
        {/* <div id="mainPG"> */}
        <div id="points-display">
          <div id="display-header">{title}</div>
          <div id="user-table">
            <table data-toggle="table" className="table table-bordered">
              <thead>{header}</thead>
              <tbody>{details}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      {user != null && user != undefined && !userChange.adminStatus && <RequirementPoints />}
      {user != null && user != undefined && userChange.adminStatus && memberView}
    </div>
  );

};

Points.propTypes = {
  getUser: PropTypes.func.isRequired,
  // user: PropTypes.object.isRequired,
  points: PropTypes.array.isRequired,
  getPointsReport: PropTypes.func.isRequired,
  getUserPointsReport: PropTypes.func.isRequired,
  pointsReport: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user.user,
  points: state.points.points,
  userPointDetails: state.points.userPointDetails,
  pointsReport: state.points.pointsReport
});

export default connect(mapStateToProps, {
  getUser,
  getPointsReport,
  getUserReport,
  getPointsDetailForUser,
  getUserPointsReport
})(Points);
