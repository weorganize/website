import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ScrollToTop } from "./components/ScrollToTop";

// Eagerly load the main page for fast initial load
import Index from "./pages/Index";

// Lazy load other pages for code splitting
const Services = lazy(() => import("./pages/Services"));
const AISolutions = lazy(() => import("./pages/services/AISolutions"));
const CustomDevelopment = lazy(() => import("./pages/services/CustomDevelopment"));
const DataAnalytics = lazy(() => import("./pages/services/DataAnalytics"));
const CloudTransformation = lazy(() => import("./pages/services/CloudTransformation"));
const About = lazy(() => import("./pages/About"));
const Team = lazy(() => import("./pages/Team"));
const PoCApproach = lazy(() => import("./pages/PoCApproach"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

// New pages
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const ROICalculator = lazy(() => import("./pages/ROICalculator"));
const Compare = lazy(() => import("./pages/Compare"));

// Industry pages
const Healthcare = lazy(() => import("./pages/industries/Healthcare"));
const Finance = lazy(() => import("./pages/industries/Finance"));
const Retail = lazy(() => import("./pages/industries/Retail"));
const Manufacturing = lazy(() => import("./pages/industries/Manufacturing"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/ai-solutions" element={<AISolutions />} />
              <Route path="/services/custom-development" element={<CustomDevelopment />} />
              <Route path="/services/data-analytics" element={<DataAnalytics />} />
              <Route path="/services/cloud-transformation" element={<CloudTransformation />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/poc-approach" element={<PoCApproach />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />

              {/* New pages */}
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/roi-calculator" element={<ROICalculator />} />
              <Route path="/compare" element={<Compare />} />

              {/* Industry pages */}
              <Route path="/industries/healthcare" element={<Healthcare />} />
              <Route path="/industries/finance" element={<Finance />} />
              <Route path="/industries/retail" element={<Retail />} />
              <Route path="/industries/manufacturing" element={<Manufacturing />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
