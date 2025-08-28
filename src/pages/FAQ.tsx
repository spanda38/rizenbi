import Header from "@/components/Header";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  HelpCircle,
  ArrowRight,
  Clock,
  Users,
  BookOpen,
  Calculator
} from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What age is appropriate to start learning abacus?",
          answer: "Children can start learning abacus as early as 5 years old. The ideal age range is 5-13 years when the brain is most receptive to developing mathematical and visualization skills. However, we have programs tailored for different age groups to ensure optimal learning."
        },
        {
          question: "How long does it take to complete the full program?",
          answer: "The complete Foundation to Level 8 program typically takes 3-5 years depending on the child's pace, consistency, and starting age. Each level has its own duration ranging from 2-8 months, with regular assessments to ensure mastery before progression."
        },
        {
          question: "Do you offer online classes?",
          answer: "Yes, we offer both in-person and online classes to accommodate different preferences and locations. Our online classes are interactive and engaging, using digital tools that replicate the physical abacus experience effectively."
        },
        {
          question: "What is the class size?",
          answer: "We maintain small class sizes of 6-8 students to ensure personalized attention for each child. This allows our instructors to monitor progress closely and provide individual guidance as needed."
        }
      ]
    },
    {
      category: "Curriculum & Learning",
      questions: [
        {
          question: "What is the difference between abacus and Vedic math?",
          answer: "Abacus is a tool-based method that uses physical beads and mental visualization for calculations, while Vedic Math uses ancient Indian mathematical techniques and sutras (formulas) for quick calculations. Both complement each other beautifully - abacus builds visualization skills while Vedic Math provides shortcuts and patterns."
        },
        {
          question: "Will my child still need to learn conventional math?",
          answer: "Absolutely! Our program enhances and accelerates conventional math learning rather than replacing it. Students often show significant improvement in school mathematics as the mental math skills transfer to better number sense, problem-solving abilities, and mathematical confidence."
        },
        {
          question: "How do you assess my child's progress?",
          answer: "We conduct regular assessments through speed tests, accuracy checks, and level-based examinations. Parents receive detailed progress reports showing improvement in speed, accuracy, and mental calculation abilities. We also provide certificates upon successful completion of each level."
        },
        {
          question: "What materials do students need?",
          answer: "Students need a physical abacus (which we provide), workbooks for each level, and access to our online practice platform. All materials are included in the program fee, and we provide digital resources for additional practice at home."
        }
      ]
    },
    {
      category: "Benefits & Results",
      questions: [
        {
          question: "What benefits can I expect for my child?",
          answer: "Benefits include enhanced concentration, improved memory, faster calculation abilities, better academic performance, increased self-confidence, and development of both logical and creative thinking. Many parents report improvements in other subjects as well due to enhanced focus and problem-solving skills."
        },
        {
          question: "How fast will my child be able to calculate?",
          answer: "By Level 4, most students can perform 4-digit additions in under 3 seconds. By Level 8, students often calculate faster than calculators for many operations. The speed develops gradually with consistent practice and proper technique."
        },
        {
          question: "Will the skills fade if practice stops?",
          answer: "Mental math skills, once properly developed, tend to be retained for life, similar to riding a bicycle. However, speed may decrease without regular practice. We provide maintenance programs and advanced levels to help students retain and further develop their skills."
        },
        {
          question: "How does this help with school performance?",
          answer: "Students typically show 20-30% improvement in mathematics grades, enhanced performance in standardized tests, better problem-solving approaches, and increased confidence in STEM subjects. The mental agility developed also helps in other academic areas requiring focus and analytical thinking."
        }
      ]
    },
    {
      category: "Enrollment & Logistics",
      questions: [
        {
          question: "How do I enroll my child?",
          answer: "Simply book a free assessment through our contact form or call us directly. We'll evaluate your child's current level, explain our methodology, and recommend the appropriate starting point. You can then choose between online or in-person classes based on your preference."
        },
        {
          question: "What are your class timings?",
          answer: "We offer flexible timings including weekday evenings and weekend slots. Classes are typically 1-1.5 hours long, conducted once or twice per week. We work with families to find suitable time slots that don't conflict with school schedules."
        },
        {
          question: "Do you offer trial classes?",
          answer: "Yes, we offer a free trial class where your child can experience our teaching methodology firsthand. This helps both parents and children understand the program before making a commitment. The trial includes a basic assessment and introduction to abacus fundamentals."
        },
        {
          question: "What if my child wants to discontinue?",
          answer: "We have a flexible policy with proper notice requirements. However, we encourage parents to discuss any concerns first, as we often can adjust our approach or provide additional support to help the child succeed. Most challenges are overcome with proper guidance and encouragement."
        }
      ]
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
              <HelpCircle className="w-4 h-4 mr-2" />
              Got Questions? We Have Answers
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="hero-text">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Everything you need to know about our abacus and Vedic math programs. 
              Can't find what you're looking for? We're here to help!
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary text-lg px-8"
              onClick={() => window.location.href = '/#contact'}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Still Have Questions?
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-bold text-sm">{categoryIndex + 1}</span>
                  </div>
                  <h2 className="text-2xl font-bold">{category.category}</h2>
                </div>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="learning-card border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-6">
                        <span className="font-semibold pr-4">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Why Choose{" "}
              <span className="hero-text">Rizenbi?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">25+</h3>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">1000+</h3>
              <p className="text-muted-foreground">Students Trained</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">95%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">9</h3>
              <p className="text-muted-foreground">Learning Levels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Still have questions?{" "}
            <span className="hero-text">Let's talk!</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our experienced team is ready to answer all your questions and help you choose the best program for your child
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-lg px-8"
              onClick={() => window.location.href = '/#contact'}
            >
              <HelpCircle className="w-5 h-5 mr-2" />
              Book Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8"
              onClick={() => window.location.href = 'tel:+19843636626'}
            >
              Call +1 (984) 363-6626
            </Button>
          </div>
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
                <li><a href="/faq" className="hover:text-background transition-fast">FAQ</a></li>
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

export default FAQ;