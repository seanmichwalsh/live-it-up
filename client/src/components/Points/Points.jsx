import React, { Component } from 'react';
import $ from 'jquery';
import './Points.css';
import points from "./test.json";

class Points extends Component {


  render() {
    var sum = 0.0;
    var datas = points.data.schema;
    console.log(datas);
    console.log(Object.keys(datas));
    const galList = Object.keys(datas).map((item, index) => 
      <tr className="tr-className-1" data-title="bootstrap table">
        <td className="td-className-1" data-title="bootstrap table">
          <a className="date">{datas[item].semester}</a>
        </td>
        <td classname="points">{datas[item].group1}</td>
        <td className="committee">{datas[item].group2}</td>
        <td className="category">{datas[item].group3}</td>
        <td className="description">{datas[item].committee}</td>
      </tr>
      );

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
};
}
export default Points;