import React, { Component } from 'react';
import $ from 'jquery';

import './AddUser.css';

class AddUser extends Component {
    constructor() {
        super()
        this.state = {
            users: null
        }
    }
    
    addUserClick() {
        $("#add-button").click(function() {
            $("#account-details-form").submit();
        });
        $('#success-alert').removeClass('hidden');

    }
    
    addUser() {
        fetch('localhost:3001/api/v1/users/')
            .then(response => {
                const users = response.json();
                this.setState({ users })
            })
            .catch(err => {
                throw new Error(err)
            });
    }
    
    checkVal() {
        'use strict';
        window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      };

    render() {
        return (
            
            <div className="add-user-pg">
                <header className="header">ADD USER</header>
                <div className="add-details">
                    <div className="alert alert-success hidden" id="success-alert">
                        <button type="button" id="close-button" className="close" onClick={this.exitAlert}>x</button>
                        <span className="glyphicon glyphicon-ok"></span> User has been added!
                    </div>
                    
                    <div id="userInputFields">
                        <form className="needs-validation" id="account-details-form" novalidate>
                            <div id="account-details">
                                <div className="ac-header">Account Details</div>
                                <div className="form-row">
                                    <div className="form-group col-md-4 text-left">
                                        <label for="firstName">First Name</label>
                                        <input type="text" pattern="[A-Za-z']{1,32}" className="form-control" id="firstName" placeholder="George" required/>
                                    </div>
                                    <div className="form-group col-md-4 text-left">
                                        <label for="lastName">Last Name</label>
                                        <input type="text" pattern="[A-Za-z']{1,32}" className="form-control" id="lastName" placeholder="Burdell" required/>
                                    </div>
                                    <div className="form-group col-md-4 text-left">
                                        <label for="inputPreferredName">Preferred Name</label>
                                        <input type="text" pattern="[A-Za-z']{1,32}" className="form-control" id="inputPreferredName" placeholder="Georgie" required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-3 text-left">
                                        <label for="uid">GT Username</label>
                                        <input type="text" pattern="[A-Za-z']{1,32}" className="form-control" id="uid" placeholder="gpburdell" readOnly/>
                                    </div>
                                    <div className="form-group col-md-9 text-left">
                                    <label for="email">GT E-Mail</label>
                                    <input type="email" pattern=".+@gatech.edu" className="form-control" id="email" placeholder="georgepburdell@gatech.edu" required/>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-4 text-left">
                                        <label for="phoneNumber">Phone Number</label>
                                        <input type="tel" pattern="^\+?\d{10,13}" className="form-control" id="phoneNumber" placeholder="6781236789" required/>
                                    </div>
                                    <div className="form-group col-md-4 text-left">
                                        <label for="onCampus">GT Residency</label>
                                        <select id="onCampus" className="form-control" required>
                                            <option selected disabled value="">Choose...</option>
                                            <option value="true">On Campus</option>
                                            <option value="false">Off Campus</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-4 text-left">
                                        <label for="activeMember">Status</label>
                                        <select id="activeMember" className="form-control" required>
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
                                <select id="committees" className="form-control" required>
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
                            <button className="btn btn-secondary" type="submit" id="add-button" addUser={this.addUser.bind(this)}>Add User</button>
                        </form>
                    </div>     
                </div>           
            </div>

        );
    }
}
export default AddUser;

