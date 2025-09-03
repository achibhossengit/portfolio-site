import { FaUserGraduate, FaBriefcase } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json") // fetch from public folder
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  return (
    <section id="projects" className="px-0 md:px-2 mt-10">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my journey in full-stack development, from client
            projects to personal learning experiments.
          </p>
        </div>

        {/* Professional Projects */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <FaBriefcase className="w-4 h-4 text-primary-foreground" />
            </div>
            Professional Projects
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-6">
            {projects
              .filter((p) => p.type === "professional")
              .map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
              <FaUserGraduate className="w-4 h-4 text-secondary-foreground" />
            </div>
            Learning Purpose
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects
              .filter((p) => p.type === "personal")
              .map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
