import React from "react";
import { Row, Col, Image } from "react-bootstrap";

function Education({ title, university, program, date, details, imageUrl }) {
  return (
    <Row className="justify-content-center">
      <Col xs={12} md={6}>
        <Image
          src={imageUrl}
          alt={`${university} Logo`}
          style={{
            maxWidth: "50%",
            height: "auto",
            width: "auto", // Ensure the image is not constrained by its width
            maxHeight: "100%", // Allow the height to adjust accordingly
            ...(window.innerWidth <= 768
              ? { width: "30px", height: "30px" }
              : {}), // Adjust size for tablet screens (md breakpoint)
          }}
          fluid
        />
      </Col>
      <Col xs={12} md={6} className="text-left">
        <h3>{title}</h3>
        <h4>{university}</h4>
        {program && <h5>Program: {program}</h5>}
        <p>{date}</p>
        {details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </Col>
    </Row>
  );
}

export default Education;
