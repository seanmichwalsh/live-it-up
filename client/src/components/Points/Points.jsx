import React, { Component } from 'react';
import $ from 'jquery';
import './Points.css';
import jsonData from "./testNew.json";
import pointsDeats from "./pointsDetail.json";

class Points extends Component {

  constructor(props) {
    super(props);
    this.state = {
      admin: false
    };
  }

  render() {
    var sum = 0.0;
    var datas = jsonData;
    var points = pointsDeats.pointsDetail;
    var galList;

    console.log(Object.keys(datas));
    console.log(Object.keys(points));
    if (this.state.admin) {
      galList = Object.keys(datas).map((item, index) => 
        <tr className="tr-className-1" data-title="bootstrap table">
          <td className="td-className-1" data-title="bootstrap table">
            <a className="date">{datas[item].semester}</a>
          </td>
          <td classname="group1">{datas[item].group1}</td>
          <td className="group2">{datas[item].group2}</td>
          <td className="group3">{datas[item].group3}</td>
          <td className="committeeEvents">{datas[item].committeeEvents}</td>
          <td className="plc">{datas[item].plc}</td>
          <td classname="aux">{datas[item].aux}</td>
          <td className="officeHours">{datas[item].officeHours}</td>
          <td className="committeeMeetings">{datas[item].committeeMeetings}</td>
        </tr>
        );
    } else {

    galList = Object.keys(points).map((item, index) => 
      <tr className="tr-className-1" data-title="bootstrap table">
        <td className="td-className-1" data-title="bootstrap table">
          <a className="date">{points[item].semester}</a>
        </td>
        <td classname="group1">{points[item].date}</td>
        <td className="group2">{points[item].category}</td>
        <td className="points">{points[item].points}</td>
      </tr>
      );
  }

   
    return (
      <div id="points-pg">
        <header id="header">POINTS</header>
        <div id="mainPG">
            <div id="points-display">
                <div id="display-header">Sidartha's Total Points: </div>
                <div id="user-table">
                  <table data-toggle="table" className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Semester</th>
                          <th>Category 1 Points</th>
                          <th>Category 2 Points</th>
                          <th>Category 3 Points</th>
                          <th>Committee Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        {galList}
                      </tbody>
                    </table>
                </div>
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
