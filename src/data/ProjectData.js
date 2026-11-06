import ateneoTrade from "../Assets/Portfolio/ateneo-trade.png";
import qaTestingImg from "../Assets/qa/qa_cover.png";
import managerio from "../Assets/Portfolio/managerio.png";
import byte from "../Assets/Portfolio/byte.png";
import polydoor from "../Assets/Portfolio/polydoor.png";
import digitalEspresso from "../Assets/Portfolio/digitalEspresso.png";
import stockMarket from "../Assets/Portfolio/stockMarket.png";
import brigada from "../Assets/Portfolio/brigada.png";
import beevrgoMap from "../Assets/beevrgo/beevrgo_map.png";
import beevrgoMap2 from "../Assets/beevrgo/beevrgo_map_2.png";
import beevrgoMap3 from "../Assets/beevrgo/beevrgo_map_3.png";
import beevrgoSettings from "../Assets/beevrgo/beevrgo_settings.png";
import beevrgoReservations from "../Assets/beevrgo/beevrgo_reservations.png";
import bossHome from "../Assets/boss_app/boss_home.png";
import bossHome2 from "../Assets/boss_app/boss_home_2.png";
import bossCampaigns from "../Assets/boss_app/boss_campaigns.png";
import bossSettlements from "../Assets/boss_app/boss_settlement.png";
import bossInbox from "../Assets/boss_app/boss_inbox.png";
import buzzinHome from "../Assets/buzzin/buzzinHome.png";
import buzzinCart from "../Assets/buzzin/buzzinCart.png";
import buzzinItemDetails from "../Assets/buzzin/buzzinItemDetails.png";
import buzzinPayment1 from "../Assets/buzzin/buzzinPayment1.png";
import buzzinPayment2 from "../Assets/buzzin/buzzinPayment2.png";
import buzzinProfile from "../Assets/buzzin/buzzinProfile.png";
import buzzinRestos from "../Assets/buzzin/buzzinRestos.png";
import pwDashboardOverview from "../Assets/pw_analytics_db/dashboard_1.png";
import pwDashboardSalesTrends from "../Assets/pw_analytics_db/dashboard2.png";
import pwDashboardSalesTrends2 from "../Assets/pw_analytics_db/dashboard3.png";
import pwDashboardTopSkus from "../Assets/pw_analytics_db/dashboard4.png";
import pwDashboardStoreMix from "../Assets/pw_analytics_db/dashboard5.png";
import pwDashboardSettlements from "../Assets/pw_analytics_db/dashboard6.png";

