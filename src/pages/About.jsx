import "../css/About.css";

export default function About() {
    return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi, I'm <strong>Anshul Sharma</strong>, a passionate and results-driven software professional with over <strong>
            5 years of experience</strong> in Information Technology, specializing in <strong>Software Quality Assurance (QA) Testing</strong>.
            I have a strong foundation in both <strong>manual and automation testing</strong>, with extensive expertise in testing
            <strong>Client/Server</strong> and <strong>Web-based applications</strong>.
          </p>
          <p>
            My technical skill set includes proficiency in various automation testing tools like <strong>Selenium WebDriver</strong>, <strong>Postman</strong>,
             <strong>Cucumber</strong>, <strong>JUnit</strong>, and <strong>TestNG</strong>, along with frameworks such as <strong>Page Object Model</strong>,
              <strong>BDD</strong>, and <strong>Data-Driven Testing</strong>. I am also proficient in working with technologies such as <strong>HTML</strong>,
               <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, and have experience with databases like <strong>Oracle</strong> and <strong>SQL Server</strong>.
          </p>
          <p>
            Currently, I work as a <strong>Software Analyst</strong> at <strong>Moneris Solutions</strong>, where I test critical applications such as the <strong>Moneris Go Portal
                </strong> and <strong>payment processing systems</strong>. My key strengths include performing functional, integration, and regression testing, along with the development
                 and maintenance of automation frameworks, all aimed at reducing manual testing efforts and improving software quality.
          </p>
          <p>
            I am also actively expanding my skill set by pursuing a <strong>Bootcamp in Full Stack Development</strong> at the <strong>University of Toronto</strong>.
             My goal is to combine my strong QA background with full-stack development skills to build and test high-quality software solutions.
          </p>
        </div>
        <div className="about-image">
          <img src="/profile-pic.JPG" alt="Anshul Sharma" className="profile-pic" />
        </div>
      </div>
    </div>
    );
}
