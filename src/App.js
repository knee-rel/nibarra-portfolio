import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import ProjectDetails from "./components/Projects/ProjectDetails";
// Check the correct path for your project data
import { webProjectsData, dataScienceProjects, mobileApplicationsProjects } from "./data/ProjectData";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects
            webProjectsData={webProjectsData}
            dataScienceProjects={dataScienceProjects}
            mobileApplicationsProjects={mobileApplicationsProjects}
          />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route
            path="/project/:id"
            element={
              <ProjectDetails
                webProjectsData={webProjectsData}
                dataScienceProjects={dataScienceProjects}
                mobileApplicationsProjects={mobileApplicationsProjects} // Fixed prop name
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;