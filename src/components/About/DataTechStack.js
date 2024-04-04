import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiPython, DiMsqlServer } from "react-icons/di";
import {
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiScikitlearn,
  SiScipy,
  SiRstudio,
} from "react-icons/si";
import { FaHtml5, FaCss3, FaBootstrap, FaVuejs } from "react-icons/fa";

function DataTechStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h4 className="teal" style={{ justifyContent: "justify-start" }}>
        Data Science and Analytics
      </h4>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <SiScipy />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <p>Matplotlib</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <DiMsqlServer />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#eeeeee" }}>
        <SiRstudio />
      </Col>

      <p style={{ color: "#eeeeee" }}>
        Includes: Python, Pandas, NumPy, Matplotlib, Selenium, MySQL,
        Postgresql, Scipy, R
      </p>
      <br />
    </Row>
  );
}

export default DataTechStack;
