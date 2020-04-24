import React, { useEffect } from "react";
import "./Points.css";
import { PropTypes } from "prop-types";
import { getUser } from "../../redux/actions/userActions";
import { connect } from "react-redux";
import MemberView from "./MemberView";
import AdminView from "./AdminView";

const Points = ({ user, getUser }) => {
  const tempUser = "zkang35"; // Not required once user works (getme api call)
  const isAdmin = false; // Not required once user works (getme api call)

  useEffect(() => {
    getUser(tempUser);
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      {isAdmin ? (
        <AdminView />
      ) : (
        <MemberView user={user} tempUser={tempUser} />
      )}
    </div>
  );
};

Points.propTypes = {
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  userPointDetails: state.points.userPointDetails,
  pointsReport: state.points.pointsReport,
});

export default connect(mapStateToProps, {
  getUser,
})(Points);
