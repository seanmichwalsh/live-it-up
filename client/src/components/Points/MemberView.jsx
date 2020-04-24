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
  //eslint-disable-next-line
  const [semester, setSemester] = useState("2020spring");

  useEffect(() => {
    getPointsReportForUser(semester, tempUser);
    //eslint-disable-next-line
  }, [semester]);

  var group1Points, group2Points, group3Points, plcPoints;
  if (pointsReport !== null && pointsReport !== undefined) {
    // console.log(pointsReport)
    group1Points = pointsReport[tempUser].group1;
    group2Points = pointsReport[tempUser].group2;
    group3Points = pointsReport[tempUser].group3;
    plcPoints = pointsReport[tempUser].plc;
  }
  var group1, group2, group3, plc;

  /* Point requirements
	Change these values if the points requirements ever change
	*/
  var group1Goal = 2;
  var group2Goal = 1;
  var group3Goal = 2;
  var plcGoal = 1;

  if (pointsReport !== null) {
    if (group1Points <= group1Goal - 2) {
      group1 = (
        <div className="red-block">
          <h4>Group 1</h4>
          <p>Not Satisfied</p>
        </div>
      );
    } else if (group1Points === group1Goal - 1) {
      group1 = (
        <div className="yellow-block">
          <h4>Group 1</h4>
          <p>1 Hour Remaining</p>
        </div>
      );
    } else {
      group1 = (
        <div className="green-block">
          <h4>Group 1</h4>
          <p>Satisfied - {group1Points} Hours</p>
        </div>
      );
    }

    if (group2Points <= group2Goal - 1) {
      group2 = (
        <div className="red-block">
          <h4>Group 2</h4>
          <p>Not Satisfied</p>
        </div>
      );
    } else {
      group2 = (
        <div className="green-block">
          <h4>Group 2</h4>
          <p>Satisfied - {group2Points} Hour(s)</p>
        </div>
      );
    }

    if (group3Points <= group3Goal - 2) {
      group3 = (
        <div className="red-block">
          <h4>Group 3</h4>
          <p>Not Satisfied</p>
        </div>
      );
    } else if (group3Points === group3Goal - 1) {
      group3 = (
        <div className="yellow-block">
          <h4>Group 3</h4>
          <p>1 Hour Remaining</p>
        </div>
      );
    } else {
      group3 = (
        <div className="green-block">
          <h4>Group 3</h4>
          <p>Satisfied - {group3Points} Hours</p>
        </div>
      );
    }

    if (plcPoints < plcGoal) {
      plc = (
        <div className="red-block">
          <h4>PLC</h4>
          <p>Not Satisfied</p>
        </div>
      );
    } else {
      plc = (
        <div className="green-block">
          <h4>PLC</h4>
          <p>Satisfied - {plcPoints} Event(s)</p>
        </div>
      );
    }
  }

  return (
    <table>
      <tbody>
        <tr>
          <td>
            {pointsReport !== null && pointsReport !== undefined && group1}
          </td>
        </tr>
        <tr>
          <td>
            {pointsReport !== null && pointsReport !== undefined && group2}
          </td>
        </tr>
        <tr>
          <td>
            {pointsReport !== null && pointsReport !== undefined && group3}
          </td>
        </tr>
        <tr>
          <td>{pointsReport !== null && pointsReport !== undefined && plc}</td>
        </tr>
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  userPointDetails: state.points.userPointDetails,
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
