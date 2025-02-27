import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Images Imports
import ateneoTrade from "../../Assets/Portfolio/ateneo-trade.png";
import brigada from "../../Assets/Portfolio/brigada.png";
import byte from "../../Assets/Portfolio/byte.png";
import managerio from "../../Assets/Portfolio/managerio.png";
import digitalEspresso from "../../Assets/Portfolio/digitalEspresso.png";
import polydoor from "../../Assets/Portfolio/polydoor.png";
import stockMarket from "../../Assets/Portfolio/stockMarket.png";

function Projects({ webProjectsData, dataScienceProjects }) {
  // const webProjectsData = [
  //   {
  //     id: "1",
  //     imgPath: ateneoTrade,
  //     isBlog: false,
  //     title: "Ateneo Trade",
  //     description:
  //       "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
  //     demoLink: "https://ateneo-trade.vercel.app/",
  //   },
  //   {
  //     id: "2",
  //     imgPath: managerio,
  //     isBlog: false,
  //     title: "Manager.io",
  //     description: "An HR Management application",
  //     demoLink: "https://managerio.vercel.app/employees",
  //   },
  //   {
  //     id: "3",
  //     imgPath: byte,
  //     isBlog: false,
  //     title: "BYTE",
  //     description: "A website for BYTE",
  //     demoLink: "#",
  //   },
  //   {
  //     id: "4",
  //     imgPath: brigada,
  //     isBlog: false,
  //     title: "Brigada E-skwela",
  //     description: "An advocacy website for brigada e-skwela",
  //     demoLink: "https://www.brigadaeskwela.org/",
  //   },
  //   {
  //     id: "5",
  //     imgPath: digitalEspresso,
  //     isBlog: false,
  //     title: "Full Stack Digital Espresso",
  //     description: "An app for digital espresso, a practice.",
  //     demoLink: "https://mern-digital-espresso.vercel.app/",
  //   },
  //   {
  //     id: "6",
  //     imgPath: polydoor,
  //     isBlog: false,
  //     title: "Polydoor",
  //     description: "A catalog website for doors.",
  //     demoLink: "https://polydoor-philippines.com/",
  //   },
  // ];
  // const dataScienceProjects = [
  //   {
  //     id: "20",
  //     imgPath: stockMarket,
  //     isBlog: false,
  //     title: "Lululemon Stock Market Analysis",
  //     description: "A stock market analysis on stock market.",
  //     ghLink: "https://github.com/knee-rel/DescriptiveStats_Lululemon",
  //   },
  // ];
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="teal">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the projects that I have built throughout the years.
        </p>

        <h3 className="project-heading">
          Web <strong className="teal">Development</strong>
        </h3>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {webProjectsData.map((project, index) => (
            <Col
              xl={3}
              lg={4}
              md={6}
              sm={12}
              className="project-card"
              key={index}
            >
              <Link to={`/project/${project.id}`}>
                {" "}
                <ProjectCard {...project} />
              </Link>
            </Col>
          ))}
        </Row>
        <h3 className="project-heading">
          Mobile <strong className="teal">Development</strong>
        </h3>

        <p>Coming soon</p>
        <h3 className="project-heading">
          Data <strong className="teal">Science</strong>
        </h3>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        // In Projects.js, update the data science projects section:
          {dataScienceProjects.map((project, index) => (
            <Col
              xl={3}
              lg={4}
              md={6}
              sm={12}
              className="project-card"
              key={index}
            >
              <Link to={`/project/${project.id}`}>
                <ProjectCard {...project} />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
