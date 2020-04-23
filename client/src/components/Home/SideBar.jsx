import React from "react";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SideBar.css";

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
            <div id="gmm-text">
                <div id="date-box">FEB 5</div>
                <div id="location-box">
                Student Center Ballroom at 7:00PM
                </div>
            </div>
            <div className="panelHeader">COMMITTEE TIMES</div>
            <div id="committee-times">
                committee times here but i'm lazy
            </div>
    </div>
    );
};

export default SideBar