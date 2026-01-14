import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, Bot, Brain, Cpu, Zap, Code, Smartphone, Plug, Layers, BarChart3, TrendingUp, PieChart, Database, Cloud, GitBranch, Server, Shield, BookOpen, Target, Users, Briefcase, Mail, Lightbulb, ArrowRight, DollarSign, FileText, Calculator, Scale } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const servicesCategories = [
  {
    id: "ai",
    title: "AI Solutions",
    items: [
      { icon: Bot, title: "Intelligent Agents", desc: "Autonomous AI agents for workflow optimization", link: "/services/ai-solutions" },
      { icon: Brain, title: "Machine Learning", desc: "Custom ML models for your business needs", link: "/services/ai-solutions" },
      { icon: Cpu, title: "Process Automation", desc: "End-to-end intelligent automation", link: "/services/ai-solutions" },
      { icon: Zap, title: "Generative AI", desc: "LLM-powered content and code generation", link: "/services/ai-solutions" },
    ]
  },
  {
    id: "dev",
    title: "Custom Development",
    items: [
      { icon: Code, title: "Web Applications", desc: "Scalable, modern web solutions", link: "/services/custom-development" },
      { icon: Smartphone, title: "Mobile Apps", desc: "Native and cross-platform apps", link: "/services/custom-development" },
      { icon: Plug, title: "API Development", desc: "RESTful and GraphQL APIs", link: "/services/custom-development" },
      { icon: Layers, title: "System Integration", desc: "Connect your tech ecosystem", link: "/services/custom-development" },
    ]
  },
  {
    id: "data",
    title: "Data Analytics",
    items: [
      { icon: BarChart3, title: "Business Intelligence", desc: "Actionable insights from your data", link: "/services/data-analytics" },
      { icon: TrendingUp, title: "Predictive Analytics", desc: "Forecast trends and outcomes", link: "/services/data-analytics" },
      { icon: PieChart, title: "Data Visualization", desc: "Interactive dashboards and reports", link: "/services/data-analytics" },
      { icon: Database, title: "Data Engineering", desc: "ETL pipelines and data lakes", link: "/services/data-analytics" },
    ]
  },
  {
    id: "cloud",
    title: "Cloud Transformation",
    items: [
      { icon: Cloud, title: "Cloud Migration", desc: "Seamless transition to the cloud", link: "/services/cloud-transformation" },
      { icon: GitBranch, title: "DevOps & CI/CD", desc: "Automated deployment pipelines", link: "/services/cloud-transformation" },
      { icon: Server, title: "Infrastructure", desc: "Scalable cloud architecture", link: "/services/cloud-transformation" },
      { icon: Shield, title: "Security & Compliance", desc: "Enterprise-grade protection", link: "/services/cloud-transformation" },
    ]
  },
];

const companyCategories = [
  {
    id: "about",
    title: "About Us",
    items: [
      { icon: BookOpen, title: "Our Story", desc: "Learn about our journey and mission", link: "/about" },
      { icon: Users, title: "Meet the Team", desc: "The experts behind weorganize.ai", link: "/team" },
      { icon: Lightbulb, title: "PoC Approach", desc: "Our proven methodology", link: "/poc-approach" },
      { icon: DollarSign, title: "Pricing", desc: "Transparent, flexible pricing", link: "/pricing" },
    ]
  },
  {
    id: "resources",
    title: "Resources",
    items: [
      { icon: FileText, title: "Blog", desc: "Insights on AI automation", link: "/blog" },
      { icon: Target, title: "Case Studies", desc: "Real results from real clients", link: "/case-studies" },
      { icon: Calculator, title: "ROI Calculator", desc: "Calculate your potential savings", link: "/roi-calculator" },
      { icon: Scale, title: "Compare Options", desc: "See how we stack up", link: "/compare" },
    ]
  },
  {
    id: "contact",
    title: "Contact",
    items: [
      { icon: Briefcase, title: "Careers", desc: "Join our growing team", link: "/careers" },
      { icon: Mail, title: "Get in Touch", desc: "Start a conversation with us", link: "/contact" },
    ]
  },
];

