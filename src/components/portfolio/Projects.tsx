import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Award, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import image1 from "@/assets/image1.jpeg";
import image2 from "@/assets/image2.jpeg";
import image3 from "@/assets/image3.jpeg";
import image4 from "@/assets/image4.jpeg";
import image5 from "@/assets/image5.jpeg";
import image6 from "@/assets/image6.jpeg";

const Projects = () => {
  const clientProjects = [
    {
      title: "ShopEasy E-Commerce Platform",
      role: "Full-Stack Developer",
      stack: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      summary: "Built a complete e-commerce solution with payment integration for a fashion startup. Achieved 40% conversion rate improvement.",
      problemSolved: "Solved slow loading times and poor mobile experience, resulting in 60% increase in mobile sales.",
      image: image4,
      github: "https://github.com/shreya/shopeasy",
      demo: "https://shopeasy-demo.netlify.app"
    },
    {
      title: "SpiceGarden Restaurant Management", 
      role: "Frontend Developer & UI/UX Designer",
      stack: ["React", "Firebase", "Material-UI", "PWA"],
      summary: "Modern restaurant ordering system with real-time updates and table management for local restaurant chain.",
      problemSolved: "Digitized manual ordering process, reducing order errors by 85% and improving customer satisfaction.",
      image: image4,
      github: "https://github.com/shreya/spice-garden",
      demo: "https://stellular-twilight-0b29ee.netlify.app/"
    },
    {
      title: "AfriTech Portfolio Website",
      role: "Full-Stack Developer",
      stack: ["React", "Next.js", "Sanity CMS", "Tailwind"],
      summary: "Portfolio website for African tech startup showcasing their innovative solutions across the continent.",
      problemSolved: "Created modern web presence that attracted 3 major investors and secured Series A funding.",
      image:image4,
      github: "https://github.com/shreya/afritech-portfolio",
      demo: "https://edu-connect-inky.vercel.app/"
    }
  ];

  const hackathons = [
    {
      title: "HealthTrack Pro",
      role: "Team Lead & Full-Stack Developer",
      stack: ["React Native", "Node.js", "MySQL", "Machine Learning"],
      summary: "AI-powered health monitoring app that won 2nd place in National Healthcare Innovation Hackathon 2024.",
      problemSolved: "Created predictive health monitoring using wearable device data to prevent health emergencies.",
      image: image4,
      award: "🏆 2nd Place",
      github: "https://www.figma.com/design/EXLxo1TG4yW8q7SMf22UyO/solar_project?node-id=0-1&t=gpcZGxOkzCRdkI0q-1",
      demo: "https://www.figma.com/proto/EXLxo1TG4yW8q7SMf22UyO/solar_project?node-id=25-4&p=f&t=gpcZGxOkzCRdkI0q-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=25%3A4"
    },
    {
      title: "EcoTrace Carbon Tracker",
      role: "Frontend Developer",
      stack: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      summary: "Carbon footprint tracking app for individuals and businesses. Finalist in Green Tech Challenge 2024.",
      problemSolved: "Simplified carbon tracking with automated calculations, helping users reduce emissions by 30%.",
      image: image5,
      award: "🌱 Finalist",
      github: "https://www.figma.com/design/5QMyoT6I5RffghqIFfJFTP/pg-dekho?node-id=8-71&t=gpcZGxOkzCRdkI0q-1",
      demo: "https://www.figma.com/proto/5QMyoT6I5RffghqIFfJFTP/pg-dekho?node-id=8-72&p=f&t=gpcZGxOkzCRdkI0q-0&scaling=min-zoom&content-scaling=fixed&page-id=8%3A71&starting-point-node-id=8%3A72"
    }
  ];

  const internships = [
    {
      title: "TechStart Analytics Dashboard",
      role: "Frontend Development Intern",
      stack: ["Vue.js", "D3.js", "Chart.js", "Bootstrap", "REST APIs"],
      summary: "Built comprehensive analytics dashboard for startup metrics, KPIs, and business intelligence at TechStart Inc.",
      problemSolved: "Replaced manual reporting with automated dashboards, saving 20 hours/week of manual work.",
      company: "TechStart Inc.",
      image: image3,
      github: "https://github.com/usergd26/waaa-web/tree/develop",
      demo: "https://www.waaa.in/"
    },
    {
      title: "EduLearn Learning Platform",
      role: "Backend Development Intern", 
      stack: ["Python", "Django", "PostgreSQL", "Redis", "AWS"],
      summary: "Developed backend systems for online learning platform serving 10,000+ students across universities.",
      problemSolved: "Optimized database queries and implemented caching, improving page load times by 70%.",
      company: "EduTech Solutions",
      image: image6,
      github: "https://github.com/WAAA-IT-Solution/collab-web",
      demo: "https://stellular-twilight-0b29ee.netlify.app/"
    }
  ];

  const ProjectCard = ({ project, category }: { project: any, category: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden hover-lift transition-smooth group">
        <div className="relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
          <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-smooth">
            <div className="flex gap-2">
              <Button 
                size="sm" 
                variant="secondary"
                onClick={() => window.open(project.github, '_blank')}
                className="hover-glow"
              >
                <Github size={16} className="mr-1" />
                Code
              </Button>
              <Button 
                size="sm" 
                variant="secondary"
                onClick={() => window.open(project.demo, '_blank')}
                className="hover-glow"
              >
                <ExternalLink size={16} className="mr-1" />
                Demo
              </Button>
            </div>
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            {project.award && (
              <Badge variant="secondary" className="bg-warning text-warning-foreground">
                {project.award}
              </Badge>
            )}
          </div>
          
          <p className="text-sm text-primary font-medium mb-2">{project.role}</p>
          <p className="text-sm mb-3">{project.summary}</p>
          
          {project.problemSolved && (
            <div className="mb-4 p-3 bg-muted/50 rounded-lg border-l-4 border-success">
              <p className="text-xs text-success font-medium mb-1">💡 What I Solved:</p>
              <p className="text-xs text-muted-foreground">{project.problemSolved}</p>
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tech: string) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant="outline" 
              className="text-xs flex-1 hover-glow"
              onClick={() => window.open(project.github, '_blank')}
            >
              <Github size={14} className="mr-1" />
              GitHub
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="text-xs flex-1 hover-glow"
              onClick={() => window.open(project.demo, '_blank')}
            >
              <ExternalLink size={14} className="mr-1" />
              Live Demo
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <>
              {/* SVG Wave Divider */}
<div className="w-full overflow-hidden leading-[0] relative -mt-1">
  <svg
    className="w-full h-[50px] md:h-[60px]"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 100"
    preserveAspectRatio="none"
  >
    <path
      fill="#457D84"
      d="M929 38c-12-5-24-8-36-8l-10 8c-22-9-42-18-72-18l-28 25H217l-28-25c-31 0-51 10-72 18l-9-8c-13 0-25 3-37 8L40 50l31 13c12 5 24 7 37 7l9-8c22 9 42 18 72 18l28-25h566l28 25c31 0 51-10 72-18l10 8c12 0 24-2 36-7l31-13-31-12Z"
    />
  </svg>
</div>
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Projects & Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work across different domains and technologies
          </p>
        </motion.div>

        {/* Client Projects */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center mb-8"
          >
            <Briefcase className="mr-3 text-primary" size={24} />
            <h3 className="text-2xl font-bold">Client Projects</h3>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {clientProjects.map((project) => (
              <ProjectCard key={project.title} project={project} category="client" />
            ))}
          </div>
        </div>

        {/* Hackathons */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center mb-8"
          >
            <Award className="mr-3 text-secondary" size={24} />
            <h3 className="text-2xl font-bold">Hackathons</h3>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {hackathons.map((project) => (
              <ProjectCard key={project.title} project={project} category="hackathon" />
            ))}
          </div>
        </div>

        {/* Internships */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center mb-8"
          >
            <Code className="mr-3 text-primary" size={24} />
            <h3 className="text-2xl font-bold">Internships</h3>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {internships.map((project) => (
              <ProjectCard key={project.title} project={project} category="internship" />
            ))}
          </div>
        </div>
      </div>
    </section>
    </>

  );
};

export default Projects;