import { motion } from "framer-motion";
import { Check, Calendar, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const packages = [
    {
      name: "Starter",
      price: "₹4,999",
      originalPrice: "₹6,999",
      description: "Perfect for small businesses and landing pages",
      features: [
        "Responsive Landing Page",
        "Contact Form Integration",
        "Basic SEO Optimization",
        "Mobile Responsive Design",
        "1 Month Support",
        "Google Analytics Setup"
      ],
      popular: false,
      color: "border-primary/20"
    },
    {
      name: "Full Website",
      price: "₹14,999",
      originalPrice: "₹19,999",
      description: "Complete web solution for growing businesses",
      features: [
        "Frontend + Backend Development",
        "Database Integration",
        "User Authentication System",
        "Admin Panel",
        "Payment Gateway Integration",
        "3 Months Support",
        "Performance Optimization",
        "Security Implementation"
      ],
      popular: true,
      color: "border-primary ring-2 ring-primary/20"
    },
    {
      name: "Custom",
      price: "Contact",
      originalPrice: null,
      description: "Tailored solutions for enterprise needs",
      features: [
        "Custom Feature Development",
        "Scalable Architecture",
        "Advanced Integrations",
        "Performance Optimization",
        "24/7 Priority Support",
        "Ongoing Maintenance",
        "Team Training",
        "Documentation"
      ],
      popular: false,
      color: "border-secondary/20"
    }
  ];

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
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the perfect package for your project needs
          </p>
          
          <div className="flex items-center justify-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <Calendar className="text-success" size={16} />
              <span>Now booking for August 2025</span>
            </div>
            <Badge variant="secondary" className="bg-success text-success-foreground">
              Limited Slots Available
            </Badge>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`h-full ${pkg.color} hover-lift transition-smooth ${pkg.popular ? 'shadow-glow' : ''}`}>
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                        {pkg.originalPrice && (
                          <span className="text-lg text-muted-foreground line-through">
                            {pkg.originalPrice}
                          </span>
                        )}
                      </div>
                      {pkg.originalPrice && (
                        <Badge variant="destructive" className="mt-2">
                          Save ₹{parseInt(pkg.originalPrice.replace('₹', '').replace(',', '')) - parseInt(pkg.price.replace('₹', '').replace(',', ''))}
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground">{pkg.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <Check className="text-success mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${pkg.popular ? 'btn-gradient' : 'btn-ghost'} hover-lift`}
                    size="lg"
                    onClick={() => document.getElementById('hire')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {pkg.name === "Custom" ? (
                      <>Let's Discuss</>
                    ) : (
                      <>
                        <CreditCard className="mr-2" size={16} />
                        Get Started
                      </>
                    )}
                  </Button>
                  
                  {pkg.name !== "Custom" && (
                    <p className="text-xs text-muted-foreground text-center mt-3">
                      50% advance payment required
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="max-w-2xl mx-auto gradient-card">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">What's Included in Every Package</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Check className="text-success" size={14} />
                  <span>Source code delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="text-success" size={14} />
                  <span>Free hosting guidance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="text-success" size={14} />
                  <span>Mobile responsive design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="text-success" size={14} />
                  <span>Fast loading optimization</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
    </>

  );
};

export default Pricing;