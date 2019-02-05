import React, { Component } from 'react';
import './Home.css';
import ReactMarkdown from 'react-markdown';

let input = "# home page my dudes ##";

class Home extends Component {
    render() {
        return (
            <div>
                <ReactMarkdown source={input} />
                <div class="right-bar"> 
                    <div class="gmm-header">NEXT GMM</div>
                        <div class="gmm-text">
                            <div class="left-box">FEB 5</div>
                            <div class="right-box">Student Center Ballroom at 7:00PM</div>
                        </div>
                    <div class="committee-times-header">COMMITTEE TIMES</div>
                        <div class="committee-times">committee times here but i'm lazy</div>
                </div>
            </div>

         );
    }
}

export default Home; 