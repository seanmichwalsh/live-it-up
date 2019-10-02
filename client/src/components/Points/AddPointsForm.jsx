import React, { useState, useEffect } from "react";
import $ from "jquery";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addPoint } from "../../redux/actions/pointsActions";
import { getUsers } from "../../redux/actions/userActions";

const AddPointsForm = ({ addPoint, users, getUsers }) => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [number, setNumber] = useState("");
  const [semester, setSemester] = useState("");
  const [description, setDescription] = useState("");

    useEffect(() => {
        getUsers();
    }, [users]);

  const onSubmit = e => {
    e.preventDefault();
    if (date === "" || category === "" || number == "" || semester == "" || description == "") {
      toast("Please fill in every required field!");
    } else {
      const newPoint = {
        date: date,
        category: category,
        number: number,
        semester: semester,
        description: description
      };
      addPoint(newPoint);

      //Clear Fields
      setDate("");
      $("#category").val("");
      setNumber("");
      setSemester("");
      setDescription("");
      setTimeout(() => window.history.back(), 3500);
    }
  };

  return (
    <form
        className="needs-validation"
        id="account-details-form"
        noValidate
    >
        <div id="add-points-form">
            <div className="form-row">
                <div className="form-group col-md-4 text-left">
                    <label htmlFor="date">Date</label>
                    <input
                        type="text"
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
                                    setCategory("Group 1");
                                    break;
                                case "Group 2":
                                    setCategory("Group 2");
                                    break;
                                case "Group 3":
                                    setCategory("Group 3");
                                    break;
                                case "Committee Meeting":
                                    setCategory("Committee Meeting");
                                    break;
                                case "Ad Hoc Committee":
                                    setCategory("Ad Hoc Committee");
                                    break;
                                case "Office Hours":
                                    setCategory("Office Hours");
                                    break;
                                case "Teasering":
                                    setCategory("Teasering");
                                    break;
                                default:
                                    setCategory("Committee Meeting")
                            }
                        }}
                        >
                        <option selected disabled value="">Choose...</option>
                        <option value="Group 1">Group 1</option>
                        <option value="Group 2">Group 2</option>
                        <option value="Group 3">Group 2</option>
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
                    <input
                        type="text"
                        className="form-control"
                        id="semester"
                        placeholder="Fall 2020"
                        onChange={e => setSemester(e.target.value)}
                        value={semester}
                        required
                    />
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

        <div id="member-box">
            <a id="member-header">Members:</a>
            <div id="user-container">
                {users.map(user => (
                    <input type="checkbox" key={user._id}>{user.name}</input>
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
  points: state.points,
  current: state.current,
  users: state.user.users
});

export default connect(
  mapStateToProps,
  { addPoint, getUsers }
)(AddPointsForm);
