import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom'; 
import ReactDOM from 'react-dom';
import './Directory.css'

class Directory extends Component {

users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    render() {
		

        return (
            <div className="directory-page">
          			<div className="top-bar">
                    <header className="header">DIRECTORY</header>
                    <div className="add-edit-box">
						<div class="dropdown">
							<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								ADD/EDIT
							</button>
							<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<a class="dropdown-item" href="/adduser">Add User</a>
								<a class="dropdown-item" href="/edituser">Edit User</a>
								<a class="dropdown-item" href="/addcommittee">Add Committee</a>
								<a class="dropdown-item" href="/editcommittee">Edit Committee</a>
							</div>
						</div>
                    </div>
                </div>
                <div className="committee-name">TECHNOLOGY</div>

            		<p className = "list">
						
						{this.users.map((user) =>
						<div>
  							<ul> <img src={logo} alt={user}/></ul>
  							<ul> Name: {user}</ul>
  							<ul>Email: {user}</ul>
  							<ul>Committee: {user}</ul>
  						</div>
						)}
					</p>
            </div>
        );
    }
}

export default Directory;