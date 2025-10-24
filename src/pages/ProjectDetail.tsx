import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase, type Project } from '@/lib/supabase';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Github, Clock, Users, Target, Trophy } from 'lucide-react';
import Header from '@/components/portfolio/Header';
import Footer from '@/components/portfolio/Footer';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      if (!slug) return;

      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (error) {
        console.error('Error fetching project:', error);
      } else {
        setProject(data);
      }
      setLoading(false);
    };

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900">
        <Header />
        <main className="container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto animate-pulse">
            <div className="h-8 bg-slate-700/50 rounded mb-4 w-3/4" />
            <div className="h-4 bg-slate-700/50 rounded mb-8 w-1/2" />
            <div className="h-96 bg-slate-700/50 rounded mb-8" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900">
        <Header />
        <main className="container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
            <p className="text-gray-400 mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Link to="/#projects">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900">
      <Header />

      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <Link to="/#projects">
            <Button
              variant="ghost"
              className="text-purple-400 hover:text-purple-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>

          <div className="relative h-96 rounded-xl overflow-hidden mb-8">
            <img
              src={project.thumbnail_url}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
          </div>

          <div className="mb-8">
            <h1 className="text-5xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-xl text-gray-300 mb-6">{project.short_description}</p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="w-5 h-5" />
                <span>{project.role}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-5 h-5" />
                <span>{project.timeline}</span>
              </div>
            </div>

            <div className="flex gap-4">
              {project.project_url && (
                <a href={project.project_url} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Project
                  </Button>
                </a>
              )}
              {project.github_url && (
                <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-slate-800">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </a>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-400" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{project.full_description}</p>
              </CardContent>
            </Card>

            {project.challenges && (
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-orange-400" />
                    Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{project.challenges}</p>
                </CardContent>
              </Card>
            )}

            {project.outcomes && (
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-green-400" />
                    Outcomes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{project.outcomes}</p>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech_stack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-purple-500/20 text-purple-300 text-base px-4 py-2"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {project.screenshots.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Screenshots</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="relative h-64 rounded-lg overflow-hidden group"
                  >
                    <img
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-slate-700">
            <Link to="/#projects">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Projects
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
