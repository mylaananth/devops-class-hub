import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="h-5 w-5 text-primary" />
              <span className="font-mono-heading text-lg font-bold">
                <span className="text-primary">KEC</span>
                <span className="text-muted-foreground"> × </span>
                <span className="text-secondary">GUVI</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering students with industry-grade DevOps skills through collaborative learning.
            </p>
          </div>

          <div>
            <h4 className="font-mono-heading text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/curriculum" className="text-sm text-muted-foreground hover:text-primary transition-colors">Curriculum</Link>
              <Link to="/curriculum#register" className="text-sm text-muted-foreground hover:text-primary transition-colors">Register</Link>
            </div>
          </div>

          <div>
            <h4 className="font-mono-heading text-sm font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground font-mono-heading">
            © 2026 KEC × GUVI DevOps Program. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
