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
  TrendingUp,
  Lightbulb,
  Infinity
} from "lucide-react";

const VedicMath = () => {
  const techniques = [
    {
      name: "Nikhilam Multiplication",
      description: "All from 9 and last from 10 - for numbers close to powers of 10",
      example: "97 × 96 = 9312 (solved in seconds)",
      difficulty: "Beginner"
    },
    {
      name: "Urdhva Tiryagbyham",
      description: "Vertically and crosswise - universal multiplication technique",
      example: "23 × 47 = 1081 (single step process)",
      difficulty: "Intermediate"
    },
    {
      name: "Ekadhikina Purvena",
      description: "One more than the previous - for special division cases",
      example: "Divide by 11, 111, 1111 instantly",
      difficulty: "Intermediate"
    },
    {
      name: "Paravartya Yojayet",
      description: "Transpose and adjust - for complex divisions",
      example: "Solve algebraic equations mentally",
      difficulty: "Advanced"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Speed Calculations",
      description: "Perform complex calculations 10-15 times faster than conventional methods"
    },
    {
      icon: Brain,
      title: "Enhanced Logical Thinking",
      description: "Develops analytical and logical reasoning capabilities"
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solving", 
      description: "Multiple ways to solve the same problem, fostering creativity"
    },
    {
      icon: Target,
      title: "Improved Focus",
      description: "Single-minded concentration and attention to detail"
    },
    {
      icon: Award,
      title: "Competitive Advantage",
      description: "Excel in math competitions and standardized tests"
    },
    {
      icon: Infinity,
      title: "Pattern Recognition",
      description: "Ability to identify mathematical patterns and relationships"
    }
  ];

  const curriculum = [
    {
      level: "Foundation",
      duration: "2-3 months",
      topics: ["Introduction to Vedic principles", "Basic multiplication sutras", "Single digit calculations", "Number patterns"],
      ageGroup: "8+ years"
    },
    {
      level: "Intermediate",
      duration: "4-5 months", 
      topics: ["Multi-digit multiplication", "Division techniques", "Squaring methods", "Algebraic applications"],
      ageGroup: "10+ years"
    },
    {
      level: "Advanced",
      duration: "6-8 months",
      topics: ["Complex calculations", "Calculus shortcuts", "Trigonometric identities", "Competition preparation"],
      ageGroup: "12+ years"
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
              <Infinity className="w-4 h-4 mr-2" />
              Ancient Indian Mathematics
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Master{" "}
              <span className="hero-text">Vedic Math</span>{" "}
              Techniques
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Discover the incredible world of Vedic Mathematics - ancient Indian techniques that make 
              complex calculations simple, fast, and enjoyable. Transform mathematical anxiety into 
              mathematical confidence with time-tested methods from the Vedas.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary text-lg px-8"
              onClick={() => window.location.href = '/#contact'}
            >
              <Lightbulb className="w-5 h-5 mr-2" />
              Book Free Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Techniques Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Powerful{" "}
              <span className="hero-text">Sutras</span>{" "}
              & Techniques
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn the 16 main sutras (formulas) and 13 sub-sutras that form the foundation of Vedic Mathematics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {techniques.map((technique, index) => (
              <Card key={index} className="learning-card">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{technique.name}</CardTitle>
                    <Badge variant={technique.difficulty === 'Beginner' ? 'default' : technique.difficulty === 'Intermediate' ? 'secondary' : 'destructive'}>
                      {technique.difficulty}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">{technique.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-primary-light/20 rounded-lg p-4">
                    <h4 className="font-semibold text-sm mb-1 text-primary">Example:</h4>
                    <p className="text-sm font-mono">{technique.example}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Why Learn{" "}
              <span className="hero-text">Vedic Math?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the remarkable benefits that come with mastering these ancient mathematical techniques
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

      {/* Curriculum Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Structured{" "}
              <span className="hero-text">Learning Path</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Progress systematically from basic sutras to advanced applications
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {curriculum.map((level, index) => (
              <Card key={index} className="learning-card">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl">{level.level}</CardTitle>
                    <Badge variant="outline">
                      <Users className="w-3 h-3 mr-1" />
                      {level.ageGroup}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{level.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Star className="w-4 h-4 mr-2 text-yellow-500" />
                    Topics Covered
                  </h4>
                  <div className="space-y-2">
                    {level.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{(index + 1) * 33}%</span>
                    </div>
                    <Progress value={(index + 1) * 33} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Vedic Math vs{" "}
              <span className="hero-text">Conventional Math</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="learning-card">
              <CardHeader>
                <CardTitle className="text-center text-xl text-muted-foreground">Conventional Method</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Multiple steps required</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Time-consuming processes</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Limited problem-solving approaches</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Mechanical learning</span>
                </div>
              </CardContent>
            </Card>

            <Card className="learning-card border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-center text-xl text-primary">Vedic Mathematics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                  <span>Single-step solutions</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                  <span>10-15x faster calculations</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                  <span>Multiple methods per problem</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                  <span>Creative and intuitive learning</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to experience the{" "}
            <span className="hero-text">magic of Vedic Math?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our Vedic Mathematics program and discover how ancient wisdom can revolutionize modern learning
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary text-lg px-8"
            onClick={() => window.location.href = '/#contact'}
          >
            <Calculator className="w-5 h-5 mr-2" />
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

export default VedicMath;