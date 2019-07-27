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

    postnewcommittee() {
        let name = document.getElementById('name').value;
        let type = document.getElementById('type').value;

        fetch('http://localhost:3001/api/v1/committees/', {
            method: 'POST',
            body:JSON.stringify({name:name, type:type})
        }).then((res) => res.json())
        .then((data) =>  console.log(data))
        .catch((err)=> console.log(err))

    }

    newBoy() {
        let name = document.getElementById('name').value;
        let type = document.getElementById('type').value;
        console.log(name);
        console.log(type);
    }
    

    render() {
        return (
            <div className="add-user-pg">
                <header className="header">ADD COMMITTEE</header>
                <div className="add-details">
                    <div className="alert alert-success hidden" id="success-alert">
                        <button type="button" id="close-button" className="close" onClick={this.exitAlert}>x</button>
                        <span className="glyphicon glyphicon-ok"></span> Committee has been added!
                    </div>
                    
                    <div id="userInputFields">
                        <form>
                            <div id="account-details">
                            <div className="ac-header">Committee Details</div>
                            <div className="form-row">
                                <div className="form-group col-md-12 text-left">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Committee Name" required/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6 text-left">
                                    <label htmlFor="type">Type of Committee</label>
                                    <input type="text" className="form-control" id="type" placeholder="Event Planning" required/>
                                </div>
                                <div className="form-group col-md-6 text-left">
                                    <label htmlFor="inputStatus">Category</label>
                                    <select id="inputStatus" className="form-control" required>
                                        <option defaultValue disabled value="">Choose...</option>
                                        <option value="Primary">Primary</option>
                                        <option value="Auxillary">Auxillary</option>
                                    </select>
                                </div>
                            </div>
                            </div>
                            <div id="committee-access">
                                <div className="cm-header">Committee Access</div>
                                I'm going to add a box with all the users so you can click users and add them to your new committee with a search feature.
                                Give me some time for this.
                            </div>
                            <button type="button" id="add-button" className="btn btn-secondary" onClick={this.postnewcommittee}>Add Committee</button>

                        </form>
                    </div>
                        
                        
                </div>
            </div>

        );
    }
}

export default AddCommittee;