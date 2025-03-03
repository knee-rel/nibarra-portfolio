import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FaRegCalendarAlt, FaGraduationCap } from "react-icons/fa";
import { BsFillBuildingFill } from "react-icons/bs";

function Education({ title, institution, program, date, details, imageUrl }) {
  return (
    <Card className="experience-card mb-4">
      <Card.Body>
        <Row>
          <Col md={2} sm={3} xs={12} className="mb-3 mb-sm-0 d-flex align-items-center justify-content-center">
            <div className="education-logo-container">
              <img
                src={imageUrl}
                alt={`${institution} Logo`}
                className="education-logo img-fluid"
              />
            </div>
          </Col>
          <Col md={10} sm={9} xs={12}>
            <Row>
              <Col md={8}>
                <h3 className="experience-title">
                  <FaGraduationCap className="me-2" />
                  {title}
                </h3>
                <h5 className="company-name">
                  <BsFillBuildingFill className="me-2" />
                  {institution}
                </h5>
                {program && (
                  <p className="program-name mb-1">
                    <strong>Program:</strong> {program}
                  </p>
                )}
              </Col>
              <Col md={4} className="text-md-end">
                <p className="experience-duration">
                  <FaRegCalendarAlt className="me-2" />
                  {date}
                </p>
              </Col>
            </Row>

            <ul className="achievements-list mt-3">
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Education;