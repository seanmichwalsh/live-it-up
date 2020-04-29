import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { setCurrent } from "./../../redux/actions/userActions";

const User = ({ user, committee, setCurrent }) => {
  return (
    <div className="individualUser">
      <Link to="/edituser" onClick={() => setCurrent(user)}>
        <div>
          {" "}
          <img src={logo} alt={logo} />
        </div>
        <div>Name: {user.lastName + ", " + user.firstName}</div>
        <div>Email: {user.email}</div>
        <div>
          Committee:{" "}
          {committee !== null && committee !== undefined && committee.name}
        </div>
      </Link>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  committee: PropTypes.object.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { setCurrent })(User);