export const webProjectsData = [
  {
    id: "1",
    imgPath: ateneoTrade,
    isBlog: false,
    title: "Ateneo Trade",
    description:
      "Enabling university verified and affiliated users to buy and sell, in moderated environments.",
    problemStatement:
      "How do we provide a seamless buy-sell/bid-buy-sell experience to users in moderated environments?",
    solution:
      "Producing a flexible e-commerce website providing a new experience, buy and bid, for users interested to score deals. The users are also verified via their university-affiliated email addresses.",
    targetAudience: "University Students",
    demoLink: "https://ateneo-trade.vercel.app/",
    demoVideo:
      "https://drive.google.com/file/d/1jg6HKFbXRAFAGbMBrL1ec8uKUFq7Xd61/view?usp=drive_link",
    ghLink: "https://github.com/yourusername/ateneo-trade",
    features: ["E-commerce", "Full-Stack", "User authentication"],
    status: "Completed",
    tools: ["Mongo DB", "Express", "React", "Node.js", "Tailwind CSS"],
    timeline: "Started: Jan 2023, Released: Aug 2023",
  },
  {
    id: "2",
    imgPath: managerio,
    isBlog: false,
    title: "Manager.io",
    description:
      "An HR Management application that streamlines employee data management, attendance tracking, and performance reviews. Built with modern web technologies and focused on user experience.",
    demoLink: "https://managerio.vercel.app/employees",
    ghLink: "https://github.com/knee-rel/managerio",
    features: [
      "Employee profiles",
      "Attendance tracking",
      "Performance reviews",
      "Report generation",
    ],
    status: "Completed",
    tools: ["Vue.js", "Node.js"],
    timeline: "Started: Mar 2024, Released: April 2024",
  },
  {
    id: "3",
    imgPath: byte,
    isBlog: false,
    title: "BYTE",
    description:
      "A comprehensive website for BYTE organization showcasing their events, team members, and achievements. Features a modern design with interactive elements.",
    demoLink: "#",
    ghLink: "https://github.com/yourusername/byte",
    features: [
      "Responsive design",
      "Team showcase",
      "Project portfolio",
      "Contact form",
    ],
    tools: ["Gatbsy.js", "Tailwind CSS", "Strapi.io"],
    status: "Completed",
    timeline: "Started: Sept 2021, Released: Oct 2021",
  },
  {
    id: "4",
    imgPath: polydoor,
    isBlog: false,
    title: "Polydoor PH",
    description:
      "A website dedicated for a door wholesaler in the Philippines. Features a comprehensive catalog with a quotation form for door model inquiries.",
    demoLink: "https://polydoor-philippines.com/",
    ghLink: "https://github.com/yourusername/byte",
    features: [
      "Responsive design",
      "Quotation Form",
      "Business Inventory",
      "Contact form",
    ],
    status: "Completed",
    tools: ["WordPress", "PHP", "CSS"],
    timeline: "Started: Jan 2023, Released: Aug 2023",
  },
  {
    id: "5",
    imgPath: digitalEspresso,
    isBlog: false,
    title: "Place Finder",
    description:
      "Making avid travellers users place documentation easier by allowing them to review and document their favorite places.",
    demoLink: "https://mern-digital-espresso.vercel.app/",
    ghLink: "https://github.com/yourusername/byte",
    features: [
      "Maps Integration",
      "Team showcase",
      "Project portfolio",
      "Contact form",
    ],
    status: "Maintenance",
    tools: ["Mongo DB", "Express", "React", "Node.js"],
    timeline: "Started: Jul 2023, Released: Aug 2023",
  },
  {
    id: "6",
    imgPath: brigada,
    isBlog: false,
    title: "Brigada E-skwela",
    description:
      "A comprehensive website for BYTE organization showcasing their services, team members, and achievements. Features a modern design with interactive elements.",
    demoLink: "#",
    ghLink: "https://github.com/yourusername/byte",
    features: [
      "Responsive design",
      "Team showcase",
      "Project portfolio",
      "Contact form",
    ],
    tools: ["Vue.js", "Strapi.io"],
    status: "Completed",
    timeline: "Started: Sept 2021, Released: Oct 2021",
  },
  {
    id: "7",
    imgPath: pwDashboardOverview,
    isBlog: false,
    title: "Principal Analytics Dashboard",
    description:
      "Rearchitected a slow-loading sales & distribution reporting dashboard by moving the analytics read path off PostgreSQL and Redis and onto ClickHouse — cutting report load times from a coffee-break wait to well under a second.",
    extendedDescription:
      "The Principal Dashboard is the internal tool distributors and account managers use to check how a given principal — a brand carried across a network of sari-sari stores and megastores — is moving product: distinct SKUs sold per month, settlement history, store coverage by type and region. The original stack was ordinary and reasonable on paper — React frontend, FastAPI service, PostgreSQL as the system of record, Redis caching the most common queries — but every dashboard load meant a COUNT(DISTINCT ...), a SUM(...), or a GROUP BY across the sales table, exactly the workload a row-oriented OLTP database struggles with. Redis only helped for queries someone had already run; a new principal, year, or date range meant a fresh trip to Postgres regardless of cache warmth. I rebuilt the read path on ClickHouse, a column store built for vectorized scans, and used the same prototype to grow it into a five-report suite.",
    problemStatement:
      "How do we make a five-report sales & distribution dashboard — SKU counts, settlement history, sales trends, top SKUs, and store mix — load quickly for distributors and account managers, when every view requires expensive COUNT(DISTINCT), SUM, and GROUP BY aggregations that a row-oriented database and its cache struggle to serve for arbitrary filter combinations?",
    solution:
      "Moved reporting reads off PostgreSQL and its Redis cache entirely and onto ClickHouse, a columnar OLAP store where an aggregate query only reads the columns it needs. First proved the query path against the dashboard's actual aggregation patterns with a standalone FastAPI service and a single report, then built out four more reports on the same backend — Overview KPIs, Sales Trends with principal comparison, Top SKUs, and Store Mix — plus the shared platform pieces a real reporting tool needs: one date filter instead of five, CSV export, dark mode, and consistent loading/empty/error states.",
    targetAudience:
      "Distributors and account managers tracking how a given principal (brand) is performing across a network of sari-sari stores and megastores.",
    developmentProcess:
      "Built in two phases. First, proving the query path: with a ClickHouse cluster already available, I built a standalone FastAPI service against it (clickhouse-driver, no ORM) with a matching SKU Count view in React, to answer one question — could ClickHouse serve the dashboard's actual query patterns fast enough with no cache in front of it? It could. Second, building out the suite: using the same prototype as the template, I added four more reports against the same ClickHouse backend, plus a shared filter context, CSV export, dark mode, and unified loading/empty/error states.",
    challenges:
      "Wiring four report queries to fire in parallel off the Overview page's KPI row surfaced a real concurrency bug: clickhouse-driver's Client holds a single socket, and two coroutines hitting it at once threw a 'simultaneous queries on single connection' error. Rather than reach for a full connection pool — the right answer for a multi-user production service, but machinery a single local instance doesn't need yet — I wrapped each query in an asyncio.Lock for the same correctness at the current scale. Separately, the original prototype kept its year filter inside one chart component; once there was more than one report, that stopped making sense, so I lifted it into a shared React context that every report reads from, with only Settlement History keeping its own more granular date range.",
    teamContribution:
      "Built solo, end to end: the ClickHouse query prototype, all five reports, the FastAPI backend, the shared filtering context, and the reporting platform pieces (CSV export, dark mode, loading/empty/error states).",
    technicalArchitecture:
      "React 18 + Vite frontend (Ant Design, Recharts) talking to a FastAPI + Python asyncio backend, which reads directly from ClickHouse via clickhouse-driver — no cache layer in front of it, since the column store is fast enough on a cache miss that a separate caching tier stopped earning its complexity.",
    technicalDecisions:
      "Chose ClickHouse over a bigger Redis cache because caching doesn't change what happens on a miss, and a reporting page with an open-ended set of filters makes misses the common case, not the edge case — ClickHouse's columnar storage made the slow class of query structurally faster instead of just less frequent. Chose an asyncio.Lock over a connection pool for the single-connection concurrency bug, matching the fix to the actual current scale rather than building for hypothetical multi-user load.",
    demoLink: "#",
    demoVideo:
      "https://drive.google.com/file/d/1-qfRHOf9AAheNK0ManSfVgfNzAEYYqzQ/view?usp=sharing",
    ghLink: "#",
    features: [
      "Overview KPI Trend Cards",
      "Sales Trends & Principal Comparison",
      "Top SKUs Ranking",
      "Store Mix by Type & Region",
      "Settlement History",
      "Shared Date Filter Context",
      "CSV Export",
      "Dark Mode",
    ],
    status: "Prototype",
    tools: [
      "React 18",
      "Vite",
      "Ant Design",
      "Recharts",
      "FastAPI",
      "Python asyncio",
      "ClickHouse",
      "clickhouse-driver",
    ],
    timeline: "Built: 2026",
    media: [
      {
        type: "screenshot",
        path: pwDashboardOverview,
        caption: "Overview — company-wide KPI trend cards and top principals by revenue",
      },
      {
        type: "screenshot",
        path: pwDashboardSalesTrends,
        caption: "Sales Trends — distinct SKU count trend, filterable by principal",
      },
      {
        type: "screenshot",
        path: pwDashboardSalesTrends2,
        caption: "Sales Trends — SKU velocity and revenue trend by principal",
      },
      {
        type: "screenshot",
        path: pwDashboardTopSkus,
        caption: "Top SKUs — best-performing SKUs ranked by revenue",
      },
      {
        type: "screenshot",
        path: pwDashboardStoreMix,
        caption: "Store Mix — store footprint by type and region",
      },
      {
        type: "screenshot",
        path: pwDashboardSettlements,
        caption: "Settlement History — settlement activity for a selected date range",
      },
    ],
  },
];

