import React, { Component } from 'react';
import $ from 'jquery';
import './Points.css';

class Points extends Component {
  render() {
    var sum = 0.0;
    $('.points').each(function() {
        sum += parseInt($(this).text());
    });
    alert(sum);
    return (
      <div id="points-pg">
        <header id="header">POINTS</header>
        <div className="points">5</div>
        <div id="mainPG">
            <div id="points-display">
                <div id="display-header">Sidartha's Total Points</div>
                <div id="user-table">
                  <table data-toggle="table" class="table table-bordered">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Points</th>
                          <th>Committee</th>
                          <th>Category</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="tr-class-1" data-title="bootstrap table">
                          <td class="td-class-1" data-title="bootstrap table">
                            <a className="date">Jan 1, 2019</a>
                          </td>
                          <td classname="points">1</td>
                          <td className="committee">PLC</td>
                          <td className="category">PLC</td>
                          <td className="description">Attended Karaoke Night in the Office</td>
                        </tr>
                        <tr class="tr-class-1" data-title="bootstrap table">
                          <td class="td-class-1" data-title="bootstrap table">
                            <a className="date">Jan 2, 2019</a>
                          </td>
                          <td classname="points">1</td>
                          <td className="committee">Ramblin' Nights</td>
                          <td className="category">Beta</td>
                          <td className="description">Teasered for Light the Night</td>
                        </tr>
                        <tr class="tr-class-1" data-title="bootstrap table">
                          <td class="td-class-1" data-title="bootstrap table">
                            <a className="date">Jan 3, 2019</a>
                          </td>
                          <td classname="points">3</td>
                          <td className="committee">Arts & Culture</td>
                          <td className="category">Charlie</td>
                          <td className="description">Volunteer at Tech Camera Action</td>
                        </tr>
                        <tr class="tr-class-1" data-title="bootstrap table">
                          <td class="td-class-1" data-title="bootstrap table">
                            <a className="date">Jan 4, 2019</a>
                          </td>
                          <td classname="points">1</td>
                          <td className="committee">Atlanta Life</td>
                          <td className="category">Alpha</td>
                          <td className="description">Volunteer at GT Night at the Aquarium</td>
                        </tr>
                        <tr class="tr-class-1" data-title="bootstrap table">
                          <td class="td-class-1" data-title="bootstrap table">
                            <a className="date">Jan 5, 2019</a>
                          </td>
                          <td classname="points">1</td>
                          <td className="committee">ETC</td>
                          <td className="category">Charlie</td>
                          <td className="description">Volunteer at Just Brew It</td>
                        </tr>
                        <tr class="tr-class-1" data-title="bootstrap table">
                          <td class="td-class-1" data-title="bootstrap table">
                            <a className="date">Jan 6, 2019</a>
                          </td>
                          <td classname="points">2</td>
                          <td className="committee">Ramblin' Nights</td>
                          <td className="category">Alpha</td>
                          <td className="description">Office Hours & Meetings Attended</td>
                        </tr>
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
