import React, { useEffect } from 'react';
import $ from 'jquery';
import './Points.css';
import points from "./testNew.json";
import details from "./pointsDetail.json";
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
  var detailData = details.pointsDetail;

  let userDetails = Object.keys(detailData).map((username, index) => 
        <tr className="tr-className-1" data-title="bootstrap table">
          <td className="description">{detailData[username].description}</td>
          <td className="td-className-1" data-title="bootstrap table">
            <a className="date">{detailData[username].date}</a>
          </td>
          <td classname="group1">{detailData[username].category}</td>
          <td className="committeeEvents">{detailData[username].points}</td>
        </tr>
        );

  let userHeader = <tr>
                      <th>Description</th>
                      <th>Date</th>
                      <th>Category</th>
                      <th>Points</th>
                    </tr>

  let orgDetails = Object.keys(datas).map((username, index) => 
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
  let orgHeader =  <tr>
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
                        {userHeader}
                      </thead>
                      <tbody>
                        {userDetails}
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
