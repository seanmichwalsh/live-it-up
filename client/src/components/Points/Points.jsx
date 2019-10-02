import React, { useEffect } from 'react';
import $ from 'jquery';
import './Points.css';
import points from "./test.json";
import { PropTypes } from "prop-types";
import { getUser } from "../../redux/actions/userActions";
import { getPoints } from '../../redux/actions/pointsActions';
import { connect } from "react-redux";

const Points = ({ getUser , user, getPoints }) => {
    
  useEffect(() => {
      getUser();
      getPoints();
    }, [user]);

    return (
      <div className="directory-page">
        <div className="top-bar">
          <header id="header">
            <div id="header-text">POINTS</div>

            <div id="add-edit-box">
              <div className="dropdown">
              <a href="/addpoints"
                class="btn btn-secondary btn-small active"
                role="button"
                aria-pressed="true">
                  ADD
              </a>
              </div>
            </div>
          </header>
        </div>
        <div id="mainPG">
            <div id="points-display">
                <div id="display-header">{user.firstName} Total Points: </div>
                <div id="user-table">
                  <table data-toggle="table" className="table table-bordered">
                      <thead>
                        <tr>
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
                        {/* map user points to specific heading */}
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
  );
};

Points.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  getPoints: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  user: state.user,
  current: state.current,
  points: state.points
});

export default connect(
  mapStateToProps,
  { getUser, getPoints }
)(Points);