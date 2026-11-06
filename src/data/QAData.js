// Data for the QA Practice page (/qa).
//
// Everything on this page is deliberately generic. The templates are modelled on
// real test documentation I wrote in production, but the schemas here are blank
// and the sample rows are fictional — no client names, environment URLs, or
// credentials from any employer appear in this file or in the downloadable
// workbooks it describes.

// TODO(nirel): replace with the shared Google Drive folder link.
// While this is "#", the QA page hides the Drive call-to-action instead of
// rendering a dead link.
export const QA_DRIVE_LINK = "#";

export const qaIntro = {
  heading: "Quality Assurance Practice",
  lede:
    "Two-plus years testing production web and mobile products — functional, exploratory, regression, and end-to-end — on a B2B retail distribution platform used by sari-sari stores, megastores, and brand principals.",
  paragraphs: [
    "Most of that work was black-box manual testing against a web product: reading the requirement, deciding what could plausibly break, writing the scenarios down before executing them, and filing defects that a developer could act on without a follow-up conversation. The documentation side of it is what this page is about — the test case workbook, the defect log, the traceability matrix, and the process the team actually followed.",
    "When something failed I did not stop at the screen. A wrong number on a dashboard is a UI bug, an API contract bug, or a data bug, and the three get fixed by different people. I traced defects down through REST responses in Postman and into SQL queries against the product database to work out which layer actually owned the fault before raising the ticket.",
    "Alongside the manual work I built the automated layer: a 15-class Espresso and JUnit5 regression suite for the Android app with a custom Excel reporting pipeline, Playwright coverage for a web analytics dashboard, and Selenium with Python for web-level scripting.",
  ],
};

// ─────────────────────────────── Process map ───────────────────────────────
// A serpentine flow rendered as inline SVG. Coordinates are in the 1000x600
// viewBox used by QAPractice.js; boxes are 210 wide and 70 tall.

export const processMap = {
  viewBox: "0 0 1000 600",
  boxWidth: 210,
  boxHeight: 70,
  nodes: [
    { id: "req", x: 20, y: 30, lines: ["1. Requirement Review", "& Risk Assessment"] },
    { id: "plan", x: 270, y: 30, lines: ["2. Test Planning", "& Estimation"] },
    { id: "design", x: 520, y: 30, lines: ["3. Test Design", "scenarios & cases"] },
    { id: "setup", x: 770, y: 30, lines: ["4. Test Data &", "Environment Setup"] },

    { id: "manual", x: 520, y: 190, lines: ["5a. Manual Execution", "functional · exploratory"], accent: true },
    { id: "auto", x: 770, y: 190, lines: ["5b. Automated Execution", "UI suite · regression"], accent: true },

    { id: "defect", x: 770, y: 350, lines: ["6. Defect Logging", "& Triage"] },
    { id: "fix", x: 520, y: 350, lines: ["7. Developer Fix"] },
    { id: "retest", x: 270, y: 350, lines: ["8. Retest & Verify"] },
    { id: "regress", x: 20, y: 350, lines: ["9. Regression Pass"] },

    { id: "signoff", x: 270, y: 500, lines: ["10. Sign-off & Release"] },
    { id: "monitor", x: 520, y: 500, lines: ["11. Post-release", "Monitoring"] },
  ],
  // Each edge is an explicit polyline through the points listed, so the
  // serpentine turns stay readable at any width.
  edges: [
    { points: [[230, 65], [270, 65]] },
    { points: [[480, 65], [520, 65]] },
    { points: [[730, 65], [770, 65]] },

    // setup feeds both execution tracks
    { points: [[875, 100], [875, 190]] },
    { points: [[875, 145], [625, 145], [625, 190]] },

    // both tracks converge on defect triage
    { points: [[875, 260], [875, 350]] },
    { points: [[625, 260], [625, 305], [875, 305]], noArrow: true },

    { points: [[770, 385], [730, 385]] },
    { points: [[520, 385], [480, 385]] },
    { points: [[270, 385], [230, 385]] },

    { points: [[125, 420], [125, 535], [270, 535]] },
    { points: [[480, 535], [520, 535]] },

    // a retest that still fails goes back to triage rather than forward
    {
      points: [[375, 420], [375, 455], [875, 455], [875, 420]],
      dashed: true,
      label: "still failing",
      labelAt: [625, 448],
    },
    // what production teaches you becomes next cycle's risk assessment
    {
      points: [[625, 570], [625, 588], [8, 588], [8, 65], [20, 65]],
      dashed: true,
      label: "learnings feed the next cycle",
      labelAt: [330, 581],
    },
  ],
};

