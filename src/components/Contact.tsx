import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Ready to Transform Your Team?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how our human capital solutions can drive your organization's success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input placeholder="Email Address" type="email" />
              <Input placeholder="Company" />
              <Textarea placeholder="Tell us about your needs..." className="min-h-32" />
              <Button variant="premium" size="lg" className="w-full">
                Schedule Consultation
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">contact@humancapitalpro.com</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Office</div>
                    <div className="text-muted-foreground">New York, San Francisco, London</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-subtle p-8 rounded-2xl">
              <h4 className="text-xl font-semibold mb-4 text-primary">
                Why Choose Us?
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center text-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Industry-leading expertise and track record
                </li>
                <li className="flex items-center text-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Tailored solutions for your unique needs
                </li>
                <li className="flex items-center text-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Global network of top talent
                </li>
                <li className="flex items-center text-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Proven ROI and measurable results
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;