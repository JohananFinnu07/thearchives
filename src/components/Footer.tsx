import { MapPin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="font-serif text-xl font-semibold">
                TheArchives
              </span>
            </a>
            <p className="text-primary-foreground/70 text-sm max-w-xs">
              Discovering hidden gems and authentic experiences in Andhra
              Pradesh's most beautiful destinations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Explore</h4>
            <nav className="flex flex-col gap-2">
              <a
                href="/destinations"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                Destinations
              </a>
              <a
                href="/hidden-gems"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                Hidden Gems
              </a>
              <a
                href="/about"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                About Us
              </a>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:johananfinnutalari@gmail.com"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2026 TheArchives. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Made with ♥ for explorers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
