import React from "react";
import "../css/Resume.css";

export default function Resume() {
    return (
      <div className="resume">
        <h1>PROFESSIONAL SUMMARY</h1>
        <div class="skills-container">
        <div class="skills-box">
            <h2>Front-End Technologies</h2>
            <ul>
                <li>HTML, CSS, JavaScript, jQuery</li>
                <li>React.js, Redux</li>
                <li>Responsive Web Design (RWD)</li>
                <li>Tailwind CSS, Bootstrap</li>
            </ul>
        </div>
        
        <div class="skills-box">
            <h2>Back-End Technologies</h2>
            <ul>
                <li>Node.js, Express.js</li>
                <li>RESTful APIs</li>
                <li>PostgreSQL, MySQL,MongoDB</li>
                <li>Server-Side Rendering (SSR)</li>
            </ul>
        </div>
    </div>

        <div className="resume-button-container">
          <a href="/resume.pdf" download="My_Resume.pdf">
          <button className="download-btn">Download My Resume</button>
          </a>
        </div>
      </div>
      
    );
  }
  