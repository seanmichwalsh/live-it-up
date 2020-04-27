import React, { useEffect } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { getCurrentUserID } from "../../redux/actions/userActions";
import MemberView from "./MemberView";
import AdminView from "./AdminView";

const Points = ({ user, getCurrentUserID }) => {
  useEffect(() => {
    getCurrentUserID();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      {user !== null &&
        user !== undefined &&
        (user.isAdmin ? (
          <AdminView user={user} />
        ) : (
          <MemberView user={user} />
        ))}
    </div>
  );
};

Points.propTypes = {
  user: PropTypes.object,
  getCurrentUserID: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps, {
  getCurrentUserID,
})(Points);
