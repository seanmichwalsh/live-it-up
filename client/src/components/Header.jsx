import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <img
          src={process.env.PUBLIC_URL + "/images/SCPCHeader.jpg"}
          alt="SCPC Logo"
        />
        {/* <nav className="navbar navbar-expand-sm navbar-fnt sticky-top">
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
                    </nav> */}

        <nav class="navbar navbar-expand-sm navbar-light bg-white">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarToggler">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/calendar">
                    CALENDAR
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/volunteer">
                    VOLUNTEER
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/points">
                    POINTS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/directory">
                    DIRECTORY
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/resources">
                    RESOURCES
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
