import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./StyleComponent.css";

export default function Footer() {
    return (
        <div>
<Container fluid="md" className="mainFooter">
  <Row>
    <Col>
        <a href="https://www.facebook.com/campaignofficial.egy/">

       
        with <i className="fas fa-heart"></i> by 2021 Campaign  
        <span>  <i className="fas fa-code"></i> </span>

              </a>
          </Col>
  </Row>
</Container>
        </div>
    )
}
