import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiMsqlServer } from "react-icons/di";
import { SiFlutter } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

function MobileTechStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h4 className="teal" style={{ justifyContent: "justify-start" }}>
        Mobile Application Development Stack
      </h4>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <TbBrandReactNative />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <SiFlutter />
      </Col>

      <p style={{ color: "#eeeeee" }}>Includes: React Native, Flutter, XCode</p>
      <br />
    </Row>
  );
}

export default MobileTechStack;
