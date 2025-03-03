import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import './MobileProjectDisplay.css';

// This component is specifically designed to display mobile app screenshots
// in a phone frame for a more realistic presentation
const MobileProjectDisplay = ({ project }) => {
    return (
        <div className="mobile-project-display">
            {/* Main Screenshot in Phone Frame */}
            <div className="mb-5">
                <h3 style={{ color: "white", marginBottom: "20px" }}>
                    App <span style={{ color: "#64ffda" }}>Preview</span>
                </h3>

                <div className="d-flex justify-content-center">
                    <div className="phone-frame">
                        <div className="phone-screen">
                            <img
                                src={project.imgPath}
                                alt={project.title}
                                className="phone-screenshot"
                            />
                        </div>
                    </div>
                </div>

                {/* Caption for main image */}
                <div className="text-center mt-3">
                    <p style={{ color: "white" }}>Main map view showing charger locations</p>
                </div>

                {/* Carousel indicators styled on their own line */}
                <div className="carousel-indicators-container">
                    <div className="d-flex justify-content-center mt-2 gap-2">
                        {[0, 1, 2, 3, 4].map(index => (
                            <div
                                key={index}
                                className={`carousel-dot ${index === 0 ? 'active' : ''}`}
                                style={{
                                    width: "10px",
                                    height: "10px",
                                    borderRadius: "50%",
                                    background: index === 0 ? "#64ffda" : "rgba(100, 255, 218, 0.3)",
                                    display: "inline-block"
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Additional Screenshots/Media Gallery */}
            {project.media && project.media.length > 0 && (
                <div className="mb-5">
                    <h3 style={{ color: "white" }}>
                        App <span style={{ color: "#64ffda" }}>Screens</span>
                    </h3>

                    <Row className="mt-4 justify-content-center">
                        {project.media.map((item, index) => (
                            <Col sm={6} md={4} key={index} className="mb-4">
                                <Card bg="dark" className="h-100 media-item">
                                    <Card.Body className="d-flex flex-column align-items-center">
                                        {item.type === "screenshot" ? (
                                            <div className="mobile-screen-container">
                                                <div className="phone-frame-small">
                                                    <div className="phone-screen-small">
                                                        <img
                                                            src={item.path}
                                                            alt={item.caption}
                                                            className="phone-screenshot-small"
                                                        />
                                                    </div>
                                                </div>
                                                <p style={{ color: "white", textAlign: "center", marginTop: "10px", marginBottom: "0" }}>
                                                    {item.caption}
                                                </p>
                                            </div>
                                        ) : item.type === "video" ? (
                                            <div className="mobile-video-container">
                                                <div className="phone-frame-small">
                                                    <div className="phone-screen-small video-container">
                                                        <video
                                                            controls
                                                            poster={item.thumbnail}
                                                            className="phone-screenshot-small"
                                                        >
                                                            <source src={item.path} type="video/mp4" />
                                                            Your browser does not support the video tag.
                                                        </video>
                                                    </div>
                                                </div>
                                                <p style={{ color: "white", textAlign: "center", marginTop: "10px", marginBottom: "0" }}>
                                                    {item.caption}
                                                </p>
                                            </div>
                                        ) : null}
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            )}
        </div>
    );
};

export default MobileProjectDisplay;