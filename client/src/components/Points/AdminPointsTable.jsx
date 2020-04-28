import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AdminViewItem from "./AdminViewItem";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getPointsReport } from "./../../redux/actions/pointsActions";

const AdminPointsTable = ({ points, getPointsReport }) => {
  const [semester, setSemester] = useState("2020spring");
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    getPointsReport(semester);
    //eslint-disable-next-line
  }, [semester]);

  const sortTable = () => {
    return Object.keys(points).sort((a, b) => {
      switch (sortType) {
        case "memberAscend":
          return a > b ? 1 : -1;
        case "memberDescend":
          return a < b ? 1 : -1;
        case "group1Ascend":
          return points[a].group1 > points[b].group1 ? 1 : -1;
        case "group1Descend":
          return points[a].group1 < points[b].group1 ? 1 : -1;
        case "group2Ascend":
          return points[a].group2 > points[b].group2 ? 1 : -1;
        case "group2Descend":
          return points[a].group2 < points[b].group2 ? 1 : -1;
        case "group3Ascend":
          return points[a].group3 > points[b].group3 ? 1 : -1;
        case "group3Descend":
          return points[a].group3 < points[b].group3 ? 1 : -1;
        case "CEAscend":
          return points[a].committeeEvent > points[b].committeeEvent ? 1 : -1;
        case "CEDescend":
          return points[a].committeeEvent < points[b].committeeEvent ? 1 : -1;
        case "plcAscend":
          return points[a].plc > points[b].plc ? 1 : -1;
        case "plcDescend":
          return points[a].plc < points[b].plc ? 1 : -1;
        case "auxAscend":
          return points[a].aux > points[b].aux ? 1 : -1;
        case "auxDescend":
          return points[a].aux < points[b].aux ? 1 : -1;
        case "ohAscend":
          return points[a].officeHours > points[b].officeHours ? 1 : -1;
        case "ohDescend":
          return points[a].officeHours < points[b].officeHours ? 1 : -1;
        case "cmAscend":
          return points[a].committeeMeetings > points[b].committeeMeetings
            ? 1
            : -1;
        case "cmDescend":
          return points[a].committeeMeetings < points[b].committeeMeetings
            ? 1
            : -1;
        default:
          return 1;
      }
    });
  };

  return (
    <table
      data-toggle="table"
      className="table table-bordered table-hover table-responsive-sm admin-view"
      id="table"
    >
      <thead>
        <tr>
          <th data-field="uid" data-sortable="true" scope="true">
            Member
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button onClick={() => setSortType("memberAscend")}>
                <FontAwesomeIcon icon={faCaretUp} />
              </button>
              <button onClick={() => setSortType("memberDescend")}>
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
            </span>
          </th>
          <th scope="col">
            Semester
            <div className="dropdown">
              <select
                onChange={(e) => setSemester(e.target.value)}
                value={semester}
              >
                <option value=""></option>
                <option value="2019fall">Fall 2019</option>
                <option value="2020spring">Spring 2020</option>
                <option value="2020summer">Summer 2020</option>
              </select>
            </div>
          </th>
          <th data-field="group1" data-sortable="true">
            Category 1 Points
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button onClick={() => setSortType("group1Ascend")}>
                <FontAwesomeIcon icon={faCaretUp} />
              </button>
              <button onClick={() => setSortType("group1Descend")}>
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
            </span>
          </th>
          <th data-field="group2" data-sortable="true">
            Category 2 Points
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button onClick={() => setSortType("group2Ascend")}>
                <FontAwesomeIcon icon={faCaretUp} />
              </button>
              <button onClick={() => setSortType("group2Descend")}>
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
            </span>
          </th>
          <th data-field="group3" data-sortable="true">
            Category 3 Points
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button onClick={() => setSortType("group3Ascend")}>
                <FontAwesomeIcon icon={faCaretUp} />
              </button>
              <button onClick={() => setSortType("group3Descend")}>
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
            </span>
          </th>
          <th data-field="committeeEvents" data-sortable="true">
            Committee Events
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button onClick={() => setSortType("CEAscend")}>
                <FontAwesomeIcon icon={faCaretUp} />
              </button>
              <button onClick={() => setSortType("CEDescend")}>
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
            </span>
          </th>
          <th data-field="plc" data-sortable="true">
            PLC
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button onClick={() => setSortType("plcAscend")}>
                <FontAwesomeIcon icon={faCaretUp} />
              </button>
              <button onClick={() => setSortType("plcDescend")}>
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
            </span>
          </th>
          <th data-field="aux" data-sortable="true">
            Auxilliary
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button onClick={() => setSortType("auxAscend")}>
                <FontAwesomeIcon icon={faCaretUp} />
              </button>
              <button onClick={() => setSortType("auxDescend")}>
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
            </span>
          </th>
          <th data-field="officeHours" data-sortable="true">
            Office Hours
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button onClick={() => setSortType("ohAscend")}>
                <FontAwesomeIcon icon={faCaretUp} />
              </button>
              <button onClick={() => setSortType("ohDescend")}>
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
            </span>
          </th>
          <th data-field="committeeMeetings" data-sortable="true">
            Committee Meetings
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button onClick={() => setSortType("cmAscend")}>
                <FontAwesomeIcon icon={faCaretUp} />
              </button>
              <button onClick={() => setSortType("cmDescend")}>
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortTable(sortType).map((username) => (
          <AdminViewItem points={points} username={username} key={username} />
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  points: state.points.points,
});

AdminPointsTable.propTypes = {
  points: PropTypes.object.isRequired,
  getPointsReport: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getPointsReport })(AdminPointsTable);
