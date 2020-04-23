import React from "react";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SideBar.css';

const SideBar = () => {
    return (
        <div id="side-bar">
            <div id="gmm-header">
                <div className="panelHeader">Next GMM</div>
                <button id="circleIcon">
                    <a href="/#">
                    <FontAwesomeIcon id="icon" icon={faPlusCircle} />
                    </a>
                </button>
            </div>
            <div className="text">
                <div className="text">
                    Feb 5 Student Center Ballroom at 7:00PM
                </div>
            </div>
            <div className="panelHeader">COMMITTEE TIMES</div>
            <div className="text">
                committee times here but i'm lazy
            </div>
    </div>
    );
};

export default SideBar