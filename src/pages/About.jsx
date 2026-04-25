import "../css/About.css";

export default function About() {
    return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi, I'm <strong>Anshul Sharma</strong>, an <strong>Automation Engineer</strong> currently
            working at <strong>Scotiabank</strong> in Toronto, where I architect and maintain BDD automation
            frameworks for Finacle core banking applications using Java, Selenium, Playwright, and Cucumber.
          </p>
          <p>
            With over <strong>5+ years of experience</strong> in Information Technology, I specialize in
            <strong> Software Quality Assurance</strong> and <strong>Test Automation</strong>. My expertise
            spans both UI and API testing, with deep proficiency in tools like <strong>Selenium WebDriver</strong>,
            <strong> Playwright (TypeScript/JavaScript)</strong>, <strong>Cypress</strong>, <strong>TestNG</strong>,
            <strong> Postman</strong>, and <strong>Rest-Assured</strong>.
          </p>
          <p>
            Previously, I worked at <strong>Moneris Solutions</strong> testing the Moneris Go Portal and POS payment
            systems, and at <strong>Canada Staffing Solution</strong> building automation for wealth management
            eSignature digitization workflows. Across all roles, I've integrated test suites into <strong>CI/CD
            pipelines</strong>, managed defects in <strong>Jira</strong>, and authored test plans in <strong>TestRail</strong>.
          </p>
          <p>
            I'm also actively expanding my skill set by pursuing a <strong>Full Stack Development Bootcamp</strong> at
            the <strong>University of Toronto</strong>, combining my strong QA background with full-stack development
            skills in <strong>React</strong>, <strong>Node.js</strong>, and <strong>PostgreSQL</strong> to build and
            test high-quality software end to end.
          </p>
        </div>
        <div className="about-image">
          <img src="/profile-pic.JPG" alt="Anshul Sharma" className="profile-pic" />
        </div>
      </div>
    </div>
    );
}
