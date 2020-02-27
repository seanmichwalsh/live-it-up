import React, { useState, useEffect } from "react";
import $ from "jquery";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./RequirementPoints.css";
import { getUserPointsReport } from "../../redux/actions/pointsActions";
import { getUser } from "../../redux/actions/userActions";

const RequirementPoints = ({ pointsReport, getUserPointsReport, user, getUser }) => {
  	const [userChange, setUserChange] = useState({
    	semester: "201908",
    	adminStatus: false,
  	});

  	const tempUser = "mwoodson7";

  	useEffect(() => {
    	getUser(tempUser);
	    getUserPointsReport(userChange.semester, tempUser);

	}, [pointsReport]);

	var requirementPoints = pointsReport;

	var group1Points, group2Points, group3Points, plc = null;
	if (requirementPoints != null) {
		var group1Points = requirementPoints[tempUser].group1;
		var group2Points = requirementPoints[tempUser].group2;
		var group3Points = requirementPoints[tempUser].group3;
		var plcPoints = requirementPoints[tempUser].plc;
	}
	var group1 = null;
	var group2 = null;
	var group3 = null;
	var plc = null;

	/* Point requirements
	
	Change these values if the points requirements ever change
	*/
	var group1Goal = 2;
	var group2Goal = 1;
	var group3Goal = 2;
	var plcGoal = 1;


	if (requirementPoints != null) {
		if (group1Points <= group1Goal - 2) {
			group1 = <div className="red-block">
						<h4>Group 1</h4>
						<p>Not Satisfied</p>
					</div>
		} else if (group1Points == group1Goal - 1) {
			group1 = <div className="yellow-block">
						<h4>Group 1</h4>
						<p>1 Hour Remaining</p>
					</div>
		} else {
			group1 = <div className="green-block">
						<h4>Group 1</h4>
						<p>Satisfied - {group1Points} Hours</p>
					</div>
		}

		if (group2Points <= group2Goal - 1) {
			group2 = <div className="red-block">
						<h4>Group 2</h4>
						<p>Not Satisfied</p>
					</div>
		} else {
			group2 = <div className="green-block">
						<h4>Group 2</h4>
						<p>Satisfied - {group2Points} Hour(s)</p>
					</div>
		}

		if (group3Points <= group3Goal - 2) {
			group3 = <div className="red-block">
						<h4>Group 3</h4>
						<p>Not Satisfied</p>
					</div>
		} else if (group3Points == group3Goal - 1) {
			group3 = <div className="yellow-block">
						<h4>Group 3</h4>
						<p>1 Hour Remaining</p>
					</div>
		} else {
			group3 = <div className="green-block">
						<h4>Group 3</h4>
						<p>Satisfied - {group3Points} Hours</p>
					</div>
		}

		if (plcPoints < plcGoal) {
			plc = <div className="red-block">
					<h4>PLC</h4>
					<p>Not Satisfied</p>
				</div>
		} else {
			plc = <div className="green-block">
					<h4>PLC</h4>
					<p>Satisfied - {plcPoints} Event(s)</p>
				</div>
		}
	}




  	return (
  		<table>
            <tr>
                <td>{requirementPoints !== null && requirementPoints !== undefined && group1}</td>
            </tr>
            <tr>
              	<td>{requirementPoints !== null && requirementPoints !== undefined && group2}</td>
            </tr>
            <tr>
              	<td>{requirementPoints !== null && requirementPoints !== undefined && group3}</td>
            </tr>
            <tr>
              	<td>{requirementPoints !== null && requirementPoints !== undefined && plc}</td>
            </tr>
        </table>
  	);



};


RequirementPoints.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  pointsReport: PropTypes.object.isRequired,
  getUserPointsReport: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user.user,
  pointsReport: state.points.pointsReport
});

export default connect(
  mapStateToProps,
  { getUser, getUserPointsReport }
)(RequirementPoints);