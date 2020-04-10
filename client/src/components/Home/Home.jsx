import React from "react";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="entire-page">
        <div className="main-page">
          <div className="main-header">Upcoming Events</div>
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="col">
                  <img
                    src={process.env.PUBLIC_URL + "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/91873401_10159808570233066_8270082192713973760_o.jpg?_nc_cat=103&_nc_sid=b386c4&_nc_ohc=p1BHxMzZBAEAX8MXlSW&_nc_ht=scontent-lga3-1.xx&oh=651d2f661db11f7086e3f2471429c3d9&oe=5EB67789"}
                    alt=""
                    class="responsive-img"
                  ></img>
                </div>
                <div class="col description">
                  Date: <br></br>
                  Time: <br></br>
                  Location:
                </div>
              </div>  
            </div>
            <div class="row">
              <div class="col">
                <div class="col">
                  <img
                    src={process.env.PUBLIC_URL + "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/91583754_10159806681788066_1479397022636179456_o.jpg?_nc_cat=106&_nc_sid=b386c4&_nc_ohc=p4M2KWithEAAX8WXSQc&_nc_ht=scontent-lga3-1.xx&oh=5efbaf2f05b1004f211996eb0f339f8b&oe=5EB6CF03"}
                    alt=""
                    class="responsive-img"
                  ></img>
                </div>
                <div class="col description">
                    Date: <br></br>
                    Time: <br></br>
                    Location:
                </div>
              </div>
              <div class="col">
                <div class="col">
                  <img
                    src={process.env.PUBLIC_URL + "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/92781522_10159835536373066_6090730398478761984_o.jpg?_nc_cat=102&_nc_sid=b386c4&_nc_ohc=drMr1CveAMEAX8SY46X&_nc_ht=scontent-lga3-1.xx&oh=369a5d8588dfdc39350bed3d52d3d7c4&oe=5EB6E3FD"}
                    alt=""
                    class="responsive-img"
                  ></img>
                </div>
                <div class="col description">
                    Date: <br></br>
                    Time: <br></br>
                    Location:
                </div>
              </div>
              <div class="col">
                <div class="col">
                  <img
                    src={process.env.PUBLIC_URL + "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/92455259_10159830710513066_410111927285448704_o.jpg?_nc_cat=103&_nc_sid=b386c4&_nc_ohc=bCTX0APy8HUAX_ctF-_&_nc_ht=scontent-lga3-1.xx&oh=e477e48910e3303ba017c32834f2d462&oe=5EB62EDE"}
                    alt=""
                    class="responsive-img"
                  ></img>
                </div>
                <div class="col description">
                    Date: <br></br>
                    Time: <br></br>
                    Location:
                </div>
              </div>
            </div>
          </div>  
        </div>
        <div className="side-bar">
          <div className="gmm-header">
            <div className="left">Next GMM</div>
            <button className="right">
              <a href="/#">
                <FontAwesomeIcon className="icon" icon={faPlusCircle} />
              </a>
            </button>
          </div>
          <div className="gmm-text">
            <div className="date-box">FEB 5</div>
            <div className="location-box">
              Student Center Ballroom at 7:00PM
            </div>
          </div>
          <div className="committee-times-header">COMMITTEE TIMES</div>
          <div className="committee-times">
            committee times here but i'm lazy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
