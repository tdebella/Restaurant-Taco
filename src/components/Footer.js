import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image1 from "../images/53948 .png";
import Image2 from "../images/1559063344black-color-instagram-icon-png.png";
import "./style.css";

function Footer() {
  return (
    <Row className="footer">
      <Col sm={3}>
        <h3 className="contact">Contact</h3>
        <div className="c-wrap">
          <p>
            Call Now <br />
            (559)821-8006
          </p>
        </div>
      </Col>
      <Col sm={2}>
        <div className="social">
          <img className="twitter" src={Image1} alt="twitter-icon" />
          <img className="instagram" src={Image2} alt="instagram-icon" />
        </div>
      </Col>
      <Col sm={3}>
        <h3 className="ad">Address</h3>
          <div className="txt-wrap">
            <p>
              Get Directions <br />
              320 East Elm Avenue <br />
              Coalinga, CA 93210
            </p>
          </div>
      </Col>
      <Col sm={4}>
        <h3 className="business-hour">Business Hours</h3>
        <div className="wrap">
          <ul className="business-hours-1">
            Mon: 5:00 AM - 10:00 PM <br />
            Tue: 5:00 AM - 10:00 PM <br />
            Wed: 5:00 AM - 10:00 PM <br />
            Thu: 5:00 AM - 10:00 PM <br />
          </ul>
          <ul className="business-hours-2">
            Fri: 5:00 AM - 12:00 AM <br />
            Sat: 5:00 AM - 12:00 AM <br />
            Sun: 5:00 AM - 10:00 PM <br />
          </ul>
        </div>
      </Col>
    </Row>
  );
}

export default Footer;
