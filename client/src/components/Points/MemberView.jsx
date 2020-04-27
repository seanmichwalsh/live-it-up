import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getPointsReportForUser,
  getPointsDetailForUser,
} from "../../redux/actions/pointsActions";
import MemberViewItem from "./MemberViewItem";

import "react-toastify/dist/ReactToastify.css";
import "./MemberView.css";

const MemberView = ({
  onChange,
  user,
  pointsReport,
  getPointsReportForUser,
  userPointDetails,
  getPointsDetailForUser,
}) => {
  const [semester, setSemester] = useState("2020spring");

  useEffect(() => {
    getPointsDetailForUser(user.uid);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    getPointsReportForUser(semester, user.uid);
    //eslint-disable-next-line
  }, [semester]);

  if (
    pointsReport !== null &&
    pointsReport !== undefined &&
    pointsReport[user.uid] !== undefined
  ) {
    var group1Points = pointsReport[user.uid].group1;
    var group2Points = pointsReport[user.uid].group2;
    var group3Points = pointsReport[user.uid].group3;
    var plcPoints = pointsReport[user.uid].plc;
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
      pointsReport[user.uid] === undefined
    ) {
      group1 = (
        <div className="red-block">
          <div className="pr-description">
            <h4>Group 1</h4>
            <span>Not Satisfied</span>
          </div>
        </div>
      );
    } else if (group1Points === group1Goal - 1) {
      group1 = (
        <div className="yellow-block">
          <div className="pr-description">
            <h4>Group 1</h4>
            <span>1 Hour Remaining</span>
          </div>
        </div>
      );
    } else {
      group1 = (
        <div className="green-block">
          <div className="pr-description">
            <h4>Group 1</h4>
            <span>Satisfied - {group1Points} Hour(s)</span>
          </div>
        </div>
      );
    }

    if (
      group2Points <= group2Goal - 1 ||
      pointsReport[user.uid] === undefined
    ) {
      group2 = (
        <div className="red-block">
          <div className="pr-description">
            <h4>Group 2</h4>
            <span>Not Satisfied</span>
          </div>
        </div>
      );
    } else {
      group2 = (
        <div className="green-block">
          <div className="pr-description">
            <h4>Group 2</h4>
            <span>Satisfied - {group2Points} Hour(s)</span>
          </div>
        </div>
      );
    }

    if (
      group3Points <= group3Goal - 2 ||
      pointsReport[user.uid] === undefined
    ) {
      group3 = (
        <div className="red-block">
          <div className="pr-description">
            <h4>Group 3</h4>
            <span>Not Satisfied</span>
          </div>
        </div>
      );
    } else if (group3Points === group3Goal - 1) {
      group3 = (
        <div className="yellow-block">
          <div className="pr-description">
            <h4>Group 3</h4>
            <span>1 Hour Remaining</span>
          </div>
        </div>
      );
    } else {
      group3 = (
        <div className="green-block">
          <div className="pr-description">
            <h4>Group 3</h4>
            <span>Satisfied - {group3Points} Hour(s)</span>
          </div>
        </div>
      );
    }

    if (plcPoints < plcGoal || pointsReport[user.uid] === undefined) {
      plc = (
        <div className="red-block">
          <div className="pr-description">
            <h4>PLC</h4>
            <span>Not Satisfied</span>
          </div>
        </div>
      );
    } else {
      plc = (
        <div className="green-block">
          <div className="pr-description">
            <h4>PLC</h4>
            <span>Satisfied - {plcPoints} Event(s)</span>
          </div>
        </div>
      );
    }
  }

  return (
    <div id="entire-page">
      <div className="main-page">
        <div id="top-info">
          <div id="name">
            {user !== undefined &&
              user !== null &&
              user.firstName + " " + user.lastName}
            's Points <span id="text-dropdown">Report for {"   "}</span>
            <div id="dropdownmember-view">
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
          </div>
          {user.isAdmin ? (
            <div id="add-edit-box" className="to-admin">
              <div className="dropdown">
                <button
                  className="btn btn-secondary btn-small active"
                  id="addButton"
                  aria-pressed="true"
                  onClick={() => onChange()}
                >
                  To Admin View
                </button>
              </div>
            </div>
          ) : null}
        </div>
        <div id="point-table">
          <table className="table table-bordered table-hover table-responsive-sm">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Points</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {(
                userPointDetails !== undefined &&
                userPointDetails !== null &&
                userPointDetails
              ).map((event) => (
                <MemberViewItem event={event} key={event._id} />
              ))}
            </tbody>
          </table>
        </div>
        <table id="rq-table">
          <thead id="panelHeader">
            <tr>
              <th>Requirements</th>
            </tr>
          </thead>
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
  pointsReport: PropTypes.object,
  getPointsReportForUser: PropTypes.func.isRequired,
  userPointDetails: PropTypes.array.isRequired,
  getPointsDetailForUser: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  getPointsReportForUser,
  getPointsDetailForUser,
})(MemberView);
