import React, { useEffect } from "react";
import User from "./User";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUsers } from "../../redux/actions/userActions";
import "./Directory.css";

const Directory = ({ getUsers, users }) => {
  useEffect(() => {
    getUsers();
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
                <a className="dropdown-item" href="/adduser">
                  Add User
                </a>
                <a className="dropdown-item" href="/addcommittee">
                  Add Committee
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="committee-name">TECHNOLOGY</div>

      <div className="userLists">
        {users.map(user => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

Directory.propTypes = {
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  users: state.user.users
});

export default connect(
  mapStateToProps,
  { getUsers }
)(Directory);
