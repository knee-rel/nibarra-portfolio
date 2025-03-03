import React from "react";
import { Card } from "react-bootstrap";
import "./VideoPlayer.css";

const VideoPlayer = ({ videoId, title, isMobileAppDemo = false }) => {
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
        <Card className="video-card">
            <Card.Header className="video-header">
                <h5>{title || "Project Demo"}</h5>
            </Card.Header>
            <Card.Body className="video-body">
                {/* Apply special container for mobile app demos to maintain phone aspect ratio */}
                <div className={isMobileAppDemo ? "video-responsive-mobile" : "video-responsive"}>
                    <iframe
                        src={getEmbedUrl(videoId)}
                        frameBorder="0"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                        title={title || "Project Demo"}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            borderRadius: isMobileAppDemo ? '24px' : '0'
                        }}
                    ></iframe>
                </div>
            </Card.Body>
        </Card>
    );
};

export default VideoPlayer;