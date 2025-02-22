import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsArrowLeft } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import './ProjectDetails.css';

function ProjectDetails({ webProjectsData, dataScienceProjects }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const allProjects = [...(webProjectsData || []), ...(dataScienceProjects || [])];
  const project = allProjects.find((p) => p.id.toString() === id.toString());

  const handleBack = () => {
    navigate('/project'); // Changed back to /project to match App.js route
  };

  if (!project) {
    return (
      <Container fluid className="project-section">
        <h2 className="text-center text-white">Project not found</h2>
        <div className="text-center">
          <Button variant="primary" onClick={handleBack}>
            <BsArrowLeft /> Back to Projects
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Button
          variant="primary"
          onClick={handleBack}
          className="d-flex align-items-center gap-2 mb-4"
          style={{ cursor: 'pointer' }}
        >
          <BsArrowLeft /> Back to Projects
        </Button>

        <Row className="project-detail-content">
          <Col md={8} className="project-detail-main">
            <h1 className="project-heading mb-4">{project.title}</h1>

            {/* Laptop Frame for Screenshot */}
            <div className="laptop-frame mb-5">
              <div className="laptop-screen">
                <img
                  src={project.imgPath}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="project-description mb-5">
              <h3 className="project-heading">
                Project <strong className="teal">Overview</strong>
              </h3>
              <p className="text-white">{project.description}</p>
            </div>

            {/* Key Features Section */}
            <div className="key-features mb-5">
              <h3 className="project-heading">
                Key <strong className="teal">Features</strong>
              </h3>
              <ul className="text-white">
                {project.features ? (
                  project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))
                ) : (
                  <>
                    <li>Responsive Design</li>
                    <li>User Authentication</li>
                    <li>Real-time Updates</li>
                    <li>Interactive UI Components</li>
                  </>
                )}
              </ul>
            </div>
          </Col>

          <Col md={4} className="project-detail-sidebar">
            {/* Project Tools */}
            <div className="tools-section mb-4">
              <h3 className="project-heading">
                Tools <strong className="teal">Used</strong>
              </h3>
              <div className="tools-grid">
                {project.tools?.map((tool, index) => (
                  <span key={index} className="tool-tag">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="project-links">
              {project.ghLink && (
                <Button
                  variant="primary"
                  href={project.ghLink}
                  target="_blank"
                  className="w-100 mb-3"
                >
                  <BsGithub /> View Source Code
                </Button>
              )}
              {project.demoLink && (
                <Button
                  variant="primary"
                  href={project.demoLink}
                  target="_blank"
                  className="w-100"
                >
                  <CgWebsite /> Live Demo
                </Button>
              )}
            </div>

            {/* Project Status */}
            <div className="project-status mt-4">
              <h4 className="text-white">Project Status</h4>
              <span className="status-badge">
                {project.status || "Active"}
              </span>
            </div>

            {/* Project Timeline */}
            {project.timeline && (
              <div className="project-timeline mt-4">
                <h4 className="text-white">Timeline</h4>
                <p className="text-white-50">{project.timeline}</p>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectDetails;