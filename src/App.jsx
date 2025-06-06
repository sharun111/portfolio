import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Projects from "./Projects";
import { useRef, useState } from "react";

const App = () => {

  const projectRef = useRef(null);

  const aboutRef = useRef(null);

  const [active, setActive] = useState("about");


  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });

  };
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });

  };

  return (
    <div className="about-container">
      <section className="sidebar">
        <h1>Sharun Chaluparambath</h1>
        <h2>Front End Engineer</h2>
        <p>I build accessible, pixel-perfect digital experiences for the web.</p>
        <nav className="menu">
          <ul>
            <li
              className={`menu-item ${active === "about" ? "active" : ""}`}
              onClick={() => {
                scrollToAbout();
                setActive("about");
              }}
            >
              ABOUT
            </li>
            <li
              className={`menu-item ${active === "experience" ? "active" : ""}`}
              onClick={() => setActive("experience")}
            >
              EXPERIENCE
            </li>
            <li
              className={`menu-item ${active === "projects" ? "active" : ""}`}
              onClick={() => {
                scrollToProjects();
                setActive("projects");
              }}
            >
              PROJECTS
            </li>
          </ul>
        </nav>
        <div className="resume-container">
          <a href="/src/assets/Sharun_Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
            View Full Résumé <span className="arrow"></span>
          </a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/sharun111" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://codepen.io" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-codepen"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://goodreads.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-goodreads-g"></i>
          </a>
        </div>

      </section>
      <div>

        <section className="main-content " ref={aboutRef} >

          <div className="para-content " >
            <div className="section-heading">
              <h3>ABOUT</h3>
            </div>
            <p>
              I’ve developed a strong foundation in core front-end technologies like{" "}
              <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>Bootstrap</strong>, and <strong>React</strong>. I take pride in crafting clean, efficient code that turns complex challenges into seamless, user-friendly experiences.
            </p>
            <p>
              My portfolio showcases a variety of projects—from dynamic dashboards and responsive landing pages to full-stack applications—each built with careful attention to performance, accessibility, and consistent design.
            </p>
            <p>
              I’m passionate about continuous learning and staying up-to-date with the latest industry trends. Whether it’s exploring new tools or contributing to open-source, I’m always eager to grow and refine my skills as a developer.
            </p>
            <p>
              I also have experience integrating APIs to connect front-end applications with backend services, enabling dynamic and interactive user experiences.
            </p>
          </div>
        </section>
        <div ref={projectRef} >
          <Projects />

        </div>
      </div>
    </div>

  );
};

export default App;
