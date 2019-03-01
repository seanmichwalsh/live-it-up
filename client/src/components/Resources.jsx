import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './Resources.css';

let input = "# Resources for SCPCers\n\n**Volunteer Sheet**: https://docs.google.com/spreadsheets/d/1AjOm6V3ZG0Jn0y__CR0vxmwXHJp3bOaETq18uPECrac/edit#gid=1777936343\n\n**Marketing form**: https://goo.gl/forms/RjtusxgGqmRm3q6L2\n\n**Points Form**: https://docs.google.com/forms/d/e/1FAIpQLSdXGkAl5uTXE952FiV_XuRejOOQaCx8PnNc_f7iLag6X1U_0A/viewform?usp=sf_link\n\n**Asana**: https://asana.com";

class Resources extends Component {
    render() {
        return (
            <div>
                <header className="header">RESOURCES</header>
                <div className="resource-box">
                    <div className="volunteer-sheet">
                        {/* <img src={process.env.PUBLIC_URL + "/images/google_sheet.png"} alt="Google Sheet Logo" class="half"></img> */}
                        <div className="vs-words">VOLUNTEER SHEET</div>
                    </div>
                    <div className="marketing">MARKETING FORM</div>
                    <div className="points">POINTS FORM</div>
                    <div className="slack">SLACK: GTSCPC</div>
                    <div className="accountability">ACCOUNTABILITY</div>
                    <div>I'm in the process of editing this page to match the XD Files.</div>
                </div>
                <ReactMarkdown source={input} />
            </div>
         );
    }
}

export default Resources;