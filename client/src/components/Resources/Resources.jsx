import React from "react";
import "./Resources.css";

const Resources = () => {
  return (
    <div className="entire-pg">
      <header className="main-header">RESOURCES</header>
      <div id="resources-container">
        <a
          href="https://docs.google.com/spreadsheets/d/14U26K1GhsUgjzrSAjAqoWInlMPRz02MO4CG7dr-9b9E/edit#gid=1005775354"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="resourceItem">
            <img
              src={process.env.PUBLIC_URL + "/images/google_sheet.png"}
              alt="Google Sheet Logo"
              className="resourcePic"
            ></img>
            <div className="resourcesWords">VOLUNTEER SHEET</div>
          </div>
        </a>
        <a
          href="https://gatech.co1.qualtrics.com/jfe/form/SV_4Jf6O7Vw0lClwuW"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="resourceItem">
            <img
              src={process.env.PUBLIC_URL + "/images/google_form.png"}
              alt="Google Form Logo"
              className="resourcePic"
            ></img>
            <div className="resourcesWords">MARKETING FORM</div>
          </div>
        </a>
        <a
          href="https://gatech.box.com/s/hgj2a0ptmn10u00gmcibs53f8y818x6b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="resourceItem">
            <img
              src={process.env.PUBLIC_URL + "/images/google_doc.png"}
              alt="Google Doc Logo"
              className="resourcePic"
            ></img>
            <div className="resourcesWords">PROPOSAL FORM</div>
          </div>
        </a>
        <a
          href="https://scpctalk.slack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="resourceItem">
            <img
              src={process.env.PUBLIC_URL + "/images/slack_logo.png"}
              alt="Slack Logo"
              className="resourcePic"
            ></img>
            <div className="resourcesWords">SLACK: GTSCPC</div>
          </div>
        </a>
        <a
          href="https://slack-files.com/files-pri-safe/TKM8PQGNP-F030LKM95LK/accountability_plan_sp22.pdf?c=1645460822-792ab714b1a8d492"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="resourceItem">
            <img
              src={process.env.PUBLIC_URL + "/images/google_doc.png"}
              alt="Google Doc Logo"
              className="resourcePic"
            ></img>
            <div className="resourcesWords">ACCOUNTABILITY</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Resources;
