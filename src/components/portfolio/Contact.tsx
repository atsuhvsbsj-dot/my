import { motion } from "framer-motion";
import { 
  Mail, Phone, MapPin, Github, Linkedin, Download, MessageCircle 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "shreyasingh7297@gmail.com",
      href: "mailto:shreyasingh7297@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+91 8279948895",
      href: "https://wa.me/8279948895",
      color: "text-green-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India (Available Globally)",
      href: "#",
      color: "text-purple-500"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      value: "@shreyasingh",
      href: "https://github.com/shreyasingh",
      color: "text-foreground"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Shreya Singh",
      href: "https://linkedin.com/in/shreya-singh-dev",
      color: "text-sky-600"
    },
    {
      icon: MessageCircle,
      title: "Discord",
      value: "shreya_dev#1234",
      href: "#",
      color: "text-indigo-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">
            Let’s Connect
          </h2>
         <p className="text-lg text-muted-foreground max-w-2xl mx-auto flex items-center justify-center gap-2">
  <span>
    Ready to start your project? Reach out through any of the methods below
  </span>
  <MessageCircle className="text-primary w-5 h-5" aria-hidden="true" />
</p>

        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Methods */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/70 backdrop-blur-md border border-border/40 rounded-2xl shadow-lg hover:shadow-xl transition-all group">
                  <CardContent className="p-8 text-center">
                    <method.icon
                      className={`mx-auto mb-4 ${method.color} group-hover:scale-110 transition-transform`}
                      size={48}
                    />
                    <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                    <p className="text-muted-foreground mb-4">{method.value}</p>
                    <Button
                      variant="outline"
                      className="rounded-full px-6 hover:scale-105 transition-all"
                      onClick={() => window.open(method.href, "_blank")}
                    >
                      Get in Touch
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-2xl font-bold mb-8">Follow Me</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-16 h-16 rounded-full hover:scale-110 hover:shadow-md transition-all group"
                    onClick={() => window.open(social.href, "_blank")}
                  >
                    <social.icon
                      className={`${social.color} group-hover:scale-110 transition-transform`}
                      size={28}
                    />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Resume Download */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-md border border-border/40 rounded-2xl shadow-lg hover:shadow-xl transition-all max-w-md mx-auto">
              <CardContent className="p-10">
                <Download className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-xl font-bold mb-2">Download Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Get a detailed overview of my skills and experience
                </p>
                <Button
                  className="bg-gradient-to-r from-primary to-indigo-500 text-white rounded-full px-8 py-2 font-semibold shadow hover:scale-105 transition-all"
                  size="lg"
                  onClick={() => window.open("/resume.pdf", "_blank")}
                >
                  <Download className="mr-2" size={16} />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Response */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center space-x-2 bg-green-500/10 text-green-600 px-6 py-3 rounded-full">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
              <span className="font-medium">I typically respond within 2–4 hours</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
