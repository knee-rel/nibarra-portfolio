import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function MobileProjectCard(props) {
    return (
        <Card className="project-card-view">
            <div className="mobile-card-preview">
                <div className="phone-frame-preview">
                    <div className="phone-screen-preview">
                        <img src={props.imgPath} alt="card-img" className="phone-screenshot-preview" />
                    </div>
                </div>
            </div>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>

                {/* External links */}
                {props.ghLink && (
                    <Button variant="primary" href={props.ghLink} target="_blank">
                        <BsGithub /> &nbsp;
                        GitHub
                    </Button>
                )}
                {"\n"}
                {"\n"}

                {/* App Store/Play Store links */}
                {props.demoLink && (
                    <Button
                        variant="primary"
                        href={props.demoLink}
                        target="_blank"
                        style={{ marginLeft: props.ghLink ? "10px" : "0" }}
                    >
                        <CgWebsite /> &nbsp;
                        App Store
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}

export default MobileProjectCard;