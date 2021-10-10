import $ from "jquery";
import "./AdminView.css";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AdminPointsTable from "./AdminPointsTable";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getPointsReport } from "./../../redux/actions/pointsActions";

const AdminView = ({ user, points, onChange, getPointsReport }) => {
  const [semester, setSemester] = useState("2020spring");
  const [context, setContext] = useState("");

  useEffect(() => {
    getPointsReport(semester);
    //eslint-disable-next-line
  }, [semester]);

  return (
    <div className="entire-pg">
      <div id="header-bar">
        <div className="main-header">POINTS</div>
        <div id="add-edit-box" className="to-member">
          <div className="dropdown">
            <a
              href="/points/addpoints"
              className="btn btn-secondary btn-small active"
              id="addButton"
              role="button"
              aria-pressed="true"
            >
              ADD
            </a>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-secondary btn-small active"
              id="toMemberButton"
              aria-pressed="true"
              onClick={() => onChange()}
            >
              To Member View
            </button>
          </div>
        </div>
      </div>
      <div id="points-display-container">
        <div id="admin-header-title">
          <div>
            {(user.preferredName
              ? user.preferredName
              : user.firstName) +
              " " +
              user.lastName}
            's Admin Points Summary
          </div>
          <div className="input-group">
            <input
              type="text"
              id="search-content"
              className="form-control"
              placeholder="Input Member Name"
              aria-label="Input Member Name"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button
                className="input-group-text"
                id="basic-addon2"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setContext(null);
                  $("#search-content")[0].value = "";
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="input-group-append">
              <button
                className="input-group-text"
                id="basic-addon2"
                style={{ cursor: "pointer" }}
                onClick={() => setContext($("#search-content")[0].value)}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div id="user-table">
          <AdminPointsTable
            points={points}
            context={context}
            semester={semester}
            onChange={(semester) => setSemester(semester)}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  points: state.points.points,
});

AdminView.propTypes = {
  user: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  getPointsReport: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getPointsReport })(AdminView);
