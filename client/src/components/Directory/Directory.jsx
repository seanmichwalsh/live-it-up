import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './Directory.css'

class Directory extends Component {

users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    render() {
		

        return (
            <div className="directory-page">
          			<div className="top-bar">
                    <header id="header">
						<div id="header-text">DIRECTORY</div>

						<div id="add-edit-box">
							<div className="dropdown">
								<button className="btn btn-secondary btn-small dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									ADD
								</button>
								<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a className="dropdown-item" href="/adduser">Add User</a>
									<a className="dropdown-item" href="/addcommittee">Add Committee</a>
								</div>
							</div>
						</div>
					</header>
					
                </div>
                <div className="committee-name">TECHNOLOGY</div>

            		<div className = "userLists">
						
						{this.users.map((user) =>
						<div className="individualUser">
							<a href="/edituser" target="_blank">
								<div> <img src={logo} alt={user}/></div>
								<div>Name: {user}</div>
								<div>Email: {user}</div>
								<div>Committee: {user}</div>
							</a>
  						</div>
						)}
					</div>
            </div>
        );
    }
}

export default Directory;