export const defectLifecycle = {
  viewBox: "0 0 1000 175",
  boxWidth: 140,
  boxHeight: 54,
  nodes: [
    { id: "new", x: 10, y: 50, lines: ["New"] },
    { id: "triaged", x: 180, y: 50, lines: ["Triaged"] },
    { id: "progress", x: 350, y: 50, lines: ["In Progress"] },
    { id: "readyqa", x: 520, y: 50, lines: ["Ready for QA"] },
    { id: "verified", x: 690, y: 50, lines: ["Verified"] },
    { id: "closed", x: 850, y: 50, lines: ["Closed"], accent: true },
  ],
  edges: [
    { points: [[150, 77], [180, 77]] },
    { points: [[320, 77], [350, 77]] },
    { points: [[490, 77], [520, 77]] },
    { points: [[660, 77], [690, 77]] },
    { points: [[830, 77], [850, 77]] },
    {
      points: [[760, 104], [760, 140], [420, 140], [420, 104]],
      dashed: true,
      label: "Reopened",
      labelAt: [590, 160],
    },
  ],
};

export const severityLegend = [
  { level: "Critical", meaning: "Blocks a core flow or corrupts data. Stops the release." },
  { level: "High", meaning: "A main path is wrong with no reasonable workaround." },
  { level: "Medium", meaning: "Wrong behaviour with a workaround, or an edge case on a main path." },
  { level: "Low", meaning: "Cosmetic, copy, or a rare edge case. Logged, scheduled, not blocking." },
];

// ─────────────────────────────── Testing types ───────────────────────────────

export const testingTypes = [
  {
    name: "Functional",
    how: "Case-by-case verification against the written requirement. One row per verifiable expected result, so a partial pass is visible rather than hidden inside a single 'mostly works'.",
  },
  {
    name: "Exploratory / Ad hoc",
    how: "Time-boxed sessions against a new feature with no script, aimed at the inputs nobody specified — empty states, maximum lengths, double submits, back-button mid-flow. Anything found gets written up as a permanent case.",
  },
  {
    name: "Regression",
    how: "A fixed suite re-run on every release candidate, weighted toward the modules the current change touches and the modules that have broken before.",
  },
  {
    name: "Smoke",
    how: "A short pass on a fresh build to decide whether deeper testing is even worth starting: can you sign in, load the main list, and complete one transaction.",
  },
  {
    name: "End-to-end",
    how: "Full business chains across roles and screens rather than single screens — an order moving through processing, fulfilment, claim, receipt, and payment, asserting state at each handoff.",
  },
  {
    name: "Cross-device & form factor",
    how: "The same suite executed on phone and tablet layouts, since a layout that passes at one width routinely hides truncation, overlap, or an unreachable button at another.",
  },
  {
    name: "Offline & network simulation",
    how: "Airplane mode mid-write, throttled connections, and server errors injected deliberately, to check that the product queues, retries, or fails loudly instead of silently dropping a transaction.",
  },
  {
    name: "API testing",
    how: "Requests driven directly in Postman to separate a client-side display bug from a contract or payload bug — status codes, field types, null handling, and auth behaviour, below the UI.",
  },
  {
    name: "Data layer",
    how: "SQL queries against the product database to confirm that what the screen shows is what was actually written, and to catch the cases where the UI and the stored record disagree.",
  },
  {
    name: "UAT support",
    how: "Seeding realistic test data, walking stakeholders through the flows, and converting the feedback into triaged defects or scoped enhancement rows rather than loose notes.",
  },
];

