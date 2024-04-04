import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiDjango,
  SiFlask,
} from "react-icons/si";
import { FaHtml5, FaCss3, FaBootstrap, FaVuejs } from "react-icons/fa";

function WebTechStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h4 className="teal" style={{ justifyContent: "justify-start" }}>
        Full Stack Web Development
      </h4>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <FaCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <FaVuejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <SiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <SiFlask />
      </Col>

      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <SiFirebase />
      </Col>
      <p style={{ color: "#eeeeee" }}>
        Includes: HTML, CSS, TailwindCSS, Bootstrap, JavaScript, ReactJS,
        MongoDB, Vue, Next.js, ExpressJS, NodeJS, Django, Flask
      </p>
    </Row>
  );
}

export default WebTechStack;
