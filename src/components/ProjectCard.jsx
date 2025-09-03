import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const ProjectCard = ({ project }) => {
  return (
    <div className="card bg-surface border border-card-border hover-glow group p-6 flex flex-col justify-between">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4 sm:gap-0">
        <div className="flex items-start sm:items-center gap-3 flex-1">
          <div className="flex-1">
            <h4 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {project.title}
            </h4>
            <span
              className={`badge px-2 ${
                project.status === "completed"
                  ? "badge-accent"
                  : "badge-warning"
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>

        <div className="flex gap-2 flex-shrink-0">
          <a
            href={project.repo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm opacity-60 hover:opacity-100"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href={project.live_link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm opacity-60 hover:opacity-100"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
          </a>
        </div>
      </div>

      <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
        {project.description}
      </p>

      <div className="mb-4">
        <h5 className="font-medium mb-2 text-sm sm:text-base">Key Features:</h5>
        <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
          {project.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
              <span className="truncate sm:overflow-visible">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-3">
        {project.techStack.map((tech, idx) => (
          <span key={idx} className="text-xs sm:text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
