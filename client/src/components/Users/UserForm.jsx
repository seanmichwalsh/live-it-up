import React, { Component } from 'react';
import './AddUser.css';
import { connect } from 'react-redux';
import * as userActions from '../../redux/actions/userActions';
import * as committeeActions from '../../redux/actions/committeeActions';
import { bindActionCreators } from 'redux';

class UserForm extends Component {
    state = {
        user: {
            firstName: "",
            lastName: "",
            onCampus: false,
            phoneNumber: "",
            email: "",
            uid: "",
            committees: "",
            mainCommittee: "",
            activeMember: ""
        }
    };

    handleChange = event => {
        const user = { ...this.state.user, [event.target.id]: event.target.value };
        this.setState({ user: user});
    }

    handleSubmit = event => {
        event.preventDefault();
        const user = { ...this.state.user, [event.target.id]: event.target.value };
        this.props.addUser(user);

    }

    render() {
        return (
            <form className="needs-validation" id="account-details-form" onSubmit={this.handleSubmit}>
                <div id="account-details">
                    <div className="ac-header">Account Details</div>
                    <div className="form-row">
                        <div className="form-group col-md-6 text-left">
                            <label for="firstName">First Name</label>
                            <input type="text" 
                                pattern="[A-Za-z']{1,32}" 
                                className="form-control" 
                                id="firstName" 
                                placeholder="George" 
                                onChange={this.handleChange}
                                value={this.state.user.firstName}
                                required/>
                        </div>
                        <div className="form-group col-md-6 text-left">
                            <label for="lastName">Last Name</label>
                            <input type="text"
                                pattern="[A-Za-z']{1,32}"
                                className="form-control" 
                                id="lastName" 
                                placeholder="Burdell" 
                                onChange={this.handleChange}
                                value={this.state.user.lastName}
                                required/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-3 text-left">
                            <label for="uid">GT Username</label>
                            <input type="text" 
                                pattern="[A-Za-z']{1,32}" 
                                className="form-control" 
                                id="uid" 
                                placeholder="gpburdell" 
                                onChange={this.handleChange}
                                value={this.state.user.uid}
                                readOnly/>
                        </div>
                        <div className="form-group col-md-9 text-left">
                            <label for="email">GT E-Mail</label>
                            <input type="email" 
                                pattern=".+@gatech.edu" 
                                className="form-control" 
                                id="email" 
                                placeholder="georgepburdell@gatech.edu" 
                                onChange={this.handleChange}
                                value={this.state.user.email}
                                required/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4 text-left">
                            <label for="phoneNumber">Phone Number</label>
                            <input type="tel" 
                                pattern="^\+?\d{10,13}" 
                                className="form-control" 
                                id="phoneNumber" 
                                placeholder="6781236789" 
                                onChange={this.handleChange}
                                value={this.state.user.phoneNumber}
                                required/>
                        </div>
                        <div className="form-group col-md-4 text-left">
                            <label for="onCampus">GT Residency</label>
                            <select id="onCampus" className="form-control" onChange={this.handleChange} required>
                                <option selected disabled value="">Choose...</option>
                                <option value="true">On Campus</option>
                                <option value="false">Off Campus</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4 text-left">
                            <label for="activeMember">Status</label>
                            <select id="activeMember" className="form-control" onChange={this.handleChange} required>
                                <option selected disabled value="">Choose...</option>
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
                    <label for="committees">Primary Committee</label>
                    <select id="committees" className="form-control" onChange={this.handleChange} required>
                        <option selected disabled value="">Choose...</option>
                        {/* {this.state.committees.map((committee) =>
                            <option value={this.state.committee.id}>{this.state.committee.name}</option>
                        )} */}
                        {/* {this.state.users.map((user) =>
                            <option value></option>
                        )} */}

                        {/* <option value="Arts & Culture">Arts & Culture</option>
                        <option value="Atlanta Life">Atlanta Life</option>
                        <option value="Comedy & Entertainment">Comedy & Entertainment</option>
                        <option value="Concerts">Concerts</option>
                        <option value="Educating the Community">Educating the Community</option>
                        <option value="Festivals">Festivals</option>
                        <option value="Homecoming">Homecoming</option>
                        <option value="Movies">Movies</option>
                        <option value="Ramblin' Nights">Ramblin' Nights</option> */}
                    </select>
                    </div>
                    <div className="aux-committee">
                        <div className="form-group text-left">
                        <label for="inputState">Auxillary Committee</label>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="technologyCheck"/>
                            <label className="custom-control-label" for="technologyCheck">Technology</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="financeCheck"/>
                            <label className="custom-control-label" for="financeCheck">Finance</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="marketingCheck"/>
                            <label className="custom-control-label" for="marketingCheck">Marketing</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="plcCheck"/>
                            <label className="custom-control-label" for="plcCheck">PLC</label>
                        </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-secondary" type="submit" id="add-button">Add User</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        committees: state.committees,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch),
        actions: bindActionCreators(committeeActions, dispatch), 
        addUser: user => dispatch(userActions.addUser(user)),
        loadCommittees: dispatch(committeeActions.loadCommittees())

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);