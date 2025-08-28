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
  GraduationCap
} from "lucide-react";

const LearningJourney = () => {
  const levels = [
    {
      level: "Foundation",
      duration: "2-3 months",
      ageGroup: "5-6 years",
      skills: ["Number recognition 1-100", "Basic bead movements", "Finger coordination", "Concentration building"],
      description: "Introduction to abacus and basic number concepts",
      color: "bg-blue-500"
    },
    {
      level: "Level 1",
      duration: "2-3 months", 
      ageGroup: "6-7 years",
      skills: ["Addition up to 999", "Subtraction basics", "Number visualization", "Speed building"],
      description: "Simple addition and subtraction with physical abacus",
      color: "bg-green-500"
    },
    {
      level: "Level 2",
      duration: "3-4 months",
      ageGroup: "7-8 years", 
      skills: ["Mental visualization", "Photographic number memory", "Speed building", "Pattern recognition"],
      description: "Advanced addition/subtraction and introduction to mental calculation",
      color: "bg-yellow-500"
    },
    {
      level: "Level 3",
      duration: "3-4 months",
      ageGroup: "8-9 years",
      skills: ["Multiplication basics", "Times tables mastery", "Mental calculation", "Speed competitions"],
      description: "Introduction to multiplication and enhanced mental math",
      color: "bg-orange-500"
    },
    {
      level: "Level 4", 
      duration: "4-5 months",
      ageGroup: "9-10 years",
      skills: ["Advanced multiplication", "Multi-digit operations", "Complex problem solving", "Accuracy improvement"],
      description: "Mastery of multiplication with large numbers",
      color: "bg-red-500"
    },
    {
      level: "Level 5",
      duration: "4-5 months",
      ageGroup: "10-11 years",
      skills: ["Division introduction", "Decimal operations", "Photographic memory training", "Mental agility"],
      description: "Division techniques and decimal number operations", 
      color: "bg-purple-500"
    },
    {
      level: "Level 6",
      duration: "5-6 months",
      ageGroup: "11-12 years",
      skills: ["Advanced division", "Complex decimals", "Percentage calculations", "Competition prep"],
      description: "Advanced division and real-world mathematical applications",
      color: "bg-pink-500"
    },
    {
      level: "Level 7", 
      duration: "5-6 months",
      ageGroup: "12-13 years",
      skills: ["Master-level calculations", "Negative numbers", "Advanced problems", "Photographic memory development"],
      description: "Expert-level mental math and advanced problem solving",
      color: "bg-indigo-500"
    },
    {
      level: "Level 8",
      duration: "6-8 months",
      ageGroup: "13+ years", 
      skills: ["Lightning calculations", "Any mathematical operation", "Competition mastery", "Photographic memory mastery"],
      description: "Mastery of all abacus techniques and competition readiness",
      color: "bg-gray-800"
    }
  ];

  const benefits = [
    {
      icon: Brain,
      title: "Whole Brain Development", 
      description: "Stimulates both left and right brain hemispheres simultaneously"
    },
    {
      icon: Zap,
      title: "Lightning Speed",
      description: "Calculate faster than calculators with mental visualization"
    },
    {
      icon: Target,
      title: "Enhanced Focus",
      description: "Develops exceptional concentration and attention span"
    },
    {
      icon: TrendingUp,
      title: "Academic Excellence",
      description: "Significant improvement in overall school performance"
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
              A comprehensive 9-level program designed to transform your child from basic number recognition to 
              lightning-fast mental math mastery. Each level builds upon the previous, ensuring solid foundations 
              and continuous growth.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary text-lg px-8"
              onClick={() => window.location.href = '/#contact'}
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Why Choose Our{" "}
              <span className="hero-text">Learning Journey?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Curriculum Levels */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Complete{" "}
              <span className="hero-text">Curriculum Breakdown</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each level is carefully designed to build upon previous knowledge while introducing new concepts and skills
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {levels.map((level, index) => (
              <Card key={index} className="learning-card relative overflow-hidden">
                <div className={`h-2 ${level.color}`}></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{level.level}</CardTitle>
                    <Badge variant="outline">
                      <Users className="w-3 h-3 mr-1" />
                      {level.ageGroup}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                    <Clock className="w-4 h-4" />
                    <span>{level.duration}</span>
                  </div>
                  <CardDescription className="text-base">{level.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Star className="w-4 h-4 mr-2 text-yellow-500" />
                    Key Skills
                  </h4>
                  <div className="space-y-2">
                    {level.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{Math.round(((index + 1) / levels.length) * 100)}%</span>
                    </div>
                    <Progress value={((index + 1) / levels.length) * 100} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              What Your Child Will{" "}
              <span className="hero-text">Achieve</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="learning-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                    By Level 4
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    <span>Perform 4-digit additions in seconds</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    <span>Master multiplication tables up to 20</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    <span>Develop mental visualization skills</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    <span>Show marked improvement in school grades</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="learning-card border-2 border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Award className="w-5 h-5 mr-2" />
                    By Level 8
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    <span>Calculate faster than calculators</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    <span>Compete in national math competitions</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    <span>Excel in STEM subjects</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    <span>Develop photographic memory for numbers</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to begin this{" "}
            <span className="hero-text">incredible journey?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your child's transformation from basic counting to mathematical mastery with our proven curriculum
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary text-lg px-8"
            onClick={() => window.location.href = '/#contact'}
          >
              <BookOpen className="w-5 h-5 mr-2" />
              Book a Free Demo Session now here
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
                  <h1 className="text-xl font-bold">Rizenbi Abacus Learning Centre</h1>
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
                <li><a href="/learning-journey" className="hover:text-background transition-fast">Learning Journey</a></li>
                <li><a href="/what-is-abacus" className="hover:text-background transition-fast">What is Abacus</a></li>
                <li><a href="/what-is-vedic-math" className="hover:text-background transition-fast">What is Vedic Math</a></li>
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
            <p>&copy; 2024 Rizenbi Abacus Learning Centre. All rights reserved. Building mathematical excellence with 25+ years of experience.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LearningJourney;