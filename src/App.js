import React, { useEffect, useState } from "react";
import "./App.css";

const sections = [
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <nav className="navbar">
        <ul className="nav-list">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={activeSection === section.id ? "nav-item active" : "nav-item"}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <section id="about" className="section">
        <div className="content-container">
          <img src="/headshot.jpg" alt="Ryan Wallman" className="profile-img" />
          <h1 className="title">Ryan Wallman</h1>
          <p className="description">
            Hello! I'm a web developer passionate about creating amazing digital experiences. I enjoy coding, designing, and learning new technologies.
          </p>
          <a href="Wallman__Ryan___resume.pdf" className="resume-button" download>
            Download My Resume
          </a>
        </div>
      </section>
      <section id="projects" className="section">
        <div className="content-container">
          <h1 className="title">Projects</h1>
        </div>
      </section>
      <section id="contact" className="section">
        <div className="content-container">
          <h1 className="title">Contact</h1>
        </div>
      </section>
    </div>
  );
}

export default App;
