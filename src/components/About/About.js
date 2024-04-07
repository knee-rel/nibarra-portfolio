import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import WebTechStack from "./WebTechStack";
import Aboutcard from "./AboutCard";
import Education from "./Education";
import computerImg from "../../Assets/computer.png";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  const educationData = [
    {
      title: "Master of Science",
      institution: "Ateneo de Manila University",
      program: "MS Sustainability Management",
      date: "2023 - Present",
      details: ["Currently on a Leave of Absence", "4.0 GPA"],
      imageUrl:
        "https://www.pngkey.com/png/detail/242-2427180_ateneo-de-manila-logo.png",
    },
    {
      title: "Bachelor of Science",
      institution: "Ateneo de Manila University",
      program: "BS Major in Information Technology Entrepreneurship",
      date: "2019 - 2023",
      details: [
        "Consistent Dean's Lister",
        "Graduated as Top 2 in the ITE Program",
        "3.76 GPA (Magna Cum Laude Standing)",
      ],
      imageUrl:
        "https://www.pngkey.com/png/detail/242-2427180_ateneo-de-manila-logo.png",
    },
    {
      title: "High School Diploma",
      institution: "Ateneo de Manila Senior High School",
      program: "General Academic Strand",
      date: "2017 - 2019",
      details: [
        "Consistent Honor Student",
        "3.63 Cumulative GPA",
        "Graduated with Second Honors",
        "St. Stanislaus Kostka Awardee",
        "St. Faber Leadership Award",
      ],
      imageUrl:
        "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1017f306-5cdc-4458-b82e-f4d6e73e9628/nus_logo.png",
    },
    {
      title: "NUS Enterprise Summer Programme",
      institution: "National University of Singapore",
      program: "Entrepreneurship",
      date: "July 2021",
      details: [
        "Two-week intensive summer program",
        "Exposure to Singaporean start-up scene",
      ],
      imageUrl:
        "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3103168f-c0a3-4524-bfd7-e78dfd5173b4/smu_logo.png",
    },
    {
      title: "Online Data Camp",
      institution: "Singapore Management University",
      program: "Digital Transformation and Financial Analytics Using Python",
      date: "February 2023",
      details: [
        "Two-week intensive BootCamp",
        "Exposure to Python libraries (pandas, matplotlib, etc)",
        "Analyze companies and their position in the Stock Market",
      ],
      imageUrl:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fpng-wjhud&psig=AOvVaw3xmv20ElI-DNRcJZXdqHxQ&ust=1711971505886000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCODQ1o21noUDFQAAAAAdAAAAABAE",
    },
  ];
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="teal">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading">
          Educational <strong className="teal">Background </strong>
        </h1>

        {educationData.map((education, index) => (
          <Education key={index} {...education} />
        ))}

        <Github />
      </Container>
    </Container>
  );
}

export default About;
