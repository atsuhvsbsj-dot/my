import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Lottie from "lottie-react";
import catMoon from "@/assets/lottie/Cat fishing on moon.json";


const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Michael Johnson",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      location: "🇺🇸 USA",
      rating: 5,
      text: "Shreya delivered an outstanding website for our startup. Her attention to detail and technical expertise exceeded our expectations. The project was completed on time and within budget.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Kwame Asante",
      role: "Founder, AfriTech",
      company: "AfriTech Solutions",
      location: "🇬🇭 Ghana, Africa",
      rating: 5,
      text: "Working with Shreya was incredible. She understood our vision perfectly and created a beautiful, responsive website that showcases our African tech solutions globally.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sarah Williams",
      role: "Marketing Director",
      company: "Digital Solutions Co.",
      location: "🇨🇦 Canada",
      rating: 5,
      text: "Shreya's full-stack development skills are impressive. She built a complex web application with authentication and database integration flawlessly. Communication was excellent throughout.",
      avatar: "https://i1.rgstatic.net/ii/profile.image/1089423324250112-1636750169152_Q512/Trinidad-Rico-2.jpg?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Raj Patel",
      role: "Startup Founder",
      company: "InnovateTech",
      location: "🇮🇳 India",
      rating: 5,
      text: "Professional, communicative, and delivers high-quality work. Shreya transformed our ideas into a stunning e-commerce platform. Will definitely work with her again!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emma Thompson", 
      role: "Product Manager",
      company: "Creative Agency Ltd.",
      location: "🇬🇧 UK",
      rating: 5,
      text: "Shreya delivered exactly what I needed for my consultancy. Clean code, modern design, and great communication. The landing page converted 40% better than our old site!",
      avatar: "https://i1.rgstatic.net/ii/profile.image/272952549703683-1442088367521_Q512/Renata-Kieling.jpg?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Client Reviews</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          
          {/* Main Testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="relative mb-12"
          >
            {/* 🐱 Lottie Background */}
  <Lottie
    animationData={catMoon}
    loop
    autoplay
    className="absolute inset-0 w-full h-full z-0 opacity-30 pointer-events-none"
  />
            
            <Card className="shadow-glow">
              
              <CardContent className="p-8 md:p-12">
                
                <Quote className="text-primary mb-6" size={48} />
                
                <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 text-center">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="flex items-center justify-center space-x-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-warning fill-current" size={20} />
                  ))}
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                      </p>
                      <p className="text-sm text-primary">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full hover-scale"
            >
              <ChevronLeft size={20} />
            </Button>

            {/* Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-smooth ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full hover-scale"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* All Testimonials Grid (Hidden on Mobile) */}
          <div className="hidden lg:grid grid-cols-3 gap-6 mt-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`cursor-pointer transition-smooth ${
                  index === currentIndex ? 'ring-2 ring-primary' : 'opacity-70'
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-warning fill-current" size={14} />
                      ))}
                    </div>
                    <p className="text-sm mb-4 line-clamp-3">"{testimonial.text}"</p>
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-sm">{testimonial.name}</h4>
                        <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>

  );
};

export default Testimonials;