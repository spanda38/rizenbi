import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  TrendingUp, 
  Shield, 
  Brain, 
  Users, 
  Clock,
  Target,
  Award,
  Heart
} from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Lightning-fast Math",
      description: "Calculate in seconds, often faster than a calculator",
      color: "primary",
      stats: "3x faster calculations"
    },
    {
      icon: TrendingUp,
      title: "Instant Results",
      description: "Noticeable improvement within the first few weeks",
      color: "secondary",
      stats: "Results in 2-3 weeks"
    },
    {
      icon: Shield,
      title: "Money-Back Guarantee",
      description: "Full refund if you're not satisfied after the first month",
      color: "success",
      stats: "100% satisfaction guaranteed"
    },
    {
      icon: Brain,
      title: "Focus & Memory",
      description: "Boost concentration, listening skills, and retention",
      color: "primary",
      stats: "Enhanced cognitive skills"
    },
    {
      icon: Users,
      title: "Trust & Reliability",
      description: "Proven methods trusted by parents worldwide",
      color: "secondary",
      stats: "500+ students taught"
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description: "Progressive assessments and achievement certificates",
      color: "success",
      stats: "8 skill levels available"
    }
  ];

  const outcomes = [
    {
      icon: Target,
      title: "Academic Confidence",
      description: "Students report increased confidence in math class and standardized tests"
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Improved speed and accuracy in completing math homework and assignments"
    },
    {
      icon: Heart,
      title: "Love for Learning",
      description: "Children develop a genuine enthusiasm for mathematics and problem-solving"
    }
  ];

  return (
    <section id="benefits" className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-secondary-light text-secondary px-4 py-2 text-sm font-medium mb-4">
            Why Parents Choose Rizenbi
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Proven benefits that{" "}
            <span className="hero-text">transform learning</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Join thousands of families who've discovered the power of mental math mastery 
            through our Kumon-inspired teaching methods.
          </p>
        </div>

        {/* What Sets Rizenbi Apart */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-8">
              What sets Rizenbi apart from other learning programs?
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Point 1 */}
            <div className="text-center relative">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-4xl font-bold text-white">1</span>
                </div>
                <div className="absolute inset-0 w-40 h-40 rounded-full border-4 border-yellow-200 -m-4 mx-auto opacity-30"></div>
              </div>
              <h4 className="text-xl font-bold text-orange-600 mb-4">
                No Homework Stress
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Our program requires no additional homework! All learning happens during 
                our structured sessions, giving your child more time for family, play, and 
                other interests while still developing exceptional mathematical abilities 
                that exceed traditional classroom learning.
              </p>
            </div>

            {/* Point 2 */}
            <div className="text-center relative">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-4xl font-bold text-white">2</span>
                </div>
                <div className="absolute inset-0 w-40 h-40 rounded-full border-4 border-green-200 -m-4 mx-auto opacity-30"></div>
              </div>
              <h4 className="text-xl font-bold text-green-600 mb-4">
                Ultimate Brain Workout
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Every session is an intensive brain workout that strengthens neural 
                pathways, enhances concentration, and develops lightning-fast mental 
                processing. Your child's brain becomes a powerful calculation engine 
                through our systematic training methodology.
              </p>
            </div>

            {/* Point 3 */}
            <div className="text-center relative">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-4xl font-bold text-white">3</span>
                </div>
                <div className="absolute inset-0 w-40 h-40 rounded-full border-4 border-purple-200 -m-4 mx-auto opacity-30"></div>
              </div>
              <h4 className="text-xl font-bold text-purple-600 mb-4">
                Genius-Level Math Skills & Photographic Memory
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Through visualization techniques and mental math mastery, children develop 
                photographic memory for numbers and calculations. They become mathematical 
                geniuses capable of solving complex problems instantly, often outperforming 
                calculators with pure mental calculation.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="learning-card group">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  benefit.color === 'primary' ? 'bg-primary-light' :
                  benefit.color === 'secondary' ? 'bg-secondary-light' :
                  'bg-success-light'
                }`}>
                  <benefit.icon className={`w-6 h-6 ${
                    benefit.color === 'primary' ? 'text-primary' :
                    benefit.color === 'secondary' ? 'text-secondary' :
                    'text-success'
                  }`} />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-fast">
                  {benefit.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {benefit.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className={`${
                  benefit.color === 'primary' ? 'border-primary text-primary' :
                  benefit.color === 'secondary' ? 'border-secondary text-secondary' :
                  'border-success text-success'
                }`}>
                  {benefit.stats}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Outcomes Section */}
        <Card className="learning-card bg-surface border border-border">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl lg:text-3xl font-bold">
              Long-term Learning Outcomes
            </CardTitle>
            <CardDescription className="text-lg">
              The lasting impact of mental math mastery on your child's education
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              {outcomes.map((outcome, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-elegant">
                    <outcome.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">{outcome.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {outcome.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trust Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Students Taught</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-secondary">95%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-success">25+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">100%</div>
              <div className="text-muted-foreground">Money-Back Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;