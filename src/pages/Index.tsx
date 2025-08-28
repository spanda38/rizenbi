
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Programs />
        <Benefits />
        <Testimonials />
        <Contact />
      </main>
      
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
                <li><a href="/courses" className="hover:text-background transition-fast">Courses</a></li>
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

export default Index;
