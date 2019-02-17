import React, { Component } from 'react';
import './Home.css';
import ReactMarkdown from 'react-markdown';

let input = "# home page my dudes";

class Home extends Component {
    render() {
        return (
            <div>
                <ReactMarkdown source={input} />
                <div className="right-bar"> 
                    <div className="gmm-header">NEXT GMM</div>
                        <div className="gmm-text">
                            <div className="left-box">FEB 5</div>
                            <div className="right-box">Student Center Ballroom at 7:00PM</div>
                        </div>
                    <div className="committee-times-header">COMMITTEE TIMES</div>
                        <div className="committee-times">committee times here but i'm lazy</div>
                </div>
            </div>

         );
    }
}

export default Home; 