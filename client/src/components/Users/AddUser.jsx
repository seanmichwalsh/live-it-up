import React, { useState, useEffect } from "react";
import $ from "jquery";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { addUser } from "../../redux/actions/userActions";
import "./AddUser.css";
import { PropTypes } from "prop-types";
import { getCommittees } from "./../../redux/actions/committeeActions";

const AddUser = ({ addUser, committees, getCommittees }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [preferredName, setPreferredName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [residency, setResidency] = useState(false);
  const [status, setStatus] = useState(true);
  const [primaryCommittee, setPrimaryCommittee] = useState("");
  const [auxCommittee, setAuxCommittee] = useState([]);
  const [committee, setCommittee] = useState([]);

  useEffect(() => {
    getCommittees();
    //eslint-disable-next-line
  }, [committees]);

  const onSubmit = e => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      preferredName === "" ||
      email === "" ||
      phone === "" ||
      primaryCommittee === ""
    ) {
      toast("Please fill in all required blanks!");
    } else {
      committee.push(primaryCommittee);
      auxCommittee.map(aux => committee.push(aux));
      setCommittee(committee);
      const newUser = {
        firstName: firstName,
        lastName: lastName,
        preferredName: preferredName,
        uid: username,
        email: email,
        phoneNumber: phone,
        onCampus: residency,
        active: status,
        mainCommittee: primaryCommittee,
        committees: committee
      };
      addUser(newUser);
      //Clear Fields
      setFirstName("");
      setLastName("");
      setPreferredName("");
      setEmail("");
      setPhone("");
      setUsername("");
      setResidency(false);
      setStatus(true);
      setPrimaryCommittee("");
      setAuxCommittee([]);
      setCommittee([]);
      $("#onCampus").val("");
      $("#activeMember").val("");
      $("#committees").val("");
      $("input[type=checkbox]").prop("checked", false);
      setTimeout(() => window.history.back(), 3500);
    }
  };

  return (
    <div className="add-user-pg">
      <header className="header">ADD USER</header>
      <div className="add-details">
        <ToastContainer autoClose={2000} hideProgressBar={true} />
        <div id="userInputFields">
          <form
            className="needs-validation"
            id="account-details-form"
            noValidate
          >
            <div id="account-details">
              <div className="ac-header">Account Details</div>
              <div className="form-row">
                <div className="form-group col-md-4 text-left">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    pattern="[A-Za-z']{1,32}"
                    className="form-control"
                    id="firstName"
                    placeholder="George"
                    required
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                  />
                </div>
                <div className="form-group col-md-4 text-left">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    pattern="[A-Za-z']{1,32}"
                    className="form-control"
                    id="lastName"
                    placeholder="Burdell"
                    required
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                  />
                </div>
                <div className="form-group col-md-4 text-left">
                  <label htmlFor="inputPreferredName">Preferred Name</label>
                  <input
                    type="text"
                    pattern="[A-Za-z']{1,32}"
                    className="form-control"
                    id="inputPreferredName"
                    placeholder="Georgie"
                    required
                    onChange={e => setPreferredName(e.target.value)}
                    value={preferredName}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-3 text-left">
                  <label htmlFor="uid">GT Username</label>
                  <input
                    type="text"
                    pattern="[A-Za-z']{1,32}"
                    className="form-control"
                    id="uid"
                    placeholder="gpburdell"
                    required
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                  />
                </div>
                <div className="form-group col-md-9 text-left">
                  <label htmlFor="email">GT E-Mail</label>
                  <input
                    type="email"
                    pattern=".+@gatech.edu"
                    className="form-control"
                    id="email"
                    placeholder="georgepburdell@gatech.edu"
                    required
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-4 text-left">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    pattern="^\+?\d{10,13}"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="6781236789"
                    required
                    onChange={e => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
                <div className="form-group col-md-4 text-left">
                  <label htmlFor="onCampus">GT Residency</label>
                  <select
                    id="onCampus"
                    className="form-control"
                    required
                    onChange={e => {
                      switch (e.target.value) {
                        case "true":
                          setResidency(true);
                          break;
                        case "false":
                          setResidency(false);
                          break;
                        default:
                          setResidency(false);
                      }
                    }}
                  >
                    <option selected disabled value="">
                      Choose...
                    </option>
                    <option value="true">On Campus</option>
                    <option value="false">Off Campus</option>
                  </select>
                </div>
                <div className="form-group col-md-4 text-left">
                  <label htmlFor="activeMember">Status</label>
                  <select
                    id="activeMember"
                    className="form-control"
                    required
                    onChange={e => {
                      switch (e.target.value) {
                        case "true":
                          setStatus(true);
                          break;
                        case "false":
                          setStatus(false);
                          break;
                        default:
                          setStatus(true);
                      }
                    }}
                  >
                    <option selected disabled value="">
                      Choose...
                    </option>
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                    <option value="false">No Longer a Member</option>
                  </select>
                </div>
              </div>
            </div>

            <div id="committee-access">
              <div className="cm-header">Committee Access</div>
              <div className="form-group text-left">
                <label htmlFor="committees">Primary Committee</label>
                <select
                  id="committees"
                  className="form-control"
                  required
                  onChange={e => setPrimaryCommittee(e.target.value)}
                >
                  <option selected disabled value="">
                    Choose...
                  </option>
                  {committees
                    .filter(committee => committee.type === "Primary")
                    .map(committee => (
                      <option key={committee._id} value={committee._id}>
                        {committee.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="aux-committee">
                <div className="form-group text-left">
                  <label htmlFor="inputState">Auxillary Committee</label>
                  {committees
                    .filter(
                      committee =>
                        committee.type === "Auxiliary" ||
                        committee.type === "Admin"
                    )
                    .map(committee => (
                      <div
                        key={committee._id}
                        className="custom-control custom-checkbox"
                      >
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id={committee.name + "Check"}
                          onChange={() => {
                            if (
                              $(`#${committee.name}Check`)[0].hasAttribute(
                                "checked"
                              )
                            ) {
                              const newAux = auxCommittee.filter(
                                acommittee => acommittee !== committee._id
                              );
                              setAuxCommittee(newAux);
                              $(`#${committee.name}Check`)[0].removeAttribute(
                                "checked"
                              );
                            } else {
                              auxCommittee.push(committee._id);
                              setAuxCommittee(auxCommittee);
                              $(`#${committee.name}Check`)[0].setAttribute(
                                "checked",
                                "checked"
                              );
                            }
                          }}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor={committee.name + "Check"}
                          id={committee.name}
                        >
                          {committee.name}
                        </label>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <button
              className="btn btn-secondary"
              type="submit"
              id="add-button"
              onClick={onSubmit}
            >
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

AddUser.propTypes = {
  addUser: PropTypes.func.isRequired,
  committees: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  committees: state.committee.committees
});

export default connect(
  mapStateToProps,
  { addUser, getCommittees }
)(AddUser);
