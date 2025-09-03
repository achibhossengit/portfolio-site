import { FaUserGraduate, FaBriefcase } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [projectType, setProjectType] = useState(1);

  useEffect(() => {
    fetch("/projects.json") // fetch from public folder
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  return (
    <section id="projects" className="px-0 md:px-2 mt-10">
      <div className="container max-w-6xl mx-auto">
        <div className="flex gap-5 mb-5 flex-wrap">
          <button
            onClick={() => setProjectType(1)}
            className={`btn btn-sm ${
              projectType == 1 ? "btn-primary" : "btn-outline"
            }`}
          >
            <FaBriefcase />
            Professional Projects
          </button>

          <button
            onClick={() => setProjectType(2)}
            className={`btn btn-sm ${
              projectType == 2 ? "btn-primary" : "btn-outline"
            }`}
          >
            <FaUserGraduate />
            Learning Purpose
          </button>
        </div>

        {projectType == 1 ? (
          <div
            key={projectType}
            className="animate-in slide-in-from-left duration-500"
          >
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-6">
              {projects
                .filter((p) => p.type === "professional")
                .map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
            </div>
          </div>
        ) : (
          <div
            key={projectType}
            className="animate-in slide-in-from-right duration-500"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {projects
                .filter((p) => p.type === "personal")
                .map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
