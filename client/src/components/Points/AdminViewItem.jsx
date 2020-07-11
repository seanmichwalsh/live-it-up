import React from "react";
import PropTypes from "prop-types";
import "./AdminViewItem.css";

const AdminViewItem = ({ points, username }) => {
  return (
    <tr className="tr-className-1" data-title="bootstrap table">
      <td>
        <h6>{points[username].firstName + " " + points[username].lastName}</h6>
        <h6>{username}</h6>
      </td>
      <td className="td-className-1" data-title="bootstrap table">
        <a href="/#">{points[username].semester}</a>
      </td>
      <td>{points[username].group1}</td>
      <td>{points[username].group2}</td>
      <td>{points[username].group3}</td>
      <td>{points[username].committeeEvents}</td>
      <td>{points[username].plc}</td>
      <td>{points[username].aux}</td>
      <td>{points[username].officeHours}</td>
      <td>{points[username].committeeMeetings}</td>
    </tr>
  );
};

AdminViewItem.propTypes = {
  points: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired,
};

export default AdminViewItem;
