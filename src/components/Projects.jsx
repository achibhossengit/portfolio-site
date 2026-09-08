import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Divider from "@/components/Divider";

const ProjectPreview = ({ project }) => (
  <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-base-content/15 bg-base-200">
    {project.image ? (
      <img
        src={project.image}
        alt={`${project.title} preview`}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    ) : (
      <>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/35 via-primary/15 to-transparent" />
        <div className="absolute -right-10 -top-10 size-40 rounded-full border-[24px] border-primary/15" />
        <div className="absolute bottom-5 left-5 right-5">
          <p className="m-0 text-2xl font-semibold text-base-content">{project.title}</p>
        </div>
      </>
    )}
  </div>
);

const ProjectLinks = ({ project, className = "" }) => (
  <div className={`relative z-10 flex items-center gap-3 ${className}`}>
    {project.repo_link && (
      <a
        className="text-xl transition-colors hover:text-primary"
        href={project.repo_link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} source code`}
        title="Source code"
      >
        <FaGithub />
      </a>
    )}
    {project.live_link && project.live_link !== project.repo_link && (
      <a
        className="text-xl transition-colors hover:text-primary"
        href={project.live_link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title}`}
        title="Open project"
      >
        <FiExternalLink />
      </a>
    )}
  </div>
);

const ProjectItem = ({ project, index }) => {
  const reversed = index % 2 === 1;
  const href = project.live_link || project.repo_link;

  return (
    <li className="relative -mx-2 grid overflow-hidden rounded-md bg-base-200 shadow-lg md:mx-0 md:min-h-[19rem] md:grid-cols-12 md:items-center md:overflow-visible md:rounded-none md:bg-transparent md:shadow-none">
      <div
        className="pointer-events-none absolute inset-0 md:hidden"
        aria-hidden="true"
      >
        {project.image ? (
          <img
            src={project.image}
            alt=""
            className="h-full w-full object-cover opacity-25"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-base-300/40" />
        )}
      </div>

      <div
        className={`hidden md:col-span-7 md:row-start-1 md:block ${
          reversed ? "md:col-start-6" : "md:col-start-1"
        }`}
      >
        <ProjectPreview project={project} />
      </div>

      <div
        className={`relative z-10 flex flex-col justify-center px-6 py-8 md:col-span-7 md:row-start-1 md:p-0 ${
          reversed
            ? "md:col-start-1 md:text-left"
            : "md:col-start-6 md:text-right"
        }`}
      >
        <p className="mb-1 font-mono text-xs text-primary">Featured Project</p>
        <h3 className="mb-3 text-2xl font-semibold text-base-content md:text-xl">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="static before:absolute before:inset-0 before:z-[1] before:content-[''] md:before:hidden"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        <div className="py-4 md:rounded-md md:bg-base-200 md:p-5 md:shadow-lg">
          <p className="m-0 text-[0.95rem] leading-relaxed text-base-content/80 md:text-base-content/75">
            {project.description}
          </p>
        </div>
        <ul
          className={`mb-4 mt-1 flex list-none flex-wrap gap-x-4 gap-y-1 p-0 font-mono text-xs text-base-content/80 md:my-4 md:text-base-content/60 ${
            reversed ? "md:justify-start" : "md:justify-end"
          }`}
          aria-label={`${project.title} technologies`}
        >
          {project.techStack.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <ProjectLinks
          project={project}
          className={reversed ? "md:justify-start" : "md:justify-end"}
        />
      </div>
    </li>
  );
};

const NoteworthyProject = ({ project }) => (
  <li className="group flex h-full flex-col rounded-md bg-base-200 p-5 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
    <div className="mb-4 flex items-center justify-end gap-3">
      {project.repo_link && (
        <a
          className="text-lg transition-colors hover:text-primary"
          href={project.repo_link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} source code`}
          title="Source code"
        >
          <FaGithub />
        </a>
      )}
      {project.live_link && project.live_link !== project.repo_link && (
        <a
          className="text-lg transition-colors hover:text-primary"
          href={project.live_link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title}`}
          title="Open project"
        >
          <FiExternalLink />
        </a>
      )}
    </div>
    <h4 className="mb-2 text-lg font-semibold transition-colors group-hover:text-primary">
      {project.title}
    </h4>
    <p className="mb-5 flex-1 text-sm leading-relaxed text-base-content/70">
      {project.description}
    </p>
    <ul
      className="m-0 flex list-none flex-wrap gap-x-3 gap-y-1 p-0 font-mono text-xs text-base-content/55"
      aria-label={`${project.title} technologies`}
    >
      {project.techStack.map((technology) => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>
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

  const featuredProjects = projects.filter((project) => project.is_featured);
  const noteworthyProjects = projects.filter((project) => !project.is_featured);

  return (
    <section className="scroll-mt-20" id="projects">
      <Divider label="Projects" />
      <ul className="mb-0 ml-0 mr-0 mt-6 flex list-none flex-col gap-8 p-0 md:gap-20">
        {featuredProjects.map((project, index) => (
          <ProjectItem key={project.title} project={project} index={index} />
        ))}
      </ul>
      {noteworthyProjects.length > 0 && (
        <section aria-labelledby="noteworthy-projects-title">
          <h3
            className="mb-6 mt-16 text-center text-xl font-semibold"
            id="noteworthy-projects-title"
          >
            Other Noteworthy Projects
          </h3>
          <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
            {noteworthyProjects.map((project) => (
              <NoteworthyProject key={project.title} project={project} />
            ))}
          </ul>
        </section>
      )}
    </section>
  );
};

export default Projects;
