import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaGithub, FaFigma } from "react-icons/fa";
import { SiVisualstudiocode, SiPostman, SiVercel } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h4 className="teal" style={{ justifyContent: "justify-start" }}>
        Tools
      </h4>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <FaFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <SiVercel />
      </Col>
      <p style={{ color: "#eeeeee" }}>
        Includes: Figma, Visual Studio Code, Postman, Vercel, Github
      </p>
    </Row>
  );
}

export default Toolstack;
