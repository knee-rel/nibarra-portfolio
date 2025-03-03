import React, { useState } from "react";
import {
    BsChevronLeft,
    BsChevronRight,
    BsCircleFill,
    BsPlayFill,
} from "react-icons/bs";
import "./VideoCarousel.css";
import "./ConsistentPhoneFrame.css"; // Import the consistent styles

const VideoCarousel = ({ videos }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((current) => {
            if (current === 0) return videos.length - 1;
            return current - 1;
        });
    };

    const handleNext = () => {
        setActiveIndex((current) => {
            if (current === videos.length - 1) return 0;
            return current + 1;
        });
    };

    // If there are no videos, don't render anything
    if (!videos || videos.length === 0) {
        return null;
    }

    // Convert Google Drive link to embed format
    const getEmbedUrl = (driveId) => {
        // Handle different Google Drive URL formats
        if (driveId.includes("drive.google.com/file/d/")) {
            // Extract ID from a standard drive file URL
            const fileId = driveId.split("/file/d/")[1].split("/")[0];
            return `https://drive.google.com/file/d/${fileId}/preview`;
        } else if (driveId.includes("drive.google.com/open?id=")) {
            // Extract ID from an "open" URL
            const fileId = driveId.split("id=")[1].split("&")[0];
            return `https://drive.google.com/file/d/${fileId}/preview`;
        } else if (driveId.includes("youtu.be") || driveId.includes("youtube.com")) {
            // Handle YouTube links
            let youtubeId;
            if (driveId.includes("youtu.be/")) {
                youtubeId = driveId.split("youtu.be/")[1];
            } else if (driveId.includes("watch?v=")) {
                youtubeId = driveId.split("watch?v=")[1].split("&")[0];
            }
            return `https://www.youtube.com/embed/${youtubeId}`;
        }
        // If it's already just the ID or another format, use as is
        return `https://drive.google.com/file/d/${driveId}/preview`;
    };

    return (
        <div className="videos-carousel">
            <h3 className="section-title">
                App <span className="highlight">Demonstrations</span>
            </h3>

            <div className="carousel-container">
                {/* Main display using consistent phone frame */}
                <div className="consistent-carousel-wrapper">
                    {videos.length > 1 && (
                        <button className="consistent-carousel-control prev" onClick={handlePrev}>
                            <BsChevronLeft />
                        </button>
                    )}

                    <div className="consistent-phone-frame">
                        <div className="consistent-phone-screen">
                            <iframe
                                src={getEmbedUrl(videos[activeIndex].id)}
                                // width="100%"
                                // height="100%"
                                allow="autoplay; encrypted-media; picture-in-picture"
                                allowFullScreen
                                title={videos[activeIndex].title || "Video player"}
                                className="consistent-phone-content"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {videos.length > 1 && (
                        <button className="consistent-carousel-control next" onClick={handleNext}>
                            <BsChevronRight />
                        </button>
                    )}
                </div>

                {/* Caption */}
                <div className="consistent-caption">
                    {videos[activeIndex].title || "App demonstration"}
                </div>

                {/* Dots for navigation */}
                {videos.length > 1 && (
                    <div className="consistent-carousel-indicators">
                        {videos.map((_, index) => (
                            <button
                                key={index}
                                className={`consistent-carousel-indicator ${index === activeIndex ? "active" : ""}`}
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            >
                                <BsCircleFill />
                            </button>
                        ))}
                    </div>
                )}

                {/* Thumbnail navigation for multiple videos - matching ScreenshotCarousel style */}
                {videos.length > 1 && (
                    <div className="consistent-thumbnails">
                        {videos.map((video, index) => (
                            <div
                                key={index}
                                className={`consistent-thumbnail ${index === activeIndex ? "active" : ""}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="consistent-phone-frame-mini">
                                    <div className="consistent-phone-screen-mini">
                                        {/* We can't show actual video thumbnails, so we'll use a placeholder */}
                                        <div
                                            className="consistent-phone-content-mini"
                                            style={{
                                                backgroundColor: "#f1f1f1",
                                                height: "100%",
                                                position: "relative"
                                            }}
                                        >
                                            <div className="consistent-play-icon">
                                                <BsPlayFill />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideoCarousel;