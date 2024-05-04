import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Components/Home/Home.css";
import "./Components/Navbar/Nav.css";
import About from "./Components/Home/About";
import Resume from "./Components/Home/Resume";
import Projects from "./Components/Home/Projects";
import Blog from "./Components/Home/Blog";
import Navbar from "./Components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [sidebarActive, setSidebarActive] = useState(true);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <>
      <Router>
        <main>
          <aside
            className={sidebarActive ? "sidebar active" : "sidebar"}
            data-sidebar=""
          >
            <div class="sidebar-info">
              <figure class="avatar-box">
                <img src="Hemant.jpeg" alt="Hemant Kashyap" width="80" />
              </figure>

              <div class="info-content">
                <h1 class="name" title="Hemant Kumar Kashyap">
                  Hemant Kashyap
                </h1>
                <p class="title">Full Stack Developer</p>
              </div>

              <button
                class="info_more-btn"
                data-sidebar-btn=""
                fdprocessedid="gnv11"
                onClick={toggleSidebar}
              >
                <span>Show Contacts</span>
              </button>
            </div>

            <div class="sidebar-info_more">
              <div class="separator"></div>

              <ul class="contacts-list">
                <li class="contact-item">
                  <div class="icon-box">
                    <FontAwesomeIcon icon={faSquareEnvelope} />
                  </div>

                  <div class="contact-info">
                    <p class="contact-title">Email</p>

                    <a
                      href="mailto:kashyaphemantk@gmail.com"
                      class="contact-link"
                    >
                      kashyaphemantk@gmail.com
                    </a>
                  </div>
                </li>

              
              </ul>

              <div class="separator"></div>

              <ul class="social-list">
                <li class="social-item">
                  <a
                    href="https://www.linkedin.com/in/arunsanjeev/"
                    target="_blank"
                    class="social-link"
                  >
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                  </a>
                </li>

                <li class="social-item">
                  <a
                    href="https://github.com/arunsanjeevms"
                    target="_blank"
                    class="social-link"
                  >
                    <FontAwesomeIcon icon="fa-brands fa-square-github" />
                  </a>
                </li>

                <li class="social-item">
                  <a
                    href="https://www.instagram.com/script_kiddie._/ "
                    target="_blank"
                    class="social-link"
                  >
                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          <div className="main-content">
            <Navbar />
            <Routes>
            <Route exact path="/" element={<About />} />
              <Route exact path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/socials" element={<Blog />} />
            </Routes>
          </div>
        </main>
      </Router>
    </>
  );
}

export default App;
