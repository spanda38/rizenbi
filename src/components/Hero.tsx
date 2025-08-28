
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Monitor, Calendar, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge className="bg-success-light text-success px-4 py-2 text-sm font-medium">
              <Star className="w-4 h-4 mr-2" />
              25+ Years of Learning Experience
            </Badge>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Build{" "}
                <span className="hero-text">lightning-fast</span>{" "}
                mental math skills
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Develop laser focus, confidence, and mathematical mastery for kids 5–14 (Abacus) 
                and grades 6–12 (Vedic Math). Join thousands of students achieving excellence.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Raleigh–Durham, NC</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Monitor className="w-5 h-5 text-primary" />
                <span>Online Classes</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-lg px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary-light text-lg px-8"
                onClick={() => window.location.href = '/courses'}
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Students Taught</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">8</div>
                <div className="text-sm text-muted-foreground">Skill Levels</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant-lg">
              <img
                src={heroImage}
                alt="Children learning math with abacus at Rizenbi Learning Centre"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-surface rounded-xl shadow-elegant p-4 border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-success-light rounded-full flex items-center justify-center">
                  <span className="text-success font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Money-Back</div>
                  <div className="text-sm text-muted-foreground">Guarantee</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-surface rounded-xl shadow-elegant p-4 border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary-light rounded-full flex items-center justify-center">
                  <span className="text-secondary font-bold text-lg">⚡</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Instant</div>
                  <div className="text-sm text-muted-foreground">Results</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
