import React, { Component } from 'react';
import $ from "jquery";

import "./EditUser.css";

class EditUser extends Component {

    userEdited() {
        $('#success-alert').removeClass('hidden');
    }

    exitAlert() {
        $('#success-alert').addClass('hidden');
    }

    addUserClick() {
        $("#add-button").click(function() {
            $("#account-details-form").submit();
        });
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
                    
                    <div id="userInputFields">
                        <div id="account-details">
                            <div className="ac-header">Account Details</div>
                            <form id="account-details-form">
                                <div class="form-row">
                                    <div class="form-group col-md-6 text-left">
                                        <label for="inputName">Name</label>
                                        <input type="text" class="form-control" id="inputName" placeholder="Name" required/>
                                    </div>
                                    <div class="form-group col-md-6 text-left">
                                        <label for="inputPreferredName">Preferred Name</label>
                                        <input type="text" class="form-control" id="inputPreferredName" placeholder="Preferred Name" required/>
                                    </div>
                                </div>
                                <div class="form-group text-left">
                                    <label for="inputGTEmail">GT E-Mail</label>
                                    <input type="text" class="form-control" id="inputGTEmail" placeholder="email@gatech.edu" required/>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6 text-left">
                                        <label for="inputNumber">Phone Number</label>
                                        <input type="text" class="form-control" id="inputNumber" placeholder="Numbers only" required/>
                                    </div>
                                    <div class="form-group col-md-6 text-left">
                                        <label for="inputStatus">Status</label>
                                        <select id="inputStatus" class="form-control" required>
                                            <option selected disabled value="">Choose...</option>
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                            <option value="No Longer a Member">No Longer a Member</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div id="committee-access">
                            <div className="cm-header">Committee Access</div>
                            <form>
                                <div class="form-group text-left">
                                <label for="inputState">Primary Committee</label>
                                <select id="inputState" class="form-control" required>
                                    <option selected disabled value="">Choose...</option>
                                    <option value="Arts & Culture">Arts & Culture</option>
                                    <option value="Atlanta Life">Atlanta Life</option>
                                    <option value="Comedy & Entertainment">Comedy & Entertainment</option>
                                    <option value="Concerts">Concerts</option>
                                    <option value="Educating the Community">Educating the Community</option>
                                    <option value="Festivals">Festivals</option>
                                    <option value="Homecoming">Homecoming</option>
                                    <option value="Movies">Movies</option>
                                    <option value="Ramblin' Nights">Ramblin' Nights</option>
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
                        <div class="text-left">
                        
                    </div>
                    <button type="submit" id="add-button" class="btn btn-secondary" onClick={this.addUserClick}>Edit User</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditUser;