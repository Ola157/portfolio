// Footer.jsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <footer className="custom-footer">
      <Container>
        <Row className="justify-content-between align-items-center">
        <Col xs={12} md={4} className="footer-section d-flex align-items-center">
            <div>
              <p>&copy; 2025 Abdullahi Alao. All Rights Reserved.</p>
              <div className="d-flex align-items-center">
                <p className="me-3">Crafted with ❤️ and a cup of tea ☕</p>
                <Button
                  onClick={scrollToTop}
                  className="footer-up-btn mb-3"
                >
                  Up
                </Button>
              </div>
            </div>
          </Col>
          {/* <Col xs={12} md={4} className="footer-section text-center">
            <p>
              <a href="/work" className="footer-link">Work</a> |{" "}
              <a href="/info" className="footer-link">Info</a>
            </p>
          </Col> */}
          <Col xs={12} md={4} className="footer-section text-lg-end">
            <a
              href="https://www.linkedin.com/in/abdullahi-alao-8787902b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon linkedin"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:abdullahialao11@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <FaEnvelope size={20} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;