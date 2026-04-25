import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Projects from "./Projects";
import "../css/Body.css";

const roles = [
  "Automation Engineer",
  "Full-Stack Developer",
  "QA Specialist",
  "API Testing Expert",
];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, text.length - 1));
      }, 40);
    } else {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, text.length + 1));
      }, 80);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <>
      <section className="hero-section">
        {/* Floating particles */}
        <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div className="hero-content">
          <p className="hero-greeting animate-fade-in-up">Hello, I'm</p>
          <h1 className="hero-name animate-fade-in-up delay-1">
            Anshul Sharma
          </h1>
          <div className="hero-typing-wrapper animate-fade-in-up delay-2">
            <span className="hero-typing-text">{text}</span>
            <span className="hero-cursor">|</span>
          </div>
          <p className="hero-description animate-fade-in-up delay-3">
            5+ years of experience in QA automation & full-stack development.
            Building reliable software with Java, Playwright, React & Node.js.
          </p>
          <div className="hero-cta animate-fade-in-up delay-4">
            <a href="#portfolio" className="cta-primary">
              View My Work
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
            <Link to="/Contact" className="cta-secondary">
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Stats strip */}
        <div className="hero-stats animate-fade-in-up delay-5">
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">6+</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Companies</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Tech Skills</span>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio-section">
        <Projects />
      </section>
    </>
  );
};

export default Home;