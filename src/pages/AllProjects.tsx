import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Briefcase, Award, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase, type Project, type Experience } from '@/lib/supabase';
import Header from '@/components/portfolio/Header';
import Footer from '@/components/portfolio/Footer';

const AllProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [projectsResult, experiencesResult] = await Promise.all([
        supabase
          .from('projects')
          .select('*')
          .order('display_order', { ascending: true }),
        supabase
          .from('experiences')
          .select('*')
          .order('display_order', { ascending: true }),
      ]);

      if (projectsResult.data) setProjects(projectsResult.data);
      if (experiencesResult.data) setExperiences(experiencesResult.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden hover-lift transition-smooth group h-full">
        <div className="relative overflow-hidden">
          <img
            src={project.thumbnail_url}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
          <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-smooth">
            <div className="flex gap-2">
              {project.github_url && (
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => window.open(project.github_url!, '_blank')}
                  className="hover-glow"
                >
                  <Github size={16} className="mr-1" />
                  Code
                </Button>
              )}
              {project.project_url && (
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => window.open(project.project_url!, '_blank')}
                  className="hover-glow"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Demo
                </Button>
              )}
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-primary font-medium mb-2">{project.role}</p>
          <p className="text-sm mb-3">{project.short_description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech_stack.slice(0, 4).map((tech: string) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.tech_stack.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.tech_stack.length - 4} more
              </Badge>
            )}
          </div>

          <div className="flex gap-2">
            {project.github_url && (
              <Button
                size="sm"
                variant="outline"
                className="text-xs flex-1 hover-glow"
                onClick={() => window.open(project.github_url!, '_blank')}
              >
                <Github size={14} className="mr-1" />
                GitHub
              </Button>
            )}
            {project.project_url && (
              <Button
                size="sm"
                variant="outline"
                className="text-xs flex-1 hover-glow"
                onClick={() => window.open(project.project_url!, '_blank')}
              >
                <ExternalLink size={14} className="mr-1" />
                Live Demo
              </Button>
            )}
            <Link to={`/project/${project.slug}`} className="flex-1">
              <Button size="sm" variant="default" className="text-xs w-full hover-glow">
                View Details
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const ExperienceCard = ({ experience }: { experience: Experience }) => {
    const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
      });
    };

    const duration = experience.end_date
      ? `${formatDate(experience.start_date)} - ${formatDate(experience.end_date)}`
      : `${formatDate(experience.start_date)} - Present`;

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card className="overflow-hidden hover-lift transition-smooth group h-full">
          {experience.thumbnail_url && (
            <div className="relative overflow-hidden">
              <img
                src={experience.thumbnail_url}
                alt={experience.company}
                className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
          )}

          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-1">{experience.position}</h3>
            <p className="text-sm text-primary font-medium mb-2">{experience.company}</p>
            <p className="text-xs text-muted-foreground mb-3">{duration}</p>
            <p className="text-sm mb-4">{experience.short_description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {experience.skills.slice(0, 4).map((skill: string) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {experience.skills.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{experience.skills.length - 4} more
                </Badge>
              )}
            </div>

            <Link to={`/experience/${experience.slug}`}>
              <Button size="sm" variant="default" className="text-xs w-full hover-glow">
                View Details
              </Button>
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-24">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">All Projects & Experience</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive showcase of my work, experience, and professional journey
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-xl">Loading...</p>
          </div>
        ) : (
          <>
            {projects.length > 0 && (
              <div className="mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center mb-8"
                >
                  <Briefcase className="mr-3 text-primary" size={24} />
                  <h2 className="text-3xl font-bold">Projects</h2>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            )}

            {experiences.length > 0 && (
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center mb-8"
                >
                  <Code className="mr-3 text-primary" size={24} />
                  <h2 className="text-3xl font-bold">Professional Experience</h2>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {experiences.map((experience) => (
                    <ExperienceCard key={experience.id} experience={experience} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AllProjects;
