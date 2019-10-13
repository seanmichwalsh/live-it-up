import React from "react";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="entire-page">
        <div className="main-page">
          <div className="main-header">HOME</div>
        </div>
        <div className="side-bar">
          <div className="gmm-header">
            <div className="left">Next GMM</div>
            <button className="right">
              <a href="/addgmm">
                <FontAwesomeIcon className="icon" icon={faPlusCircle} />
              </a>
            </button>
          </div>
          <div className="gmm-text">
            <div className="date-box">FEB 5</div>
            <div className="location-box">
              Student Center Ballroom at 7:00PM
            </div>
          </div>
          <div className="committee-times-header">
            <div class="left">COMMITTEE TIMES</div>
            <button className="right">
              <a href="/addcommitteetimes">
                <FontAwesomeIcon className="icon" icon={faPlusCircle} />
              </a>
            </button>
          </div>
          <div className="committee-times">
            Tech Team: W, 7:30 pm
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
