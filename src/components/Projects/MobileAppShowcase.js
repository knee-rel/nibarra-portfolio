import React, { useState } from "react";
import { Row, Col, Card, Nav } from "react-bootstrap";
import {
    BsPhone,
    BsPlayCircle,
    BsInfoCircle,
    BsChevronLeft,
    BsChevronRight,
    BsCircleFill,
    BsGithub,
    BsCloudDownload
} from "react-icons/bs";
import Button from "react-bootstrap/Button";
import VideoPlayer from "./VideoPlayer";
import "./MobileAppShowcase.css";

const MobileAppShowcase = ({ project }) => {
    const [activeTab, setActiveTab] = useState("screenshots");
    const [activeSlide, setActiveSlide] = useState(0);

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
        <div className="mobile-app-showcase">
            <Card className="showcase-card">
                <Card.Header className="showcase-header">
                    <Nav variant="tabs" className="justify-content-center showcase-tabs">
                        <Nav.Item>
                            <Nav.Link
                                active={activeTab === "screenshots"}
                                onClick={() => setActiveTab("screenshots")}
                                className="nav-link-custom"
                            >
                                <BsPhone className="me-2" />
                                Screenshots
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                active={activeTab === "videos"}
                                onClick={() => setActiveTab("videos")}
                                className="nav-link-custom"
                            >
                                <BsPlayCircle className="me-2" />
                                Videos
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                active={activeTab === "info"}
                                onClick={() => setActiveTab("info")}
                                className="nav-link-custom"
                            >
                                <BsInfoCircle className="me-2" />
                                Details
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>

                <Card.Body className="showcase-body">
                    {activeTab === "screenshots" && (
                        <div className="screenshots-section">
                            <h3 className="section-title">
                                App <span className="highlight">Preview</span>
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
                                <p className="screenshot-caption">
                                    {project.media ? project.media[activeSlide].caption : "Main app view"}
                                </p>

                                {/* Thumbnail indicators */}
                                {project.media && project.media.length > 0 && (
                                    <div className="carousel-indicators">
                                        {project.media.map((item, index) => (
                                            <button
                                                key={index}
                                                className={`carousel-indicator ${index === activeSlide ? "active" : ""}`}
                                                onClick={() => setActiveSlide(index)}
                                                aria-label={`Go to slide ${index + 1}`}
                                            >
                                                <BsCircleFill />
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {/* Thumbnail gallery */}
                                {project.media && project.media.length > 0 && (
                                    <Row className="carousel-thumbnails">
                                        {project.media.map((item, index) => (
                                            <Col xs={4} md={2} key={index} className="thumbnail-col">
                                                <Card
                                                    className={`thumbnail-card ${index === activeSlide ? "active" : ""}`}
                                                    onClick={() => setActiveSlide(index)}
                                                >
                                                    <div className="phone-frame-thumbnail">
                                                        <div className="phone-screen-thumbnail">
                                                            <img
                                                                src={item.path}
                                                                alt={`Thumbnail ${index + 1}`}
                                                                className="phone-screenshot-thumbnail"
                                                            />
                                                        </div>
                                                    </div>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === "videos" && (
                        <div className="videos-section">
                            <h3 className="section-title">
                                App <span className="highlight">Demonstrations</span>
                            </h3>

                            {/* Main demo video */}
                            {project.demoVideo ? (
                                <div className="video-container">
                                    <VideoPlayer
                                        videoId={project.demoVideo}
                                        title={`${project.title} Demo`}
                                        isMobileAppDemo={true}
                                    />
                                </div>
                            ) : (
                                <div className="text-center p-4">
                                    <p className="text-white">No demo videos available yet.</p>
                                </div>
                            )}

                            {/* Additional videos */}
                            {project.additionalVideos && project.additionalVideos.length > 0 && (
                                <div className="additional-videos">
                                    <h4 className="subsection-title">Feature Walkthroughs</h4>

                                    <Row>
                                        {project.additionalVideos.map((video, index) => (
                                            <Col md={6} key={index} className="mb-4">
                                                <VideoPlayer
                                                    videoId={video.id}
                                                    title={video.title}
                                                    isMobileAppDemo={true}
                                                />
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === "info" && (
                        <div className="info-section">
                            <h3 className="section-title">
                                App <span className="highlight">Information</span>
                            </h3>

                            <div className="project-description">
                                <h4 className="info-subtitle">Overview</h4>
                                <p className="info-text">{project.description}</p>
                            </div>

                            <Row className="mt-4">
                                <Col md={6}>
                                    <div className="info-block">
                                        <h4 className="info-subtitle">Platforms</h4>
                                        <div className="badges-container">
                                            <span className="platform-badge">iOS</span>
                                            <span className="platform-badge">Android</span>
                                        </div>
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className="info-block">
                                        <h4 className="info-subtitle">Status</h4>
                                        <div className="badges-container">
                                            <span className="status-badge">{project.status || "Active"}</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <div className="info-block mt-4">
                                <h4 className="info-subtitle">Technology Stack</h4>
                                <div className="badges-container">
                                    {project.tools?.map((tool, index) => (
                                        <span key={index} className="tech-badge">{tool}</span>
                                    ))}
                                </div>
                            </div>

                            {project.timeline && (
                                <div className="info-block mt-4">
                                    <h4 className="info-subtitle">Development Timeline</h4>
                                    <p className="info-text">{project.timeline}</p>
                                </div>
                            )}

                            {project.features && project.features.length > 0 && (
                                <div className="info-block mt-4">
                                    <h4 className="info-subtitle">Key Features</h4>
                                    <Row className="features-grid">
                                        {project.features.map((feature, index) => (
                                            <Col sm={6} md={4} key={index} className="feature-col">
                                                <div className="feature-item">
                                                    <div className="feature-icon">
                                                        <BsCircleFill />
                                                    </div>
                                                    <div className="feature-text">{feature}</div>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            )}

                            <div className="info-block mt-4">
                                <h4 className="info-subtitle">Links</h4>
                                <div className="links-container">
                                    {project.ghLink && (
                                        <Button
                                            variant="primary"
                                            href={project.ghLink}
                                            target="_blank"
                                            className="link-button github-button"
                                        >
                                            <BsGithub /> Source Code
                                        </Button>
                                    )}

                                    {project.demoLink && (
                                        <Button
                                            variant="primary"
                                            href={project.demoLink}
                                            target="_blank"
                                            className="link-button app-store-button"
                                        >
                                            <BsCloudDownload /> App Store
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
};

export default MobileAppShowcase;