import React, { Component } from 'react';
import $ from 'jquery';

import './EditUser.css';

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
        $('#success-alert').removeClass('hidden');

    }
    
    render() {
        return (
            
            <div className="add-user-pg">
                <header className="header">EDIT USER</header>
                <div className="add-details">
                    <div className="alert alert-success hidden" id="success-alert">
                        <button type="button" id="close-button" className="close" onClick={this.exitAlert}>x</button>
                        <span className="glyphicon glyphicon-ok"></span> User has been edited!
                    </div>
                    
                    <div id="userInputFields">
                        <form className="needs-validation" id="account-details-form" novalidate>
                            <div id="account-details">
                                <div className="ac-header">Account Details</div>
                                <div className="form-row">
                                    <div className="form-group col-md-6 text-left">
                                        <label for="inputName">Name</label>
                                        <input type="text" pattern="[A-Za-z']{1,32}" className="form-control" id="inputName" placeholder="George P. Burdell" required/>
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div className="invalid-feedback">
                                            Please enter a valid name.
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6 text-left">
                                        <label for="inputPreferredName">Preferred Name</label>
                                        <input type="text" pattern="[A-Za-z']{1,32}" className="form-control" id="inputPreferredName" placeholder="Georgie" required/>
                                    </div>
                                </div>
                                <div className="form-group text-left">
                                    <label for="inputGTEmail">GT E-Mail</label>
                                    <input type="text" pattern=".+@gatech.edu" className="form-control" id="inputGTEmail" placeholder="georgepburdell@gatech.edu" required/>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6 text-left">
                                        <label for="inputNumber">Phone Number</label>
                                        <input type="tel" pattern="^\+?\d{10,13}" className="form-control" id="inputNumber" placeholder="6781236789" required/>
                                    </div>
                                    <div className="form-group col-md-6 text-left">
                                        <label for="inputStatus">Status</label>
                                        <select id="inputStatus" className="form-control" required>
                                            <option selected disabled value="">Choose...</option>
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                            <option value="No Longer a Member">No Longer a Member</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div id="committee-access">
                                <div className="cm-header">Committee Access</div>
                                <div className="form-group text-left">
                                <label for="inputState">Primary Committee</label>
                                <select id="inputState" className="form-control" required>
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
                    </div>     
                </div>           
            </div>

        );
    }
}
export default EditUser;

