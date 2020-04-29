import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#7A15A2" };

  return (
    <div className="header">
      <img
        src={process.env.PUBLIC_URL + "/images/SCPCHeader.jpg"}
        alt="SCPC Logo"
      />
      <nav className="navbar navbar-expand-sm navbar-light bg-white">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  activeStyle={activeStyle}
                  exact
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/calendar"
                  activeStyle={activeStyle}
                >
                  CALENDAR
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/volunteer"
                  activeStyle={activeStyle}
                >
                  VOLUNTEER
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/points"
                  activeStyle={activeStyle}
                >
                  POINTS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/directory"
                  activeStyle={activeStyle}
                >
                  DIRECTORY
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/resources"
                  activeStyle={activeStyle}
                >
                  RESOURCES
                </NavLink>
              </li>
            </ul>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
