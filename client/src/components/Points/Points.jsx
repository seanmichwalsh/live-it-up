import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { getCurrentUser } from "../../redux/actions/userActions";
import MemberView from "./MemberView";
import AdminView from "./AdminView";

const Points = ({ user, getCurrentUser }) => {
  const [memberView, setMemberView] = useState(false);

  useEffect(() => {
    getCurrentUser();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="entire-pg">
      {user !== null &&
        user !== undefined &&
        (user.isAdmin && !memberView ? (
          <AdminView user={user} onChange={() => setMemberView(!memberView)} />
        ) : (
          <MemberView user={user} onChange={() => setMemberView(!memberView)} />
        ))}
    </div>
  );
};

Points.propTypes = {
  user: PropTypes.object,
  getCurrentUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps, {
   getCurrentUser,
})(Points);
