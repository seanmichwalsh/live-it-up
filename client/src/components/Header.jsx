import React from 'react';
import './Header.css';
import { Col, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Header extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.state = {
        collapsed: true
      };
    }
  
    toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }

render() {
    return (
        <div class="header">
            <img src={process.env.PUBLIC_URL + "/images/SCPCHeader.jpg"} alt="scpc logo"></img>
            
            <Navbar color="faded" light>
                <Nav class="navbar">
                    <ul class="navbar-nav">
                        <li><NavLink href="/components/home">HOME</NavLink></li>
                        <li><NavLink href="/components/calendar">CALENDAR</NavLink></li>
                        <li><NavLink href="/components/volunteer">VOLUNTEER</NavLink></li>
                        <li><NavLink href="/components/points">POINTS</NavLink></li>
                        <li><NavLink href="/components/directory">DIRECTORY</NavLink></li>
                        <li><NavLink href="/components/resources">RESOURCES</NavLink></li>
                    </ul>
                </Nav>
            </Navbar>
        </div>
    );
    }
}