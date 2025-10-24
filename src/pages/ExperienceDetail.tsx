import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase, type Experience } from '@/lib/supabase';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Calendar, MapPin, CheckCircle, Trophy } from 'lucide-react';
import Header from '@/components/portfolio/Header';
import Footer from '@/components/portfolio/Footer';

const ExperienceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [experience, setExperience] = useState<Experience | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      if (!slug) return;

      const { data, error } = await supabase
        .from('experiences')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (error) {
        console.error('Error fetching experience:', error);
      } else {
        setExperience(data);
      }
      setLoading(false);
    };

    fetchExperience();
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
  };

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

  if (!experience) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900">
        <Header />
        <main className="container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Experience Not Found</h1>
            <p className="text-gray-400 mb-8">
              The experience you're looking for doesn't exist.
            </p>
            <Link to="/#projects">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Experience
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const duration = experience.end_date
    ? `${formatDate(experience.start_date)} - ${formatDate(experience.end_date)}`
    : `${formatDate(experience.start_date)} - Present`;

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
              Back to Experience
            </Button>
          </Link>

          {experience.thumbnail_url && (
            <div className="relative h-64 rounded-xl overflow-hidden mb-8">
              <img
                src={experience.thumbnail_url}
                alt={experience.company}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
            </div>
          )}

          <div className="mb-8">
            <h1 className="text-5xl font-bold text-white mb-4">{experience.position}</h1>
            <h2 className="text-3xl text-purple-400 mb-6">{experience.company}</h2>

            <div className="flex flex-wrap gap-4 mb-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{experience.location}</span>
              </div>
            </div>

            <p className="text-xl text-gray-300 mb-8">{experience.short_description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">About the Role</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{experience.full_description}</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  Key Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-purple-500/20 text-purple-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {experience.responsibilities.length > 0 && (
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    Key Responsibilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex gap-3 text-gray-300">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {experience.achievements.length > 0 && (
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-green-400" />
                    Key Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="flex gap-3 text-gray-300">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700">
            <Link to="/#projects">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Experience
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ExperienceDetail;
