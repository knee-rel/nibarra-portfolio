import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsArrowLeft, BsCircleFill, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Particle from "../Particle";
import VideoPlayer from "./VideoPlayer";
import ProjectFeatures from "./ProjectFeatures";
import "./MobileProjectStyles.css";
import "./MobileProjectDisplay.css";

function ProjectDetails({ webProjectsData, dataScienceProjects, mobileApplicationsProjects }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // State to track active carousel slide
  const [activeSlide, setActiveSlide] = React.useState(0);

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

  // Handler functions for carousel
  const handlePrevSlide = () => {
    setActiveSlide(prev => {
      if (prev === 0) return (project.media?.length || 1) - 1;
      return prev - 1;
    });
  };

  const handleNextSlide = () => {
    setActiveSlide(prev => {
      if (prev === (project.media?.length || 1) - 1) return 0;
      return prev + 1;
    });
  };

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
              <>
                {/* Mobile App Preview */}
                <div className="mb-5">
                  <h3 style={{ color: "white", marginBottom: "20px", textAlign: "center" }}>
                    App <span style={{ color: "#64ffda" }}>Preview</span>
                  </h3>

                  <div className="d-flex flex-column align-items-center">
                    {/* Main Phone Display with Carousel Controls */}
                    <div className="carousel-main">
                      {project.media && project.media.length > 1 && (
                        <button className="carousel-control prev" onClick={handlePrevSlide}>
                          <BsChevronLeft />
                        </button>
                      )}

                      <div className="phone-frame">
                        <div className="phone-screen">
                          <img
                            src={project.media ? project.media[activeSlide].path : project.imgPath}
                            alt={project.title}
                            className="phone-screenshot"
                          />
                        </div>
                      </div>

                      {project.media && project.media.length > 1 && (
                        <button className="carousel-control next" onClick={handleNextSlide}>
                          <BsChevronRight />
                        </button>
                      )}
                    </div>

                    {/* Caption below main image */}
                    <p style={{ color: "white", marginTop: "15px", textAlign: "center" }}>
                      {project.media ? project.media[activeSlide].caption : "Main map view showing charger locations"}
                    </p>

                    {/* Thumbnail indicators */}
                    {project.media && project.media.length > 0 && (
                      <div className="thumbnail-navigation">
                        <Row className="mt-2 justify-content-center">
                          {project.media.map((item, index) => (
                            <Col xs={2} key={index} className="px-1 thumbnail-col">
                              <div
                                className={`thumbnail-indicator ${index === activeSlide ? "active" : ""}`}
                                onClick={() => setActiveSlide(index)}
                              >
                                <BsCircleFill size={10} />
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </div>
                    )}

                    {/* Thumbnail gallery */}
                    {project.media && project.media.length > 0 && (
                      <Row className="mt-4 justify-content-center">
                        {project.media.map((item, index) => (
                          <Col xs={4} md={2} key={index} className="mb-3">
                            <div
                              className={`thumbnail-container ${index === activeSlide ? "active" : ""}`}
                              onClick={() => setActiveSlide(index)}
                            >
                              <div className="phone-frame-small">
                                <div className="phone-screen-small">
                                  <img
                                    src={item.path}
                                    alt={item.caption}
                                    className="phone-screenshot-small"
                                  />
                                </div>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    )}
                  </div>
                </div>

                {/* Project Demo Video (if available) */}
                {project.demoVideo && (
                  <div className="mb-5">
                    <h3 style={{ color: "white", textAlign: "center" }}>
                      App <span style={{ color: "#64ffda" }}>Demo</span>
                    </h3>
                    <VideoPlayer videoId={project.demoVideo} title={`${project.title} Demo`} />
                  </div>
                )}
              </>
            ) : (
              // Standard project display code (unchanged)
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
              </>
            )}

            {/* Project Overview */}
            <div className="mb-5">
              <h3 style={{ color: "white", textAlign: "center" }}>
                Project <span style={{ color: "#64ffda" }}>Overview</span>
              </h3>
              <p style={{ color: "white", textAlign: "justify" }}>{project.description}</p>
            </div>

            {/* Key Features Section */}
            <ProjectFeatures features={project.features} />
          </Col>

          <Col lg={4}>
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

                {/* Rest of sidebar content - unchanged */}
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
                      <CgWebsite /> {isMobileProject ? 'App Store' : 'Live Demo'}
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

                {/* Mobile-specific information */}
                {isMobileProject && (
                  <div className="mt-4">
                    <h4 style={{ color: "white" }}>Platforms</h4>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "15px" }}>
                      <Badge
                        bg="dark"
                        style={{
                          color: "#64ffda",
                          border: "1px solid #64ffda",
                          padding: "8px 12px",
                          borderRadius: "15px"
                        }}
                      >
                        iOS
                      </Badge>
                      <Badge
                        bg="dark"
                        style={{
                          color: "#64ffda",
                          border: "1px solid #64ffda",
                          padding: "8px 12px",
                          borderRadius: "15px"
                        }}
                      >
                        Android
                      </Badge>
                    </div>
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