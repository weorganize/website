export const Industries = () => {
  const industries = [
    { icon: "/icons/industries/healthcare.png", name: "Healthcare" },
    { icon: "/icons/industries/finance.png", name: "Finance" },
    { icon: "/icons/industries/ecommerce.png", name: "E-commerce" },
    { icon: "/icons/industries/it-operations.png", name: "IT Operations" },
    { icon: "/icons/industries/travel.png", name: "Travel" },
    { icon: "/icons/industries/legal.png", name: "Legal" },
    { icon: "/icons/industries/hr.png", name: "HR" },
    { icon: "/icons/industries/marketing.png", name: "Marketing" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Industries
          </h2>
          <p className="text-xl text-muted-foreground">
            Specialized Solutions Across Multiple Industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 industry-icon-pulse"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center">
                <img 
                  src={industry.icon} 
                  alt={`${industry.name} industry icon`}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm font-medium text-center">{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
