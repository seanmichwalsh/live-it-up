import React, { Component } from 'react';
import $ from 'jquery';

import './AddCommittee.css';

class AddCommittee extends Component {

    userEdited() {
        $('#success-alert').removeClass('hidden');
    }

    exitAlert() {
        $('#success-alert').addClass('hidden');
    }

    render() {
        return (
            <div className="add-user-pg">
                <header className="header">ADD COMMITTEE</header>
                <div className="add-details">
                    <div class="alert alert-success hidden" id="success-alert">
                        <button type="button" id="close-button" class="close" onClick={this.exitAlert}>x</button>
                        <span class="glyphicon glyphicon-ok"></span> Committee has been added!
                    </div>
                    
                    <div id="userInputFields">
                        <div id="account-details">
                            <div className="ac-header">Committee Details</div>
                            <form>
                                <div class="form-row">
                                    <div class="form-group col-md-6 text-left">
                                        <label for="inputName">Name</label>
                                        <input type="text" class="form-control" id="inputName" placeholder="Committee Name" required/>
                                    </div>
                                    <div class="form-group col-md-6 text-left">
                                        <label for="inputAbb">Abbreviation</label>
                                        <input type="text" class="form-control" id="inputAbb" placeholder="If applicable" />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6 text-left">
                                        <label for="inputChairName">Chair Name</label>
                                        <input type="text" class="form-control" id="inputChairName" placeholder="Name" required/>
                                    </div>
                                    <div class="form-group col-md-6 text-left">
                                        <label for="inputStatus">Category</label>
                                        <select id="inputStatus" class="form-control" required>
                                            <option selected disabled value="">Choose...</option>
                                            <option value="Primary">Primary</option>
                                            <option value="Auxillary">Auxillary</option>
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
                    <button type="button" type="submit" id="add-button" class="btn btn-secondary" onClick={this.userEdited}>Add Committee</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddCommittee;