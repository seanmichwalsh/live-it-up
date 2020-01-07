import React, { useEffect, useState } from "react";
import $ from "jquery";
import "./Points.css";
//import pointsJson from "./testNew.json";
import detailsJson from "./pointsDetail.json";
import { PropTypes } from "prop-types";
import { getUser } from "../../redux/actions/userActions";
import {
  getPointsReport,
  getUserReport,
  getPointsDetailForUser
} from "../../redux/actions/pointsActions";
import { connect } from "react-redux";

const Points = ({
  getUser,
  user,
  userPointDetails,
  getPointsDetailForUser,
  getPointsReport,
  getUserReport,
  points
}) => {
  const [userChange, setUserChange] = useState({
    semester: "201908",
    adminStatus: false
  });

  useEffect(() => {
    getUser("swalsh385");
    if (user !== null && user !== undefined) {
      setUserChange({
        semester: userChange.semester,
        adminStatus: user.isAdmin
      });
    }
    if (userChange.adminStatus) {
      getPointsReport(userChange.semester);
    } else {
      getPointsDetailForUser("swalsh385");
    }
  }, [userChange.semester]);

  var detailData = userPointDetails;

  var title = null;
  var header = null;
  var details = null;

  //Delete line once admin function is understoof
  // var adminStatus = true;

  if (!userChange.adminStatus) {
    title = (
      <div>
        {user !== null && user !== undefined && user.firstName}'s Total Points:
      </div>
    );

    details = Object.keys(detailData).map((username, index) => (
      <tr className="tr-className-1" data-title="bootstrap table">
        <td className="description">{detailData[username].description}</td>
        <td className="td-className-1" data-title="bootstrap table">
          <a className="date">{detailData[username].date}</a>
        </td>
        <td className="group1">{detailData[username].category}</td>
        <td className="committeeEvents">{detailData[username].points}</td>
      </tr>
    ));
    header = (
      <tr>
        <th>Description</th>
        <th>Date</th>
        <th>Category</th>
        <th>Points</th>
      </tr>
    );
  } else {
    title = <div>Member Points Summary</div>;

    details = Object.keys(points).map((username, index) => (
      <tr className="tr-className-1" data-title="bootstrap table">
        <td>{username}</td>
        <td className="td-className-1" data-title="bootstrap table">
          <a className="date">{points[username].semester}</a>
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
  }

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
        <div id="points-sidebar">
          <div id="req-header">REQUIREMENTS</div>
          {/* depending on calculations of each point category
                    display different color boxes to determine if member
                    is in good standing... follow mock-ups */}
        </div>
      </div>
    </div>
  );
  // }
};

Points.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  points: PropTypes.array.isRequired,
  getPointsReport: PropTypes.func.isRequired,
  getUserReport: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user.user,
  points: state.points.points,
  userPointDetails: state.points.userPointDetails
});

export default connect(mapStateToProps, {
  getUser,
  getPointsReport,
  getUserReport,
  getPointsDetailForUser
})(Points);
