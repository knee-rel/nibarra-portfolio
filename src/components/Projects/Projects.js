import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import MobileProjectCard from "./MobileProjectCard"; // Import the new component
import Particle from "../Particle";
import "./MobileProjectStyles.css"; // Import our mobile styles

function Projects({ webProjectsData, dataScienceProjects, mobileApplicationsProjects, qaProjects }) {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="teal">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the projects that I have built throughout the years.
        </p>
        <h3 className="project-heading mobile-projects-heading">
          Mobile <strong className="teal">Development</strong>
        </h3>

        {mobileApplicationsProjects && mobileApplicationsProjects.length > 0 ? (
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {mobileApplicationsProjects.map((project, index) => (
              <Col
                xl={3}
                lg={4}
                md={6}
                sm={12}
                className="mobile-project-card"
                key={index}
              >
                <Link to={`/project/${project.id}`}>
                  <MobileProjectCard {...project} />
                </Link>
              </Col>
            ))}
          </Row>
        ) : (
          <p style={{ color: "white" }}>Coming soon</p>
        )}

        <h3 className="project-heading">
          Web <strong className="teal">Development</strong>
        </h3>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {webProjectsData.map((project, index) => (
            <Col
              xl={3}
              lg={4}
              md={6}
              sm={12}
              className="project-card"
              key={index}
            >
              <Link to={`/project/${project.id}`}>
                <ProjectCard {...project} />
              </Link>
            </Col>
          ))}
        </Row>

        <Row style={{ justifyContent: "center", alignItems: "flex-start", paddingBottom: "10px" }}>
          <Col md={5}>
            <h3 className="project-heading">
              Data <strong className="teal">Analytics</strong>
            </h3>
            <Row style={{ justifyContent: "center" }}>
              {dataScienceProjects.map((project, index) => (
                <Col
                  xl={8}
                  lg={10}
                  md={12}
                  sm={12}
                  className="project-card"
                  key={index}
                >
                  <Link to={`/project/${project.id}`}>
                    <ProjectCard {...project} />
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>

          <Col
            xs={1}
            className="d-flex justify-content-center"
            style={{ paddingTop: "20px" }}
          >
            <hr style={{
              border: "none",
              borderLeft: "1px solid rgba(100, 255, 218, 0.3)",
              height: "100%",
              margin: 0,
            }} />
          </Col>

          <Col md={5}>
            <h3 className="project-heading">
              Quality <strong className="teal">Assurance</strong>
            </h3>
            <Row style={{ justifyContent: "center" }}>
              {qaProjects && qaProjects.map((project, index) => (
                <Col
                  xl={8}
                  lg={10}
                  md={12}
                  sm={12}
                  className="project-card"
                  key={index}
                >
                  <Link to={`/project/${project.id}`}>
                    <ProjectCard {...project} />
                  </Link>
                </Col>
              ))}
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
              <Col xl={8} lg={10} md={12} sm={12} className="text-center">
                <Link to="/qa" style={{ textDecoration: "none" }}>
                  <Button
                    variant="primary"
                    style={{ fontWeight: 600 }}
                  >
                    View full QA practice &nbsp;&rarr;
                  </Button>
                </Link>
                <p
                  style={{
                    color: "#b5c6c6",
                    fontSize: "0.85em",
                    marginTop: "10px",
                    marginBottom: 0,
                  }}
                >
                  Process map, testing types, and downloadable test documentation
                  templates.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;