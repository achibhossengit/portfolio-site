import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiFolder } from "react-icons/fi";
import Divider from "@/components/Divider";
import GithubActivity from "@/components/GithubActivity";

const NOTEWORTHY_LIMIT = 4;
const TEXT_SHADOW = "[text-shadow:0_1px_12px_var(--color-base-100)]";
const HOVER_TEXT_SHADOW =
  "group-hover:[text-shadow:0_1px_12px_var(--color-base-100)] group-focus-within:[text-shadow:0_1px_12px_var(--color-base-100)]";

const ProjectBackdrop = ({ project, imageClassName = "" }) =>
  project.image ? (
    <>
      <img
        src={project.image}
        alt=""
        className={`h-full w-full object-cover brightness-[.32] saturate-[.65] ${imageClassName}`}
      />
      <span className="absolute inset-0 bg-base-100 opacity-55 [[data-theme=light]_&]:opacity-80" />
      <span className="absolute inset-0 bg-primary opacity-20 mix-blend-color" />
    </>
  ) : (
    <div className="absolute inset-0 bg-gradient-to-br from-primary/[.35] via-primary/[.15] to-transparent" />
  );

const ProjectPreview = ({ project }) => (
  <div className="group/preview relative aspect-[16/10] overflow-hidden rounded-md border border-base-content/[.15] bg-base-200 transition duration-300 ease-portfolio hover:shadow-lift">
    {project.image ? (
      <>
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover saturate-[.65] transition duration-300 ease-portfolio group-hover/preview:scale-[1.02] group-hover/preview:saturate-100 motion-reduce:transform-none"
          loading="lazy"
        />
        <span
          className="pointer-events-none absolute inset-0 bg-primary opacity-20 mix-blend-color transition-opacity duration-300 ease-portfolio group-hover/preview:opacity-0"
          aria-hidden="true"
        />
      </>
    ) : (
      <>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[.35] via-primary/[.15] to-transparent transition-colors duration-300 group-hover/preview:from-primary/[.45]" />
        <div className="absolute -right-10 -top-10 size-40 rounded-full border-[24px] border-primary/[.15] transition-transform duration-300 ease-portfolio group-hover/preview:-translate-x-2 group-hover/preview:translate-y-2 motion-reduce:transform-none" />
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
        className="pointer-events-none absolute inset-0 isolate overflow-hidden md:hidden"
        aria-hidden="true"
      >
        <ProjectBackdrop project={project} />
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
        <h3 className={`mb-1 text-2xl font-semibold text-base-content md:text-xl md:[text-shadow:none] ${TEXT_SHADOW}`}>
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 ease-portfolio hover:text-primary focus-visible:text-primary"
            >
              {project.title}
            </a>
          ) : (
            <>{project.title}</>
          )}
        </h3>
        {project.type && (
          <p className={`mb-3 font-mono text-xs text-primary md:[text-shadow:none] ${TEXT_SHADOW}`}>
            {project.type}
          </p>
        )}
        <div className="py-4 md:rounded-md md:bg-base-200 md:p-5 md:shadow-lg">
          <p className={`m-0 text-[0.95rem] leading-relaxed text-base-content/80 md:text-base-content/75 md:[text-shadow:none] ${TEXT_SHADOW}`}>
            {project.description}
          </p>
        </div>
        <ul
          className={`mb-4 mt-1 flex list-none flex-wrap gap-x-4 gap-y-1 p-0 font-mono text-xs text-base-content/80 md:my-4 md:max-w-[70%] md:text-base-content/70 md:[text-shadow:none] ${
            reversed ? "md:mr-auto md:justify-start" : "md:ml-auto md:justify-end"
          } ${TEXT_SHADOW}`}
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
    <li className="group relative flex h-full flex-col overflow-hidden rounded-md bg-base-200 p-5 animate-fade-up transition duration-300 ease-portfolio hover:-translate-y-[7px] hover:shadow-lift focus-within:-translate-y-[7px] focus-within:shadow-lift motion-reduce:animate-none motion-reduce:transform-none">
      <div
        className="pointer-events-none absolute inset-0 isolate overflow-hidden opacity-0 transition-opacity duration-300 ease-portfolio group-hover:opacity-100 group-focus-within:opacity-100"
        aria-hidden="true"
      >
        <ProjectBackdrop
          project={project}
          imageClassName="transition duration-300 ease-portfolio group-hover:scale-[1.02] group-hover:saturate-100 group-focus-within:scale-[1.02] group-focus-within:saturate-100 motion-reduce:transform-none"
        />
      </div>
      <div className="relative z-10 mb-5 flex items-center justify-between gap-3">
        <FiFolder className="text-3xl text-primary" aria-hidden="true" />
        <div className="flex items-center gap-3">
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
      <h4 className={`relative z-10 mb-2 text-lg font-semibold transition-colors duration-200 ease-portfolio group-hover:text-primary group-focus-within:text-primary ${HOVER_TEXT_SHADOW}`}>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        ) : (
          <>{project.title}</>
        )}
      </h4>
      <p className={`relative z-10 mb-5 flex-1 text-sm leading-relaxed text-base-content/70 ${HOVER_TEXT_SHADOW}`}>
        {project.description}
      </p>
      <ul
        className={`relative z-10 m-0 flex list-none flex-wrap gap-x-3 gap-y-1 p-0 font-mono text-xs text-base-content/60 ${HOVER_TEXT_SHADOW}`}
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
