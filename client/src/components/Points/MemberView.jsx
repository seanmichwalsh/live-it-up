import React from "react";
import PropTypes from "prop-types";

export const MemberView = ({ title, header, details }) => {
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
        {/* <div id="mainPG"> */}
        <div id="points-display">
          <div id="display-header">{title}</div>
          <div id="user-table">
            <table data-toggle="table" className="table table-bordered">
              <thead>{header}</thead>
              <tbody>{details}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

MemberView.propTypes = {
  title: PropTypes.object.isRequired,
  header: PropTypes.object.isRequired,
  details: PropTypes.array.isRequired,
};

export default MemberView;
