import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Calendar, User, Tag, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase, Blog } from "@/lib/supabase";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('is_published', true)
        .order('published_date', { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-xl">Loading blogs...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-4">My Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts, experiences, and insights from my journey as a developer
            </p>
          </motion.div>

          {blogs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover-lift transition-smooth group cursor-pointer h-full flex flex-col">
                    {blog.featured_image && (
                      <div className="relative overflow-hidden h-48">
                        <img
                          src={blog.featured_image}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                      </div>
                    )}

                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{formatDate(blog.published_date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{calculateReadTime(blog.content)}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {blog.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                        {blog.description}
                      </p>

                      {blog.tags && blog.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {blog.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              <Tag size={12} className="mr-1" />
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-between mt-auto pt-4 border-t">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User size={14} />
                          <span>{blog.author}</span>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          className="group/btn"
                          onClick={() => navigate(`/blog/${blog.slug}`)}
                        >
                          Read More
                          <ArrowRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
