import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight, BsCircleFill } from "react-icons/bs";
import "./ScreenshotCarousel.css";

const ScreenshotCarousel = ({ screenshots }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((current) => {
            if (current === 0) return screenshots.length - 1;
            return current - 1;
        });
    };

    const handleNext = () => {
        setActiveIndex((current) => {
            if (current === screenshots.length - 1) return 0;
            return current + 1;
        });
    };

    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    // If there are no screenshots, don't render anything
    if (!screenshots || screenshots.length === 0) {
        return null;
    }

    return (
        <div className="screenshots-carousel">
            <div className="carousel-container">
                {/* Main display */}
                <div className="carousel-main">
                    <button className="carousel-control prev" onClick={handlePrev}>
                        <BsChevronLeft />
                    </button>

                    <div className="phone-frame-carousel">
                        <div className="phone-screen-carousel">
                            <img
                                src={screenshots[activeIndex].path}
                                alt={screenshots[activeIndex].caption}
                                className="phone-screenshot-carousel"
                            />
                        </div>
                    </div>

                    <button className="carousel-control next" onClick={handleNext}>
                        <BsChevronRight />
                    </button>
                </div>

                {/* Caption */}
                <div className="carousel-caption">
                    {screenshots[activeIndex].caption}
                </div>

                {/* Thumbnail navigation */}
                <div className="carousel-indicators">
                    {screenshots.map((screenshot, index) => (
                        <button
                            key={index}
                            className={`carousel-indicator ${index === activeIndex ? "active" : ""}`}
                            onClick={() => goToSlide(index)}
                        >
                            <BsCircleFill />
                        </button>
                    ))}
                </div>
            </div>

            {/* Thumbnails row */}
            <Row className="carousel-thumbnails">
                {screenshots.map((screenshot, index) => (
                    <Col key={index} xs={4} md={2} className="thumbnail-col">
                        <Card
                            className={`thumbnail-card ${index === activeIndex ? "active" : ""}`}
                            onClick={() => goToSlide(index)}
                        >
                            <div className="phone-frame-thumbnail">
                                <div className="phone-screen-thumbnail">
                                    <img
                                        src={screenshot.path}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="phone-screenshot-thumbnail"
                                    />
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ScreenshotCarousel;