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
          <div className="gmm-header">NEXT GMM</div>
          <div className="gmm-text">
            <div className="date-box">FEB 5</div>
            <div className="location-box">
              Student Center Ballroom at 7:00PM
            </div>
          </div>
          <div className="committee-times-header">COMMITTEE TIMES</div>
          <div className="committee-times">
            committee times here but i'm lazy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
