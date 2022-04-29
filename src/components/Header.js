import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image1 from "../images/Hamburger_icon.svg.png";
import Image2 from "../images/logo.jpg";
import Image3 from "../images/home.png";
import Image4 from "../images/Menu.png";
import Image5 from "../images/multiple-users-silhouette.png";
import Image6 from "../images/gallery .png";
import Image7 from "../images/communicate.png";
import "./style.css";

function Header() {
  const [hamburger, setHamburger] = useState(false);

  const clickHandler = () => {
    setHamburger(!hamburger);
    console.log(hamburger);
  };
  return (
    <Row className="header">
      <Col sm={3}>
        <button
          onFocusCapture={clickHandler}
          onBlur={clickHandler}
          className="hm-wrap"
        >
          <img id="slide" src={Image1} alt="Hamburger" />
          <h3 className="menu">Menu</h3>
        </button>

        {hamburger ? (
          <div className="hm-links">
            <div className="icon">
              <img className="home" src={Image3} />
              <h1>Home</h1>
            </div>
            <div className="icon">
              <img className="mn" src={Image4} />
              <h1>Menu</h1>
            </div>
            <div className="icon">
              <img className="test" src={Image5} />
              <h1>Testimonials</h1>
            </div>
            <div className="icon">
              <img className="glry" src={Image6} />
              <h1> Gallery</h1>
            </div>
            <div className="icon">
              <img className="cont-h" src={Image7} />
              <h1>Contact</h1>
            </div>
          </div>
        ) : null}
      </Col>
      <Col sm={7}>
        <ha className="title">Tacos Y Mariscos Sergio Taqueria</ha>
        <div className="subtitle">
          <h2 className="subtitle">Mexican Restaurant in Coalinga, CA</h2>
        </div>
      </Col>
      <Col sm={2}>
        <div className="logo">
          <img src={Image2} alt="logo" />
        </div>
      </Col>
    </Row>
  );
}

export default Header;
