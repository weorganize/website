import { Link } from "react-router-dom";
import { Mail, Linkedin, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Top Section: Logo + Social Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 pb-8 sm:pb-10 mb-8 sm:mb-10 border-b border-background/10">
          <Link
            to="/"
            className="flex flex-col cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="font-bold text-lg sm:text-xl text-gradient-brand-light">weorganize.ai</span>
            <span className="text-background/50 text-[10px] sm:text-xs font-light">AI Solutions for Enterprise</span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-background/60 text-xs sm:text-sm font-light hidden sm:block">Follow us:</span>
            <a
              href="https://linkedin.com/company/weorganize-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-9 sm:h-9 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-foreground transition-all hover:scale-110 active:scale-95"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-10 sm:mb-12">
          {/* Company */}
          <div>
            <h3 className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-5">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/about" className="text-background/70 hover:text-primary transition-colors text-xs sm:text-sm font-light block py-1">About Us</Link></li>
              <li><Link to="/team" className="text-background/70 hover:text-primary transition-colors text-xs sm:text-sm font-light block py-1">Our Team</Link></li>
              <li><Link to="/pricing" className="text-background/70 hover:text-primary transition-colors text-xs sm:text-sm font-light block py-1">Pricing</Link></li>
              <li><Link to="/careers" className="text-background/70 hover:text-primary transition-colors text-xs sm:text-sm font-light block py-1">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-5">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/services/ai-solutions" className="text-background/70 hover:text-primary transition-colors text-xs sm:text-sm font-light block py-1">AI Solutions</Link></li>
              <li><Link to="/services/custom-development" className="text-background/70 hover:text-primary transition-colors text-xs sm:text-sm font-light block py-1">Custom Development</Link></li>
              <li><Link to="/services/data-analytics" className="text-background/70 hover:text-primary transition-colors text-xs sm:text-sm font-light block py-1">Data Analytics</Link></li>
              <li><Link to="/services/cloud-transformation" className="text-background/70 hover:text-primary transition-colors text-xs sm:text-sm font-light block py-1">Cloud & DevOps</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-5">Get in Touch</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="mailto:hr@weorganize.ai" className="text-background/70 hover:text-primary transition-colors text-xs sm:text-sm font-light flex items-center gap-2 py-1">
                  <Mail className="w-4 h-4 text-primary/70 flex-shrink-0" />
                  hr@weorganize.ai
                </a>
              </li>
              <li>
                <span className="text-background/70 text-xs sm:text-sm font-light flex items-center gap-2 py-1">
                  <MapPin className="w-4 h-4 text-primary/70 flex-shrink-0" />
                  Remote-first team
                </span>
              </li>
            </ul>
            <p className="text-background/50 text-xs font-light mt-4 leading-relaxed">
              We typically respond within 24 hours on business days.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-5">Resources</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/blog" className="text-background/70 hover:text-primary transition-colors text-xs sm:text-sm font-light block py-1">Blog</Link></li>
              <li><Link to="/case-studies" className="text-background/70 hover:text-primary transition-colors text-xs sm:text-sm font-light block py-1">Case Studies</Link></li>
              <li><Link to="/roi-calculator" className="text-background/70 hover:text-primary transition-colors text-xs sm:text-sm font-light block py-1">ROI Calculator</Link></li>
              <li><Link to="/poc-approach" className="text-background/70 hover:text-primary transition-colors text-xs sm:text-sm font-light block py-1">PoC Approach</Link></li>
              <li><Link to="/contact" className="text-background/70 hover:text-primary transition-colors text-xs sm:text-sm font-light block py-1">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-background/40 font-light">
          <p className="text-center md:text-left">
            &copy; {currentYear} weorganize.ai. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors py-1">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors py-1">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
