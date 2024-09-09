import React from 'react';
import '../Styles/Footer.css'; // Asegúrate de tener estilos adecuados
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer1">
      <Container fluid>
        <Row>
          <Col md={4} className="text-center text-md-left">
            <h5>About Us</h5>
            <p>No se que poner</p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="text-center text-md-right">
            <h5>Contact</h5>
            <p>Email: contact@example.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
        </Row>
        <div className="text-center py-3">
          <small>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</small>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
