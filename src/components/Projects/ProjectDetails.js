import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BsGithub, BsArrowLeft, BsBoxArrowUpRight, BsCalendar3, BsPeople, BsStars } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import Particle from "../Particle";
import VideoPlayer from "./VideoPlayer";
import ProjectFeatures from "./ProjectFeatures";
import MobileAppShowcase from "./MobileAppShowcase";
import "./ProjectDetails.css";
import "./MobileProjectStyles.css";
import "./MobileProjectDisplay.css";

function ProjectDetails({ webProjectsData, dataScienceProjects, mobileApplicationsProjects }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const allProjects = [
    ...(webProjectsData || []),
    ...(dataScienceProjects || []),
    ...(mobileApplicationsProjects || [])
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

  // Determine if this is a mobile app project by checking the ID
  const isMobileProject = project.id.toString().startsWith("5");

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

        <h1 style={{ color: "white", marginBottom: "20px", textAlign: "center" }}>{project.title}</h1>

        <Row className="mt-4">
          <Col lg={8}>
            {/* Main content area */}
            {isMobileProject ? (
              /* Use the MobileAppShowcase component for mobile projects */
              <MobileAppShowcase project={project} />
            ) : (
              // Standard project display code for web projects
              <>
                {/* Standard Project Screenshot */}
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

                {/* Media Gallery for Web Projects */}
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

                {/* Web Project Demo Video (if available) */}
                {project.demoVideo && (
                  <div className="mb-5">
                    <h3 style={{ color: "white", textAlign: "center" }}>
                      Project <span style={{ color: "#64ffda" }}>Demo</span>
                    </h3>
                    <VideoPlayer videoId={project.demoVideo} title={`${project.title} Demo`} />
                  </div>
                )}

                {/* Project Overview - For web projects */}
                <div className="mb-5">
                  <h3 style={{ color: "white", textAlign: "center" }}>
                    Project <span style={{ color: "#64ffda" }}>Overview</span>
                  </h3>
                  <p style={{ color: "white", textAlign: "justify" }}>{project.extendedDescription || project.description}</p>

                  {project.problemStatement && (
                    <div className="mt-4">
                      <h4 style={{ color: "white" }}>Problem Statement</h4>
                      <p style={{ color: "white", textAlign: "justify" }}>{project.problemStatement}</p>
                    </div>
                  )}

                  {project.solution && (
                    <div className="mt-4">
                      <h4 style={{ color: "white" }}>Solution</h4>
                      <p style={{ color: "white", textAlign: "justify" }}>{project.solution}</p>
                    </div>
                  )}

                  {project.targetAudience && (
                    <div className="mt-4">
                      <h4 style={{ color: "white" }}>Target Audience</h4>
                      <p style={{ color: "white", textAlign: "justify" }}>{project.targetAudience}</p>
                    </div>
                  )}
                </div>

                {/* Development Process Section */}
                {(project.developmentProcess || project.challenges || project.teamContribution) && (
                  <div className="mb-5">
                    <h3 style={{ color: "white", textAlign: "center" }}>
                      Development <span style={{ color: "#64ffda" }}>Process</span>
                    </h3>

                    {project.developmentProcess && (
                      <div className="mt-4">
                        <h4 style={{ color: "white" }}>Approach & Methodology</h4>
                        <p style={{ color: "white", textAlign: "justify" }}>{project.developmentProcess}</p>
                      </div>
                    )}

                    {project.challenges && (
                      <div className="mt-4">
                        <h4 style={{ color: "white" }}>Challenges & Solutions</h4>
                        <p style={{ color: "white", textAlign: "justify" }}>{project.challenges}</p>
                      </div>
                    )}

                    {project.teamContribution && (
                      <div className="mt-4">
                        <h4 style={{ color: "white" }}>Team Contribution</h4>
                        <p style={{ color: "white", textAlign: "justify" }}>{project.teamContribution}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Technical Architecture Section */}
                {(project.technicalArchitecture || project.technicalDecisions || project.databaseStructure || project.apiIntegrations) && (
                  <div className="mb-5">
                    <h3 style={{ color: "white", textAlign: "center" }}>
                      Technical <span style={{ color: "#64ffda" }}>Architecture</span>
                    </h3>

                    {project.technicalArchitecture && (
                      <div className="mt-4">
                        <h4 style={{ color: "white" }}>System Design</h4>
                        <p style={{ color: "white", textAlign: "justify" }}>{project.technicalArchitecture}</p>
                      </div>
                    )}

                    {project.technicalDecisions && (
                      <div className="mt-4">
                        <h4 style={{ color: "white" }}>Key Technical Decisions</h4>
                        <p style={{ color: "white", textAlign: "justify" }}>{project.technicalDecisions}</p>
                      </div>
                    )}

                    {project.databaseStructure && (
                      <div className="mt-4">
                        <h4 style={{ color: "white" }}>Database Structure</h4>
                        <p style={{ color: "white", textAlign: "justify" }}>{project.databaseStructure}</p>
                      </div>
                    )}

                    {project.apiIntegrations && (
                      <div className="mt-4">
                        <h4 style={{ color: "white" }}>API Integrations</h4>
                        <p style={{ color: "white", textAlign: "justify" }}>{project.apiIntegrations}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Key Features Section with detailed descriptions */}
                {project.detailedFeatures ? (
                  <div className="mb-5">
                    <h3 style={{ color: "white", textAlign: "center" }}>
                      Key <span style={{ color: "#64ffda" }}>Features</span>
                    </h3>
                    <div className="mt-4">
                      {project.detailedFeatures.map((feature, index) => (
                        <div key={index} className="mb-4" style={{
                          backgroundColor: "rgba(30, 30, 30, 0.6)",
                          borderRadius: "10px",
                          padding: "20px",
                          border: "1px solid rgba(100, 255, 218, 0.2)"
                        }}>
                          <h4 style={{ color: "#64ffda" }}>{feature.name}</h4>
                          <p style={{ color: "white" }}>{feature.description}</p>

                          {feature.technicalDetails && (
                            <div>
                              <h5 style={{ color: "white", fontSize: "1rem" }}>Technical Implementation</h5>
                              <p style={{ color: "white" }}>{feature.technicalDetails}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Fall back to simple features list if no detailed features
                  <ProjectFeatures features={project.features} />
                )}

                {/* Future Development Section */}
                {(project.plannedImprovements || project.roadmap) && (
                  <div className="mb-5">
                    <h3 style={{ color: "white", textAlign: "center" }}>
                      Future <span style={{ color: "#64ffda" }}>Development</span>
                    </h3>

                    {project.plannedImprovements && (
                      <div className="mt-4">
                        <h4 style={{ color: "white" }}>Planned Improvements</h4>
                        <p style={{ color: "white", textAlign: "justify" }}>{project.plannedImprovements}</p>
                      </div>
                    )}

                    {project.roadmap && (
                      <div className="mt-4">
                        <h4 style={{ color: "white" }}>Product Roadmap</h4>
                        <p style={{ color: "white", textAlign: "justify" }}>{project.roadmap}</p>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </Col>

          <Col lg={4}>
            <Card bg="dark" className="mb-4 sidebar-card">
              <Card.Body>
                {/* Quick Actions Section */}
                {/* <div className="project-actions mb-4">
                  <h3 style={{ color: "white", marginBottom: "15px" }}>
                    Project <span style={{ color: "#64ffda" }}>Links</span>
                  </h3>
                  {project.ghLink && (
                    <Button
                      variant="primary"
                      href={project.ghLink}
                      target="_blank"
                      className="w-100 mb-3 d-flex align-items-center justify-content-center"
                      style={{
                        gap: "0.5rem",
                        backgroundColor: "#623686",
                        borderColor: "#623686",
                        padding: "10px"
                      }}
                    >
                      <BsGithub size={18} /> View Source Code
                    </Button>
                  )}
                  {project.demoLink && (
                    <Button
                      variant="primary"
                      href={project.demoLink}
                      target="_blank"
                      className="w-100 d-flex align-items-center justify-content-center"
                      style={{
                        gap: "0.5rem",
                        backgroundColor: "#623686",
                        borderColor: "#623686",
                        padding: "10px"
                      }}
                    >
                      <CgWebsite size={18} /> {isMobileProject ? 'App Store' : 'Live Demo'}
                    </Button>
                  )}
                </div> */}

                {/* Tech Stack */}
                <div className="mb-4">
                  <h3 style={{ color: "white", marginBottom: "15px" }}>
                    Tech <span style={{ color: "#64ffda" }}>Stack</span>
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {project.tools?.map((tool, index) => (
                      <span
                        key={index}
                        style={{
                          color: "#64ffda",
                          border: "1px solid #64ffda",
                          padding: "8px 12px",
                          borderRadius: "15px",
                          display: "inline-block",
                          backgroundColor: "rgba(30, 30, 30, 0.8)"
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Information Block */}
                <div className="project-info-block">
                  <h3 style={{ color: "white", marginBottom: "15px" }}>
                    Project <span style={{ color: "#64ffda" }}>Details</span>
                  </h3>

                  {/* Status */}
                  <div className="info-item mb-3">
                    <h4 style={{ color: "white", fontSize: "1rem" }}>Status</h4>
                    <span
                      style={{
                        color: "#64ffda",
                        backgroundColor: "rgba(100, 255, 218, 0.1)",
                        padding: "6px 12px",
                        borderRadius: "15px",
                        display: "inline-block"
                      }}
                    >
                      {project.status || "Active"}
                    </span>
                  </div>

                  {/* Timeline */}
                  {project.timeline && (
                    <div className="info-item mb-3">
                      <h4 style={{ color: "white", fontSize: "1rem" }}>
                        <BsCalendar3 className="me-2" />Timeline
                      </h4>
                      <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>{project.timeline}</p>
                    </div>
                  )}

                  {/* Team Size if available */}
                  {project.teamSize && (
                    <div className="info-item mb-3">
                      <h4 style={{ color: "white", fontSize: "1rem" }}>
                        <BsPeople className="me-2" />Team Size
                      </h4>
                      <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>{project.teamSize}</p>
                    </div>
                  )}

                  {/* User Stats if available */}
                  {project.userStats && (
                    <div className="info-item mb-3">
                      <h4 style={{ color: "white", fontSize: "1rem" }}>
                        <BsStars className="me-2" />User Stats
                      </h4>
                      <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>{project.userStats}</p>
                    </div>
                  )}

                  {/* Platforms - for mobile apps */}
                  {isMobileProject && (
                    <div className="info-item mb-3">
                      <h4 style={{ color: "white", fontSize: "1rem" }}>Platforms</h4>
                      <div style={{ display: "flex", gap: "10px" }}>
                        {project.platforms ? (
                          project.platforms.map((platform, index) => (
                            <span
                              key={index}
                              style={{
                                color: "#64ffda",
                                border: "1px solid rgba(100, 255, 218, 0.3)",
                                padding: "6px 12px",
                                borderRadius: "15px",
                                display: "inline-block",
                                backgroundColor: "rgba(100, 255, 218, 0.1)"
                              }}
                            >
                              {platform}
                            </span>
                          ))
                        ) : (
                          <>
                            <span
                              style={{
                                color: "#64ffda",
                                border: "1px solid rgba(100, 255, 218, 0.3)",
                                padding: "6px 12px",
                                borderRadius: "15px",
                                display: "inline-block",
                                backgroundColor: "rgba(100, 255, 218, 0.1)"
                              }}
                            >
                              iOS
                            </span>
                            <span
                              style={{
                                color: "#64ffda",
                                border: "1px solid rgba(100, 255, 218, 0.3)",
                                padding: "6px 12px",
                                borderRadius: "15px",
                                display: "inline-block",
                                backgroundColor: "rgba(100, 255, 218, 0.1)"
                              }}
                            >
                              Android
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectDetails;