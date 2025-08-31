import {
  FaExternalLinkAlt,
  FaGithub,
  FaCalendar,
  FaUsers,
  FaShoppingCart,
  FaHome,
  FaCheckSquare,
  FaUserGraduate,
  FaBriefcase,
} from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Site Manager",
    description:
      "A complete Site Management System for contractors managing daily operations, attendance, costs, and profit calculations.",
    techStack: ["Django REST Framework", "React", "PostgreSQL"],
    type: "professional",
    status: "completed",
    icon: <FaUsers className="w-6 h-6" />,
    features: [
      "Daily labour attendance (হাজিরা)",
      "Site costs and cash management",
      "Daily profit calculation",
      "Full expense tracking",
      "Role-based permissions (Site Manager, Main Manager, Contractor)",
    ],
  },
  {
    title: "PhiMart E-commerce",
    description:
      "Full-featured e-commerce platform with product management, shopping cart, and order processing capabilities.",
    techStack: ["Django REST Framework", "React", "Redux", "PostgreSQL"],
    type: "personal",
    status: "completed",
    icon: <FaShoppingCart className="w-6 h-6" />,
    features: [
      "Product catalog with categories",
      "Shopping cart and checkout",
      "User authentication",
      "Order management",
      "Admin dashboard",
    ],
  },
  {
    title: "Event Manager",
    description:
      "Event planning and management application with CRUD operations and user management.",
    techStack: ["Django REST Framework", "React", "SQLite"],
    type: "personal",
    status: "completed",
    icon: <FaCalendar className="w-6 h-6" />,
    features: [
      "Event creation and management",
      "User registration system",
      "Event categories and filtering",
      "Responsive design",
      "REST API integration",
    ],
  },
  {
    title: "FindRoomme",
    description:
      "Roommate finder application to help people find compatible roommates and shared accommodations.",
    techStack: ["React", "Express.js", "Node.js", "MongoDB"],
    type: "personal",
    status: "ongoing",
    icon: <FaHome className="w-6 h-6" />,
    features: [
      "User profiles and preferences",
      "Roommate matching algorithm",
      "Location-based search",
      "Chat functionality",
      "Property listings",
    ],
  },
  {
    title: "Task Manager",
    description:
      "Simple yet effective task management application built with Django for learning purposes.",
    techStack: ["Django", "HTML/CSS", "JavaScript", "SQLite"],
    type: "personal",
    status: "completed",
    icon: <FaCheckSquare className="w-6 h-6" />,
    features: [
      "Task CRUD operations",
      "Priority levels",
      "Due date management",
      "Category organization",
      "Progress tracking",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my journey in full-stack development, from client
            projects to personal learning experiments.
          </p>
        </div>

        {/* Professional Projects */}
        <div className="mb-12">
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