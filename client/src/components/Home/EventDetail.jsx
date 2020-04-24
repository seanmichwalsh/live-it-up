import React, { Component } from "react";
import "./EventDetail.css";

class EventDetail extends Component {
  render() {
    return (
      <div className="eventDetail">
        <img className="pic" src={this.props.URL} alt=""></img>
        <div className="description">
          <div>Date: {this.props.date}</div>
          <div>Time: {this.props.time} </div>
          <div>Location: {this.props.location}</div>
        </div>
      </div>
    );
  }
}

export default EventDetail;
