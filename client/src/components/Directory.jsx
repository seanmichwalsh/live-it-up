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
                    <header className="header">
						<div id="header-text">DIRECTORY</div>
						<div id="add-edit-box">
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
					</header>
					

                </div>
                <div className="committee-name">TECHNOLOGY</div>

            		<div className = "userLists">
						
						{this.users.map((user) =>
						<div className="individualUser">
  							<div> <img src={logo} alt={user}/></div>
  							<div>Name: {user}</div>
  							<div>Email: {user}</div>
  							<div>Committee: {user}</div>
  						</div>
						)}
					</div>
            </div>
        );
    }
}

export default Directory;