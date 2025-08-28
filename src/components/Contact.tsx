
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  CheckCircle,
  ArrowRight,
  Star,
  Send,
  Loader2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendDemoRequest, sendEmailFallback, type DemoRequestData } from "@/lib/emailService";
import CalendlyBooking from "./CalendlyBooking";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childAge: "",
    program: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const success = await sendDemoRequest(formData as DemoRequestData);
      
      if (success) {
        toast({
          title: "Demo Request Sent Successfully!",
          description: "We'll contact you within 24 hours to schedule your free demo session.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          childAge: "",
          program: "",
          message: ""
        });
      } else {
        // Fallback to mailto if EmailJS fails
        toast({
          title: "Opening Email Client",
          description: "We'll help you send the request through your email client.",
        });
        sendEmailFallback(formData as DemoRequestData);
      }
    } catch (error) {
      toast({
        title: "Request Sent via Email",
        description: "Your email client will open to complete the demo request.",
        variant: "default",
      });
      sendEmailFallback(formData as DemoRequestData);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "rizenbiusa@gmail.com",
      subtitle: "24-hour response time"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Raleigh-Durham, NC",
      subtitle: "Multiple locations"
    }
  ];

  const features = [
    "Free 30-minute demo session",
    "Meet your dedicated instructor",
    "Personalized learning assessment",
    "No obligation or pressure",
    "See results in the first session"
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-success-light text-success px-4 py-2 text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Book Your Free Demo
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to unlock your child's{" "}
            <span className="hero-text">math potential?</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Join our free demo session and see the Rizenbi difference firsthand. 
            No commitment required – just pure learning magic.
          </p>
        </div>

        {/* Booking Options Tabs */}
        <Tabs defaultValue="calendly" className="mb-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="calendly" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Book Online</span>
            </TabsTrigger>
            <TabsTrigger value="form" className="flex items-center space-x-2">
              <Send className="w-4 h-4" />
              <span>Request Info</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="calendly" className="mt-8">
            <CalendlyBooking />
          </TabsContent>

          <TabsContent value="form" className="mt-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="learning-card">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold flex items-center">
                      <Send className="w-6 h-6 mr-3 text-primary" />
                      Request Demo Information
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Fill out the form below and we'll send details directly to rizenbiusa@gmail.com
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Parent/Guardian Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            required
                            className="border-input focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            required
                            className="border-input focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (984) 363-6626"
                            required
                            className="border-input focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="childAge">Child's Age/Grade *</Label>
                          <Input
                            id="childAge"
                            name="childAge"
                            value={formData.childAge}
                            onChange={handleChange}
                            placeholder="e.g., 8 years old or Grade 3"
                            required
                            className="border-input focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="program">Interested Program</Label>
                        <select
                          id="program"
                          name="program"
                          value={formData.program}
                          onChange={handleChange}
                          className="w-full p-3 border border-input rounded-md focus:border-primary bg-background"
                        >
                          <option value="">Select a program</option>
                          <option value="abacus">Abacus Program (Ages 5-14)</option>
                          <option value="vedic">Vedic Math (Grades 6-12)</option>
                          <option value="both">Both Programs</option>
                          <option value="unsure">Not sure - help me decide</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Additional Questions (Optional)</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your child's current math level, learning goals, or any specific questions..."
                          rows={4}
                          className="border-input focus:border-primary"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-gradient-primary text-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Sending Request...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Demo Request
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info & Features */}
              <div className="space-y-6">
                {/* Contact Information */}
                <Card className="learning-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Get In Touch</CardTitle>
                    <CardDescription>
                      Multiple ways to reach our learning specialists
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {contactInfo.map((contact, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center mt-1">
                          <contact.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{contact.title}</h3>
                          <p className="text-primary font-medium">{contact.info}</p>
                          <p className="text-sm text-muted-foreground">{contact.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Demo Features */}
                <Card className="learning-card bg-gradient-subtle border border-border">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">What to Expect</CardTitle>
                    <CardDescription>
                      Your free demo session includes
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Hours */}
                <Card className="learning-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-primary" />
                      Class Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-medium">4:00 PM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium">1:00 PM - 5:00 PM</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Contact;
