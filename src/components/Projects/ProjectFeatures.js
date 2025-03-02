import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import {
    BsCheck2Square,
    BsGearFill,
    BsLightningChargeFill,
    BsDatabaseFill,
    BsPhoneFill,
    BsClockFill,
    BsCodeSlash,
    BsShieldFillCheck,
    BsGraphUpArrow,
    BsGeoAltFill,
    BsCalendarCheck
} from "react-icons/bs";
import "./ProjectFeatures.css";

// Map of feature keywords to icons
const featureIcons = {
    "full-stack": <BsCodeSlash />,
    "full stack": <BsCodeSlash />,
    "real-time": <BsClockFill />,
    "real time": <BsClockFill />,
    "booking": <BsCalendarCheck />,
    "map": <BsGeoAltFill />,
    "location": <BsGeoAltFill />,
    "authentication": <BsShieldFillCheck />,
    "responsive": <BsPhoneFill />,
    "database": <BsDatabaseFill />,
    "performance": <BsLightningChargeFill />,
    "analytics": <BsGraphUpArrow />,
    "api": <BsCodeSlash />,
    "config": <BsGearFill />,
    "default": <BsCheck2Square />
};

// Function to choose the best icon based on feature text
const getIconForFeature = (feature) => {
    const lowerFeature = feature.toLowerCase();

    // Check if any keywords from our map are in the feature text
    for (const [keyword, icon] of Object.entries(featureIcons)) {
        if (lowerFeature.includes(keyword)) {
            return icon;
        }
    }

    // Default icon if no matches
    return featureIcons.default;
};

const ProjectFeatures = ({ features }) => {
    if (!features || features.length === 0) {
        return null;
    }

    return (
        <div className="project-features">
            <h3 className="section-title">
                Key <span className="highlight">Features</span>
            </h3>

            <Row className="feature-grid">
                {features.map((feature, index) => (
                    <Col sm={6} md={4} key={index} className="feature-column">
                        <Card className="feature-card">
                            <Card.Body>
                                <div className="feature-icon">
                                    {getIconForFeature(feature)}
                                </div>
                                <div className="feature-text">
                                    {feature}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ProjectFeatures;