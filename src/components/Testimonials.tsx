
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent of Emma (Age 8)",
      content: "Emma's math confidence has skyrocketed! She now solves problems faster than I can type them into a calculator. The Rizenbi method really works.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Parent of David (Grade 7)",
      content: "David struggled with math anxiety before joining Rizenbi. Now he actually enjoys math class and his grades have improved dramatically.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Lisa Rodriguez",
      role: "Parent of Sofia (Age 10)",
      content: "The abacus program has been incredible for Sofia's concentration and mental math abilities. She can now calculate complex problems in her head instantly.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Robert Taylor",
      role: "Parent of Alex (Grade 9)",
      content: "Vedic Math techniques taught at Rizenbi have given Alex a competitive edge. His problem-solving speed and accuracy have improved tremendously.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Jennifer Kim",
      role: "Parent of Maya (Age 7)",
      content: "Maya looks forward to her Rizenbi classes every week. The instructors are patient and skilled at making math fun and engaging for young learners.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "David Wilson",
      role: "Parent of Ryan (Grade 8)",
      content: "Ryan's mathematical foundation is now rock solid thanks to Rizenbi. He's developed incredible focus and discipline that helps him in all subjects.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-success-light text-success px-4 py-2 text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Student Success Stories
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            What parents are saying about{" "}
            <span className="hero-text">Rizenbi</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Real results from real families who've experienced the transformation
          </p>
        </div>

        {/* Auto-scrolling Testimonials */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out gap-6"
            style={{ transform: `translateX(-${(currentIndex * 33.33)}%)` }}
          >
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <Card key={index} className="learning-card flex-shrink-0 w-full md:w-1/3 bg-surface">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex items-center space-x-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                        ))}
                      </div>

                      <div className="flex items-center space-x-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-border'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
