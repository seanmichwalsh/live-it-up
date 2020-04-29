import React from "react";
import PropTypes from "prop-types";

const AdminViewItem = ({ points, username }) => {
  return (
    <tr className="tr-className-1" data-title="bootstrap table">
      <td data-sort-class="uid">{username}</td>
      <td className="td-className-1" data-title="bootstrap table">
        <a href="/#">{points[username].semester}</a>
      </td>
      <td data-sort-class="group1">{points[username].group1}</td>
      <td data-sort-class="group2">{points[username].group2}</td>
      <td data-sort-class="group3">{points[username].group3}</td>
      <td data-sort-class="committeeEvents">{points[username].committeeEvents}</td>
      <td data-sort-class="plc">{points[username].plc}</td>
      <td data-sort-class="aux">{points[username].aux}</td>
      <td data-sort-class="officeHours">{points[username].officeHours}</td>
      <td data-sort-class="committeeMeetings">
        {points[username].committeeMeetings}
      </td>
    </tr>
  );
};

AdminViewItem.propTypes = {
  points: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired,
};

export default AdminViewItem;
