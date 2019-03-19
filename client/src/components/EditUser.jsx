import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom'; 
import $ from "jquery";

import "./EditUser.css";
import { throws } from 'assert';

class EditUser extends Component {

    userEdited() {
        $('#success-alert').removeClass('hidden');
    }

    exitAlert() {
        $('#success-alert').addClass('hidden');
    }

    render() {
        return (
            <div className="add-user-pg">
                <header className="header">EDIT USER</header>
                <div className="add-details">
                    <div class="alert alert-success hidden" id="success-alert">
                        <button type="button" id="close-button" class="close" onClick={this.exitAlert}>x</button>
                        <span class="glyphicon glyphicon-ok"></span> User has been edited!
                    </div>
                    
                    <div className="account-details">
                        <div className="ac-header">Account Details</div>
                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-6 text-left">
                                    <label for="inputName">Name</label>
                                    <input type="text" class="form-control" id="inputName" placeholder="Name"/>
                                </div>
                                <div class="form-group col-md-6 text-left">
                                    <label for="inputPreferredName">Preferred Name</label>
                                    <input type="text" class="form-control" id="inputPreferredName" placeholder="Preferred Name"/>
                                </div>
                            </div>
                                <div class="form-group text-left">
                                    <label for="inputGTEmail">GT E-Mail</label>
                                    <input type="text" class="form-control" id="inputGTEmail" placeholder="email@gatech.edu"/>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6 text-left">
                                        <label for="inputNumber">Phone Number</label>
                                        <input type="text" class="form-control" id="inputNumber" placeholder="Numbers only"/>
                                    </div>
                                    <div class="form-group col-md-6 text-left">
                                        <label for="inputStatus">Status</label>
                                        <select id="inputStatus" class="form-control">
                                            <option selected>Choose...</option>
                                            <option>Active</option>
                                            <option>Inactive</option>
                                            <option>No longer a member</option>
                                        </select>
                                    </div>
                                </div>
                            <div class="text-left">
                                <button type="button" id="add-button" class="btn btn-primary" onClick={this.userEdited}>Edit User</button>
                            </div>
                        </form>
                    </div>
                    <div className="committee-access">
                        <div className="cm-header">Committee Access</div>
                        <form>
                            <div class="form-group text-left">
                            <label for="inputState">Primary Committee</label>
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>Arts & Culture</option>
                                <option>Atlanta Life</option>
                                <option>Comedy & Entertainment</option>
                                <option>Concerts</option>
                                <option>Educating the Community</option>
                                <option>Festivals</option>
                                <option>Homecoming</option>
                                <option>Movies</option>
                                <option>Ramblin' Nights</option>
                            </select>
                            </div>
                            <div className="aux-committee">
                                <div class="form-group text-left">
                                <label for="inputState">Auxillary Committee</label>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="technologyCheck"/>
                                    <label class="custom-control-label" for="technologyCheck">Technology</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="financeCheck"/>
                                    <label class="custom-control-label" for="financeCheck">Finance</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="marketingCheck"/>
                                    <label class="custom-control-label" for="marketingCheck">Marketing</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="plcCheck"/>
                                    <label class="custom-control-label" for="plcCheck">PLC</label>
                                </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditUser;