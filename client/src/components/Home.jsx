import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

let input = "# this is the home page ##";

class Home extends Component {
    render() {
        return (
            <div>
                <ReactMarkdown source={input} />
            </div>
         );
    }
}

export default Home;