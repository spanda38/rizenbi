import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, Award, Target, ArrowRight, BookOpen, Calculator } from "lucide-react";
import abacusImage from "@/assets/abacus-practice.jpg";
import vedicImage from "@/assets/vedic-math.jpg";

const Programs = () => {
  const programs = [
    {
      id: "abacus",
      title: "Abacus Program",
      subtitle: "Ages 5–14",
      description: "Master mental math through traditional soroban techniques",
      image: abacusImage,
      features: [
        "8 progressive skill levels",
        "Visualization & concentration",
        "Mental arithmetic mastery",
        "Weekly assessments",
      ],
      highlights: [
        { icon: Users, text: "Small Groups" },
        { icon: Clock, text: "Weekly Classes" },
        { icon: Award, text: "Certificates" },
      ],
      color: "primary",
    },
    {
      id: "vedic",
      title: "Vedic Math",
      subtitle: "Grades 6–12",
      description: "Advanced mathematical techniques for rapid calculations",
      image: vedicImage,
      features: [
        "4-digit mental calculations",
        "20-row addition & subtraction",
        "Speed multiplication techniques",
        "Competition preparation",
      ],
      highlights: [
        { icon: Target, text: "Speed Focus" },
        { icon: BookOpen, text: "Modules" },
        { icon: Calculator, text: "Mental Math" },
      ],
      color: "secondary",
    },
  ];

  return (
    <section id="programs" className="py-16 lg:py-24 bg-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-primary-light text-primary px-4 py-2 text-sm font-medium mb-4">
            Our Programs
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Pick the path that fits your child's{" "}
            <span className="hero-text">age and goals</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From foundational abacus skills to advanced Vedic mathematics, 
            we have the perfect program to unlock your child's potential.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {programs.map((program) => (
            <Card key={program.id} className="learning-card group overflow-hidden">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={program.image}
                  alt={`${program.title} learning at Rizenbi`}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <Badge 
                  className={`absolute top-4 left-4 ${
                    program.color === 'primary' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  {program.subtitle}
                </Badge>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-lg">
                  {program.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div className="space-y-3">
                  {program.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        program.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                      }`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-4">
                  {program.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <highlight.icon className={`w-4 h-4 ${
                        program.color === 'primary' ? 'text-primary' : 'text-secondary'
                      }`} />
                      <span>{highlight.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  className={`w-full ${
                    program.color === 'primary' 
                      ? 'bg-gradient-primary' 
                      : 'bg-gradient-secondary'
                  } group`}
                  onClick={() => window.location.href = program.id === 'abacus' ? '/what-is-abacus' : '/what-is-vedic-math'}
                >
                  Learn More About {program.title}
                  <ArrowRight className="w-4 h-4 ml-2 transition-smooth group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action for Learning Journey */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-primary text-lg px-8"
            onClick={() => window.location.href = '/learning-journey'}
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Explore Complete Learning Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
        <Card className="learning-card bg-gradient-subtle border border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Flexible Learning Options</CardTitle>
            <CardDescription className="text-lg">
              Choose the format that works best for your family
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">In-Person Classes</h3>
                <p className="text-muted-foreground">
                  Serving Research Triangle, Raleigh, Durham with small groups and individual attention
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-secondary-light rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg">Online Sessions</h3>
                <p className="text-muted-foreground">
                  Interactive virtual classes with the same quality instruction from anywhere
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-success-light rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-success" />
                </div>
                <h3 className="font-semibold text-lg">Flexible Scheduling</h3>
                <p className="text-muted-foreground">
                  Choose class times that fit your family's schedule and preferences
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Programs;