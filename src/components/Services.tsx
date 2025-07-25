import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Brain, Globe, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Executive Hiring",
      description: "Strategic C-suite and senior leadership placement with our extensive network of industry veterans.",
      features: ["C-Suite Recruitment", "Board Advisory", "Leadership Assessment", "Cultural Fit Analysis"]
    },
    {
      icon: Zap,
      title: "Technical Hiring",
      description: "Specialized recruitment for technical roles across emerging technologies and established platforms.",
      features: ["Tech Leadership", "Engineering Teams", "AI/ML Specialists", "Data Scientists"]
    },
    {
      icon: Globe,
      title: "GCC Support",
      description: "Comprehensive Global Capability Center setup and people practices optimization.",
      features: ["GCC Strategy", "Talent Planning", "Organizational Design", "Process Optimization"]
    },
    {
      icon: Brain,
      title: "AI Training",
      description: "Future-ready workforce development through cutting-edge artificial intelligence training programs.",
      features: ["AI Literacy", "ML Workshops", "Digital Transformation", "Innovation Labs"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive human capital solutions designed to elevate your organization's potential
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-premium transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;