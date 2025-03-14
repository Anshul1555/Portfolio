import React from 'react';
import '../css/Projects.css';
import '../css/Body.css';   
// Project Object containing project details
const projects = [
  {
    id: 1,
    title: 'Readme Generator',
    description: 'A Node.js application to automatically generate a professional README file.',
    link: 'https://github.com/Anshul1555/readme_generator',
  },
  {
    id: 2,
    title: 'Employee Tracker',
    description: 'A CLI app for managing employee data with PostgreSQL and Node.js.',
    link: 'https://github.com/Anshul1555/employee_tracker',
  },
  {
    id: 3,
    title: 'Vehicle Builder',
    description: 'A Node.js application for configuring and customizing vehicles.',
    link: 'https://github.com/Anshul1555/VehicleBuilder',
  },
  {
    id: 4,
    title: 'Weather Project',
    description: 'A weather dashboard built with Node.js, TypeScript, and OpenWeather API.',
    link: 'https://github.com/Anshul1555/weather_project',
  },
  {
    id: 5,
    title: 'Financial Calculator',
    description: 'A financial calculator to calculate financial metrics and reports.',
    link: 'https://github.com/Anshul1555/financial-calculator.git',
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
