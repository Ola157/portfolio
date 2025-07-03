import React from "react";
import { Container } from "react-bootstrap";
import "./MainText.css";
import { TreeModel } from "../../components";

const MainText = () => {
  return (
    <Container className="main-text-wrapper">
      {/* Text content */}
      <div className="main-text-left">
        <h1 className="main-text">
        Hi, I'm a Computer Programming graduate seeking junior developer roles.
        </h1>
        <p className="sub-text">
        Graduate of Humber Polytechnic, Toronto ON. <br />
          <span className="sub-text-formerly">
          Former peer tutor at Humber Polytechnic.
          </span>
        </p>
      </div>

      {/* Tree model */}
      <div className="main-text-right">
        <TreeModel />
      </div>
    </Container>
  );
};

export default MainText;