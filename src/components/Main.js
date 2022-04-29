import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image1 from "../images/items.jpg";
import Image2 from "../images/Taco.jpg";
import "./style.css";

function Main() {
  return (
    <Row className="main">
      <Col sm={4}>
        <div className="menu-wrap">
          <img src={Image1} alt="menu" />
        </div>
        <div className="quesadilla">
          Quesadilla <br />
          <br />
          $5.99 <br />
          <br />
          Large Quesadilla includes cheese your choice of meat, veggies and
          salsa optional.
        </div>
      </Col>
      <Col sm={8}>
        <h1 className="best-menu-items">Best Menu Items</h1>
        <div className="wrapper">
          <div className="tacos">
            Tacos <br />
            <br /> $1.75 <br />
            Asada,adobada,carnitas,tripa,len
            <br /> gua,cabeza,buche,chile verde, barbacoa, costillas en salsa,
            chorizo, chicharrón en salsa
          </div>
          <div className="torta">
            Regular Torta <br />
            <br /> $5.49 <br />
            <br />
            Bread toasted with mayo, your <br />
            choice of meat,beans,lettuce,onion,tomato,
            <br />
            jalapeños,sour cream, guacamole.
          </div>
          <div className="burrito">
            Burrito Supreme <br /> $6.49 <br />
            <br />
            Your choice of meat filled with rice, beans, veggies which include
            cabbage,onion,cilantro, with salsa. Also includes sour cream and
            cheese.
          </div>
          <div className="taco-wrap">
            <img src={Image2} alt="taco" />
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Main;
