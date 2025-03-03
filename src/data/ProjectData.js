import ateneoTrade from '../Assets/Portfolio/ateneo-trade.png'
import managerio from '../Assets/Portfolio/managerio.png'
import byte from '../Assets/Portfolio/byte.png'
import polydoor from '../Assets/Portfolio/polydoor.png'
import digitalEspresso from '../Assets/Portfolio/digitalEspresso.png'
import stockMarket from '../Assets/Portfolio/stockMarket.png'
import brigada from '../Assets/Portfolio/brigada.png'
import beevrgoMap from '../Assets/beevrgo/beevrgo_map.png'
import beevrgoMap2 from '../Assets/beevrgo/beevrgo_map_2.png'
import beevrgoMap3 from '../Assets/beevrgo/beevrgo_map_3.png'
import beevrgoSettings from '../Assets/beevrgo/beevrgo_settings.png'
import beevrgoReservations from '../Assets/beevrgo/beevrgo_reservations.png'
import bossHome from '../Assets/boss_app/boss_home.png'
import bossHome2 from '../Assets/boss_app/boss_home_2.png'
import bossCampaigns from '../Assets/boss_app/boss_campaigns.png'
import bossSettlements from '../Assets/boss_app/boss_settlement.png'
import bossInbox from '../Assets/boss_app/boss_inbox.png'

export const webProjectsData = [
    {
        id: "1",
        imgPath: ateneoTrade,
        isBlog: false,
        title: "Ateneo Trade",
        description: "Enabling users to buy and sell, in moderated environments.",
        demoLink: "https://ateneo-trade.vercel.app/",
        ghLink: "https://github.com/yourusername/ateneo-trade",
        features: [
            "E-commerce",
            "Full-Stack",
            "User authentication"
        ],
        status: "Completed",
        timeline: "Started: Jan 2023, Released: Mar 2023"
    },
    {
        id: "2",
        imgPath: managerio,
        isBlog: false,
        title: "Manager.io",
        description: "An HR Management application that streamlines employee data management, attendance tracking, and performance reviews. Built with modern web technologies and focused on user experience.",
        demoLink: "https://managerio.vercel.app/employees",
        ghLink: "https://github.com/yourusername/managerio",
        features: [
            "Employee profiles",
            "Attendance tracking",
            "Performance reviews",
            "Report generation"
        ],
        status: "Completed",
        timeline: "Started: Mar 2024, Released: Mar 2024"
    },
    {
        id: "3",
        imgPath: byte,
        isBlog: false,
        title: "BYTE",
        description: "A comprehensive website for BYTE organization showcasing their events, team members, and achievements. Features a modern design with interactive elements.",
        demoLink: "#",
        ghLink: "https://github.com/yourusername/byte",
        features: [
            "Responsive design",
            "Team showcase",
            "Project portfolio",
            "Contact form"
        ],
        status: "Completed",
        timeline: "Started: Sept 2021, Released: Oct 2021"
    },
    {
        id: "4",
        imgPath: polydoor,
        isBlog: false,
        title: "Polydoor PH",
        description: "A comprehensive website for BYTE organization showcasing their services, team members, and achievements. Features a modern design with interactive elements.",
        demoLink: "https://polydoor-philippines.com/",
        ghLink: "https://github.com/yourusername/byte",
        features: [
            "Responsive design",
            "Quotation Form",
            "Business Inventory",
            "Contact form"
        ],
        status: "Completed",
        timeline: "Started: Jan 2023, Released: Aug 2023"
    },
    {
        id: "5",
        imgPath: digitalEspresso,
        isBlog: false,
        title: "Place Finder",
        description: "Making avid travellers users place documentation easier by allowing them to review and document their favorite places.",
        demoLink: "#",
        ghLink: "https://github.com/yourusername/byte",
        features: [
            "Maps Integration",
            "Team showcase",
            "Project portfolio",
            "Contact form"
        ],
        status: "Maintenance",
        timeline: "Started: Jul 2023, Released: Aug 2023"
    },
    {
        id: "6",
        imgPath: brigada,
        isBlog: false,
        title: "Brigada E-skwela",
        description: "A comprehensive website for BYTE organization showcasing their services, team members, and achievements. Features a modern design with interactive elements.",
        demoLink: "#",
        ghLink: "https://github.com/yourusername/byte",
        features: [
            "Responsive design",
            "Team showcase",
            "Project portfolio",
            "Contact form"
        ],
        status: "Completed",
        timeline: "Started: Sept 2021, Released: Oct 2021"
    },
];

