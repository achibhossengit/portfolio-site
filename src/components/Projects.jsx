import { useEffect, useState } from "react";

const ProjectItem = ({ project }) => (
  <li className="project-item">
    <div className="project-head">
      <a
        className="project-title"
        href={project.live_link || project.repo_link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {project.title}
      </a>
      {project.repo_link && (
        <a
          className="project-link"
          href={project.repo_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          code
        </a>
      )}
    </div>
    <p className="project-desc">{project.description}</p>
    <p className="project-stack">{project.techStack.join(", ")}</p>
  </li>
);

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(() => setProjects([]));
  }, []);

  return (
    <section className="projects">
      <h2 className="section-title">Projects</h2>
      <ul className="project-list">
        {projects.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
