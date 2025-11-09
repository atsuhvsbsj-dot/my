import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, User, Tag, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { supabase, Blog } from "@/lib/supabase";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchBlog(slug);
    }
  }, [slug]);

  const fetchBlog = async (slug: string) => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        navigate('/blogs');
        return;
      }

      setBlog(data);
    } catch (error) {
      console.error('Error fetching blog:', error);
      navigate('/blogs');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  const handleShare = async () => {
    if (navigator.share && blog) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Share cancelled or failed');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-xl">Loading blog post...</div>
      </div>
    );
  }

  if (!blog) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Button
              variant="ghost"
              className="mb-8 group"
              onClick={() => navigate('/blogs')}
            >
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blogs
            </Button>

            {blog.featured_image && (
              <div className="relative overflow-hidden rounded-2xl mb-8 h-96">
                <img
                  src={blog.featured_image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            )}

            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{blog.title}</h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{formatDate(blog.published_date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{calculateReadTime(blog.content)}</span>
                </div>
              </div>

              {blog.tags && blog.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      <Tag size={12} className="mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="mb-8"
              >
                <Share2 size={16} className="mr-2" />
                Share
              </Button>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="whitespace-pre-wrap leading-relaxed text-base">
                {blog.content}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={() => navigate('/blogs')}
                  className="group"
                >
                  <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                  More Articles
                </Button>

                <Button
                  variant="outline"
                  onClick={handleShare}
                >
                  <Share2 size={16} className="mr-2" />
                  Share Article
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
