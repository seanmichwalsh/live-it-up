import React, { Component } from 'react';
import './NotFound.css';

class NotFound extends Component {
    render() {
        return (
            <div>
                <div className="entire-page">
                    <div className="main-page-notfound">
                        <div className="main-header-notfound">
                            Oops! 
                        </div>
                        <div className="sub-header">
                            We can't seem to find the page you're looking for. 
                        </div>
                        <div className="error">
                            Error: 404
                        </div>
                    </div>
                    <div className="side-img"> 
                        <img src={process.env.PUBLIC_URL + "/images/temp_error_bunny.png"} alt="Error Bunny" class = "responsive-img"></img>
                    </div>
                </div>
            </div>
         );
    }
}

export default NotFound; 