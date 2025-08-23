import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  Smartphone, 
  Cloud,
  Shield,
  Palette,
  GitBranch,
  Zap
} from "lucide-react";

const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "text-primary",
      technologies: ["React.js/ Next.js (App Router, Hooks, Context)", "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript","UI/UX",]
    },
    {
      title: "2D/3D", 
      icon: Server,
      color: "text-secondary",
      technologies: ["Three.js", "React Three Fiber", "Charts", "dashboards", "interactive visualizations"]
    },
    {
      title: "Database",
      icon: Database,
      color: "text-primary",
      technologies: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis"]
    },
    {
      title: "Architecture & System Design",
      icon: Smartphone,
      color: "text-secondary", 
      technologies: ["Component-driven architecture", "Reusable UI systems", "Large-scale project structuring","scalable folders"]
    },
    {
      title: "Cross-Skill Edge",
      icon: Cloud,
      color: "text-primary",
      technologies: ["AI integrations in frontend", "Security in frontend (XSS prevention, JWT handling)", "Mentoring juniors", "reviewing code", "Tech stack planning","collaboration with backend/devops/design teams"]
    },
    {
      title: "Tools & Others",
      icon: Zap,
      color: "text-secondary",
      technologies: ["Git & GitHub (branching, PR reviews)", "CI/CD basics", "Linting & formatting", "Unit & integration testing basics", "Figma & VS Code","Postman for API testing"]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Tech Stack & Tools</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to build amazing digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 shadow-card hover-lift transition-smooth border"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full bg-muted ${category.color}`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold ml-4">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (techIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    <span className="text-sm text-muted-foreground">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;