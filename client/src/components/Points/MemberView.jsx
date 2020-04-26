import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import "./MemberView.css";
import { connect } from "react-redux";
import { getPointsReportForUser } from "../../redux/actions/pointsActions";

const MemberView = ({
  user, // Will be used when CAS is done
  pointsReport,
  getPointsReportForUser,
  tempUser,
}) => {
  const [semester, setSemester] = useState("2020spring");

  useEffect(() => {
    getPointsReportForUser(semester, tempUser);
    //eslint-disable-next-line
  }, [semester]);

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
            <a>Satisfied - {group1Points} Hours</a>
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
            <a>Satisfied - {group3Points} Hours</a>
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
    <table className="table">
      <div className="dropdown member-view">
        {tempUser}'s Points Report for{" "}
        <select onChange={(e) => setSemester(e.target.value)} value={semester}>
          <option value=""></option>
          <option value="2019fall">Fall 2019</option>
          <option value="2020spring">Spring 2020</option>
          <option value="2020summer">Summer 2020</option>
        </select>
      </div>
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
  );
};

const mapStateToProps = (state) => ({
  pointsReport: state.points.pointsReport,
});

MemberView.propTypes = {
  user: PropTypes.object.isRequired,
  pointsReport: PropTypes.object.isRequired,
  getPointsReportForUser: PropTypes.func.isRequired,
  tempUser: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, {
  getPointsReportForUser,
})(MemberView);