export const mobileApplicationsProjects = [
    {
        id: "51",
        imgPath: beevrgoMap,
        isBlog: false,
        title: "beEVrgo",
        description: "An electric vehicle charger booking app for clients based in Canada.",
        extendedDescription: "beEVrgo is a comprehensive mobile application designed to solve the challenges of finding and booking electric vehicle charging stations across Canada. The app provides real-time availability information, reservation capabilities, and payment processing in a seamless user experience.",
        problemStatement: "Electric vehicle owners in Canada struggle with the fragmented nature of charging infrastructure, including difficulty finding available chargers, incompatible payment systems, and uncertain reliability of charging stations.",
        solution: "beEVrgo consolidates information from multiple charging networks, provides real-time availability data, enables advance reservations, and streamlines payment through a single platform while allowing users to rate and review stations.",
        targetAudience: "Electric vehicle owners in Canada seeking convenient access to charging infrastructure for daily commutes and road trips.",
        developmentProcess: "The project followed a user-centered design approach, starting with extensive research among EV owners to identify pain points. We used React Native for cross-platform development and implemented agile methodologies with two-week sprints and continuous user testing.",
        challenges: "Major challenges included integrating with multiple charging networks with inconsistent APIs, implementing reliable real-time availability updates, and creating an offline mode for areas with poor connectivity. We addressed these by developing a standardized API adapter layer, implementing a hybrid polling/webhook system for updates, and creating a robust local caching mechanism.",
        teamContribution: "The project was developed by a team of six, including three mobile developers, one backend developer, one UI/UX designer, and one project manager. I served as the lead mobile developer, focusing on the map implementation, reservation system, and payment processing integration.",
        technicalArchitecture: "The app is built with Flutter for the frontend, with a Django backend deployed on AWS. It uses PostgreSQL for data storage, and integrates with multiple third-party APIs for charger data. The real-time capabilities are powered by occp.",
        technicalDecisions: "We chose Flutter over native development to accelerate delivery for both iOS and Android platforms. For mapping, we selected Google Maps due to better offline capabilities and customization options. The app implements a location-based caching strategy to minimize data usage while maintaining responsiveness.",
        apiIntegrations: "The app integrates with various EV charging networks (ChargePoint, FLO, Tesla Supercharger network), mapping services (Google Maps), and authentication providers.",
        demoLink: "#",
        demoVideo: 'https://drive.google.com/file/d/10mFUtN9t6EowROe47AZ7Ts8N8iNSb_JO/view?usp=sharing',
        videos: [
            { id: "https://drive.google.com/file/d/1-QO8Y-Tnr7At4TM1c_525xKmOHeNtWdz/view?usp=drive_link", title: "Registration Demo" },
            { id: "https://drive.google.com/file/d/17d4LFYRtSjq5HTjh46yYkCFbLEXR1zO-/view?usp=drive_link", title: "Booking Demo" }
        ],
        ghLink: "https://github.com/yourusername/byte",
        tools: [
            "Flutter",
            "Django",
            "PostgresQL",
            "OCPP",
            "Google Maps",
        ],
        features: [
            "Full-Stack",
            "Real-Time Booking App",
        ],
        status: "Completed",
        timeline: "Started: Jul 2024, Completed: Feb 2025",
        teamSize: "3 team members",
        media: [
            {
                type: "screenshot",
                path: beevrgoMap,
                caption: "Main map view showing charger locations"
            },
            {
                type: "screenshot",
                path: beevrgoMap2,
                caption: "Charger details screen"
            },
            {
                type: "screenshot",
                path: beevrgoMap3,
                caption: "Search bar and search results"
            },
            {
                type: "screenshot",
                path: beevrgoReservations,
                caption: "Reservations screen"
            },
            {
                type: "screenshot",
                path: beevrgoSettings,
                caption: "Settings and preferences"
            },
        ]
    },
    {
        id: "52",
        imgPath: bossHome,
        isBlog: false,
        title: "Boss App",
        description: "Helping store owners of sari-sari stores to keep track of their sales, settlements, and ongoing promos.",
        extendedDescription: "This app provides store owners a convenient way of viewing their performance.",
        problemStatement: "The other app, Superstore, contains too much functionality. Multiple users access the said platform, hence the importance of separating features for security purposes.",
        solution: "Consolidates all information relevant to the store-owner, while providing limited access to true users only.",
        targetAudience: "Store-owners, specifically those with ",
        developmentProcess: "The project followed an agile approach, with consistent development and revisions ongoing.",
        teamContribution: "The project was developed by a team of five, including two mobile developers, two backend developers, and one project manager. I served as a mobile developer.",
        technicalArchitecture: "The app is built with Flutter for the frontend, with a FastAPI backend. ",
        technicalDecisions: "We chose Flutter over native development to accelerate delivery for both iOS and Android platforms. ",
        // apiIntegrations: "The app integrates with various EV charging networks (ChargePoint, FLO, Tesla Supercharger network), mapping services (Google Maps), and authentication providers.",
        demoLink: "#",
        demoVideo: 'https://drive.google.com/file/d/17d4LFYRtSjq5HTjh46yYkCFbLEXR1zO-/view?usp=drive_link',
        videos: [
            { id: "https://drive.google.com/file/d/17d4LFYRtSjq5HTjh46yYkCFbLEXR1zO-/view?usp=drive_link", title: "Main App Demo" },
        ],
        ghLink: "https://github.com/yourusername/byte",
        tools: [
            "Flutter",
            "FastAPI",
        ],
        features: [
            "Store Management App",
            "Full-Stack",
        ],
        status: "Ongoing",
        timeline: "Started: Jan 2025",
        teamSize: "3 team members",
        media: [
            {
                type: "screenshot",
                path: bossHome,
                caption: "Home screen (top view)"
            },
            {
                type: "screenshot",
                path: bossHome2,
                caption: "Home screen (bottom view)"
            },
            {
                type: "screenshot",
                path: bossCampaigns,
                caption: "Campaigns available for the user to join"
            },
            {
                type: "screenshot",
                path: bossSettlements,
                caption: "List of settlements received/to be received"
            },
            {
                type: "screenshot",
                path: bossInbox,
                caption: "In-app notifications"
            },
        ]
    },
]

export const dataScienceProjects = [
    {
        id: "20",
        imgPath: stockMarket,
        isBlog: false,
        title: "Lululemon Stock Market Analysis",
        description: "A comprehensive stock market analysis focusing on Lululemon's performance, market trends, and predictive modeling using Python and various data science libraries.",
        ghLink: "https://github.com/knee-rel/DescriptiveStats_Lululemon",
        features: [
            "Time series analysis",
            "Predictive modeling",
            "Market trend visualization",
            "Statistical analysis"
        ],
        status: "Completed",
        timeline: "Started: Sep 2023, Completed: Nov 2023"
    }
];