import React, { useEffect } from "react";
import logo from "../../images/logo.svg";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getCommittee } from "./../../redux/actions/committeeActions";
import { setCurrent } from "./../../redux/actions/userActions";

const User = ({ user, committee, getCommittee, setCurrent }) => {
  useEffect(() => {
    getCommittee(user.mainCommittee);
  }, []);

  return (
    <div className="individualUser">
      <a href="/edituser" target="_blank" onClick={setCurrent(user)}>
        <div>
          {" "}
          <img src={logo} alt="image" />
        </div>
        <div>Name: {user.lastName + ". " + user.firstName}</div>
        <div>Email: {user.email}</div>
        <div>Committee: {user.mainCommittee}</div>
      </a>
    </div>
  );
};

const mapStateToProps = state => ({
  committee: state.committee.committee
});

User.propTypes = {
  user: PropTypes.object.isRequired,
  committee: PropTypes.array.isRequired,
  getCommittee: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getCommittee, setCurrent }
)(User);
