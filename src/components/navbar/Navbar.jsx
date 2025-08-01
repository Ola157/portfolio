import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Switcher from "./Switcher.jsx"; // Import the Switcher component
import "./Navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar className="custom-navbar" expand="lg" variant="dark">
      <Container className="d-flex align-items-center">
        {/* Left-side brand */}
        <Navbar.Brand href="/" className="navbar-brand d-none d-lg-block">
          Abdullahi Alao
        </Navbar.Brand>

        {/* Center Switcher */}
        <div className="switcher-container">
          <Switcher />
        </div>

        {/* Right-side icons */}
        <div className="navbar-icons">
          <a
            href="https://www.linkedin.com/in/abdullahi-alao-8787902b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-button linkedin"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/Ola157"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-button"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;