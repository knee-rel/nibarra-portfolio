import React from "react";
import { Row, Col, Image } from "react-bootstrap";

function Education({ title, university, program, date, details, imageUrl }) {
  return (
    <Row className="justify-content-center">
      <Col className="text-left">
        <h3>{title}</h3>
        <h4>{university}</h4>
        {program && <h5>Program: {program}</h5>}
        <p>{date}</p>
        {details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </Col>
      <Col>
        <Image
          src={imageUrl}
          alt={`${university} Logo`}
          style={{ width: "100px", height: "100px" }}
          fluid
        />
      </Col>
      <hr />
    </Row>
  );
}

export default Education;
