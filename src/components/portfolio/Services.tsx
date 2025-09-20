import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Globe,
  FileText,
  Shield,
  Settings,
  MessageSquare,
  Rocket,
  Cpu,
  Zap,
  Cloud,
  Lock,
  Lightbulb,
  Table,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Core Frontend Expertise",
      description: (
        <>
          <Cpu size={16} className="inline mr-1 text-primary" />
          React.js, TypeScript, JavaScript (ES6+), Responsive UI/UX, Modern animations
        </>
      ),
      gradient: "from-primary/90 to-primary/60",
    },
    {
      icon: Server,
      title: "2D/3D & Data Visualization",
      description: (
        <>
          <Rocket size={16} className="inline mr-1 text-secondary" />
          Three.js, React Three Fiber, Interactive dashboards, Advanced charting
        </>
      ),
      gradient: "from-secondary/90 to-secondary/60",
    },
    {
      icon: Database,
      title: "Database Design",
      description: (
        <>
          <Table size={16} className="inline mr-1 text-primary" />
          MongoDB, MySQL optimization, Efficient schema structuring
        </>
      ),
      gradient: "from-primary/90 to-primary/60",
    },
    {
      icon: Globe,
      title: "Architecture & System Design",
      description: (
        <>
          <Zap size={16} className="inline mr-1 text-secondary" />
          Component-driven architecture, Reusable UI systems, Scalable project structuring
        </>
      ),
      gradient: "from-secondary/90 to-secondary/60",
    },
    {
      icon: FileText,
      title: "Secondary Skills",
      description: (
        <>
          <FileText size={16} className="inline mr-1 text-primary" />
          Node.js, Express.js, Authentication basics, Python scripting
        </>
      ),
      gradient: "from-primary/90 to-primary/60",
    },
    {
      icon: Settings,
      title: "Hosting & Deployment",
      description: (
        <>
          <Cloud size={16} className="inline mr-1 text-secondary" />
          Netlify, Vercel, GitHub Pages, Cloud hosting exposure
        </>
      ),
      gradient: "from-secondary/90 to-secondary/60",
    },
    {
      icon: Shield,
      title: "Tooling & Professional Practices",
      description: (
        <>
          <Lock size={16} className="inline mr-1 text-primary" />
          Git & GitHub, CI/CD pipelines, Integration testing, Figma workflows
        </>
      ),
      gradient: "from-primary/90 to-primary/60",
    },
    {
      icon: MessageSquare,
      title: "Cross-Skill Edge / Extras",
      description: (
        <>
          <Lightbulb size={16} className="inline mr-1 text-secondary" />
          AI in frontend, Web security, Mentoring juniors, Tech stack planning
        </>
      ),
      gradient: "from-secondary/90 to-secondary/60",
    },
  ];

  const packages = [
    {
      name: "Starter",
      price: "$150 – $250",
      description: "Perfect for small businesses or portfolios",
      features: ["Landing Page", "Contact Form", "2D Animations", "Basic SEO"],
    },
    {
      name: "Advanced Projects",
      price: "$450 – $850",
      description: "Complete web solution with integrations",
      features: [
        "Multi-page site (up to 10 pages)",
        "Database Integration",
        "User Authentication",
        "Admin Dashboard",
      ],
      popular: true,
    },
    {
      name: "Custom",
      price: "Startup Collaboration",
      description: "Tailored features & scalable solutions",
      features: [
        "Custom Features",
        "Ongoing Support",
        "Performance Optimization",
        "Enterprise-grade Architecture",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-4">What I Do</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Frontend development services designed to bring your ideas to life with modern, scalable solutions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] bg-card border-border rounded-2xl">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-md`}
                  >
                    <service.icon className="text-white dark:text-gray-100" size={26} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold mb-4">Package Pricing</h3>
          <p className="text-muted-foreground">Clear and transparent pricing for every budget</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`relative h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] rounded-2xl ${
                  pkg.popular ? "ring-2 ring-primary shadow-lg" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-md">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h4 className="text-2xl font-bold mb-2">{pkg.name}</h4>
                  <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                  <p className="text-muted-foreground mb-6">{pkg.description}</p>
                  <ul className="space-y-2 mb-8 text-foreground/90">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="text-sm flex items-center justify-center gap-2">
                        <CheckCircle2 size={16} className="text-primary" /> {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            className="btn-gradient hover:scale-105 transition-all shadow-lg"
            size="lg"
            onClick={() =>
              document.getElementById("hire")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Let's Work Together
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
