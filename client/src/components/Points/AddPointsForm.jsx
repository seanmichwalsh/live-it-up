import React, { useState, useEffect } from "react";
import $ from "jquery";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addPoint } from "../../redux/actions/pointsActions";
import { getUsers } from "../../redux/actions/userActions";

const AddPointsForm = ({ addPoint, users, getUsers }) => {
  const [date, setDate] = useState(new Date("01/23/1999"));
  const [category, setCategory] = useState("");
  const [number, setNumber] = useState(0);
  const [semester, setSemester] = useState("");
  const [description, setDescription] = useState("");
  const [member, setMember] = useState([]);

  useEffect(() => {
    getUsers();
    //eslint-disable-next-line
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    if (
      date === null ||
      category === "" ||
      number === 0 ||
      semester === "" ||
      description === ""
    ) {
      toast("Please fill in every required field!");
    } else {
      member.forEach(mem => {
        const newPoint = {
          date: date,
          category: category,
          points: number,
          semester: semester,
          description: description,
          uid: mem
        };
        console.log(newPoint);
        addPoint(newPoint);
      });

      //Clear Fields
      setDate(null);
      $("#category").val("");
      setNumber(0);
      setSemester("");
      setDescription("");
      setTimeout(() => window.history.back(), 3500);
    }
  };

  return (
    <form className="needs-validation" id="account-details-form" noValidate>
      <div id="add-points-form">
        <div className="form-row">
          <div className="form-group col-md-4 text-left">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              placeholder="01/23/99"
              onChange={e => setDate(e.target.value)}
              value={date}
              required
            />
          </div>
          <div className="form-group col-md-4 text-left">
            <label for="category">Category</label>
            <select
              id="category"
              class="form-control"
              required
              onChange={e => {
                switch (e.target.value) {
                  case "Group 1":
                    setCategory("group1");
                    break;
                  case "Group 2":
                    setCategory("group2");
                    break;
                  case "Group 3":
                    setCategory("group3");
                    break;
                  case "Committee Meeting":
                    setCategory("committeeMeetings");
                    break;
                  // case "Ad Hoc Committee":
                  //     setCategory("adHocCommittee");
                  //     break;
                  case "Office Hours":
                    setCategory("officeHours");
                    break;
                  case "Teasering":
                    setCategory("teasering");
                    break;
                  default:
                    setCategory("committeeMeetings");
                }
              }}
            >
              <option selected disabled value="">
                Choose...
              </option>
              <option value="Group 1">Group 1</option>
              <option value="Group 2">Group 2</option>
              <option value="Group 3">Group 3</option>
              <option value="Committee Meeting">Committee Meeting</option>
              <option value="Ad Hoc Committee">Ad Hoc Committee</option>
              <option value="Office Hours">Office Hours</option>
              <option value="Teasering"> Teasering</option>
              <option value="PLC">PLC</option>
            </select>
          </div>
          <div className="form-group col-md-4 text-left">
            <label htmlFor="number">Number of Points</label>
            <input
              type="text"
              className="form-control"
              id="number"
              placeholder="9000"
              onChange={e => setNumber(e.target.value)}
              value={number}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6 text-left">
            <label htmlFor="semester">Semester</label>
            <select
              type="text"
              className="form-control"
              id="semester"
              onChange={e => setSemester(e.target.value)}
              value={semester}
              required
            >
              <option selected disabled value="">
                Choose...
              </option>
              <option value="201908">Fall 2019</option>
              <option value="202002">Spring 2020</option>
              <option value="202005">Summer 2020</option>
              <option value="202008">Fall 2020</option>
              <option value="202102">Spring 2021</option>
              <option value="202105">Summer 2021</option>
            </select>
          </div>
          <div className="form-group col-md-6 text-left">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Set-up for Fall Festival"
              onChange={e => setDescription(e.target.value)}
              value={description}
              required
            />
          </div>
        </div>
      </div>
      {/* </div> */}

      <div id="member-box">
        <a id="member-header" href="/#">Members:</a>
        <div id="user-container">
          {users.map(user => (
            <div key={user._id}>
              <input
                type="checkbox"
                className="custom-control-input"
                id={user.uid + "Check"}
                onChange={() => {
                  if ($(`#${user.uid}Check`)[0].hasAttribute("checked")) {
                    const newMember = member.filter(mem => mem !== user.uid);
                    setMember(newMember);
                    $(`#${user.uid}Check`)[0].removeAttribute("checked");
                  } else {
                    member.push(user.uid);
                    setMember(member);
                    $(`#${user.uid}Check`)[0].setAttribute(
                      "checked",
                      "checked"
                    );
                  }
                }}
              />
              <label
                className="custom-control-label"
                htmlFor={user.uid + "Check"}
                id={user.firstName}
              >
                {user.firstName} {user.lastName}
              </label>
            </div>
          ))}
        </div>
      </div>

      <button
        className="btn btn-secondary"
        type="submit"
        id="add-button"
        onClick={onSubmit}
      >
        Add Points
      </button>
    </form>
  );
};

AddPointsForm.propTypes = {
  addPoint: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  points: state.points.points,
  current: state.points.current,
  users: state.user.users
});

export default connect(mapStateToProps, { addPoint, getUsers })(AddPointsForm);
