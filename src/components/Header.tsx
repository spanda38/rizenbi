
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Learning Journey", href: "/learning-journey" },
    { name: "What is Abacus", href: "/what-is-abacus" },
    { name: "What is Vedic Math", href: "/what-is-vedic-math" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Rizenbi Abacus</h1>
              <p className="text-xs text-muted-foreground">Learning Centre</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-fast font-medium"
                >
                  {item.name}
                </a>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-fast font-medium"
                  onClick={(e) => {
                    if (item.href.startsWith('/#')) {
                      e.preventDefault();
                      const section = item.href.substring(2);
                      if (window.location.pathname !== '/') {
                        window.location.href = item.href;
                      } else {
                        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              size="sm" 
              className="bg-gradient-primary"
              onClick={() => {
                if (window.location.pathname !== '/') {
                  window.location.href = '/#contact';
                } else {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-fast font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-fast font-medium py-2"
                    onClick={(e) => {
                      setIsMenuOpen(false);
                      if (item.href.startsWith('/#')) {
                        e.preventDefault();
                        const section = item.href.substring(2);
                        if (window.location.pathname !== '/') {
                          window.location.href = item.href;
                        } else {
                          document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Button 
                  className="bg-gradient-primary"
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (window.location.pathname !== '/') {
                      window.location.href = '/#contact';
                    } else {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Free Demo
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
