import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Doctor Appointment Booking",
    description: "A full-stack web application for booking doctor appointments with real-time availability and notifications.",
    tags: ["Python", "Django", "PostgreSQL", "HTML/CSS"],
    color: "from-primary/20 to-blue-500/20",
  },
  {
    title: "SoulemateConnect matrimonial site ",
    description: "Interactive data visualization platform for business intelligence and performance tracking.",
    tags: ["TypeScript", "D3.js", "PostgreSQL", "GraphQL"],
    color: "from-emerald-500/20 to-primary/20",
    github: "https://github.com/tejaravutla287/soulmate-connect",
    demo: "https://ravutlabhanuteja.pythonanywhere.com",
    image: "/soulemate-screenshot copy.png",
  },
  {
    title: "Resume shorting web app",
    description: "a web application that automates the resume screening process using mechine learning algorithms.",
    tags: ["Python", "Machine Learning", "Django" ],
    color: "from-orange-500/20 to-pink-500/20",
  },
  {
    title: "inventory management system",
    description: "a web application for managing inventory with real-time updates and analytics.",
    tags: ["Python", "OpenAI", "FastAPI", "React"],
    color: "from-violet-500/20 to-primary/20",
    github: "https://github.com/tejaravutla287/Inventory-manager",
    image: "/inventory manager.png",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden card-elevated hover-lift"
    >
      {/* Project preview */}
      <div className={`aspect-video bg-gradient-to-br ${project.color} p-8 flex items-center justify-center`}>
        {project.image ? (
          <img
            src={project.image}
            className="w-full h-full object-cover rounded-lg border border-border/50"
          />
        ) : (
          <div className="w-full h-full rounded-lg bg-background/50 backdrop-blur-sm border border-border/50" />
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building modern, 
            scalable, and user-friendly applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
