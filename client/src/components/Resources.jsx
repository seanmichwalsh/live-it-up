import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './Resources.css';

class Resources extends Component {
    render() {
        return (
            <div id="resourcePage">
                <header id="resourceHeader">RESOURCES</header>
                    <div id="allResources">
                        <a href="https://docs.google.com/spreadsheets/d/1AjOm6V3ZG0Jn0y__CR0vxmwXHJp3bOaETq18uPECrac/edit#gid=1777936343" target="_blank">
                            <div className="resourceItem">
                                <img src={process.env.PUBLIC_URL + "/images/google_sheet.png"} alt="Google Sheet Logo" className="googleFormPic"></img>
                                <div className="resourcesWords">VOLUNTEER SHEET</div>
                            </div>
                        </a>
                        <a href="https://goo.gl/forms/RjtusxgGqmRm3q6L2" target="_blank">
                            <div className="resourceItem">
                                <img src={process.env.PUBLIC_URL + "/images/google_form.png"} alt="Google Form Logo" className="googleFormPic"></img>
                                <div className="resourcesWords">MARKETING FORM</div>
                            </div>
                        </a>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdXGkAl5uTXE952FiV_XuRejOOQaCx8PnNc_f7iLag6X1U_0A/viewform?usp=sf_link" target="_blank">
                            <div className="resourceItem">
                                <img src={process.env.PUBLIC_URL + "/images/google_doc.png"} alt="Google Doc Logo" className="googleFormPic"></img>
                                <div className="resourcesWords">POINTS FORM</div>
                            </div>
                        </a>
                        <a href="scpctalk.slack.com" target="_blank">
                            <div className="resourceItem">
                                <img src={process.env.PUBLIC_URL + "/images/slack_logo.png"} alt="Slack Logo" className="googleFormPic"></img>
                                <div className="resourcesWords">SLACK: GTSCPC</div>
                            </div>
                        </a>
                        <a href="https://docs.google.com/document/d/1QpniJ7c3kMnRgT75R3jnyyKuhnNb32e3oNHW4RVtCYU/edit?usp=sharing" target="_blank">
                            <div className="resourceItem">
                                <img src={process.env.PUBLIC_URL + "/images/google_doc.png"} alt="Google Doc Logo" className="googleFormPic"></img>
                                <div className="resourcesWords">ACCOUNTABILITY</div>
                            </div>
                        </a>
                        <a href="https://asana.com" target="_blank">
                            <div className="resourceItem">
                                <img src={process.env.PUBLIC_URL + "/images/asana_logo.png"} alt="Asana Logo" id="asanaLogo"></img>
                                <div className="resourcesWords" id="asanaText">ASANA</div>
                            </div>
                        </a>                  
                    </div>
            </div>
         );
    }
}

export default Resources;