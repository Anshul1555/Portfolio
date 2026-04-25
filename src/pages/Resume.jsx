import { useState } from "react";
import "../css/Resume.css";

export default function Resume() {
  const [activeSection, setActiveSection] = useState("skills");

  const scrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="resume">
      <h1>Professional Summary</h1>

      {/* Section Jump Nav */}
      <nav className="resume-nav">
        <button
          className={`resume-nav-btn ${activeSection === "skills" ? "active" : ""}`}
          onClick={() => scrollTo("skills")}
        >
          Skills
        </button>
        <button
          className={`resume-nav-btn ${activeSection === "experience" ? "active" : ""}`}
          onClick={() => scrollTo("experience")}
        >
          Experience
        </button>
        <button
          className={`resume-nav-btn ${activeSection === "education" ? "active" : ""}`}
          onClick={() => scrollTo("education")}
        >
          Education
        </button>
      </nav>

      {/* Technical Skills Section */}
      <div id="skills" className="resume-anchor">
        <h2 className="resume-section-title">Technical Skills</h2>
        <div className="skills-container">
          <div className="skills-box">
            <h2><span className="skill-icon">💻</span> Languages</h2>
            <ul>
              <li>Java, JavaScript, TypeScript</li>
              <li>Python, Core Java</li>
              <li>ReactJS, Node.js, Express.js</li>
            </ul>
          </div>

          <div className="skills-box">
            <h2><span className="skill-icon">🧪</span> Test Automation</h2>
            <ul>
              <li>Selenium WebDriver, Playwright (TS/JS)</li>
              <li>Cypress, TestNG, Cucumber BDD</li>
              <li>Rest-Assured, Postman, ReadyAPI</li>
            </ul>
          </div>

          <div className="skills-box">
            <h2><span className="skill-icon">🔗</span> API Testing</h2>
            <ul>
              <li>REST & SOAP Services</li>
              <li>Postman, Rest-Assured</li>
              <li>JSON/XML Validation, API Contract Testing</li>
            </ul>
          </div>

          <div className="skills-box">
            <h2><span className="skill-icon">📦</span> Frameworks</h2>
            <ul>
              <li>Page Object Model (POM)</li>
              <li>BDD (Cucumber)</li>
              <li>Data-Driven Framework</li>
            </ul>
          </div>

          <div className="skills-box">
            <h2><span className="skill-icon">🚀</span> CI/CD & SCM</h2>
            <ul>
              <li>Jenkins, GitHub Actions</li>
              <li>Bitbucket, Git, GitHub, GitLab</li>
              <li>Maven</li>
            </ul>
          </div>

          <div className="skills-box">
            <h2><span className="skill-icon">🗄️</span> Databases</h2>
            <ul>
              <li>Oracle 10g/11g, MySQL</li>
              <li>SQL Server, PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div className="skills-box">
            <h2><span className="skill-icon">📋</span> Defect & Test Mgmt</h2>
            <ul>
              <li>Jira, TestRail, Xray</li>
              <li>XSLT/Extent/Cucumber Reports</li>
            </ul>
          </div>

          <div className="skills-box">
            <h2><span className="skill-icon">🛠️</span> Platforms & Tools</h2>
            <ul>
              <li>Windows, Linux, iOS, Android</li>
              <li>VS Code, Eclipse, IntelliJ IDEA</li>
              <li>GitHub Copilot, ChatGPT, Claude AI</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <div id="experience" className="resume-anchor">
        <h2 className="resume-section-title">Work Experience</h2>
        <div className="experience-container">

          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3>Automation Engineer</h3>
                <p className="company">Scotiabank</p>
                <p className="location">Toronto, ON</p>
              </div>
              <span className="experience-date current">May 2025 – Present</span>
            </div>
            <p className="experience-project">Finacle UI & API Automation – Core Banking Web Application</p>
            <ul>
              <li>Architected and maintained BDD automation frameworks using Java, <strong>Selenium WebDriver</strong>, TestNG, Maven, and Cucumber (POM) for Scotiabank's Finacle core banking platform; added <strong>Playwright (TypeScript)</strong> for cross-browser component and service-level test coverage.</li>
              <li>Designed comprehensive <strong>API test suites</strong> validating REST endpoints across retail and wealth management modules—verifying JSON contracts, authentication flows, and backend data integrity between UI and core banking databases using SQL.</li>
              <li>Integrated regression suites into <strong>CI/CD pipelines</strong> via GitHub Actions, enabling continuous automated testing across multi-environment deployments in Agile sprint cycles.</li>
              <li>Led defect lifecycle management in <strong>Jira</strong>; authored Test Plans, Scenarios, and Test Data in <strong>TestRail</strong> ensuring full functional, regression, integration, system, and UAT coverage.</li>
              <li>Leveraged <strong>GitHub Copilot</strong> for AI-assisted test script development; onboarded and mentored 3 junior QA team members on automation best practices.</li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3>Software Analyst – QA</h3>
                <p className="company">Moneris Solutions</p>
                <p className="location">Toronto, ON</p>
              </div>
              <span className="experience-date">Mar 2023 – Mar 2025</span>
            </div>
            <p className="experience-project">Moneris Go Portal – Web and POS Payment System Testing</p>
            <ul>
              <li>Built end-to-end automation frameworks (Java, Selenium, TestNG, Cucumber/POM) and extended coverage with <strong>Playwright (JS/TS)</strong> for component-level and cross-browser UI testing of the Moneris Go Portal.</li>
              <li>Automated <strong>REST API</strong> test cases using Rest-Assured and Postman; validated SOAP service integrations, JSON payloads, transaction flows, and POS device records against backend SQL data.</li>
              <li>Executed functional, regression, integration, performance, and system testing across the full Moneris Go ecosystem (POS + Web Portal), raising quality concerns and tracking project metrics per QE standards.</li>
              <li>Created and maintained <strong>TestRail</strong> test plans and used Jira for defect tracking, verification, and monitoring release readiness.</li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3>QA Automation Analyst</h3>
                <p className="company">Canada Staffing Solution</p>
                <p className="location">Toronto, ON</p>
              </div>
              <span className="experience-date">Sep 2019 – Mar 2023</span>
            </div>
            <p className="experience-project">Wealth Management – eSignature Digitization Project</p>
            <ul>
              <li>Developed and executed manual and automated test scripts (<strong>Selenium WebDriver</strong>, Java, <strong>Cucumber BDD</strong>, Maven) for end-to-end digitization of eSignature workflows in wealth management documents.</li>
              <li>Conducted API testing using <strong>Postman</strong> and <strong>ReadyAPI</strong>; validated system integrations and REST service responses, supporting UAT and production validation.</li>
              <li>Automated periodic regression suites and integrated them into <strong>Jenkins CI</strong> pipelines; logged and tracked defects in Jira throughout the SDLC.</li>
              <li>Collaborated with BAs, developers, and business users to analyze requirements, create data flow models, and design test scenarios aligned with FSD and use case documentation.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div id="education" className="resume-anchor">
        <h2 className="resume-section-title">Education</h2>
        <div className="education-container">
          <div className="education-card">
            <div className="education-header">
              <div>
                <h3>Bootcamp Certificate – Full Stack Development</h3>
                <p className="institution">University of Toronto, Toronto, ON</p>
              </div>
              <span className="education-date">Jun 2025</span>
            </div>
          </div>

          <div className="education-card">
            <div className="education-header">
              <div>
                <h3>Diploma – Computer Programming</h3>
                <p className="institution">Lambton College, Mississauga, ON</p>
              </div>
              <span className="education-date">Aug 2018</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}