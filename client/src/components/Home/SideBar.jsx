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
                    Lorem ipsum dolor sit amet, consectetur.
                </div>
            </div>
            <div className="panelHeader">COMMITTEE TIMES</div>
            <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu tellus et nisi iaculis iaculis vel ut ante. Quisque aliquet, velit eget dapibus accumsan, purus.
            </div>
    </div>
    );
};

export default SideBar