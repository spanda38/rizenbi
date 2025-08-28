import { InlineWidget } from "react-calendly";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, CheckCircle } from "lucide-react";

interface CalendlyBookingProps {
  className?: string;
}

const CalendlyBooking = ({ className }: CalendlyBookingProps) => {
  // Replace with your actual Calendly URL
  const calendlyUrl = "https://calendly.com/rizenbiusa/30min";

  const features = [
    "30-minute interactive demo",
    "Meet your dedicated instructor", 
    "Personalized skill assessment",
    "See results in first session",
    "No pressure or obligation"
  ];

  return (
    <div className={className}>
      <Card className="learning-card">
        <CardHeader className="text-center">
          <Badge className="bg-primary-light text-primary px-4 py-2 text-sm font-medium mb-4 mx-auto w-fit">
            <Calendar className="w-4 h-4 mr-2" />
            Book Your Free Demo
          </Badge>
          <CardTitle className="text-2xl lg:text-3xl font-bold">
            Schedule Your Free Demo Session
          </CardTitle>
          <CardDescription className="text-lg">
            Choose a convenient time and see the Rizenbi difference firsthand
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Features */}
          <div className="grid md:grid-cols-5 gap-4 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm">
                <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* Time Zone Notice */}
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground bg-muted rounded-lg p-3">
            <Clock className="w-4 h-4 text-primary" />
            <span>All times shown in Eastern Standard Time (EST)</span>
          </div>

          {/* Calendly Widget */}
          <div className="min-h-[600px]">
            <InlineWidget
              url={calendlyUrl}
              styles={{
                height: '600px',
                border: '1px solid hsl(var(--border))',
                borderRadius: '0.75rem',
              }}
              pageSettings={{
                backgroundColor: 'ffffff',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '2563eb', // Primary blue color
                textColor: '1f2937',
              }}
            />
          </div>

          {/* Support Note */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              Having trouble booking? Email us at{" "}
              <a 
                href="mailto:rizenbiusa@gmail.com" 
                className="text-primary hover:underline font-medium"
              >
                rizenbiusa@gmail.com
              </a>{" "}
              or call{" "}
              <a 
                href="tel:+19843636626" 
                className="text-primary hover:underline font-medium"
              >
                +1 (984) 363-6626
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CalendlyBooking;