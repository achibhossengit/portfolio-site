import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users, ShoppingCart, Home, CheckSquare } from "lucide-react";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  type: 'professional' | 'personal';
  status: 'completed' | 'ongoing';
  icon: React.ReactNode;
  features: string[];
}

const projects: Project[] = [
  {
    title: "Site Manager",
    description: "A complete Site Management System for contractors managing daily operations, attendance, costs, and profit calculations.",
    techStack: ["Django REST Framework", "React", "PostgreSQL"],
    type: 'professional',
    status: 'completed',
    icon: <Users className="w-6 h-6" />,
    features: [
      "Daily labour attendance (হাজিরা)",
      "Site costs and cash management",
      "Daily profit calculation",
      "Full expense tracking",
      "Role-based permissions (Site Manager, Main Manager, Contractor)"
    ]
  },
  {
    title: "PhiMart E-commerce",
    description: "Full-featured e-commerce platform with product management, shopping cart, and order processing capabilities.",
    techStack: ["Django REST Framework", "React", "Redux", "PostgreSQL"],
    type: 'personal',
    status: 'completed',
    icon: <ShoppingCart className="w-6 h-6" />,
    features: [
      "Product catalog with categories",
      "Shopping cart and checkout",
      "User authentication",
      "Order management",
      "Admin dashboard"
    ]
  },
  {
    title: "Event Manager",
    description: "Event planning and management application with CRUD operations and user management.",
    techStack: ["Django REST Framework", "React", "SQLite"],
    type: 'personal',
    status: 'completed',
    icon: <Calendar className="w-6 h-6" />,
    features: [
      "Event creation and management",
      "User registration system",
      "Event categories and filtering",
      "Responsive design",
      "REST API integration"
    ]
  },
  {
    title: "FindRoomme",
    description: "Roommate finder application to help people find compatible roommates and shared accommodations.",
    techStack: ["React", "Express.js", "Node.js", "MongoDB"],
    type: 'personal',
    status: 'ongoing',
    icon: <Home className="w-6 h-6" />,
    features: [
      "User profiles and preferences",
      "Roommate matching algorithm",
      "Location-based search",
      "Chat functionality",
      "Property listings"
    ]
  },
  {
    title: "Task Manager",
    description: "Simple yet effective task management application built with Django for learning purposes.",
    techStack: ["Django", "HTML/CSS", "JavaScript", "SQLite"],
    type: 'personal',
    status: 'completed',
    icon: <CheckSquare className="w-6 h-6" />,
    features: [
      "Task CRUD operations",
      "Priority levels",
      "Due date management",
      "Category organization",
      "Progress tracking"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my journey in full-stack development, from client projects to personal learning experiments.
          </p>
        </div>

        {/* Professional Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Users className="w-4 h-4 text-primary-foreground" />
            </div>
            Professional Projects
          </h3>
          
          <div className="grid gap-6">
            {projects.filter(p => p.type === 'professional').map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
              <Github className="w-4 h-4 text-secondary-foreground" />
            </div>
            Personal & Educational Projects
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => p.type === 'personal').map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="p-6 bg-surface border-card-border hover-glow group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-primary text-primary-foreground">
            {project.icon}
          </div>
          <div>
            <h4 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {project.title}
            </h4>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant={project.type === 'professional' ? 'default' : 'secondary'}>
                {project.type}
              </Badge>
              <Badge variant={project.status === 'completed' ? 'accent' : 'warning'}>
                {project.status}
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button size="sm" variant="ghost" className="opacity-60 hover:opacity-100">
            <Github className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="ghost" className="opacity-60 hover:opacity-100">
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <p className="text-muted-foreground mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="mb-4">
        <h5 className="font-medium mb-2">Key Features:</h5>
        <ul className="text-sm text-muted-foreground space-y-1">
          {project.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech, idx) => (
          <Badge key={idx} variant="outline" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>
    </Card>
  );
};

export default Projects;