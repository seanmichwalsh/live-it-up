import React, { useEffect , useState } from 'react';
import $ from 'jquery';
import './Points.css';
import pointsJson from "./testNew.json";
import detailsJson from "./pointsDetail.json";
import { PropTypes } from "prop-types";
import { getUser } from "../../redux/actions/userActions";
import { getPointsReport, getUserReport } from "../../redux/actions/pointsActions";
import { connect } from "react-redux";

const Points = ({ getUser, user, getPointsReport, getUserReport, points }) => {
  const [semester, setSemester] = useState("");

  useEffect(() => {
    getUser("swalsh385");
    //console.log(user);
    if (false) {
      getUserReport(semester, "swalsh385");
      // console.log("UserReport");
    } else {
      getPointsReport(semester);
      // console.log("SemesterReport");
    }
  }, [semester]);

  // if (user == null) {
  //   getUser("swalsh385");
  //   console.log("Called function");
  // }
  //console.log(user);
  var detailData = detailsJson.pointsDetail;
  //var adminStatus = user.isAdmin;

  var header = null;
  var details = null;

  //Delete line once admin function is understoof
  var adminStatus = true;

  if (!adminStatus) {

    details = Object.keys(detailData).map((username, index) => 
          <tr className="tr-className-1" data-title="bootstrap table">
            <td className="description">{detailData[username].description}</td>
            <td className="td-className-1" data-title="bootstrap table">
              <a className="date">{detailData[username].date}</a>
            </td>
            <td className="group1">{detailData[username].category}</td>
            <td className="committeeEvents">{detailData[username].points}</td>
          </tr>
          );
    header =  <tr>
                <th>Description</th>
                <th>Date</th>
                <th>Category</th>
                <th>Points</th>
              </tr>
  } else {

      details = Object.keys(points).map((username, index) => 
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
              <td className="committeeMeetings">{points[username].committeeMeetings}</td>
            </tr>
            );
      header =  <tr>
                  <th>Member</th>
                  <th>Semester
                    <div className="dropdown">
                      <div>
                        <select 
                            onChange={e => setSemester(e.target.value)} 
                            value={semester}
                        >
                          <option value=""></option>
                          <option value="2019fall">Fall 2019</option>
                          <option value="2019spring">Spring 2019</option>
                          <option value="2018fall">Fall 2018</option>
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
        <div id="mainPG">
            <div id="points-display">
                <div id="display-header">{user !== null && user !== undefined && user.firstName}'s Total Points: </div>
                <div id="user-table">
                  <table data-toggle="table" className="table table-bordered">
                      <thead>
                        {header}
                      </thead>
                      <tbody>
                        {details}
                      </tbody>
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
    </div>
  );
};

Points.propTypes = {
  getUser: PropTypes.func.isRequired,
  //user: PropTypes.object.isRequired,
  getPointsReport: PropTypes.func.isRequired,
  getUserReport: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user.user,
  points: state.point.points
});

export default connect(
  mapStateToProps,
  { getUser, getPointsReport, getUserReport }
)(Points);
