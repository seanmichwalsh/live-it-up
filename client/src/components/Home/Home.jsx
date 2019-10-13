import React from "react";
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
            <div class="left">NEXT GMM</div>
            <div class="right"><a href="/addgmm">+</a></div>
          </div>
          <div className="gmm-text">
            <div className="date-box">FEB 5</div>
            <div className="location-box">
              Student Center Ballroom at 7:00PM
            </div>
          </div>
          <div className="committee-times-header">
            <div class="left">COMMITTEE TIMES</div>
            <div class="right"><a href="/addcommitteetimes">+</a></div>
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
