import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-primary">Felix Human Capital</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground hover:text-accent transition-colors">
            Services
          </a>
          <a href="#expertise" className="text-foreground hover:text-accent transition-colors">
            Expertise
          </a>
          <a href="#about" className="text-foreground hover:text-accent transition-colors">
            About
          </a>
          <a href="#contact" className="text-foreground hover:text-accent transition-colors">
            Contact
          </a>
        </nav>

        <Button variant="accent" size="sm">
          Get Consultation
        </Button>
      </div>
    </header>
  );
};

export default Header;