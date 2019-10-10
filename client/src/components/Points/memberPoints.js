import React, { useEffect } from 'react';
import $ from 'jquery';
import './Points.css';
import points from "./testNew.json";
import { PropTypes } from "prop-types";
import { getUser } from "../../redux/actions/userActions";
import { getPoints } from "../../redux/actions/pointsActions";
import { connect } from "react-redux";

const Points = ({ getUser, user, getPoints }) => {
  useEffect(() => {
    getUser();
    getPoints();
  }, [user]);

  var datas = points;

  let pointsDetails = Object.keys(datas).map((username, index) => 
        <tr className="tr-className-1" data-title="bootstrap table">
          <td>{username}</td>
          <td className="td-className-1" data-title="bootstrap table">
            <a className="date">{datas[username].semester}</a>
          </td>
          <td classname="group1">{datas[username].group1}</td>
          <td className="group2">{datas[username].group2}</td>
          <td className="group3">{datas[username].group3}</td>
          <td className="committeeEvents">{datas[username].committeePoints}</td>
          <td className="adHoc">{datas[username].adHoc}</td>
          <td className="officeHours">{datas[username].officeHours}</td>
          <td className="teasering">{datas[username].teasering}</td>
        </tr>
        );



    return (
      <div className="directory-page">
        <div className="top-bar">
          <header id="header">
            <div id="header-text">POINTS</div>
          <div id="add-edit-box">
            <div className="dropdown">
              <a
                href="/addpoints"
                class="btn btn-secondary btn-small active"
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
                <div id="display-header">{user.firstName} Total Points: </div>
                <div id="user-table">
                  <table data-toggle="table" className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Member</th>
                          <th>Semester</th>
                          <th>Category 1 Points</th>
                          <th>Category 2 Points</th>
                          <th>Category 3 Points</th>
                          <th>Committee Points</th>
                          <th>Ad Hoc</th>
                          <th>Office Hours</th>
                          <th>Teasering</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pointsDetails}
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
  user: PropTypes.object.isRequired,
  getPoints: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  current: state.current,
  points: state.points
});

export default connect(
  mapStateToProps,
  { getUser, getPoints }
)(Points);