export const mobileApplicationsProjects = [
  {
    id: "51",
    imgPath: beevrgoMap,
    isBlog: false,
    title: "beEVrgo",
    description:
      "An electric vehicle charger booking app for clients based in Canada.",
    extendedDescription:
      "beEVrgo is a comprehensive mobile application designed to solve the challenges of finding and booking electric vehicle charging stations across Canada. The app provides real-time availability information, reservation capabilities, and payment processing in a seamless user experience.",
    problemStatement:
      "Electric vehicle owners in Canada struggle with the fragmented nature of charging infrastructure, including difficulty finding available chargers, incompatible payment systems, and uncertain reliability of charging stations.",
    solution:
      "beEVrgo consolidates information from multiple charging networks, provides real-time availability data, enables advance reservations, and streamlines payment through a single platform while allowing users to rate and review stations.",
    targetAudience:
      "Electric vehicle owners in Canada seeking convenient access to charging infrastructure for daily commutes and road trips.",
    developmentProcess:
      "The project followed a user-centered design approach, starting with extensive research among EV owners to identify pain points. We used React Native for cross-platform development and implemented agile methodologies with two-week sprints and continuous user testing.",
    challenges:
      "Major challenges included integrating with multiple charging networks with inconsistent APIs, implementing reliable real-time availability updates, and creating an offline mode for areas with poor connectivity. We addressed these by developing a standardized API adapter layer, implementing a hybrid polling/webhook system for updates, and creating a robust local caching mechanism.",
    teamContribution:
      "The project was developed by a team of six, including three mobile developers, one backend developer, one UI/UX designer, and one project manager. I served as the lead mobile developer, focusing on the map implementation, reservation system, and payment processing integration.",
    technicalArchitecture:
      "The app is built with Flutter for the frontend, with a Django backend deployed on AWS. It uses PostgreSQL for data storage, and integrates with multiple third-party APIs for charger data. The real-time capabilities are powered by occp.",
    technicalDecisions:
      "We chose Flutter over native development to accelerate delivery for both iOS and Android platforms. For mapping, we selected Google Maps due to better offline capabilities and customization options. The app implements a location-based caching strategy to minimize data usage while maintaining responsiveness.",
    apiIntegrations:
      "The app integrates with various EV charging networks (ChargePoint, FLO, Tesla Supercharger network), mapping services (Google Maps), and authentication providers.",
    demoLink: "#",
    demoVideo:
      "https://drive.google.com/file/d/10mFUtN9t6EowROe47AZ7Ts8N8iNSb_JO/view?usp=sharing",
    videos: [
      {
        id: "https://drive.google.com/file/d/1-QO8Y-Tnr7At4TM1c_525xKmOHeNtWdz/view?usp=drive_link",
        title: "Registration Demo",
      },
      {
        id: "https://drive.google.com/file/d/17d4LFYRtSjq5HTjh46yYkCFbLEXR1zO-/view?usp=drive_link",
        title: "Booking Demo",
      },
    ],
    ghLink: "https://github.com/yourusername/byte",
    tools: ["Flutter", "Django", "PostgresQL", "OCPP", "Google Maps"],
    features: ["Full-Stack", "Real-Time Booking App"],
    status: "Completed",
    timeline: "Started: Jul 2024, Completed: Feb 2025",
    teamSize: "3 team members",
    media: [
      {
        type: "screenshot",
        path: beevrgoMap,
        caption: "Main map view showing charger locations",
      },
      {
        type: "screenshot",
        path: beevrgoMap2,
        caption: "Charger details screen",
      },
      {
        type: "screenshot",
        path: beevrgoMap3,
        caption: "Search bar and search results",
      },
      {
        type: "screenshot",
        path: beevrgoReservations,
        caption: "Reservations screen",
      },
      {
        type: "screenshot",
        path: beevrgoSettings,
        caption: "Settings and preferences",
      },
    ],
  },
  {
    id: "52",
    imgPath: bossHome,
    isBlog: false,
    title: "Boss App",
    description:
      "Helping store owners of sari-sari stores to keep track of their sales, settlements, and ongoing promos.",
    extendedDescription:
      "This app provides store owners a convenient way of viewing their performance.",
    problemStatement:
      "The other app, Superstore, contains too much functionality. Multiple users access the said platform, hence the importance of separating features for security purposes.",
    solution:
      "Consolidates all information relevant to the store-owner, while providing limited access to true users only.",
    targetAudience: "Store-owners, specifically those with ",
    developmentProcess:
      "The project followed an agile approach, with consistent development and revisions ongoing.",
    teamContribution:
      "The project was developed by a team of five, including two mobile developers, two backend developers, and one project manager. I served as a mobile developer.",
    technicalArchitecture:
      "The app is built with Flutter for the frontend, with a FastAPI backend. ",
    technicalDecisions:
      "We chose Flutter over native development to accelerate delivery for both iOS and Android platforms. ",
    // apiIntegrations: "The app integrates with various EV charging networks (ChargePoint, FLO, Tesla Supercharger network), mapping services (Google Maps), and authentication providers.",
    demoLink: "#",
    demoVideo:
      "https://drive.google.com/file/d/17d4LFYRtSjq5HTjh46yYkCFbLEXR1zO-/view?usp=drive_link",
    videos: [
      {
        id: "https://drive.google.com/file/d/17d4LFYRtSjq5HTjh46yYkCFbLEXR1zO-/view?usp=drive_link",
        title: "Main App Demo",
      },
    ],
    ghLink: "https://github.com/yourusername/byte",
    tools: ["Flutter", "FastAPI"],
    features: ["Store Management App", "Full-Stack"],
    status: "Ongoing",
    timeline: "Started: Jan 2025",
    teamSize: "3 team members",
    media: [
      {
        type: "screenshot",
        path: bossHome,
        caption: "Home screen (top view)",
      },
      {
        type: "screenshot",
        path: bossHome2,
        caption: "Home screen (bottom view)",
      },
      {
        type: "screenshot",
        path: bossCampaigns,
        caption: "Campaigns available for the user to join",
      },
      {
        type: "screenshot",
        path: bossSettlements,
        caption: "List of settlements received/to be received",
      },
      {
        type: "screenshot",
        path: bossInbox,
        caption: "In-app notifications",
      },
    ],
  },
  {
    id: "53",
    imgPath: buzzinHome,
    isBlog: false,
    title: "Buzzin",
    description: "A contactless ordering system for restaurants",
    extendedDescription: "This app features a qr-code based ordering system.",
    problemStatement:
      "Customer queuing takes a toll on both customers and the business. ",
    solution: "A contact-less ordering system to take restaurant or bar orders",
    targetAudience: "Restaurant and bar owners",
    developmentProcess:
      "The project followed an agile approach, with consistent development and revisions ongoing.",
    teamContribution:
      "The project was developed by me, serving as full-stack developer",
    technicalArchitecture:
      "The app is built with Flutter for the frontend, with a NodeJS backend. ",
    technicalDecisions:
      "We chose Flutter over native development to accelerate delivery for both iOS and Android platforms. ",
    // apiIntegrations: "The app integrates with various EV charging networks (ChargePoint, FLO, Tesla Supercharger network), mapping services (Google Maps), and authentication providers.",
    demoLink: "#",
    demoVideo: "",
    videos: [{ id: "", title: "Main App Demo" }],
    ghLink: "",
    tools: ["Flutter", "Node.JS"],
    features: ["Ordering System", "Full-Stack"],
    status: "Ongoing",
    timeline: "Started: Jan 2023; revisited last Jan 2025",
    teamSize: "6 team members",
    media: [
      {
        type: "screenshot",
        path: buzzinRestos,
        caption: "Restaurant screen",
      },
      {
        type: "screenshot",
        path: buzzinItemDetails,
        caption: "Restaurant item details",
      },
      {
        type: "screenshot",
        path: buzzinCart,
        caption: "Cart Screen",
      },
      {
        type: "screenshot",
        path: buzzinPayment1,
        caption: "Payment Screen",
      },
      {
        type: "screenshot",
        path: buzzinPayment2,
        caption: "Payment portal",
      },
      {
        type: "screenshot",
        path: buzzinProfile,
        caption: "Profile screen",
      },
    ],
  },
];

