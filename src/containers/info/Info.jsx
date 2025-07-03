import React, { useState, useEffect, useRef } from "react";
import {
  FaTools,
  FaServer,
  FaCode,
  FaDatabase,
  FaBrain,
  FaUsers,
  FaWindows,
  FaMicrosoft,
  FaLaptopCode,
  FaMobileAlt,
  FaProjectDiagram,
  FaCogs,
} from "react-icons/fa";
import { Container, Row, Col, Nav, Navbar, Carousel } from "react-bootstrap";
import "./Info.css";
import "./CustomButton.css";
import { Timeline } from "../../components";
import { getDoc, doc } from "firebase/firestore";

const CustomMenuButton = ({ isExpanded, onToggle }) => {
  return (
    <button
      aria-label="Menu"
      className="menuToggle"
      aria-expanded={isExpanded}
      aria-haspopup="true"
      onClick={onToggle}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  );
};

const Info = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("For everyone");
  const [activeMenu, setActiveMenu] = useState("about-me");
  const [scrambledText, setScrambledText] = useState("");
  const [resumeUrl, setResumeUrl] = useState(
    "/resume/Abdullahi_Alao_Resume_Junior_Developer.pdf"
  );
  const [displayedText, setDisplayedText] = useState("");

  const sectionsName = [
    "About Me",
    "Programming Journey",
    "Professional Experience & Projects",
    "Hobbies & Inspirations",
    "Contact",
  ];

  const sections = {
    "about-me": useRef(null),
    "programming-journey": useRef(null),
    "professional-experience-projects": useRef(null),
    "hobbies-inspirations": useRef(null),
    contact: useRef(null),
  };

  const content = {
    "For everyone":
      "Hi, I'm a recent graduate from Humber Polytechnic with a GPA above 90. When I'm not coding, I'm usually out in nature, playing soccer, or thinking up new ideas.",
    Recruiters:
      "Looking for a Junior Developer role where I can apply my technical skills, collaborate with a team, and contribute to practical solutions.",
  };

  // Toggle menu visibility
  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  // Close the menu automatically when clicking a link
  const handleLinkClick = (key) => {
    setActiveMenu(key); // Set the active menu item
    setIsExpanded(false); // Close the menu
  };

  useEffect(() => {
    const fullText = content[activeSection];
    if (!fullText) {
      setDisplayedText("");
      return;
    }

    let index = 0;
    let currentText = "";

    const interval = setInterval(() => {
      if (index < fullText.length) {
        currentText += fullText[index];
        setDisplayedText(currentText);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [activeSection]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveMenu(entry.target.id);
          }
        });
      },
      { root: null, threshold: 0.3 }
    );

    Object.values(sections).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sections).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sections]);

  return (
    <Container>
      <Row>
        {/* Responsive Sidebar/Nav */}
        <Col md={3} className="info-sidebar d-none d-md-block">
          <Nav className="info-sidebar-nav flex-column">
            {Object.keys(sections).map((key, index) => (
              <Nav.Link
                key={key}
                href={`#${key}`}
                className={`info-nav-link ${
                  activeMenu === key ? "info-nav-active" : ""
                }`}
              >
                {sectionsName[index]}
              </Nav.Link>
            ))}
          </Nav>
        </Col>

        {/* Collapsible Navbar for Mobile */}
        <Col xs={12} className="d-md-none mt-3 custom-menu-btn">
          <CustomMenuButton isExpanded={isExpanded} onToggle={handleToggle} />
          <Navbar.Collapse
            id="mobile-navbar"
            className={isExpanded ? "show" : ""}
          >
            <Nav className="flex-column">
              {Object.keys(sections).map((key, index) => (
                <Nav.Link
                  key={key}
                  href={`#${key}`}
                  className={`info-nav-link ${
                    activeMenu === key ? "info-nav-active" : ""
                  }`}
                  onClick={() => handleLinkClick(key)} // Close menu on link click
                >
                  {sectionsName[index]}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Col>

        {/* Main Content */}
        <Col md={9} id="Content" className="info-content mt-4">
          {/* Tabs Selector */}
          <Nav variant="tabs" className="info-tabs mb-4">
            {Object.keys(content).map((key) => (
              <Nav.Item key={key} className="info-tab-item">
                <Nav.Link
                  className={`info-tab-link ${
                    activeSection === key ? "info-tab-active" : ""
                  }`}
                  onClick={() => setActiveSection(key)}
                >
                  {key}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          {/* Dynamic Content with Scrambled Animation */}
          <div className="info-dynamic-content">
            <h1 className="info-dynamic-text mb-5">{displayedText}</h1>
          </div>

          {/* Sections for Scrolling */}
          <div
            id="about-me"
            ref={sections["about-me"]}
            className="info-section"
          >
            <h2>About Me</h2>
            <Row>
              {/* Left Column: Carousel */}
              <Col md={6}>
                <div className="about-carousel">
                  <Carousel controls={true} indicators={false}>
                    {["./images/Info/1.png", "./images/Info/2.png"].map(
                      (src, index) => (
                        <Carousel.Item key={index}>
                          <img
                            className="d-block w-100 rounded-4"
                            src={src}
                            alt={`Slide ${index + 1}`}
                          />
                        </Carousel.Item>
                      )
                    )}
                  </Carousel>
                </div>
              </Col>

              {/* Right Column: Text */}
              <Col md={6}>
                <div className="about-text">
                  <p>
                    I'm a Computer Programming graduate from Humber Polytechnic,
                    ready to apply my skills in junior developer roles.
                  </p>
                  <p>
                    I enjoy building software that solves real problems and
                    improves how people live or work. I'm especially interested
                    in joining a team where I can grow, contribute, and keep
                    learning new technologies.
                  </p>
                </div>
              </Col>
            </Row>
          </div>

          <div
            id="programming-journey"
            ref={sections["programming-journey"]}
            className="info-section"
          >
            <h2>Programming Journey</h2>
            <p>
              My journey began four years ago with my first Python script using
              W3Schools. That small experience sparked a long-term interest in
              coding. Since then, I’ve built Python games, and automation tools.
              I also explored web scraping and browser automation with Selenium.
            </p>
            <p>
              At Humber, I gained hands-on experience building projects with the
              MERN stack, Django, and Java. I worked with tools like Git,
              Postman, and Firebase while collaborating on both solo and team
              projects. I’m always building, always curious, and always learning
              — applying what I learn to solve real problems.
            </p>

            <div className="timeline-container">
              <Timeline />
            </div>
          </div>
          <div
            id="professional-experience-projects"
            ref={sections["professional-experience-projects"]}
            className="info-section"
          >
            <h2>Professional Experience & Projects</h2>
            <p>
              During my time as a Peer Tutor at Humber Polytechnic, I supported
              fellow students by simplifying complex topics and guiding them
              through hands-on problem-solving. This experience taught me how to
              explain ideas clearly, be patient, and adapt my approach based on
              different learning styles.
            </p>
            <div>
              <p>
                You can explore my projects on the <strong>Work Page</strong>.
              </p>
              <p>
                <strong>Technical Stack:</strong>
              </p>

              <ul>
                <li>
                  <FaCode className="icon" />{" "}
                  <strong>Programming Languages:</strong>
                  JavaScript, Python, Java,
                </li>

                <li>
                  <FaLaptopCode className="icon" />{" "}
                  <strong>Frontend Development:</strong>
                  React, Next.js, HTML, CSS, Tailwind CSS, Bootstrap
                </li>

                <li>
                  <FaServer className="icon" /> <strong>Backend & API:</strong>
                  Node.js, Express.js, Django, Flask, Java (Spring Boot), REST
                  APIs
                </li>

                <li>
                  <FaDatabase className="icon" />{" "}
                  <strong>Databases & Storage:</strong>
                  MongoDB, SQL, Firebase
                </li>

                <li>
                  <FaCogs className="icon" />{" "}
                  <strong>Version Control & Tools:</strong>
                  Git, GitHub, Postman, Vercel, Git CLI
                </li>

                <li>
                  <FaTools className="icon" />{" "}
                  <strong>Automation & Scripting:</strong>
                  Python scripting, Telegram Bots, API automation, Web scraping
                </li>

                <li>
                  <FaMobileAlt className="icon" />{" "}
                  <strong>Mobile Development:</strong>
                  React Native
                </li>

                <li>
                  <FaBrain className="icon" /> <strong>CS Fundamentals:</strong>
                  Data Structures, Algorithms, Problem Solving, SDLC, Agile
                </li>

                <li>
                  <FaUsers className="icon" /> <strong>Soft Skills:</strong>
                  Teamwork, Communication, Time Management, Adaptability,
                  Mentoring
                </li>
              </ul>
            </div>
          </div>

          <div
            id="hobbies-inspirations"
            ref={sections["hobbies-inspirations"]}
            className="info-section"
          >
            <h2>Hobbies & Inspirations</h2>
            <Row>
              {/* Left Column: Carousel */}
              <Col md={6}>
                <div className="about-carousel">
                  <Carousel controls={true} indicators={false}>
                    {[
                      "./images/Hobbies/1.jpg",
                      "./images/Hobbies/2.jpg",
                      "./images/Hobbies/3.jpg",
                      "./images/Hobbies/4.jpg",
                      "./images/Hobbies/5.jpg",
                      "./images/Hobbies/6.jpg",
                    ].map((src, index) => (
                      <Carousel.Item key={index}>
                        <img
                          className="d-block w-100 rounded-4 mb-3"
                          src={src}
                          alt={`Hobby ${index + 1}`}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              </Col>

              {/* Right Column: Text */}
              <Col md={6}>
                <div className="hobbies-text">
                  <p>
                    I enjoy exploring nature, it helps me think clearly and
                    unwind after a long day. Playing soccer is another way I
                    stay active and build teamwork skills
                  </p>
                  <p>
                    I often spend time brainstorming ideas for new projects or
                    ways to make life easier with code. I'm inspired by the
                    mindset of being "so good they can't ignore you" — it
                    reminds me to focus on building real skills and staying
                    consistent.
                  </p>
                </div>
              </Col>
            </Row>
          </div>

          <div id="contact" ref={sections.contact} className="info-section">
            <h2 className="contact-header">Contact</h2>
            <div className="contact-content">
              {/* Green Dot */}
              <div style={{ position: "relative", top: 15 }}>
                <div className="radius"></div>
                <div className="dot"></div>
              </div>
              {/* Text */}
              <p className="contact-text">Exploring new opportunities</p>
            </div>
            <div className="contact-links">
              <a
                href="mailto:abdullahialao11@gmail.com"
                className="contact-item"
                target="_self"
                rel="noopener noreferrer"
              >
                abdullahialao11@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/abdullahi-alao-8787902b7/"
                className="contact-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Abdullahi Alao
              </a>
              <a
                href={resumeUrl}
                className="contact-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <a
                href="https://github.com/Ola157"
                className="contact-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Info;
