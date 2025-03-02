import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import MobileProjectCard from "./MobileProjectCard"; // Import the new component
import Particle from "../Particle";
import "./MobileProjectStyles.css"; // Import our mobile styles

function Projects({ webProjectsData, dataScienceProjects, mobileApplicationsProjects }) {
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
          Data <strong className="teal">Science</strong>
        </h3>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {dataScienceProjects.map((project, index) => (
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
      </Container>
    </Container>
  );
}

export default Projects;