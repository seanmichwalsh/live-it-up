import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    constructor(props) {
      super(props);
    }

render() {
    return (
        <div class="header">
            <img src={process.env.PUBLIC_URL + "/images/SCPCHeader.jpg"} alt="scpc logo"></img>
                <nav class="navbar navbar-expand-sm navbar-fnt sticky-top">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/components/home">HOME</a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link"href="/components/calendar">CALENDAR</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/components/volunteer">VOLUNTEER</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"href="/components/points">POINTS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"href="/components/directory">DIRECTORY</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/components/resources">RESOURCES</a>
                        </li>
                    </ul>
                </nav>
        </div>
    );
    }
}