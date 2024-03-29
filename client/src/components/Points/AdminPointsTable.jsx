import React, { useState } from "react";
import PropTypes from "prop-types";
import AdminViewItem from "./AdminViewItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

const AdminPointsTable = ({ points, context, semester, onChange }) => {
  const [sortType, setSortType] = useState("");
  const [memberOrder, setMemberOrder] = useState(null);
  const [group1Order, setGroup1Order] = useState(null);
  const [group2Order, setGroup2Order] = useState(null);
  const [group3Order, setGroup3Order] = useState(null);
  const [ceOrder, setCEOrder] = useState(null);
  const [plcOrder, setPLCOrder] = useState(null);
  const [auxOrder, setAuxOrder] = useState(null);
  const [ohOrder, setOHOrder] = useState(null);
  const [cmOrder, setCMOrder] = useState(null);

  const memberSearch = (pointsKey) => {
    return pointsKey.filter((username) => username.includes(context));
  };

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
          return points[a].committeeEvent > points[b].committeeEvent
            ? 1
            : -1;
        case "CEDescend":
          return points[a].committeeEvent < points[b].committeeEvent
            ? 1
            : -1;
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
          return points[a].committeeMeetings >
            points[b].committeeMeetings
            ? 1
            : -1;
        case "cmDescend":
          return points[a].committeeMeetings <
            points[b].committeeMeetings
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
    <table className="table table-bordered table-hover table-responsive-sm admin-view">
      <thead>
        <tr>
          <th
            onClick={() => {
              setSortType(memberOrder ? "memberAscend" : "memberDescend");
              setMemberOrder(!memberOrder);
            }}
          >
            Member
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button style={memberOrder == null ? style : null}>
                <FontAwesomeIcon
                  icon={faSortUp}
                  className="icon"
                  style={
                    memberOrder == null ? null : !memberOrder ? style : null
                  }
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
                <option value="2020fall">Fall 2020</option>
              </select>
            </div>
          </th>
          <th
            onClick={() => {
              setSortType(group1Order ? "group1Ascend" : "group1Descend");
              setGroup1Order(!group1Order);
            }}
          >
            Category 1 Points
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button style={group1Order == null ? style : null}>
                <FontAwesomeIcon
                  icon={faSortUp}
                  className="icon"
                  style={
                    group1Order == null ? null : !group1Order ? style : null
                  }
                />
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="icon"
                  style={group1Order ? style : null}
                />
              </button>
            </span>
          </th>
          <th
            onClick={() => {
              setSortType(group2Order ? "group2Ascend" : "group2Descend");
              setGroup2Order(!group2Order);
            }}
          >
            Category 2 Points
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button style={group2Order == null ? style : null}>
                <FontAwesomeIcon
                  icon={faSortUp}
                  className="icon"
                  style={
                    group2Order == null ? null : !group2Order ? style : null
                  }
                />
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="icon"
                  style={group2Order ? style : null}
                />
              </button>
            </span>
          </th>
          <th
            onClick={() => {
              setSortType(group3Order ? "memberAscend" : "memberDescend");
              setGroup3Order(!group3Order);
            }}
          >
            Category 3 Points
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button style={group3Order == null ? style : null}>
                <FontAwesomeIcon
                  icon={faSortUp}
                  className="icon"
                  style={
                    group3Order == null ? null : !group3Order ? style : null
                  }
                />
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="icon"
                  style={group3Order ? style : null}
                />
              </button>
            </span>
          </th>
          <th
            onClick={() => {
              setSortType(ceOrder ? "CEAscend" : "CEDescend");
              setCEOrder(!ceOrder);
            }}
          >
            Committee Events
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button style={ceOrder == null ? style : null}>
                <FontAwesomeIcon
                  icon={faSortUp}
                  className="icon"
                  style={ceOrder == null ? null : !ceOrder ? style : null}
                />
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="icon"
                  style={ceOrder ? style : null}
                />
              </button>
            </span>
          </th>
          <th
            onClick={() => {
              setSortType(plcOrder ? "plcAscend" : "plcDescend");
              setPLCOrder(!plcOrder);
            }}
          >
            PLC
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button style={plcOrder == null ? style : null}>
                <FontAwesomeIcon
                  icon={faSortUp}
                  className="icon"
                  style={plcOrder == null ? null : !plcOrder ? style : null}
                />
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="icon"
                  style={plcOrder ? style : null}
                />
              </button>
            </span>
          </th>
          <th
            onClick={() => {
              setSortType(auxOrder ? "auxAscend" : "auxDescend");
              setAuxOrder(!auxOrder);
            }}
          >
            Auxilliary
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button style={auxOrder == null ? style : null}>
                <FontAwesomeIcon
                  icon={faSortUp}
                  className="icon"
                  style={auxOrder == null ? null : !auxOrder ? style : null}
                />
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="icon"
                  style={auxOrder ? style : null}
                />
              </button>
            </span>
          </th>
          <th
            onClick={() => {
              setSortType(ohOrder ? "ohAscend" : "ohDescend");
              setOHOrder(!ohOrder);
            }}
          >
            Office Hours
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button style={ohOrder == null ? style : null}>
                <FontAwesomeIcon
                  icon={faSortUp}
                  className="icon"
                  style={ohOrder == null ? null : !ohOrder ? style : null}
                />
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="icon"
                  style={ohOrder ? style : null}
                />
              </button>
            </span>
          </th>
          <th
            onClick={() => {
              setSortType(cmOrder ? "cmAscend" : "cmDescend");
              setCMOrder(!cmOrder);
            }}
          >
            Committee Meetings
            <span className="btn-group-vertical btn-group-sm ml-2">
              <button style={cmOrder == null ? style : null}>
                <FontAwesomeIcon
                  icon={faSortUp}
                  className="icon"
                  style={cmOrder == null ? null : !cmOrder ? style : null}
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
        {(!context ? sortTable() : memberSearch(sortTable())).map(
          (username) => (
            <AdminViewItem points={points} username={username} key={username} />
          )
        )}
      </tbody>
    </table>
  );
};

AdminPointsTable.propTypes = {
  points: PropTypes.object.isRequired,
  context: PropTypes.string,
  semester: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdminPointsTable;
