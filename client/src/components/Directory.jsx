import React, { Component } from 'react';
import logo from '../images/logo.svg';
import ReactDOM from 'react-dom';
import './Directory.css'

class Directory extends Component {

users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


    render() {
        return (
            <div className="directory-page">
          			<h1 className="title">
          				Directory
          			</h1>
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