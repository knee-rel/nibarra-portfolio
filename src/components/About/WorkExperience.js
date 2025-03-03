import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";

function WorkExperience() {
    const experiences = [
        {
            title: "Business Systems Engineer / Mobile Applications Developer",
            company: "The Pack Solutions Inc.",
            period: "April 2024 – Present",
            type: "Full-time",
            achievements: [
                "Automated website testing using Python, identifying performance issues across 10+ pages and reducing manual testing time by 30%.",
                "Designed a full-stack application prototype leveraging FastAPI and React.js, addressing loading time inefficiencies and projected to increase user engagement by 15%.",
                "Led the development of Boss App a partnership initiative with Unilever, introducing a custom dashboard for Sari-Sari store owners, resulting in a 25% increase in user satisfaction."
            ],
            technologies: ["Python", "FastAPI", "React.js", "Automated Testing"]
        },
        {
            title: "Lecturer",
            company: "Ateneo de Manila University",
            period: "July 2023 - Present",
            type: "Part-Time",
            achievements: [
                "Leads sustainable tech research at BUILD, specializing in Python, and develops reusable libraries that have supported 5+ student-led start-ups.",
                "Conducted 10+ workshops in Python and JavaScript for the School of Management Honors and IT Entrepreneurship Honors Programs, fostering hands-on learning for over 100 students.",
                "Integrated web development initiatives, such as API workshops, which helped students prototype 3+ entrepreneurial projects, increasing their success rates by 25%..",
                "Introduced web development concepts in class to empower students with technical skills, directly contributing to the scalability of their start-ups."
            ],
            technologies: ["Python", "FastAPI", "React.js", "Flutter", "Pandas", "Matplotlib", "Seaborn", "Selenium", "Django", "WordPress"]
        },
        {
            title: "Mobile Software Engineer",
            company: "EVDrop Technology Inc.",
            period: "Jul 2024 – Sept 2024",
            type: "Contract",
            achievements: [
                "Developed a cross-platform EV charging booking app using Flutter, securing funding for the company.",
                "Collaborated with backend engineers to design an optimized data structure, reducing development time by 20%, saving significant developer hours.",
                "Implemented caching strategies to enhance app performance, reducing loading times by 40% (from 5 seconds to 3 seconds)."
            ],
            technologies: ["Flutter", "Dart", "RESTful APIs", "Caching Strategies"]
        },
        {
            title: "Software Engineer",
            company: "LFC Technology",
            period: "Feb 2024 – May 2024",
            type: "Contract",
            achievements: [
                "Conducted data analysis using Pandas and NumPy, creating backtesting algorithms for trading platforms like QuantConnect and Interactive Brokers, achieving a 12% improvement in backtesting accuracy.",
                "Applied risk management techniques, including position sizing and stop-loss strategies, to optimize trading outcomes, reducing potential losses by 8%.",
                "Utilized historical market data to refine trading algorithms, ensuring profitability and consistency through performance analysis, resulting in a 10% increase in trading strategy performance."
            ],
            technologies: ["Python", "Pandas", "NumPy", "Algorithmic Trading", "Risk Management"]
        },
        {
            title: "WordPress Developer",
            company: "Freelance",
            period: "July 2023 – Dec 2023",
            type: "Contract",
            achievements: [
                "Designed and prototyped a website for a door wholesaler in the Philippines using Figma, later developed with WordPress and WooCommerce plugins, increasing online visibility by 40%.",
                "Customized templates via CSS and PHP, ensuring seamless deployment and functionality, and reducing website maintenance time by 20%."
            ],
            technologies: ["WordPress", "WooCommerce", "Figma", "CSS", "PHP"]
        }
    ];

    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col md={12}>
                <h1 className="project-heading">
                    Professional <strong className="teal">Experience</strong>
                </h1>

                {experiences.map((exp, index) => (
                    <Card key={index} className="experience-card mb-4">
                        <Card.Body>
                            <Row>
                                <Col md={8}>
                                    <h3 className="experience-title">{exp.title}</h3>
                                    <h5 className="company-name">
                                        <BsFillBriefcaseFill className="me-2" />
                                        {exp.company} <span className="experience-type">({exp.type})</span>
                                    </h5>
                                </Col>
                                <Col md={4} className="text-md-end">
                                    <p className="experience-duration">
                                        <FaRegCalendarAlt className="me-2" />
                                        {exp.period}
                                    </p>
                                </Col>
                            </Row>

                            <ul className="achievements-list mt-3">
                                {exp.achievements.map((achievement, achIdx) => (
                                    <li key={achIdx}>{achievement}</li>
                                ))}
                            </ul>

                            <div className="tech-tags mt-3">
                                {exp.technologies.map((tech, techIdx) => (
                                    <span key={techIdx} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </Col>
        </Row>
    );
}

export default WorkExperience;