import { useEffect, useState } from "react";
import Divider from "@/components/Divider";

const ProjectItem = ({ project }) => (
  <li>
    <div className="mb-1 flex items-baseline gap-3">
      <a
        className="text-base font-semibold no-underline hover:text-primary"
        href={project.live_link || project.repo_link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {project.title}
      </a>
      {project.repo_link && (
        <a
          className="link link-hover font-mono text-xs text-primary"
          href={project.repo_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          code
        </a>
      )}
    </div>
    <p className="mb-0.5 text-[0.95rem] leading-snug">{project.description}</p>
    <p className="m-0 font-mono text-sm text-base-content/60">
      {project.techStack.join(", ")}
    </p>
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
    <section className="scroll-mt-4" id="projects">
      <Divider label="Projects" />
      <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
        {projects.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
