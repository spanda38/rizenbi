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
  Calendar
} from "lucide-react";

const Courses = () => {
  const levels = [
    {
      level: "Foundation",
      title: "Introduction to Abacus",
      description: "Learn the basics of abacus structure and simple number recognition",
      duration: "2-3 months",
      skills: ["Number recognition 1-100", "Basic bead manipulation", "Simple addition & subtraction", "Concentration building"],
      ageGroup: "5-7 years",
      color: "bg-blue-500"
    },
    {
      level: "Level 1",
      title: "Basic Operations",
      description: "Master fundamental addition and subtraction with single digits",
      duration: "3-4 months",
      skills: ["Single digit addition", "Single digit subtraction", "Number visualization", "Memory enhancement"],
      ageGroup: "6-8 years",
      color: "bg-green-500"
    },
    {
      level: "Level 2",
      title: "Two-Digit Mastery",
      description: "Expand skills to handle two-digit numbers confidently",
      duration: "3-4 months",
      skills: ["Two-digit addition", "Two-digit subtraction", "Carry-over concepts", "Speed building"],
      ageGroup: "7-9 years",
      color: "bg-yellow-500"
    },
    {
      level: "Level 3",
      title: "Advanced Addition & Subtraction",
      description: "Handle complex multi-digit operations with ease",
      duration: "4-5 months",
      skills: ["Multi-digit operations", "Complex carrying", "Borrowing techniques", "Mental calculation"],
      ageGroup: "8-10 years",
      color: "bg-orange-500"
    },
    {
      level: "Level 4",
      title: "Multiplication Basics",
      description: "Introduction to multiplication using abacus techniques",
      duration: "4-5 months",
      skills: ["Single digit multiplication", "Multiplication tables", "Pattern recognition", "Speed improvement"],
      ageGroup: "9-11 years",
      color: "bg-red-500"
    },
    {
      level: "Level 5",
      title: "Advanced Multiplication",
      description: "Master complex multiplication with multiple digits",
      duration: "5-6 months",
      skills: ["Multi-digit multiplication", "Advanced techniques", "Mental multiplication", "Problem solving"],
      ageGroup: "10-12 years",
      color: "bg-purple-500"
    },
    {
      level: "Level 6",
      title: "Division Fundamentals",
      description: "Learn division concepts and techniques on the abacus",
      duration: "5-6 months",
      skills: ["Basic division", "Long division", "Remainder calculations", "Accuracy building"],
      ageGroup: "11-13 years",
      color: "bg-indigo-500"
    },
    {
      level: "Level 7",
      title: "Advanced Division",
      description: "Master complex division and decimal operations",
      duration: "6-7 months",
      skills: ["Complex division", "Decimal operations", "Fraction basics", "Advanced problem solving"],
      ageGroup: "12-14 years",
      color: "bg-pink-500"
    },
    {
      level: "Level 8",
      title: "Mental Math Mastery",
      description: "Achieve lightning-fast mental calculations without the abacus",
      duration: "6-8 months",
      skills: ["Pure mental calculation", "Speed competitions", "Complex problem solving", "Teaching others"],
      ageGroup: "13-15 years",
      color: "bg-teal-500"
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "Mental Math Development",
      description: "Progressive training to calculate without physical abacus"
    },
    {
      icon: Target,
      title: "Personalized Learning",
      description: "Individual pace and customized lesson plans"
    },
    {
      icon: Trophy,
      title: "Competition Preparation",
      description: "Training for math competitions and assessments"
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Maximum 6 students per class for focused attention"
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
              <BookOpen className="w-4 h-4 mr-2" />
              Complete Learning Journey
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Foundation to{" "}
              <span className="hero-text">Level 8</span>{" "}
              Curriculum
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              A comprehensive 9-level program designed to transform your child from basic number 
              recognition to lightning-fast mental math mastery. Each level builds upon the previous, 
              ensuring solid foundations and continuous growth.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary text-lg px-8"
              onClick={() => document.getElementById('levels')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calculator className="w-5 h-5 mr-2" />
              Book a Free Demo Session now here
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="learning-card text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section id="levels" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Complete Learning{" "}
              <span className="hero-text">Pathway</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our structured curriculum ensures steady progress from foundation to mastery
            </p>
          </div>

          <div className="grid gap-8">
            {levels.map((level, index) => (
              <Card key={index} className="learning-card overflow-hidden">
                <div className="flex">
                  <div className={`w-2 ${level.color}`} />
                  <div className="flex-1">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                          <Badge variant="outline" className="mb-2">
                            {level.level}
                          </Badge>
                          <CardTitle className="text-2xl mb-2">{level.title}</CardTitle>
                          <CardDescription className="text-lg">{level.description}</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-1">
                            <Clock className="w-4 h-4" />
                            <span>{level.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Users className="w-4 h-4" />
                            <span>{level.ageGroup}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Star className="w-4 h-4 mr-2 text-yellow-500" />
                        Key Skills Developed
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2 mb-4">
                        {level.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex-1 mr-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress to Next Level</span>
                            <span>{Math.min(100, (index + 1) * 11)}%</span>
                          </div>
                          <Progress value={Math.min(100, (index + 1) * 11)} className="h-2" />
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => window.location.href = '/#contact'}
                        >
                          Start This Level
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to start your child's{" "}
            <span className="hero-text">mathematical journey?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free assessment to determine the perfect starting level for your child
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary text-lg px-8"
            onClick={() => window.location.href = '/#contact'}
          >
            <Calendar className="w-5 h-5 mr-2" />
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
                <li><a href="#programs" className="hover:text-background transition-fast">Programs</a></li>
                <li><a href="#benefits" className="hover:text-background transition-fast">Benefits</a></li>
                <li><a href="#testimonials" className="hover:text-background transition-fast">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-background transition-fast">Contact</a></li>
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

export default Courses;
