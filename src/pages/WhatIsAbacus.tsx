import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Trophy, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Calculator,
  Brain,
  Target,
  Star,
  Zap,
  Award,
  TrendingUp
} from "lucide-react";

const AbacusProgram = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Enhanced Brain Development",
      description: "Stimulates both left and right hemispheres of the brain simultaneously"
    },
    {
      icon: Zap,
      title: "Lightning Fast Calculations",
      description: "Perform complex calculations faster than a calculator"
    },
    {
      icon: Target,
      title: "Improved Concentration",
      description: "Develops laser-sharp focus and attention span"
    },
    {
      icon: TrendingUp,
      title: "Academic Excellence",
      description: "Significant improvement in overall academic performance"
    },
    {
      icon: Award,
      title: "Confidence Building",
      description: "Builds self-confidence through mathematical mastery"
    },
    {
      icon: Users,
      title: "Memory Enhancement",
      description: "Strengthens visual and auditory memory capabilities"
    }
  ];

  const methodology = [
    {
      step: "1",
      title: "Physical Abacus Training",
      description: "Students learn to manipulate abacus beads with proper finger techniques",
      duration: "3-6 months"
    },
    {
      step: "2", 
      title: "Visualization Training",
      description: "Gradual transition from physical abacus to mental visualization",
      duration: "6-9 months"
    },
    {
      step: "3",
      title: "Mental Calculation Mastery",
      description: "Pure mental calculation without any physical aid",
      duration: "12-18 months"
    }
  ];

  const ageGroups = [
    {
      age: "5-7 years",
      level: "Foundation & Level 1",
      focus: "Basic number recognition and simple operations",
      skills: ["Number recognition 1-1000", "Basic addition & subtraction", "Concentration building", "Fine motor skills"]
    },
    {
      age: "8-10 years", 
      level: "Level 2-4",
      focus: "Multi-digit operations and multiplication",
      skills: ["Complex addition & subtraction", "Multiplication mastery", "Speed building", "Pattern recognition"]
    },
    {
      age: "11-13 years",
      level: "Level 5-8", 
      focus: "Advanced operations and mental math",
      skills: ["Division techniques", "Decimal operations", "Mental calculation", "Competition preparation"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-primary-light text-primary px-4 py-2 text-sm font-medium mb-4">
              <Calculator className="w-4 h-4 mr-2" />
              Ancient Wisdom, Modern Results
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Master the{" "}
              <span className="hero-text">Abacus</span>{" "}
              Program
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Transform your child's mathematical abilities with our comprehensive abacus program. 
              From basic bead manipulation to lightning-fast mental calculations, we guide students 
              through a proven methodology backed by 25+ years of experience.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary text-lg px-8"
              onClick={() => window.location.href = '/#contact'}
            >
              <Trophy className="w-5 h-5 mr-2" />
              Book Free Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Why Choose{" "}
              <span className="hero-text">Abacus</span>{" "}
              Learning?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The abacus is more than just a calculating tool - it's a complete brain development system
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="learning-card text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Our Proven{" "}
              <span className="hero-text">Methodology</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach that gradually builds from physical manipulation to pure mental calculation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {methodology.map((phase, index) => (
              <Card key={index} className="learning-card relative">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {phase.step}
                  </div>
                  <CardTitle className="text-xl mb-2">{phase.title}</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    <Clock className="w-3 h-3 mr-1" />
                    {phase.duration}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{phase.description}</p>
                </CardContent>
                {index < methodology.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Perfect for{" "}
              <span className="hero-text">Every Age</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our curriculum is carefully designed for different developmental stages
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <Card key={index} className="learning-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{group.age}</CardTitle>
                  <Badge className="bg-primary-light text-primary mx-auto w-fit">
                    {group.level}
                  </Badge>
                  <CardDescription className="text-center text-lg">{group.focus}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Star className="w-4 h-4 mr-2 text-yellow-500" />
                    Key Skills
                  </h4>
                  <div className="space-y-2">
                    {group.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to unlock your child's{" "}
            <span className="hero-text">mathematical potential?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their mathematical abilities with our proven abacus program
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary text-lg px-8"
            onClick={() => window.location.href = '/#contact'}
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Book Free Assessment
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold">Rizenbi Learning Centre</h1>
                  <p className="text-sm text-background/70">Mental Math Excellence</p>
                </div>
              </div>
              <p className="text-background/80 leading-relaxed max-w-md">
                Empowering children with lightning-fast mental math skills through proven 
                methods. Building confidence, focus, and mathematical mastery with 25+ years of experience.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-background/80">
                <li><a href="/" className="hover:text-background transition-fast">Home</a></li>
                <li><a href="/courses" className="hover:text-background transition-fast">Courses</a></li>
                <li><a href="/abacus-program" className="hover:text-background transition-fast">Abacus Program</a></li>
                <li><a href="/vedic-math" className="hover:text-background transition-fast">Vedic Math</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-background/80">
                <li>+1 (984) 363-6626</li>
                <li>rizenbiusa@gmail.com</li>
                <li>Raleigh-Durham, NC</li>
                <li>Online Classes Available</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 Rizenbi Learning Centre. All rights reserved. Building mathematical excellence with 25+ years of experience.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AbacusProgram;