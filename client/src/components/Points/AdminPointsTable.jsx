import React, { useState } from "react";
import PropTypes from "prop-types";
import AdminViewItem from "./AdminViewItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

const AdminPointsTable = ({ points, semester, onChange }) => {
  const [sortType, setSortType] = useState("");
  const [memberOrder, setMemberOrder] = useState(true);
  const [group1Order, setGroup1Order] = useState(true);
  const [group2Order, setGroup2Order] = useState(true);
  const [group3Order, setGroup3Order] = useState(true);
  const [ceOrder, setCEOrder] = useState(true);
  const [plcOrder, setPLCOrder] = useState(true);
  const [auxOrder, setAuxOrder] = useState(true);
  const [ohOrder, setOHOrder] = useState(true);
  const [cmOrder, setCMOrder] = useState(true);

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

  const style = {
    opacity: 0.3,
  };

  return (
    <table
      id="table"
      data-toggle="table"
      className="table table-bordered table-hover table-responsive-sm admin-view"
      data-sortable="true"
    >
      <thead>
        <tr>
          <th data-field="uid" data-sortable="true">
            Member
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button
                onClick={() => {
                  setSortType(memberOrder ? "memberAscend" : "memberDescend");
                  setMemberOrder(!memberOrder);
                }}
              >
                <FontAwesomeIcon
                  icon={faSortUp}
                  className="icon"
                  style={!memberOrder ? style : null}
                />
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="icon"
                  style={memberOrder ? style : null}
                />
              </button>
            </span>
          </th>
          <th scope="col">
            Semester
            <div className="dropdown">
              <select
                onChange={(e) => onChange(e.target.value)}
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
              <button
                onClick={() => {
                  setSortType(group1Order ? "group1Ascend" : "group1Descend");
                  setGroup1Order(!group1Order);
                }}
              >
                <FontAwesomeIcon
                  icon={faSortUp}
                  className="icon"
                  style={!group1Order ? style : null}
                />
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="icon"
                  style={group1Order ? style : null}
                />
              </button>
            </span>
          </th>
          <th data-field="group2" data-sortable="true">
            Category 2 Points
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button
                onClick={() => {
                  setSortType(group2Order ? "group2Ascend" : "group2Descend");
                  setGroup2Order(!group2Order);
                }}
              >
                <FontAwesomeIcon
                  icon={faSortUp}
                  className="icon"
                  style={!group2Order ? style : null}
                />
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="icon"
                  style={group2Order ? style : null}
                />
              </button>
            </span>
          </th>
          <th data-field="group3" data-sortable="true">
            Category 3 Points
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button
                onClick={() => {
                  setSortType(group3Order ? "memberAscend" : "memberDescend");
                  setGroup3Order(!group3Order);
                }}
              >
                <FontAwesomeIcon
                  icon={faSortUp}
                  className="icon"
                  style={!group3Order ? style : null}
                />
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="icon"
                  style={group3Order ? style : null}
                />
              </button>
            </span>
          </th>
          <th data-field="committeeEvents" data-sortable="true">
            Committee Events
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button
                onClick={() => {
                  setSortType(ceOrder ? "CEAscend" : "CEDescend");
                  setCEOrder(!ceOrder);
                }}
              >
                <FontAwesomeIcon
                  icon={faSortUp}
                  className="icon"
                  style={!ceOrder ? style : null}
                />
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="icon"
                  style={ceOrder ? style : null}
                />
              </button>
            </span>
          </th>
          <th data-field="plc" data-sortable="true">
            PLC
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button
                onClick={() => {
                  setSortType(plcOrder ? "plcAscend" : "plcDescend");
                  setPLCOrder(!plcOrder);
                }}
              >
                <FontAwesomeIcon
                  icon={faSortUp}
                  className="icon"
                  style={!plcOrder ? style : null}
                />
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="icon"
                  style={plcOrder ? style : null}
                />
              </button>
            </span>
          </th>
          <th data-field="aux" data-sortable="true">
            Auxilliary
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button
                onClick={() => {
                  setSortType(auxOrder ? "auxAscend" : "auxDescend");
                  setAuxOrder(!auxOrder);
                }}
              >
                <FontAwesomeIcon
                  icon={faSortUp}
                  className="icon"
                  style={!auxOrder ? style : null}
                />
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="icon"
                  style={auxOrder ? style : null}
                />
              </button>
            </span>
          </th>
          <th data-field="officeHours" data-sortable="true">
            Office Hours
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button
                onClick={() => {
                  setSortType(ohOrder ? "ohAscend" : "ohDescend");
                  setOHOrder(!ohOrder);
                }}
              >
                <FontAwesomeIcon
                  icon={faSortUp}
                  className="icon"
                  style={!ohOrder ? style : null}
                />
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="icon"
                  style={ohOrder ? style : null}
                />
              </button>
            </span>
          </th>
          <th data-field="committeeMeetings" data-sortable="true">
            Committee Meetings
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button
                onClick={() => {
                  setSortType(cmOrder ? "cmAscend" : "cmDescend");
                  setCMOrder(!cmOrder);
                }}
              >
                <FontAwesomeIcon
                  icon={faSortUp}
                  className="icon"
                  style={!cmOrder ? style : null}
                />
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="icon"
                  style={cmOrder ? style : null}
                />
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

AdminPointsTable.propTypes = {
  points: PropTypes.object.isRequired,
};

export default AdminPointsTable;
