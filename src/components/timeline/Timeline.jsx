import React from "react";
import { FaRocket, FaCode, FaDesktop, FaBrain, FaSchool, FaTools, FaChartLine } from "react-icons/fa";
import "./Timeline.css";

const timelineData = [
  {
    icon: <FaCode />,
    title: "Started with Python",
    description: "Wrote my first lines of code on the Pydroid app using W3Schools. That simple experience got me hooked on programming.",
  },
  {
    icon: <FaDesktop />,
    title: "Online Courses",
    description: "Built websites with HTML, CSS, and JavaScript. Learned Git, GitHub, and the basics of Object-Oriented Programming.",
  },
  {
    icon: <FaBrain />,
    title: "Self-learning",
    description: "Practiced coding on LeetCode and other platforms. Studied data structures like linked lists, trees, and sorting algorithms.",
  },
  {
    icon: <FaSchool />,
    title: "Humber Polytechnic",
    description: "Gained hands-on experience with the MERN stack, Java, SQL, and backend development. Built real-world apps through team and solo projects.",
  },
  {
    icon: <FaTools />,
    title: "Version Control & Deployment",
    description: "Used Git and GitHub daily for collaboration. Deployed apps with Firebase and followed good development practices.",
  },
  {
    icon: <FaRocket />,
    title: "Current Focus",
    description: "Advancing my backend development skills with Node.js by building practical web applications, integrating RESTful APIs, and managing data with MongoDB and SQL."
  },
  {
    icon: <FaChartLine />,
    title: "Looking Ahead",
    description: "Eager to grow in a junior developer role, keep building, and stay curious as I take on bigger challenges.",
  },
];


const Timeline = () => {
  return (
    <div className="section section-md py-5">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-10 mx-auto">
            <div className="timeline">
              {timelineData.map((item, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-icon">{item.icon}</div>
                  <div className="timeline-content">
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;