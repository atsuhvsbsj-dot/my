import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase, type Blog } from '@/lib/supabase';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Calendar, ArrowLeft } from 'lucide-react';
import Header from '@/components/portfolio/Header';
import Footer from '@/components/portfolio/Footer';

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;

      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle();

      if (error) {
        console.error('Error fetching blog:', error);
      } else {
        setBlog(data);
      }
      setLoading(false);
    };

    fetchBlog();
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900">
        <Header />
        <main className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto animate-pulse">
            <div className="h-8 bg-slate-700/50 rounded mb-4 w-3/4" />
            <div className="h-4 bg-slate-700/50 rounded mb-8 w-1/2" />
            <div className="h-96 bg-slate-700/50 rounded mb-8" />
            <div className="space-y-3">
              <div className="h-4 bg-slate-700/50 rounded" />
              <div className="h-4 bg-slate-700/50 rounded" />
              <div className="h-4 bg-slate-700/50 rounded w-5/6" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900">
        <Header />
        <main className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Blog Post Not Found</h1>
            <p className="text-gray-400 mb-8">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/blogs">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blogs
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
        <article className="max-w-4xl mx-auto">
          <Link to="/blogs">
            <Button
              variant="ghost"
              className="text-purple-400 hover:text-purple-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Button>
          </Link>

          {blog.thumbnail_url && (
            <div className="relative h-96 rounded-xl overflow-hidden mb-8">
              <img
                src={blog.thumbnail_url}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-6">
            {blog.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-purple-500/20 text-purple-300"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-5xl font-bold text-white mb-6">{blog.title}</h1>

          <div className="flex items-center gap-6 text-gray-400 mb-8 pb-8 border-b border-slate-700">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {formatDate(blog.published_at)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {blog.read_time} min read
            </span>
            <span>By {blog.author}</span>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-xl text-gray-300 mb-8 leading-relaxed">
              {blog.description}
            </div>

            <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
              {blog.content}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700">
            <Link to="/blogs">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Blogs
              </Button>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
