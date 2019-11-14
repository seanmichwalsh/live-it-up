import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
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
