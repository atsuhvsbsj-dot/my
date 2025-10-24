import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase, type Project, type Experience } from '@/lib/supabase';

const ProjectsHighlights = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [projectsResult, experiencesResult] = await Promise.all([
        supabase
          .from('projects')
          .select('*')
          .eq('is_featured', true)
          .order('display_order', { ascending: true })
          .limit(3),
        supabase
          .from('experiences')
          .select('*')
          .eq('is_featured', true)
          .order('display_order', { ascending: true })
          .limit(3),
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

  if (loading) {
    return (
      <>
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
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Projects & Experience</h2>
              <p className="text-xl text-muted-foreground">Loading...</p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
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
              A showcase of my featured work and professional journey
            </p>
          </motion.div>

          {projects.length > 0 && (
            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center justify-between mb-8"
              >
                <div className="flex items-center">
                  <Briefcase className="mr-3 text-primary" size={24} />
                  <h3 className="text-2xl font-bold">Featured Projects</h3>
                </div>
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
                className="flex items-center justify-between mb-8"
              >
                <div className="flex items-center">
                  <Briefcase className="mr-3 text-primary" size={24} />
                  <h3 className="text-2xl font-bold">Professional Experience</h3>
                </div>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {experiences.map((experience) => (
                  <ExperienceCard key={experience.id} experience={experience} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProjectsHighlights;
