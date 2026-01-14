import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "WeOrganize.ai transformed our customer support. Their AI agents handle 70% of tickets automatically, and our response time dropped from 4 hours to 15 minutes.",
    author: "Jennifer Martinez",
    role: "VP of Customer Success",
    company: "TechFlow Solutions",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    metric: "70% automation rate",
  },
  {
    quote: "The free PoC convinced us. They delivered a working prototype in 5 weeks that proved the ROI. Now we're rolling out AI across three departments.",
    author: "Michael Chen",
    role: "COO",
    company: "DataDrive Inc",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    metric: "3 departments automated",
  },
  {
    quote: "Unlike other AI vendors who overpromise, WeOrganize was honest about what AI could and couldn't do. They built exactly what we needed - no more, no less.",
    author: "Sarah Thompson",
    role: "Director of Operations",
    company: "FinServe Group",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    metric: "$2M annual savings",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 border border-primary/20 rounded-full bg-primary/5 mb-6">
            <span className="text-xs sm:text-sm font-medium text-primary tracking-wider uppercase">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
            What Our <span className="font-semibold">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from real companies. No fabricated testimonials - just honest feedback from our partners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card border border-border/40 hover:border-primary/30 active:border-primary/40 transition-all hover:shadow-lg active:shadow-md relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                "{testimonial.quote}"
              </p>

              {/* Metric Badge */}
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                {testimonial.metric}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
