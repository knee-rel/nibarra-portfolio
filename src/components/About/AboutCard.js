import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I graduated as an Information Technology Entrepreneurship
            student-athlete, driven by a passion for integrating technology into
            business strategies.
            <br />
            My overarching goal is to launch a groundbreaking Start-Up that
            transforms the landscape of the Filipino business market.
            <br />I am particularly interested in undertaking projects that
            emphasize <i className="teal">sustainability</i> and contribute to
            <i className="teal">social impact</i>.
          </p>
          <br />
          <h5 style={{ textAlign: "left" }} className="teal">
            Engagements
          </h5>
          <p style={{ textAlign: "justify" }}>
            I am a{" "}
            <b className="teal">
              <i>Software Engineer</i>
            </b>{" "}
            at Teravibe, a company dedicated to crafting innovative IT Solutions
            and Services. I am also a{" "}
            <b className="teal">
              <i>Strategy and Evaluation Specialist</i>
            </b>{" "}
            at Packworks. I am also a part of research engagements at{" "}
            <b className="teal">
              <i>Ateneo Compute and Research Center</i>
            </b>{" "}
            for FASSTER, a Dengue/Covid-19 monitoring dashboard and{" "}
            <b className="teal">
              <i>BUILD, </i>
            </b>{" "}
            a JSGOM research hub for developing clientele solutions.
          </p>
          <p style={{ textAlign: "justify" }}>
            I also serve as a part-time lecturer at Ateneo de Manila University,
            teaching basic Python and JavaScript programming to sophomore,
            junior and senior students.
          </p>
          <br />
          <h5 style={{ textAlign: "left" }} className="teal">
            Technical Skills
          </h5>
          <p style={{ textAlign: "justify" }}>
            Regarding technical skills, I have hands-on experience in developing
            full-stack websites using the MERN stack. I also have experience
            pursuing data analysis projects using pandas, numpy, and matplotlib.
            Additionally, as a hobby, I engage in UI design during my free time.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
