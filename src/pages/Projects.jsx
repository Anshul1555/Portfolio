import '../css/Projects.css';

// Project data with tech stack tags
const projects = [
  {
    id: 1,
    title: 'Readme Generator',
    description: 'A Node.js application to automatically generate a professional README file.',
    link: 'https://github.com/Anshul1555/readme_generator',
    tags: ['Node.js', 'CLI', 'Inquirer'],
  },
  {
    id: 2,
    title: 'Employee Tracker',
    description: 'A CLI app for managing employee data with PostgreSQL and Node.js.',
    link: 'https://github.com/Anshul1555/employee_tracker',
    tags: ['Node.js', 'PostgreSQL', 'CLI'],
  },
  {
    id: 3,
    title: 'Vehicle Builder',
    description: 'A Node.js application for configuring and customizing vehicles.',
    link: 'https://github.com/Anshul1555/VehicleBuilder',
    tags: ['Node.js', 'TypeScript', 'OOP'],
  },
  {
    id: 4,
    title: 'Weather Project',
    description: 'A weather dashboard built with Node.js, TypeScript, and OpenWeather API.',
    link: 'https://github.com/Anshul1555/weather_project',
    tags: ['Node.js', 'TypeScript', 'API'],
  },
  {
    id: 5,
    title: 'Financial Calculator',
    description: 'A financial calculator to calculate financial metrics and reports.',
    link: 'https://github.com/Anshul1555/financial-calculator.git',
    tags: ['JavaScript', 'Finance', 'Web App'],
  },
  {
    id: 6,
    title: 'Portfolio',
    description: 'A Portfolio website built using React with modern design.',
    link: 'https://github.com/Anshul1555/Portfolio',
    tags: ['React', 'Vite', 'CSS'],
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
            {project.tags && (
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            )}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