// ─────────────────────────────── Templates ───────────────────────────────
// `preview` drives the on-page tables. Keep rows short — the downloadable
// workbook is the real artifact.

export const qaTemplates = [
  {
    id: "test-case",
    title: "QA Test Case & Defect Workbook",
    file: "/qa/templates/QA-Test-Case-Template.xlsx",
    purpose:
      "The document I hand to a team that is testing ad hoc and wants structure without ceremony. Six sheets: scope and entry/exit criteria, a summary roll-up that computes test completion, the test cases themselves, a defect log that records which layer of the stack failed, a requirements traceability matrix, and a release sign-off block.",
    notes: [
      "Status, severity, priority, failing layer, and coverage fields are dropdown-validated so a suite stays sortable and countable.",
      "The summary sheet computes Total and Test Completion % with live formulas — you fill in counts, not percentages.",
      "The defect log has a Failing Layer column (UI / API / Database / Infrastructure / Third-party / Not yet isolated) because that is the field that routes a ticket to the right person.",
    ],
    sheets: [
      {
        name: "Test Cases",
        columns: ["Test ID", "Module / Feature", "Scenario", "Pre-condition", "Test Steps", "Expected Result", "Status", "Severity", "Defect ID"],
        rows: [
          ["TC-001", "Checkout", "Apply a valid discount code to a cart with 3 items", "Signed in; 3 in-stock items in cart", "1. Open Cart  2. Enter SAVE10  3. Apply", "Total decreases by exactly 10% of subtotal; tax recalculates on the discounted subtotal", "Not Tested", "High", "—"],
          ["TC-002", "Checkout", "Apply an expired discount code", "Signed in; cart non-empty", "1. Open Cart  2. Enter EXPIRED20  3. Apply", "Inline error 'This code has expired'; total unchanged", "Not Tested", "Medium", "—"],
        ],
      },
      {
        name: "Defect Log",
        columns: ["Defect ID", "Linked Test ID", "Title", "Expected", "Actual", "Severity", "Failing Layer", "Status"],
        rows: [
          ["DEF-001", "TC-002", "Expired discount code is accepted and reduces the order total", "Inline error; total unchanged", "Code applies; total drops 20%. POST /api/cart/discount returns 200 with valid:true while expires_at is in the past", "Critical", "API", "New"],
          ["DEF-002", "TC-003", "Stock count does not decrement for partially fulfilled orders", "Stock reflects fulfilled quantity", "Stock unchanged; no stock_ledger row written for the fulfilment", "High", "Database", "Triaged"],
        ],
      },
      {
        name: "Test Summary",
        columns: ["#", "Suite / Sheet", "Not Tested", "Passed", "Failed", "Blocked", "Enhancement", "Total", "Test Completion %"],
        rows: [
          ["1", "Checkout — Functional", "0", "—", "—", "—", "—", "= SUM", "= formula"],
          ["2", "Inventory — Regression", "0", "—", "—", "—", "—", "= SUM", "= formula"],
        ],
      },
      {
        name: "Requirements Traceability",
        columns: ["Major Component", "Item", "Category", "Requirement", "Formula / Rule", "Covering Test IDs", "Coverage Status"],
        rows: [
          ["Checkout Totals", "Discounted Subtotal", "CT-1", "Must show the subtotal after discount, rounded to 2 decimals", "Discounted Subtotal = Subtotal − (Subtotal × Discount Rate)", "TC-001", "Covered"],
          ["Inventory", "Available Stock", "IN-1", "Must decrease by the fulfilled quantity within one refresh", "Available = On Hand − Reserved − Fulfilled", "TC-003", "Partially Covered"],
        ],
      },
    ],
  },
  {
    id: "run-report",
    title: "Automated Run Report",
    file: "/qa/templates/QA-Automated-Run-Report-Template.xlsx",
    purpose:
      "The output format of the reporting pipeline I built for the Android regression suite. A pass/fail list is not actionable on its own, so each run emits a per-method summary plus a typed step log — the trace a developer reads to see exactly which assertion failed and what the test had already done successfully before it got there.",
    notes: [
      "Failure Classification separates a real product defect from selector drift, an environment timeout, or a flaky test that passed on retry. Without that column every red run looks equally urgent.",
      "Step types are INFO, ACTION, and ASSERT, so the failing assertion is findable without reading the whole trace.",
      "Form factor is recorded per run because the same suite behaves differently on phone and tablet layouts.",
    ],
    sheets: [
      {
        name: "Summary",
        columns: ["Test Class", "Test Method", "Result", "Total Steps", "Actions", "Assertions", "Duration (s)", "Device / Form Factor", "Failure Classification"],
        rows: [
          ["CheckoutFlowTest", "a01_canApplyValidDiscountCode", "PASS", "42", "31", "11", "86.4", "Phone — 1080×2400", "—"],
          ["CheckoutFlowTest", "a02_rejectsExpiredDiscountCode", "FAIL", "18", "13", "5", "31.2", "Phone — 1080×2400", "Assertion failure — product defect"],
        ],
      },
      {
        name: "Step Log",
        columns: ["Step #", "Type", "Description", "Step Result", "Duration (ms)", "Evidence"],
        rows: [
          ["3", "ACTION", "Enter discount code EXPIRED20", "PASS", "460", "—"],
          ["4", "ACTION", "Tap Apply — POST /api/cart/discount", "PASS", "1320", "—"],
          ["5", "ASSERT", "Expect the inline error 'This code has expired' to be displayed", "FAIL", "5020", "screenshot_a02_step05.png"],
        ],
      },
    ],
  },
];

