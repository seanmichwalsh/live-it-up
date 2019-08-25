import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import CommitteeForm from'../CommitteeForm';
import CommitteeAccess from '../CommitteeAccess';
import './AddCommittee.css';

class EditCommittee extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            inputField: '',
            name: null,
            type: null
        };
      }
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            type: null
        };
    };

    componentDidMount() {
        this.fetchCommitteeData();
    }

    fetchCommitteeData(){
        const url = "http://localhost:3001/api/v1/committees/";
        return fetch(url)
            .then(response => response.json())
            .then(parsedJSON => this.setState({results: parsedJSON.results}))
            .catch(error => console.log(error));
    }

    postNewCommittee() {
        let name = document.getElementById('name').value;
        let type = document.getElementById('type').value;

        fetch('http://localhost:3001/api/v1/committees/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({name:name, type:type})
        }).then((res) => res.json())
        .then((data) =>  console.log(data))
        .catch((err)=> console.log(err)) 
    }

    formRetrieval = (name, type) => {
        this.setState({
            committeeName: name,
            committeeType: type
        })
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
                    <div id="container">
                        <CommitteeForm className="account-details" formRetrieval={formInfo} />
                        <CommitteeAccess />
                    </div>
                    <button type="button" id="add-button" className="btn btn-secondary" onClick={(event) => { this.postNewCommittee(); func2();}}>Add Committee</button>     
                </div>
            </div>

        );
    }
}

export function fetchCommittee() {
    return dispatch => {
        dispatch(fetchCommitteeBegin());
        return fetch('http://localhost:3001/api/v1/committees/'), {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({name:nameHere, type:typeHere})
        }.then((res) => res.json())
        .then((data) =>  console.log(data))
        .catch((err)=> console.log(err)) 
    }
}

EditCommittee.PropTypes = {

};

export default EditCommittee;