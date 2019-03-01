import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Directory.css';
import AddUser from './AddUser';
import EditUser from './EditUser';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom'; 


class Directory extends Component {
    constuctor() {
        this.routeChange = this.routeChange.bind(this);
         }

        routeChange(){
          let path = `newPath`;
          this.props.history.push(path);
        }

    render() {

        return (
            <div className="directory-page"> 
                <div className="top-bar">
                    <header className="header">DIRECTORY</header>
                    <div className="add-edit-box">
                        <div className="editbox" class="char float-right">
                            <Link to="/adduser">ADD USER</Link>
                        </div>
                        <div className="editbox" class="char float-right">
                            <Link to="/edituser" >EDIT USER</Link>
                        </div>
                        <div className="editbox" class="char float-right">
                            <Link to="/addcommittee">ADD COMMITTEE</Link>
                        </div>
                        <div className="editbox" class="char float-right">
                            <Link to="/editcommittee">EDIT COMMITTEE</Link>
                        </div>
z                    </div>
                </div>
                <div className="committee-name">TECHNOLOGY</div>
            </div>
        );
    }
}

export default Directory;