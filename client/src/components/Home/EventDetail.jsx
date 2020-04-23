import React, { Component } from 'react';
// import './EventDetail.css';

class EventDetail extends Component {
    render() {
        return (
            <div className="eventDetail">
                <img
                    src={this.props.URL}
                ></img>
                <div className="description">
                    Date: {this.props.date} <br></br>
                    Time: {this.props.time} <br></br>
                    Location: {this.props.location}
                </div>
            </div> 
        );
    }
}

export default EventDetail;
