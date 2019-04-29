import React, { Component } from 'react';
import './Points.css';


class Points extends Component {
  render() {
    return (
      <div id="points-pg">
        <header className="header">POINTS</header>
        <div id="mainPG">
            <div id="points-display">
                <div id="display-header">Sidartha's Total Points</div>
            </div>
            <div id="points-sidebar">
                <div id="req-header">REQUIREMENTS</div>
            </div>
        </div>
      </div>
    );
  }
}

export default Points;