export const Navigation = () => {
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [activeServiceCategory, setActiveServiceCategory] = useState("ai");
  const [activeCompanyCategory, setActiveCompanyCategory] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setServicesOpen(false);
      setCompanyOpen(false);
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setServicesOpen(false);
        setCompanyOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleLinkClick = () => {
    setServicesOpen(false);
    setCompanyOpen(false);
  };

  const activeServiceItems = servicesCategories.find(c => c.id === activeServiceCategory)?.items || [];
  const activeCompanyItems = companyCategories.find(c => c.id === activeCompanyCategory)?.items || [];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/20" role="banner">
      <nav className="container mx-auto max-w-7xl px-6 h-18 flex items-center justify-between py-4" aria-label="Main navigation">
        <Link
          to="/"
          className="flex items-center cursor-pointer hover:opacity-80 transition-opacity z-10"
          aria-label="WeOrganize.ai - Go to homepage"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="font-bold text-xl tracking-tight text-gradient-brand">weorganize.ai</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {/* Services Mega Menu */}
          <div
            className="relative dropdown-container"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="text-foreground/80 hover:text-primary active:text-primary transition-colors flex items-center gap-1.5 font-medium text-sm min-h-[44px] px-2"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              aria-label="Services menu"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-[100]">
                <div className="w-[680px] bg-background border border-border/50 rounded-xl shadow-2xl overflow-hidden">
                  <div className="flex">
                    {/* Dark Sidebar */}
                    <div className="w-52 bg-foreground text-background py-4">
                      {servicesCategories.map((category) => (
                        <button
                          key={category.id}
                          className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors ${
                            activeServiceCategory === category.id
                              ? 'text-primary bg-background/10'
                              : 'text-background/80 hover:text-background hover:bg-background/5 active:bg-background/10'
                          }`}
                          onMouseEnter={() => setActiveServiceCategory(category.id)}
                          onClick={() => setActiveServiceCategory(category.id)}
                        >
                          {category.title}
                        </button>
                      ))}
                    </div>
                    
                    {/* Content Panel */}
                    <div className="flex-1 p-5">
                      <div className="grid grid-cols-2 gap-3">
                        {activeServiceItems.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.link}
                            onClick={handleLinkClick}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary active:bg-secondary/80 transition-colors group"
                          >
                            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              <item.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-medium text-sm text-foreground">{item.title}</div>
                              <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      {/* CTA */}
                      <div className="mt-4 pt-4 border-t border-border">
                        <Link 
                          to="/services" 
                          onClick={handleLinkClick}
                          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                          View All Services <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Company Mega Menu */}
          <div
            className="relative dropdown-container"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <button
              className="text-foreground/80 hover:text-primary active:text-primary transition-colors flex items-center gap-1.5 font-medium text-sm min-h-[44px] px-2"
              aria-expanded={companyOpen}
              aria-haspopup="true"
              aria-label="Company menu"
              onClick={() => setCompanyOpen(!companyOpen)}
            >
              Company <ChevronDown className={`w-4 h-4 transition-transform ${companyOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {companyOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-[100]">
                <div className="w-[520px] bg-background border border-border/50 rounded-xl shadow-2xl overflow-hidden">
                  <div className="flex">
                    {/* Dark Sidebar */}
                    <div className="w-44 bg-foreground text-background py-4">
                      {companyCategories.map((category) => (
                        <button
                          key={category.id}
                          className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors ${
                            activeCompanyCategory === category.id
                              ? 'text-primary bg-background/10'
                              : 'text-background/80 hover:text-background hover:bg-background/5 active:bg-background/10'
                          }`}
                          onMouseEnter={() => setActiveCompanyCategory(category.id)}
                          onClick={() => setActiveCompanyCategory(category.id)}
                        >
                          {category.title}
                        </button>
                      ))}
                    </div>
                    
                    {/* Content Panel */}
                    <div className="flex-1 p-5">
                      <div className="grid grid-cols-1 gap-3">
                        {activeCompanyItems.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.link}
                            onClick={handleLinkClick}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary active:bg-secondary/80 transition-colors group"
                          >
                            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              <item.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-medium text-sm text-foreground">{item.title}</div>
                              <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      {/* CTA */}
                      <div className="mt-4 pt-4 border-t border-border">
                        <Link 
                          to="/contact" 
                          onClick={handleLinkClick}
                          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                          Get in touch with us <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <ThemeToggle />
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90 active:bg-primary/80 text-primary-foreground font-medium px-6 shadow-sm min-h-[44px]">Get Started</Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="w-11 h-11 min-h-[44px] min-w-[44px]" aria-label="Open mobile menu">
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-background overflow-y-auto">
            <nav className="flex flex-col gap-4 sm:gap-6 mt-6 sm:mt-8 pb-8">
              {/* Home Link */}
              <Link
                to="/"
                className="font-semibold text-lg text-foreground hover:text-primary transition-colors py-2 -mx-2 px-2 rounded-lg active:bg-secondary/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <div className="space-y-1">
                <h3 className="font-semibold text-base sm:text-lg text-primary mb-2 sm:mb-3">Services</h3>
                <Link to="/services/ai-solutions" className="block py-3 hover:text-primary transition-colors text-sm sm:text-base active:bg-secondary/50 -mx-2 px-2 rounded-lg" onClick={() => setMobileMenuOpen(false)}>AI Solutions</Link>
                <Link to="/services/custom-development" className="block py-3 hover:text-primary transition-colors text-sm sm:text-base active:bg-secondary/50 -mx-2 px-2 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Custom Development</Link>
                <Link to="/services/data-analytics" className="block py-3 hover:text-primary transition-colors text-sm sm:text-base active:bg-secondary/50 -mx-2 px-2 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Data Analytics</Link>
                <Link to="/services/cloud-transformation" className="block py-3 hover:text-primary transition-colors text-sm sm:text-base active:bg-secondary/50 -mx-2 px-2 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Cloud Transformation</Link>
                <Link to="/services" className="block py-3 font-medium text-primary text-sm sm:text-base active:bg-secondary/50 -mx-2 px-2 rounded-lg" onClick={() => setMobileMenuOpen(false)}>View All Services</Link>
              </div>

              <div className="border-t border-border pt-4 sm:pt-6 space-y-1">
                <h3 className="font-semibold text-base sm:text-lg text-primary mb-2 sm:mb-3">Company</h3>
                <Link to="/about" className="block py-3 hover:text-primary transition-colors text-sm sm:text-base active:bg-secondary/50 -mx-2 px-2 rounded-lg" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                <Link to="/team" className="block py-3 hover:text-primary transition-colors text-sm sm:text-base active:bg-secondary/50 -mx-2 px-2 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Our Team</Link>
                <Link to="/pricing" className="block py-3 hover:text-primary transition-colors text-sm sm:text-base active:bg-secondary/50 -mx-2 px-2 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
                <Link to="/blog" className="block py-3 hover:text-primary transition-colors text-sm sm:text-base active:bg-secondary/50 -mx-2 px-2 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                <Link to="/careers" className="block py-3 hover:text-primary transition-colors text-sm sm:text-base active:bg-secondary/50 -mx-2 px-2 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
                <Link to="/contact" className="block py-3 hover:text-primary transition-colors text-sm sm:text-base active:bg-secondary/50 -mx-2 px-2 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              </div>

              <div className="border-t border-border pt-4 sm:pt-6">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium min-h-[48px] text-base">Get Started</Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};
