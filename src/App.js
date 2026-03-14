import "./App.css";
import React, { useState, useEffect } from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import IPAddress from "./pages/blogs_page/networking/IPAddress";

import "react-vertical-timeline-component/style.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DockerCommand from "./pages/blogs_page/docker/DockerCommand/dockerCommand";
import Preloader from "./Preloader";
import MyNav from "./components/navbar/MyNav";
import Home from "./pages/home_page/HomePage";
import Resume from "./pages/resume_page/ResumePage";
import ProjectPage from "./pages/project_page/ProjectPage";
import Footer from "./components/footer/Footer";
import About from "./components/aboutme/about/About";
import Ranking from "./components/aboutme/ranking/Ranking";
import EducationJourney from "./components/aboutme/journey/EducationJourney";
import ExperienceJourney from "./components/aboutme/journey/ExperienceJourney";
import CertificatePage from "./pages/certificate_page/CertificatePage";
import PersonalSkill from "./components/aboutme/skills/PersonalSkill";
import TechnicalSkill from "./components/aboutme/skills/TechnicalSkill";
import ComingSoon from "./pages/comingsoon_page/comingsoon";
import Notfound from "./pages/blogs_page/notfound";
import Networking from "./pages/blogs_page/networking/Networking";
import Docker from "./pages/blogs_page/docker/dockerTheory/docker";
import TechnicalJourney from "./components/aboutme/journey/TechnicalJourney";
import ProjectJourney from "./components/aboutme/journey/ProjectJourney";
import SocialMedia from "./components/aboutme/social_media/SocialMedia";
import Toolkit from "./components/aboutme/skills/Toolkit";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <MyNav />

        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<About />} />
            <Route path="personalskill" element={<PersonalSkill />} />
            <Route path="technicalskill" element={<TechnicalSkill />} />
            <Route path="technicaljourney" element={<TechnicalJourney />} />
            <Route path="projectjourney" element={<ProjectJourney />} />
            <Route path="educationjourney" element={<EducationJourney />} />
            <Route path="experiencejourney" element={<ExperienceJourney />} />
            <Route path="ranking" element={<Ranking />} />
            <Route path="socialmedia" element={<SocialMedia />} />
            <Route path="toolkit" element={<Toolkit />} />
          </Route>

          <Route path="/projectspage" element={<ProjectPage />} />
          <Route path="/certificatepage" element={<CertificatePage />} />
          <Route path="/resume" element={<Resume />} />

          {/* Networking Blogs */}
          <Route path="/blogs_page/networking" element={<Networking />} />
          {/* Docker Blogs */}
          <Route path="/blogs_page/docker/dockerTheory" element={<Docker />} />
          {/* Docker Commands */}
          <Route path="/blogs_page/docker/DockerCommand" element={<DockerCommand />} />
          {/* Temporary */}
          <Route path="/blogs" element={<ComingSoon />} />

          <Route path="*" element={<Notfound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;