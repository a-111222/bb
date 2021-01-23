import React, { Component } from "react";
import pizza from "../Video/pizza.mp4";
import "../Component/Homestyle.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Home extends Component {
  render() {
    return (
      <Container className="Container">
        <Row className="Row">
          <div className="overlay"></div>
          <Col className="Col">
            <video
            playsInline 
              autoPlay
              loop
              muted
              style={{
                position: "absoulite",
                width: "100%",
                top: 0,
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source src={pizza} type="video/mp4" />
            </video>
          </Col>
          <div className="mainimage"> </div>
        </Row>
      </Container>
    );
  }
}
