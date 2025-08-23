"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Upload, Calendar, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const HireMe = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    role: "",
    email: "",
    phone: "",
    startDate: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. I’ll get back to you within 24 hours.",
    });

    setFormData({
      fullName: "",
      companyName: "",
      role: "",
      email: "",
      phone: "",
      startDate: "",
      message: ""
    });
    setIsSubmitting(false);
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

      <section
        id="hire"
        className="py-20 bg-gradient-to-b from-muted/30 to-background relative"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Hire a <span className="text-primary">Frontend Developer</span> &{" "}
              <span className="text-secondary">Freelance React.js Expert</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Looking for{" "}
              <strong>Next.js / React.js Developer</strong> who delivers{" "}
              <em>fast, scalable, and SEO-friendly websites</em>? Let’s discuss
              your project and bring your ideas to life 🚀
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl border border-muted/40 hover:shadow-2xl transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Send className="mr-2 text-primary" size={24} />
                    Project Inquiry Form
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    aria-label="Hire Me Form"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="companyName">Company/Startup *</Label>
                        <Input
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="role">Role/Position Offered *</Label>
                      <Input
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="e.g., Frontend Developer, Full-Stack Developer"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone/WhatsApp</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="startDate">Preferred Start Date *</Label>
                      <Input
                        id="startDate"
                        name="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message/Job Description</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="mt-1"
                        placeholder="Tell me about your project, requirements, or paste JD link..."
                      />
                    </div>

                    {/* File Upload */}
                    <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center hover:bg-muted/20 transition">
                      <Upload
                        className="mx-auto mb-2 text-muted-foreground"
                        size={32}
                      />
                      <p className="text-sm text-muted-foreground">
                        Upload Job Description/Document (PDF, DOC)
                      </p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Choose File
                      </Button>
                    </div>

                    {/* Security Notice */}
                    <div className="flex items-center space-x-2">
                      <Shield className="text-success" size={16} />
                      <span className="text-sm text-muted-foreground">
                        Protected by reCAPTCHA. Your information is secure.
                      </span>
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-gradient hover-lift"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>Submitting...</>
                      ) : (
                        <>
                          <Send className="mr-2" size={16} />
                          Submit Application
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Why Choose Me */}
              <Card className="gradient-card shadow-lg hover:shadow-xl transition">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Why Hire Me as Your Developer?
                  </h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li>
                      <strong>⚡ Fast Delivery:</strong> Most projects done in
                      2–4 weeks.
                    </li>
                    <li>
                      <strong>💬 Direct Communication:</strong> Work directly
                      with me, no middlemen.
                    </li>
                    <li>
                      <strong>💰 Competitive Rates:</strong> Freelancer-friendly
                      pricing with high-quality results.
                    </li>
                    <li>
                      <strong>🔒 Post-Project Support:</strong> Continued
                      support after completion.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Calendar className="mr-2 text-primary" size={20} />
                    <h3 className="text-xl font-bold">Availability</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Status:</strong>{" "}
                      <span className="text-success">Available</span>
                    </p>
                    <p>
                      <strong>Next Slot:</strong> August 2025
                    </p>
                    <p>
                      <strong>Response Time:</strong> Within 24 hours
                    </p>
                    <p>
                      <strong>Time Zone:</strong> IST (GMT +5:30)
                    </p>
                  </div>

                  <div className="mt-6 p-4 bg-muted rounded-lg text-center">
                    <p className="text-sm">
                      <strong>🚀 Limited Slots!</strong> Book your consultation
                      today.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HireMe;
