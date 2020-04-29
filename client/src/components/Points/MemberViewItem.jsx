import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

const MemberViewItem = ({ event }) => {
  return (
    <tr className="tr-className-1" data-title="bootstrap table">
      <td>{Moment(event.date).format("MM/DD/Y")}</td>
      <td>{event.points}</td>
      <td>{event.category}</td>
      <td>{event.description}</td>
    </tr>
  );
};

MemberViewItem.propTypes = {
  event: PropTypes.object.isRequired,
};

export default MemberViewItem;
