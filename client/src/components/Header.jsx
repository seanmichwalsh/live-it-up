import React from 'react';
<<<<<<< HEAD
import './Header.css';

import { Link } from 'react-router-dom';
=======
import { Col, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
>>>>>>> add nav bar

export default class Header extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div className="header">
                <img src={process.env.PUBLIC_URL + "/images/SCPCHeader.jpg"} alt="SCPC Logo"></img>
                    <nav className="navbar navbar-expand-sm navbar-fnt sticky-top">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">HOME</Link>
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link" to="/calendar">CALENDAR</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/calendar">VOLUNTEER</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/points">POINTS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/directory">DIRECTORY</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/resources">RESOURCES</Link>
                            </li>
                        </ul>
                    </nav>
            </div>
        );
    }
}