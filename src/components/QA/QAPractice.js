import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { BsDownload, BsArrowRight, BsFolder2Open } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import Particle from "../Particle";
import {
  qaIntro,
  processMap,
  defectLifecycle,
  severityLegend,
  testingTypes,
  qaTemplates,
  qaMetrics,
  qaTooling,
  qaToolingNote,
  QA_DRIVE_LINK,
} from "../../data/QAData";
import "./QAPractice.css";

const TEAL = "#64ffda";
const MUTED = "#76abae";

/**
 * Renders one of the flow definitions from QAData as inline SVG.
 * Nodes are positioned absolutely inside the definition's own viewBox, so the
 * whole diagram scales with its container and needs no layout library.
 */
function FlowDiagram({ map, idPrefix, title }) {
  const { viewBox, boxWidth, boxHeight, nodes, edges } = map;

  return (
    <svg
      viewBox={viewBox}
      className="qa-flow-svg"
      role="img"
      aria-label={title}
      preserveAspectRatio="xMidYMid meet"
    >
      <title>{title}</title>
      <defs>
        <marker
          id={`${idPrefix}-arrow`}
          markerWidth="8"
          markerHeight="8"
          refX="6.5"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L0,6 L7,3 z" fill={TEAL} />
        </marker>
        <marker
          id={`${idPrefix}-arrow-muted`}
          markerWidth="8"
          markerHeight="8"
          refX="6.5"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L0,6 L7,3 z" fill={MUTED} />
        </marker>
      </defs>

      {edges.map((edge, i) => {
        const stroke = edge.dashed ? MUTED : TEAL;
        const marker = edge.noArrow
          ? undefined
          : `url(#${idPrefix}-arrow${edge.dashed ? "-muted" : ""})`;
        return (
          <g key={`edge-${i}`}>
            <polyline
              points={edge.points.map((pt) => pt.join(",")).join(" ")}
              fill="none"
              stroke={stroke}
              strokeWidth="2"
              strokeLinejoin="round"
              strokeDasharray={edge.dashed ? "6 5" : undefined}
              markerEnd={marker}
            />
            {edge.label && edge.labelAt && (
              <text
                x={edge.labelAt[0]}
                y={edge.labelAt[1]}
                className="qa-flow-edge-label"
                textAnchor="middle"
              >
                {edge.label}
              </text>
            )}
          </g>
        );
      })}

      {nodes.map((node) => {
        const cx = node.x + boxWidth / 2;
        // Vertically centre the label block inside the box.
        const first = node.y + boxHeight / 2 - (node.lines.length - 1) * 9 + 5;
        return (
          <g key={node.id}>
            <rect
              x={node.x}
              y={node.y}
              width={boxWidth}
              height={boxHeight}
              rx="8"
              className={node.accent ? "qa-flow-box qa-flow-box-accent" : "qa-flow-box"}
            />
            {node.lines.map((line, li) => (
              <text
                key={li}
                x={cx}
                y={first + li * 18}
                textAnchor="middle"
                className={li === 0 ? "qa-flow-label" : "qa-flow-sublabel"}
              >
                {line}
              </text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

function TemplatePreview({ sheet }) {
  return (
    <div className="qa-preview">
      <div className="qa-preview-name">{sheet.name}</div>
      <div className="qa-preview-scroll">
        <table className="qa-preview-table">
          <thead>
            <tr>
              {sheet.columns.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sheet.rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => (
                  <td key={ci}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function QAPractice() {
  const hasDriveLink = QA_DRIVE_LINK && QA_DRIVE_LINK !== "#";

  return (
    <Container fluid className="project-section qa-section">
      <Particle />
      <Container>
        {/* ── Intro ───────────────────────────────────────────────── */}
        <h1 className="project-heading">
          Quality <strong className="teal">Assurance</strong>
        </h1>
        <p className="qa-lede">{qaIntro.lede}</p>

        <Row className="justify-content-center">
          <Col lg={10}>
            {qaIntro.paragraphs.map((para, i) => (
              <p className="qa-body" key={i}>
                {para}
              </p>
            ))}
          </Col>
        </Row>

        {/* ── Evidence ────────────────────────────────────────────── */}
        <h3 className="project-heading qa-h3">
          By the <strong className="teal">Numbers</strong>
        </h3>
        <Row className="justify-content-center">
          {qaMetrics.map((metric) => (
            <Col md={6} lg={4} className="mb-4" key={metric.label}>
              <Card bg="dark" className="qa-metric-card h-100">
                <Card.Body>
                  <div className="qa-metric-value">{metric.value}</div>
                  <div className="qa-metric-label">{metric.label}</div>
                  <div className="qa-metric-note">{metric.note}</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <p className="qa-footnote">
          Figures come from test documentation written in production. The workbooks
          themselves hold a former employer's client data and are not published here —
          the templates below are the same schemas, blank.
        </p>

        {/* ── Process map ─────────────────────────────────────────── */}
        <h3 className="project-heading qa-h3">
          QA <strong className="teal">Process Map</strong>
        </h3>
        <p className="qa-body qa-centered">
          How a feature travels from a written requirement to a signed-off release, and
          what happens to it when it fails on the way.
        </p>
        <Card bg="dark" className="qa-diagram-card">
          <Card.Body>
            <FlowDiagram
              map={processMap}
              idPrefix="qa-process"
              title="QA process map: requirement review through to post-release monitoring"
            />
          </Card.Body>
        </Card>

        <h4 className="qa-h4">
          Defect <span className="teal">Lifecycle</span>
        </h4>
        <Card bg="dark" className="qa-diagram-card">
          <Card.Body>
            <FlowDiagram
              map={defectLifecycle}
              idPrefix="qa-defect"
              title="Defect lifecycle: new through to closed, with a reopened path"
            />
          </Card.Body>
        </Card>

        <h4 className="qa-h4">
          Severity <span className="teal">Scale</span>
        </h4>
        <Row className="justify-content-center">
          {severityLegend.map((item) => (
            <Col md={6} lg={3} className="mb-3" key={item.level}>
              <Card bg="dark" className="qa-severity-card h-100">
                <Card.Body>
                  <div className={`qa-severity-level qa-sev-${item.level.toLowerCase()}`}>
                    {item.level}
                  </div>
                  <div className="qa-severity-meaning">{item.meaning}</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* ── Testing types ───────────────────────────────────────── */}
        <h3 className="project-heading qa-h3">
          Testing <strong className="teal">Types</strong>
        </h3>
        <Row className="justify-content-center">
          {testingTypes.map((type) => (
            <Col md={6} lg={4} className="mb-4" key={type.name}>
              <Card bg="dark" className="qa-type-card h-100">
                <Card.Body>
                  <Card.Title className="qa-type-name">{type.name}</Card.Title>
                  <Card.Text className="qa-type-how">{type.how}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* ── Templates ───────────────────────────────────────────── */}
        <h3 className="project-heading qa-h3">
          Document <strong className="teal">Templates</strong>
        </h3>
        <p className="qa-body qa-centered">
          Blank, reusable workbooks modelled on the test documentation I wrote in
          production. Download and use them as they are.
        </p>

        {qaTemplates.map((template) => (
          <Card bg="dark" className="qa-template-card" key={template.id}>
            <Card.Body>
              <Row className="align-items-start">
                <Col lg={8}>
                  <h4 className="qa-template-title">{template.title}</h4>
                  <p className="qa-template-purpose">{template.purpose}</p>
                </Col>
                <Col lg={4} className="qa-template-actions">
                  <Button
                    variant="primary"
                    href={template.file}
                    download
                    className="qa-download-btn"
                  >
                    <BsDownload /> &nbsp;Download .xlsx
                  </Button>
                </Col>
              </Row>

              <ul className="qa-template-notes">
                {template.notes.map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ul>

              <div className="qa-sheet-tag">
                {template.sheets.length} of the workbook's sheets, previewed:
              </div>
              {template.sheets.map((sheet) => (
                <TemplatePreview sheet={sheet} key={sheet.name} />
              ))}
            </Card.Body>
          </Card>
        ))}

        {/* ── Tooling ─────────────────────────────────────────────── */}
        <h3 className="project-heading qa-h3">
          Tools & <strong className="teal">Methods</strong>
        </h3>
        <Row className="justify-content-center">
          {qaTooling.map((group) => (
            <Col md={6} lg={4} className="mb-4" key={group.group}>
              <Card bg="dark" className="qa-tool-card h-100">
                <Card.Body>
                  <Card.Title className="qa-tool-group">{group.group}</Card.Title>
                  <div className="qa-tool-items">
                    {group.items.map((item) => (
                      <span className="qa-tool-pill" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <p className="qa-footnote">{qaToolingNote}</p>

        {/* ── CTAs ────────────────────────────────────────────────── */}
        <h3 className="project-heading qa-h3">
          Go <strong className="teal">Deeper</strong>
        </h3>
        <Row className="justify-content-center qa-cta-row">
          <Col md={6} lg={4} className="mb-4">
            <Card bg="dark" className="qa-cta-card h-100">
              <Card.Body>
                <Card.Title className="qa-cta-title">
                  QA & Test Automation case study
                </Card.Title>
                <Card.Text className="qa-cta-text">
                  The automated testing layer behind this practice — Espresso Robot/Screen
                  architecture, an end-to-end order payment chain, and the Excel reporting
                  pipeline — with recorded test runs.
                </Card.Text>
                <Link to="/project/30">
                  <Button variant="primary" className="qa-download-btn">
                    View case study &nbsp;
                    <BsArrowRight />
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          {hasDriveLink && (
            <Col md={6} lg={4} className="mb-4">
              <Card bg="dark" className="qa-cta-card h-100">
                <Card.Body>
                  <Card.Title className="qa-cta-title">Test artifacts folder</Card.Title>
                  <Card.Text className="qa-cta-text">
                    Sample test documentation and run reports, shared as files you can open
                    and read end to end.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href={QA_DRIVE_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="qa-download-btn"
                  >
                    <BsFolder2Open /> &nbsp;Open folder
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          )}

          <Col md={6} lg={4} className="mb-4">
            <Card bg="dark" className="qa-cta-card h-100">
              <Card.Body>
                <Card.Title className="qa-cta-title">Test code on GitHub</Card.Title>
                <Card.Text className="qa-cta-text">
                  Automation repositories — instrumented Android suites, web test scripts,
                  and the supporting test infrastructure.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/knee-rel"
                  target="_blank"
                  rel="noreferrer"
                  className="qa-download-btn"
                >
                  <AiOutlineGithub /> &nbsp;View GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default QAPractice;