export const dataScienceProjects = [
  {
    id: "20",
    imgPath: stockMarket,
    isBlog: false,
    title: "Lululemon Stock Market Analysis",
    description:
      "A comprehensive stock market analysis focusing on Lululemon's performance, market trends, and predictive modeling using Python and various data science libraries.",
    ghLink: "https://github.com/knee-rel/DescriptiveStats_Lululemon",
    features: [
      "Time series analysis",
      "Predictive modeling",
      "Market trend visualization",
      "Statistical analysis",
    ],
    status: "Completed",
    timeline: "Started: Sep 2023, Completed: Nov 2023",
  },
];

export const qaProjects = [
  {
    id: "30",
    imgPath: qaTestingImg,
    isBlog: false,
    title: "QA & Test Automation — Packworks",
    description:
      "Architected and built the entire automated testing layer for Packworks' Superstore Android app — from the Robot/Screen pattern infrastructure and E2E order payment chains, to a custom Excel reporting pipeline. Also wrote JUnit5 unit tests and Selenium + Python web automation scripts.",
    extendedDescription:
      "As part of the Packworks engineering team, I took full ownership of QA strategy and test automation for the Superstore Android app. I designed and built the /androidTests directory from scratch, establishing the Robot/Screen pattern architecture for instrumented UI tests using Espresso. I implemented a multi-test E2E order payment chain (PROCESSING → fulfill → ORDER CLAIMED → RECEIVED → PAID), cross-test state tracking via TestDataRegistry, flaky-test retry rules, and a custom reporting pipeline that outputs per-method and per-suite Excel files with failure classification, logcat capture, screenshot-on-failure, and form-factor tagging. On the unit test side, I wrote JUnit5 tests for ViewModels, API contracts, repositories, and data classes using a StandardTestDispatcher base class. Outside Android, I built Selenium + Python scripts for web-level automation. Manual QA was also conducted on two critical product flows: settlement loading and megastore onboarding.",
    problemStatement:
      "How do we catch regressions and verify correctness across Packworks' critical Android and web flows as the product scales — without relying on manual re-testing after every release?",
    solution:
      "Built a layered test strategy: instrumented E2E tests with Espresso (Robot/Screen pattern), JUnit5 unit tests for business logic, Selenium + Python for web automation, and structured manual QA for key onboarding flows. Topped with a custom reporting system so QA results are immediately actionable.",
    features: [
      "Espresso E2E — Robot/Screen Architecture",
      "Order Payment E2E Chain (7 tests)",
      "Custom Excel Reporting Pipeline",
      "Failure Classification & Flaky Retry",
      "JUnit5 ViewModel & API Unit Tests",
      "Selenium + Python Web Automation",
      "Manual QA — Settlement Loading",
      "Manual QA — Megastore Onboarding",
    ],
    status: "Completed",
    tools: [
      "JUnit5",
      "Espresso",
      "Kotlin",
      "Selenium",
      "Python",
      "Android",
      "Hilt",
      "Coroutines",
    ],
    timeline: "Packworks tenure",
    ghLink: "#",
    primaryVideo: "/qa/customer-directory-tablet-web.mp4",
    media: [
      {
        type: "video",
        path: "/qa/customer-directory-tablet-web.mp4",
        caption: "Customer Directory — Tablet Automation Test",
      },
      {
        type: "video",
        path: "/qa/offline-test-manage-inventory-web.mp4",
        caption: "Offline Test — Manage Inventory",
      },
      {
        type: "video",
        path: "/qa/screen-recording-20260622-175518-web.mp4",
        caption: "Full Test Run — June 22 (Session 1)",
      },
      {
        type: "video",
        path: "/qa/screen-recording-20260622-205333-web.mp4",
        caption: "Full Test Run — June 22 (Session 2)",
      },
      {
        type: "video",
        path: "/qa/screen-recording-20260623-113232-web.mp4",
        caption: "Test Run — June 23",
      },
      {
        type: "video",
        path: "/qa/qa_test_demo-web.mp4",
        caption: "Instrumented Suite — Full Run Walkthrough",
      },
    ],
  },
];
