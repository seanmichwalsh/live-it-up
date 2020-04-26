import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUser } from "../../redux/actions/userActions";
import { getPointsReportForUser, getPointsDetailForUser} from "../../redux/actions/pointsActions";
import MemberViewItem from "./MemberViewItem";

import "react-toastify/dist/ReactToastify.css";
import "./MemberView.css";

const MemberView = ({
  user, // Will be used when CAS is done
  getUser,
  pointsReport,
  getPointsReportForUser,
  userPointDetails,
  getPointsDetailForUser,
  tempUser,
}) => {
  const [semester, setSemester] = useState("2020spring");

  useEffect(() => {
    getUser(tempUser);
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    getPointsReportForUser(semester, tempUser);
    //eslint-disable-next-line
  }, [semester]);

  useEffect(() => {
    getPointsDetailForUser(tempUser);
    //eslint-disable-next-line
  }, []);

  if (
    pointsReport !== null &&
    pointsReport !== undefined &&
    pointsReport[tempUser] !== undefined
  ) {
    var group1Points = pointsReport[tempUser].group1;
    var group2Points = pointsReport[tempUser].group2;
    var group3Points = pointsReport[tempUser].group3;
    var plcPoints = pointsReport[tempUser].plc;  
  }

  /* 
  Point requirements
	Change these values if the points requirements ever change
	*/
  var group1Goal = 2;
  var group2Goal = 1;
  var group3Goal = 2;
  var plcGoal = 1;

  var group1, group2, group3, plc;

  if (pointsReport !== null && pointsReport !== undefined) {
    if (
      group1Points <= group1Goal - 2 ||
      pointsReport[tempUser] === undefined
    ) {
      group1 = (
        <div className="red-block">
          <div className="pr-description">
            <h4>Group 1</h4>
            <a>Not Satisfied</a>
          </div>
        </div>
      );
    } else if (group1Points === group1Goal - 1) {
      group1 = (
        <div className="yellow-block">
          <div className="pr-description">
            <h4>Group 1</h4>
            <a>1 Hour Remaining</a>
          </div>
        </div>
      );
    } else {
      group1 = (
        <div className="green-block">
          <div className="pr-description">
            <h4>Group 1</h4>
            <a>Satisfied - {group1Points} Hour(s)</a>
          </div>
        </div>
      );
    }

    if (
      group2Points <= group2Goal - 1 ||
      pointsReport[tempUser] === undefined
    ) {
      group2 = (
        <div className="red-block">
          <div className="pr-description">
            <h4>Group 2</h4>
            <a>Not Satisfied</a>
          </div>
        </div>
      );
    } else {
      group2 = (
        <div className="green-block">
          <div className="pr-description">
            <h4>Group 2</h4>
            <a>Satisfied - {group2Points} Hour(s)</a>
          </div>
        </div>
      );
    }

    if (
      group3Points <= group3Goal - 2 ||
      pointsReport[tempUser] === undefined
    ) {
      group3 = (
        <div className="red-block">
          <div className="pr-description">
            <h4>Group 3</h4>
            <a>Not Satisfied</a>
          </div>
        </div>
      );
    } else if (group3Points === group3Goal - 1) {
      group3 = (
        <div className="yellow-block">
          <div className="pr-description">
            <h4>Group 3</h4>
            <a>1 Hour Remaining</a>
          </div>
        </div>
      );
    } else {
      group3 = (
        <div className="green-block">
          <div className="pr-description">
            <h4>Group 3</h4>
            <a>Satisfied - {group3Points} Hour(s)</a>
          </div>
        </div>
      );
    }

    if (plcPoints < plcGoal || pointsReport[tempUser] === undefined) {
      plc = (
        <div className="red-block">
          <div className="pr-description">
            <h4>PLC</h4>
            <a>Not Satisfied</a>
          </div>
        </div>
      );
    } else {
      plc = (
        <div className="green-block">
          <div className="pr-description">
            <h4>PLC</h4>
            <a>Satisfied - {plcPoints} Event(s)</a>
          </div>
        </div>
      );
    }
  }

  return (
    <div id="entire-page">
      <div className="main-page">
      <div id="point-table">
        <div id="top-info">
          <div id="name">{user !== undefined && user !== null && user.firstName + " " + user.lastName}'s Points</div>
          <div className="dropdownmember-view">
            Report for{"  "}
            <select onChange={(e) => setSemester(e.target.value)} value={semester}>
              <option value=""></option>
              <option value="2019fall">Fall 2019</option>
              <option value="2020spring">Spring 2020</option>
              <option value="2020summer">Summer 2020</option>
            </select>
          </div>
        </div>
          <table
            className="table table-bordered table-hover"
          >
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Points</th>
              <th scope="col">Category</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {(userPointDetails !== undefined && userPointDetails !== null && userPointDetails).map((event) => (
              <MemberViewItem
                event={event}
              />
            ))}
          </tbody>
        </table>
      </div>
      <table id="rq-table">
        <div id="panelHeader">Requirements</div>
        <tbody>
          <tr>
            <td className="member-view-td">
              {pointsReport !== null &&
                pointsReport !== undefined &&
                pointsReport !== {} &&
                group1}
            </td>
          </tr>
          <tr>
            <td className="member-view-td">
              {pointsReport !== null &&
                pointsReport !== undefined &&
                pointsReport !== {} &&
                group2}
            </td>
          </tr>
          <tr>
            <td className="member-view-td">
              {pointsReport !== null &&
                pointsReport !== undefined &&
                pointsReport !== {} &&
                group3}
            </td>
          </tr>
          <tr>
            <td className="member-view-td">
              {pointsReport !== null &&
                pointsReport !== undefined &&
                pointsReport !== {} &&
                plc}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  pointsReport: state.points.pointsReport,
  userPointDetails: state.points.userPointDetails,
});

MemberView.propTypes = {
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  pointsReport: PropTypes.object.isRequired,
  getPointsReportForUser: PropTypes.func.isRequired,
  userPointDetails: PropTypes.object.isRequired,
  getPointsDetailForUser: PropTypes.func.isRequired,
  tempUser: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, {
  getUser, getPointsReportForUser, getPointsDetailForUser
})(MemberView);
