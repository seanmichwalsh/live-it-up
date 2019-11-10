import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getCommittee } from "./../../redux/actions/committeeActions";
import { setCurrent } from "./../../redux/actions/userActions";

const User = ({ user, committee, getCommittee, setCurrent }) => {
  useEffect(() => {
    getCommittee(user.mainCommittee);
  }, [user.mainCommittee]);

  return (
    <div className="individualUser">
      <Link to="/edituser" onClick={() => setCurrent(user)}>
        <div>
          {" "}
          <img src={logo} alt={logo} />
        </div>
        <div>Name: {user.lastName + ", " + user.firstName}</div>
        <div>Email: {user.email}</div>
        <div>Committee: {committee !== null && committee.name}</div>
      </Link>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  committee: PropTypes.object.isRequired,
  getCommittee: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  committee: state.committee.committee
});

export default connect(
  mapStateToProps,
  { getCommittee, setCurrent }
)(User);
