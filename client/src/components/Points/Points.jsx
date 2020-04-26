import React, { useEffect } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { getUser } from "../../redux/actions/userActions";
import MemberView from "./MemberView";
import AdminView from "./AdminView";

const Points = ({ user, getUser }) => {
  const tempUser = "zkang35"; // Not required once user works (getme api call)
  const isAdmin = true; // Not required once user works (getme api call)

  useEffect(() => {
    getUser(tempUser);
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      {isAdmin ? ( // Change to user.adminStatus once CAS is working
        <AdminView user={user} tempUser={tempUser} />
      ) : (
        <MemberView user={user} tempUser={tempUser} />
      )}
    </div>
  );
};

Points.propTypes = {
  user: PropTypes.object,
  getUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps, {
  getUser,
})(Points);
