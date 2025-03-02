import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsArrowLeft } from "react-icons/bs";
import Particle from "../Particle";

function ProjectDetails({ webProjectsData, dataScienceProjects, mobileProjectsData }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const allProjects = [
    ...(webProjectsData || []),
    ...(dataScienceProjects || []),
    ...(mobileProjectsData || [])
  ];

  const project = allProjects.find((p) => p.id.toString() === id.toString());

  if (!project) {
    return (
      <Container fluid className="project-section">
        <h2 className="text-center text-white">Project not found</h2>
        <div className="text-center">
          <Button
            variant="primary"
            className="mb-4"
            onClick={() => navigate('/project')}
            style={{ position: "relative", zIndex: 10 }}
          >
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
        <div className="d-flex justify-content-start">
          <Button
            variant="primary"
            className="mb-4"
            onClick={() => navigate('/project')}
            style={{ position: "relative", zIndex: 10 }}
          >
            <BsArrowLeft /> Back to Projects
          </Button>
        </div>

        <Row className="mt-4">
          <Col md={8}>
            <h1 style={{ color: "white", marginBottom: "20px" }}>{project.title}</h1>

            {/* Project Screenshot */}
            <Card className="mb-5" bg="dark">
              <Card.Body style={{ padding: "20px" }}>
                <div style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  aspectRatio: "16/9"
                }}>
                  <img
                    src={project.imgPath}
                    alt={project.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </Card.Body>
            </Card>

            {/* Project Description */}
            <div className="mb-5">
              <h3 style={{ color: "white" }}>
                Project <span style={{ color: "#64ffda" }}>Overview</span>
              </h3>
              <p style={{ color: "white", textAlign: "justify" }}>{project.description}</p>
            </div>

            {/* Key Features Section */}
            <div className="mb-5">
              <h3 style={{ color: "white" }}>
                Key <span style={{ color: "#64ffda" }}>Features</span>
              </h3>
              <ul style={{ color: "white" }}>
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

            {/* Media Gallery Section (for screenshots and recordings) */}
            {project.media && project.media.length > 0 && (
              <div className="mb-5">
                <h3 style={{ color: "white" }}>
                  Media <span style={{ color: "#64ffda" }}>Gallery</span>
                </h3>

                <Row className="mt-4">
                  {project.media.map((item, index) => (
                    <Col md={6} lg={4} key={index} className="mb-4">
                      <Card bg="dark" className="h-100 media-item">
                        <Card.Body>
                          {item.type === "screenshot" ? (
                            <div>
                              <div style={{
                                borderRadius: "8px",
                                overflow: "hidden",
                                marginBottom: "10px"
                              }}>
                                <img
                                  src={item.path}
                                  alt={item.caption}
                                  style={{ width: "100%", objectFit: "cover" }}
                                />
                              </div>
                              <p style={{ color: "white", textAlign: "center", marginBottom: "0" }}>{item.caption}</p>
                            </div>
                          ) : item.type === "video" ? (
                            <div>
                              <div style={{
                                borderRadius: "8px",
                                overflow: "hidden",
                                marginBottom: "10px",
                                position: "relative"
                              }} className="video-container">
                                <video
                                  controls
                                  poster={item.thumbnail}
                                  style={{ width: "100%" }}
                                  className="video-thumbnail"
                                >
                                  <source src={item.path} type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                              <p style={{ color: "white", textAlign: "center", marginBottom: "0" }}>{item.caption}</p>
                            </div>
                          ) : null}
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            )}
          </Col>

          <Col md={4}>
            <Card bg="dark" className="mb-4">
              <Card.Body>
                {/* Project Tools */}
                <div className="mb-4">
                  <h3 style={{ color: "white" }}>
                    Tools <span style={{ color: "#64ffda" }}>Used</span>
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "15px" }}>
                    {project.tools?.map((tool, index) => (
                      <Badge
                        key={index}
                        bg="dark"
                        style={{
                          color: "#64ffda",
                          border: "1px solid #64ffda",
                          padding: "8px 12px",
                          borderRadius: "15px"
                        }}
                      >
                        {tool}
                      </Badge>
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
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        backgroundColor: "#623686",
                        borderColor: "#623686"
                      }}
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
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        backgroundColor: "#623686",
                        borderColor: "#623686"
                      }}
                    >
                      <CgWebsite /> Live Demo
                    </Button>
                  )}
                </div>

                {/* Project Status */}
                <div className="mt-4">
                  <h4 style={{ color: "white" }}>Project Status</h4>
                  <Badge
                    bg="dark"
                    style={{
                      color: "#64ffda",
                      backgroundColor: "rgba(100, 255, 218, 0.1)",
                      padding: "8px 15px",
                      borderRadius: "15px"
                    }}
                  >
                    {project.status || "Active"}
                  </Badge>
                </div>

                {/* Project Timeline */}
                {project.timeline && (
                  <div className="mt-4">
                    <h4 style={{ color: "white" }}>Timeline</h4>
                    <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>{project.timeline}</p>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectDetails;