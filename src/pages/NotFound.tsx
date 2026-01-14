import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search, Mail } from "lucide-react";
import { SEO } from "@/components/SEO";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist or has been moved."
      />

      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="text-[150px] sm:text-[200px] font-bold text-primary/10 select-none leading-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl sm:text-8xl font-bold text-gradient-brand">
              404
            </div>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
          Oops! Page not found
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/">
            <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 gap-2">
              <Home className="w-4 h-4" />
              Go to Homepage
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="w-full sm:w-auto gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground mb-4">
            Here are some helpful links instead:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
            >
              <Search className="w-4 h-4" />
              Our Services
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
            >
              <Search className="w-4 h-4" />
              About Us
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
