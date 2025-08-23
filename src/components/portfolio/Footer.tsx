import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#pricing", label: "Pricing" },
    { href: "#hire", label: "Hire Me" },
     { href: "#blog", label: "Blog" }
  ];

  const services = [
    "Frontend Development (React.js, UI/UX, Animations)",
    "Backend Development (Node.js, Express)",
    "Full-Stack Web Solutions",
    "Database Design & Optimization",
    "REST & GraphQL API Development",
    "Tech Consulting & Web Strategy"
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/shreyasingh", label: "GitHub Profile" },
    { icon: Linkedin, href: "https://linkedin.com/in/shreya-singh-dev", label: "LinkedIn Profile" },
    { icon: Mail, href: "mailto:shreya.singh.dev@gmail.com", label: "Email Shreya Singh" },
    { icon: Phone, href: "https://wa.me/8279948895", label: "Chat on WhatsApp" }
  ];

  return (
    <footer className="bg-card border-t" itemScope itemType="https://schema.org/Person">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          
          {/* About Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4" itemProp="name">
              Shreya Singh
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed" itemProp="description">
              Full-Stack Developer & Freelancer specialized in React.js, Node.js, and scalable 
              web solutions. Helping startups and businesses grow with modern digital products.
            </p>
            <nav className="flex space-x-3" aria-label="Social Links">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="hover:scale-110 transition-transform"
                  onClick={() => window.open(social.href, "_blank")}
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon size={18} />
                </Button>
              ))}
            </nav>
          </motion.section>

          {/* Quick Links */}
          <motion.nav
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            aria-label="Quick Navigation"
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    title={`Navigate to ${link.label}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Services */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 list-disc pl-4">
              {services.map((service) => (
                <li key={service} className="text-muted-foreground text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Contact Info */}
          <motion.address
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="not-italic"
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="text-primary" size={16} />
                <span className="text-muted-foreground" itemProp="email">
                  shreyasingh7297@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-primary" size={16} />
                <span className="text-muted-foreground" itemProp="telephone">
                  +91 8279948895
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-primary" size={16} />
                <span className="text-muted-foreground" itemProp="addressLocality">
                  India (Available Globally)
                </span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-center">
                <strong>Ready to start your project?</strong><br />
                <a href="#hire" className="text-primary hover:underline">
                  Let’s work together!
                </a>
              </p>
            </div>
          </motion.address>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} <span itemProp="name">Shreya Singh</span>. All rights reserved.
            </p>

            <div className="flex items-center space-x-1 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="text-red-500 fill-current" size={14} />
              <span>and lots of coffee ☕</span>
            </div>

            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>

        {/* Floating Back to Top */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            variant="outline"
            size="icon"
            className="rounded-full shadow-lg hover:scale-110 transition-transform"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </Button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
