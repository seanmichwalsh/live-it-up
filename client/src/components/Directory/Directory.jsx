import React, { useEffect } from "react";
import User from "./User";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUsers } from "../../redux/actions/userActions";
import { Link } from "react-router-dom";
import "./Directory.css";
import { getCommittees } from "./../../redux/actions/committeeActions";

const Directory = ({ getUsers, users, getCommittees, committees }) => {
  useEffect(() => {
    getUsers();
    getCommittees();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="directory-page">
      <div className="top-bar">
        <header id="header">
          <div id="header-text">DIRECTORY</div>

          <div id="add-edit-box">
            <div className="dropdown">
              <button
                className="btn btn-secondary btn-small dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ADD
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link className="dropdown-item" to="/adduser">
                  Add User
                </Link>
                <Link className="dropdown-item" to="/addcommittee">
                  Add Committee
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="userLists">
        {users.map(user => (
          <User
            key={user._id}
            user={user}
            committee={
              committees !== undefined &&
              committees !== null &&
              committees.filter(
                committee => committee._id === user.mainCommittee
              )[0]
            }
          />
        ))}
      </div>
    </div>
  );
};

Directory.propTypes = {
  getUsers: PropTypes.func.isRequired,
  getCommittees: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  committees: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  users: state.user.users,
  committees: state.committee.committees
});

export default connect(mapStateToProps, { getUsers, getCommittees })(Directory);
