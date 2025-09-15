import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckSquare, Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="w-full py-4 px-6 bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <CheckSquare className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Get Us Live</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border/50 py-4">
          <nav className="flex flex-col gap-4 px-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              size="lg"
              className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;