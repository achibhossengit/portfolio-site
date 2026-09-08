import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiFolder } from "react-icons/fi";
import Divider from "@/components/Divider";
import GithubActivity from "@/components/GithubActivity";

const NOTEWORTHY_LIMIT = 4;

const ProjectPreview = ({ project }) => {
  const href = project.live_link || project.repo_link;
  const preview = (
    <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-base-content/[.15] bg-base-200 transition duration-300 ease-portfolio group-hover/preview:shadow-lift group-focus/preview:shadow-lift">
      {project.image ? (
        <>
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover saturate-[.65] transition duration-300 ease-portfolio group-hover/preview:scale-[1.02] group-hover/preview:saturate-100 group-focus/preview:scale-[1.02] group-focus/preview:saturate-100 motion-reduce:transform-none"
            loading="lazy"
          />
          <span
            className="pointer-events-none absolute inset-0 bg-primary opacity-20 mix-blend-color transition-opacity duration-300 ease-portfolio group-hover/preview:opacity-0 group-focus/preview:opacity-0"
            aria-hidden="true"
          />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[.35] via-primary/[.15] to-transparent transition-colors duration-300 group-hover/preview:from-primary/[.45] group-focus/preview:from-primary/[.45]" />
          <div className="absolute -right-10 -top-10 size-40 rounded-full border-[24px] border-primary/[.15] transition-transform duration-300 ease-portfolio group-hover/preview:-translate-x-2 group-hover/preview:translate-y-2 group-focus/preview:-translate-x-2 group-focus/preview:translate-y-2 motion-reduce:transform-none" />
          <div className="absolute bottom-5 left-5 right-5">
            <p className="m-0 text-2xl font-semibold text-base-content">{project.title}</p>
          </div>
        </>
      )}
    </div>
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.title}`}
      className="group/preview block focus-visible:rounded-md"
    >
      {preview}
    </a>
  ) : (
    preview
  );
};

const ProjectLinks = ({ project, className = "" }) => (
  <div className={`relative z-10 flex items-center gap-3 ${className}`}>
    {project.repo_link && (
      <a
        className="text-xl transition duration-200 ease-portfolio hover:-translate-y-[3px] hover:text-primary motion-reduce:transform-none"
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
        className="text-xl transition duration-200 ease-portfolio hover:-translate-y-[3px] hover:text-primary motion-reduce:transform-none"
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
          <>
            <img
              src={project.image}
              alt=""
              className="h-full w-full object-cover opacity-25"
            />
            <span
              className="absolute inset-0 bg-primary opacity-20 mix-blend-color"
              aria-hidden="true"
            />
          </>
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
              className="static transition-colors duration-200 ease-portfolio before:absolute before:inset-0 before:z-[1] before:content-[''] hover:text-primary focus-visible:text-primary md:before:hidden"
            >
              {project.title}
            </a>
          ) : (
            <>{project.title}</>
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

const NoteworthyProject = ({ project }) => {
  const href = project.live_link || project.repo_link;

  return (
    <li className="group flex h-full flex-col rounded-md bg-base-200 p-5 animate-fade-up transition duration-300 ease-portfolio hover:-translate-y-[7px] hover:shadow-lift focus-within:-translate-y-[7px] focus-within:shadow-lift motion-reduce:animate-none motion-reduce:transform-none">
      <div className="mb-5 flex items-center justify-between gap-3">
        <FiFolder className="text-3xl text-primary" aria-hidden="true" />
        <div className="relative z-10 flex items-center gap-3">
          {project.repo_link && (
            <a
              className="text-lg transition duration-200 ease-portfolio hover:-translate-y-[3px] hover:text-primary motion-reduce:transform-none"
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
              className="text-lg transition duration-200 ease-portfolio hover:-translate-y-[3px] hover:text-primary motion-reduce:transform-none"
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
      </div>
      <h4 className="mb-2 text-lg font-semibold transition-colors duration-200 group-hover:text-primary group-focus-within:text-primary">
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        ) : (
          <>{project.title}</>
        )}
      </h4>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-base-content/70">
        {project.description}
      </p>
      <ul
        className="m-0 flex list-none flex-wrap gap-x-3 gap-y-1 p-0 font-mono text-xs text-base-content/60"
        aria-label={`${project.title} technologies`}
      >
        {project.techStack.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </li>
  );
};

const Projects = ({ theme }) => {
  const [projects, setProjects] = useState([]);
  const [showAllNoteworthy, setShowAllNoteworthy] = useState(false);

  useEffect(() => {
    fetch("/projects/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(() => setProjects([]));
  }, []);

  const featuredProjects = projects.filter((project) => project.is_featured);
  const noteworthyProjects = projects.filter((project) => !project.is_featured);
  const visibleNoteworthyProjects = showAllNoteworthy
    ? noteworthyProjects
    : noteworthyProjects.slice(0, NOTEWORTHY_LIMIT);

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
            className="mb-6 mt-16 text-center text-2xl font-semibold"
            id="noteworthy-projects-title"
          >
            Other Noteworthy Projects
          </h3>
          <ul
            className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2"
            id="noteworthy-projects-list"
          >
            {visibleNoteworthyProjects.map((project) => (
              <NoteworthyProject key={project.title} project={project} />
            ))}
          </ul>
          {noteworthyProjects.length > NOTEWORTHY_LIMIT && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                className="btn btn-outline btn-sm transition duration-200 ease-portfolio hover:-translate-x-1 hover:-translate-y-1 hover:border-primary hover:bg-transparent hover:text-primary hover:shadow-[4px_4px_0_0_var(--color-primary)] focus-visible:-translate-x-1 focus-visible:-translate-y-1 focus-visible:border-primary focus-visible:text-primary focus-visible:shadow-[4px_4px_0_0_var(--color-primary)] motion-reduce:transform-none"
                aria-controls="noteworthy-projects-list"
                aria-expanded={showAllNoteworthy}
                onClick={() => setShowAllNoteworthy((current) => !current)}
              >
                {showAllNoteworthy ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </section>
      )}
      <GithubActivity theme={theme} />
    </section>
  );
};

export default Projects;
