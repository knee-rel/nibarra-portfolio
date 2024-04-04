import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import nirelAvatar from "../../Assets/nirel-avatar.png";
import Tilt from "react-parallax-tilt";
import { FaLinkedinIn } from "react-icons/fa6";
import { VscGithubInverted } from "react-icons/vsc";
import WebTechStack from "../About/WebTechStack";
import DataTechStack from "../About/DataTechStack";
import MobileTechStack from "../About/MobileTechStack";
import Toolstack from "../About/Toolstack";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={nirelAvatar} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              MINI <span className="teal"> BIO </span>
            </h1>
            <p className="home-about-body">
              Tech enthusiast skilled in
              <i>
                <b className="teal"> Python and JavaScript, </b>
              </i>
              aspiring to excel in Data & Analytics, AI, & Web Development.
              <br />
              <br />A perpetual learner with strong time management,
              flexibility, and dependability. Open to feedback, I bring a growth
              mindset, creativity, and collaboration to projects. Eager for
              mentorship opportunities, I thrive independently, embracing
              challenges with curiosity.
              <br />
              <br />
              Committed to making a &nbsp;
              <i>
                <b className="teal">dynamic impact</b> &nbsp;
              </i>
              in the tech landscape.
            </p>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <Row>
          <h1 className="project-heading">
            Professional <strong className="teal">Skillset </strong>
          </h1>
          <WebTechStack />
          <DataTechStack />
          <MobileTechStack />
          <Toolstack />
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>SOCIALS</h1>
            <p>
              Feel free to <span className="teal">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/knee-rel"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <VscGithubInverted />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nirel-ibarra/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
