import React from "react";
import "./Events.css";

const Events = () => {
  return (
    <div className="entire-pg">
      <div className="main-header">EVENTS</div>
      <div id="tableHold">
        <table className="table table-striped" id="eventTable">
          <thead>
            <tr>
              <th scope="col" className="col-name">
                Event Name
              </th>
              <th scope="col" className="col-description">
                Description
              </th>
              <th scope="col" className="col-other">
                Date
              </th>
              <th scope="col" className="col-other">
                Time
              </th>
              <th scope="col" className="col-other">
                Location
              </th>
              <th scope="col" className="col-other">
                Fee(s)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <a href="https://studentcenter.gatech.edu/events/gt-night">
                  GT Night In
                </a>
              </th>
              <td>
                Come spend a night in Vegas filled with your favorite classic
                games, food, and prizes! Come dressed in your glitziest clothes
                (or not) and be ready to have fun! RSVP to start with more poker
                chips; walk-ins are welcome! Don’t forget to bring your lucky
                charms.
              </td>
              <td>Tuesday, March 5, 2019</td>
              <td>6:00 pm - 9:00 pm</td>
              <td>Student Center Ballroom</td>
              <td>Free</td>
            </tr>
            <tr>
              <th scope="row">
                <a href="https://studentcenter.gatech.edu/events/take-prof">
                  Take-A-Prof
                </a>
              </th>
              <td>
                This semester, we are bringing you the nostalgic joys of retro
                arcade games. Invite your professor, TA, RA/PL, or mentor to
                lunch and get to know them better over a few rounds of Street
                Fighter, or perhaps you would rather work together to save
                Princess Peach from Bowser. You get lunch and unlimited plays at
                our 3 arcade game machines.
              </td>
              <td>Thursday, March 14, 2019</td>
              <td>11:00 am - 1:00 pm</td>
              <td>Student Center Ballroom</td>
              <td>Tickets are $4 ($8 for you and your guest)</td>
            </tr>
            <tr>
              <th scope="row">Blank Event</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Events;