// ─────────────────────────────── Evidence ───────────────────────────────
// Aggregate figures from real production QA work. Deliberately numbers only:
// the underlying workbooks contain a former employer's client data and are
// not published here.

export const qaMetrics = [
  { value: "402", label: "test scenarios", note: "across 5 suites in a single release's scenario document, at 100% test completion" },
  { value: "1,027", label: "rows of E2E coverage", note: "in one module's end-to-end masterlist workbook" },
  { value: "15", label: "test classes automated", note: "Espresso + JUnit5 regression suite for the Android app" },
  { value: "25%", label: "manual QA cycle reduction", note: "measured after the automated regression suite replaced repeated manual passes" },
  { value: "65", label: "steps in a single automated run report", note: "47 actions and 14 assertions, each individually logged" },
  { value: "2+", label: "years of black-box manual testing", note: "on production web and mobile products" },
];

export const qaTooling = [
  { group: "Test documentation", items: ["Test case workbooks", "Defect logs", "Requirements traceability", "Test summary reporting", "Release sign-off"] },
  { group: "UI automation", items: ["Espresso", "JUnit5", "Playwright", "Selenium + Python"] },
  { group: "API & data", items: ["Postman", "SQL (PostgreSQL)", "REST contract verification"] },
  { group: "Process & tracking", items: ["GitLab issues", "Agile / Scrum", "SDLC & STLC", "Risk-based prioritisation"] },
  { group: "Platforms", items: ["Web (Chrome, Safari, Firefox)", "Android", "iOS", "Phone & tablet form factors"] },
];

// Stated plainly rather than padded — a hiring manager checking this will ask.
export const qaToolingNote =
  "I have not used Katalon Studio or Groovy. The automation above is Espresso and JUnit5 in Kotlin, Playwright in JavaScript, and Selenium in Python; Katalon's scripting model sits close enough to these that I would expect a short ramp rather than a new skill.";
