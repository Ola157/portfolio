import React from "react";
import "./Work.css";
import { Card, MainText } from "../../components";
import { Container } from "react-bootstrap";
import workData from "./workData";

const Work = () => {
  return (
    <div>
      <MainText />
      <Container className="work-cards-container">
        <div className="work-cards">
          {workData.map((card, index) => (
            <Card
              key={card.id || index}
              title={card.title}
              description={card.description}
              imageUrls={card.imageUrls}
              projectLink={card.projectLink}
              tags={card.tags}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Work;