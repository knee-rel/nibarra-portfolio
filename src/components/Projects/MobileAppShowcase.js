import React, { useState } from "react";
import { Row, Col, Card, Nav } from "react-bootstrap";
import {
    BsPhone,
    BsPlayCircle,
    BsInfoCircle,
    BsChevronLeft,
    BsChevronRight,
    BsCircleFill,
    BsCodeSquare,
    BsArrowRight
} from "react-icons/bs";
import Button from "react-bootstrap/Button";
import VideoPlayer from "./VideoPlayer";
import VideoCarousel from './VideoCarousel'
import "./MobileAppShowcase.css";
import "./ConsistentPhoneFrame.css"; // Import the consistent styles

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
                                {/* Main Phone Display with Carousel Controls - Using Consistent Phone Frame */}
                                <div className="consistent-carousel-wrapper">
                                    {project.media && project.media.length > 1 && (
                                        <button className="consistent-carousel-control prev" onClick={handlePrevSlide}>
                                            <BsChevronLeft />
                                        </button>
                                    )}

                                    <div className="consistent-phone-frame">
                                        <div className="consistent-phone-screen">
                                            <img
                                                src={project.media ? project.media[activeSlide].path : project.imgPath}
                                                alt={project.title}
                                                className="consistent-phone-content"
                                            />
                                        </div>
                                    </div>

                                    {project.media && project.media.length > 1 && (
                                        <button className="consistent-carousel-control next" onClick={handleNextSlide}>
                                            <BsChevronRight />
                                        </button>
                                    )}
                                </div>

                                {/* Caption below main image */}
                                <p className="consistent-caption">
                                    {project.media ? project.media[activeSlide].caption : "Main app view"}
                                </p>

                                {/* Dots indicators */}
                                {project.media && project.media.length > 0 && (
                                    <div className="consistent-carousel-indicators">
                                        {project.media.map((item, index) => (
                                            <button
                                                key={index}
                                                className={`consistent-carousel-indicator ${index === activeSlide ? "active" : ""}`}
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
                                    <div className="consistent-thumbnails">
                                        {project.media.map((item, index) => (
                                            <div 
                                                key={index} 
                                                className={`consistent-thumbnail ${index === activeSlide ? "active" : ""}`}
                                                onClick={() => setActiveSlide(index)}
                                            >
                                                <div className="consistent-phone-frame-mini">
                                                    <div className="consistent-phone-screen-mini">
                                                        <img
                                                            src={item.path}
                                                            alt={`Thumbnail ${index + 1}`}
                                                            className="consistent-phone-content-mini"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === "videos" && (
                        <div className="videos-section">
                            {/* Use VideoCarousel if videos are available */}
                            {project.videos && project.videos.length > 0 ? (
                                <VideoCarousel videos={project.videos} />
                            ) : project.demoVideo ? (
                                <div className="video-container">
                                    <h3 className="section-title">
                                        App <span className="highlight">Demonstrations</span>
                                    </h3>
                                    <VideoPlayer
                                        videoId={project.demoVideo}
                                        title={`${project.title} Demo`}
                                        isMobileAppDemo={true}
                                    />
                                </div>
                            ) : (
                                <div className="text-center p-4">
                                    <h3 className="section-title">
                                        App <span className="highlight">Demonstrations</span>
                                    </h3>
                                    <p className="text-white">No demo videos available yet.</p>
                                </div>
                            )}

                            {/* Additional videos section (if needed for backward compatibility) */}
                            {!project.videos && project.additionalVideos && project.additionalVideos.length > 0 && (
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
                                Project <span className="highlight">Details</span>
                            </h3>

                            {/* Info tab content remains unchanged */}
                            <div className="info-block">
                                <h4 className="info-subtitle">Project Overview</h4>
                                <p className="info-text">{project.extendedDescription || project.description}</p>

                                {project.problemStatement && (
                                    <>
                                        <h5 className="info-subtitle mt-4">Problem Statement</h5>
                                        <p className="info-text">{project.problemStatement}</p>
                                    </>
                                )}

                                {project.solution && (
                                    <>
                                        <h5 className="info-subtitle mt-4">Solution</h5>
                                        <p className="info-text">{project.solution}</p>
                                    </>
                                )}

                                {project.targetAudience && (
                                    <>
                                        <h5 className="info-subtitle mt-4">Target Audience</h5>
                                        <p className="info-text">{project.targetAudience}</p>
                                    </>
                                )}
                            </div>

                            {/* Rest of the info tab content... */}
                            {/* Development Process */}
                            {(project.developmentProcess || project.challenges || project.teamContribution) && (
                                <div className="info-block mt-5">
                                    <h4 className="info-subtitle">Development Process</h4>

                                    {project.developmentProcess && (
                                        <>
                                            <h5 className="info-subtitle mt-4">Approach & Methodology</h5>
                                            <p className="info-text">{project.developmentProcess}</p>
                                        </>
                                    )}

                                    {project.challenges && (
                                        <>
                                            <h5 className="info-subtitle mt-4">Challenges & Solutions</h5>
                                            <p className="info-text">{project.challenges}</p>
                                        </>
                                    )}

                                    {project.teamContribution && (
                                        <>
                                            <h5 className="info-subtitle mt-4">Team Contribution</h5>
                                            <p className="info-text">{project.teamContribution}</p>
                                        </>
                                    )}
                                </div>
                            )}

                            {/* Technical Architecture section */}
                            {(project.technicalArchitecture || project.technicalDecisions || project.databaseStructure || project.apiIntegrations) && (
                                <div className="info-block mt-5">
                                    <h4 className="info-subtitle">Technical Architecture</h4>

                                    {project.technicalArchitecture && (
                                        <>
                                            <h5 className="info-subtitle mt-4">System Design Overview</h5>
                                            <p className="info-text">{project.technicalArchitecture}</p>
                                        </>
                                    )}

                                    {project.technicalDecisions && (
                                        <>
                                            <h5 className="info-subtitle mt-4">Key Technical Decisions</h5>
                                            <p className="info-text">{project.technicalDecisions}</p>
                                        </>
                                    )}

                                    {project.databaseStructure && (
                                        <>
                                            <h5 className="info-subtitle mt-4">Database Structure</h5>
                                            <p className="info-text">{project.databaseStructure}</p>
                                        </>
                                    )}

                                    {project.apiIntegrations && (
                                        <>
                                            <h5 className="info-subtitle mt-4">API Integrations</h5>
                                            <p className="info-text">{project.apiIntegrations}</p>
                                        </>
                                    )}
                                </div>
                            )}

                            {/* Key Features Section */}
                            {project.detailedFeatures && project.detailedFeatures.length > 0 && (
                                <div className="info-block mt-5">
                                    <h4 className="info-subtitle">Key Features</h4>
                                    <Row className="features-grid">
                                        {project.detailedFeatures.map((feature, index) => (
                                            <Col sm={12} key={index} className="feature-col">
                                                <div className="feature-item">
                                                    <div className="feature-text">
                                                        <h5 className="info-subtitle">{feature.name}</h5>
                                                        <p>{feature.description}</p>
                                                        {feature.technicalDetails && (
                                                            <p><strong>Technical Implementation:</strong> {feature.technicalDetails}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            )}

                            {/* Future Development */}
                            {(project.plannedImprovements || project.roadmap) && (
                                <div className="info-block mt-5">
                                    <h4 className="info-subtitle">Future Development</h4>

                                    {project.plannedImprovements && (
                                        <>
                                            <h5 className="info-subtitle mt-4">Planned Improvements</h5>
                                            <p className="info-text">{project.plannedImprovements}</p>
                                        </>
                                    )}

                                    {project.roadmap && (
                                        <>
                                            <h5 className="info-subtitle mt-4">Product Roadmap</h5>
                                            <p className="info-text">{project.roadmap}</p>
                                        </>
                                    )}
                                </div>
                            )}

                            {/* Source Code Section (if applicable) */}
                            {project.ghLink && (
                                <div className="info-block mt-5">
                                    <h4 className="info-subtitle">Source Code</h4>
                                    <div className="d-flex justify-content-center mt-4">
                                        <Button
                                            variant="primary"
                                            href={project.ghLink}
                                            target="_blank"
                                            className="link-button github-button"
                                        >
                                            <BsCodeSquare className="me-2" /> View Repository <BsArrowRight className="ms-2" />
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
};

export default MobileAppShowcase;