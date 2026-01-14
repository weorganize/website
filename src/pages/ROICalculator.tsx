import { useState } from "react";
import { PageLayout } from "@/components/layouts/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Calculator,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  ArrowRight,
  RefreshCw,
  Download,
  CheckCircle2,
} from "lucide-react";

const ROICalculator = () => {
  const [employees, setEmployees] = useState(50);
  const [avgSalary, setAvgSalary] = useState(75000);
  const [hoursOnManualTasks, setHoursOnManualTasks] = useState(10);
  const [errorRate, setErrorRate] = useState(5);
  const [showResults, setShowResults] = useState(false);

  // Calculations
  const hourlyRate = avgSalary / 2080; // 2080 work hours per year
  const weeklyManualCost = employees * hoursOnManualTasks * hourlyRate;
  const annualManualCost = weeklyManualCost * 52;

  // AI automation assumptions (conservative estimates)
  const automationRate = 0.7; // 70% of manual tasks automated
  const timeSavings = hoursOnManualTasks * automationRate;
  const annualTimeSavings = employees * timeSavings * 52;
  const annualCostSavings = annualManualCost * automationRate;

  // Error reduction
  const errorCostPerIncident = 500; // Average cost per error
  const monthlyErrors = employees * (errorRate / 100) * 20; // 20 work days
  const annualErrorCost = monthlyErrors * 12 * errorCostPerIncident;
  const errorReduction = 0.85; // 85% error reduction with AI
  const annualErrorSavings = annualErrorCost * errorReduction;

  // Total ROI
  const totalAnnualSavings = annualCostSavings + annualErrorSavings;
  const implementationCost = 50000; // Typical AI implementation cost
  const roi = ((totalAnnualSavings - implementationCost) / implementationCost) * 100;
  const paybackMonths = (implementationCost / (totalAnnualSavings / 12)).toFixed(1);

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(num);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US").format(Math.round(num));
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setEmployees(50);
    setAvgSalary(75000);
    setHoursOnManualTasks(10);
    setErrorRate(5);
    setShowResults(false);
  };

  return (
    <PageLayout>
      <SEO
        title="ROI Calculator"
        description="Calculate the potential return on investment from AI automation. See how much time and money your business could save."
      />
      <PageHero
        title="AI ROI Calculator"
        subtitle="Estimate your potential savings from AI automation. Get a personalized report in seconds."
        breadcrumbs={[{ label: "ROI Calculator", href: "/roi-calculator" }]}
      />

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <Card className="p-6 sm:p-8 bg-card border border-border/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Your Business</h2>
                  <p className="text-sm text-muted-foreground">Enter your details below</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Employees */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Users className="w-4 h-4 inline mr-2" />
                    Number of Employees
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="w-full h-3 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary touch-manipulation"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>10</span>
                    <span className="font-semibold text-primary">{employees}</span>
                    <span>500</span>
                  </div>
                </div>

                {/* Average Salary */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <DollarSign className="w-4 h-4 inline mr-2" />
                    Average Annual Salary
                  </label>
                  <input
                    type="range"
                    min="40000"
                    max="200000"
                    step="5000"
                    value={avgSalary}
                    onChange={(e) => setAvgSalary(Number(e.target.value))}
                    className="w-full h-3 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary touch-manipulation"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>$40k</span>
                    <span className="font-semibold text-primary">{formatCurrency(avgSalary)}</span>
                    <span>$200k</span>
                  </div>
                </div>

                {/* Hours on Manual Tasks */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Hours/Week on Manual Tasks (per employee)
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="30"
                    value={hoursOnManualTasks}
                    onChange={(e) => setHoursOnManualTasks(Number(e.target.value))}
                    className="w-full h-3 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary touch-manipulation"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>2 hrs</span>
                    <span className="font-semibold text-primary">{hoursOnManualTasks} hours</span>
                    <span>30 hrs</span>
                  </div>
                </div>

                {/* Error Rate */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <TrendingUp className="w-4 h-4 inline mr-2" />
                    Current Error Rate (%)
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={errorRate}
                    onChange={(e) => setErrorRate(Number(e.target.value))}
                    className="w-full h-3 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary touch-manipulation"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>1%</span>
                    <span className="font-semibold text-primary">{errorRate}%</span>
                    <span>20%</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    onClick={handleCalculate}
                    className="flex-1 bg-primary hover:bg-primary/90 gap-2"
                  >
                    Calculate ROI
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" onClick={handleReset} className="gap-2">
                    <RefreshCw className="w-4 h-4" />
                    Reset
                  </Button>
                </div>
              </div>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              {showResults ? (
                <>
                  {/* ROI Summary */}
                  <Card className="p-6 sm:p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <div className="text-center mb-6">
                      <Badge className="mb-3 bg-green-600">Estimated Annual ROI</Badge>
                      <div className="text-5xl font-bold text-primary mb-2">
                        {roi > 0 ? "+" : ""}{roi.toFixed(0)}%
                      </div>
                      <p className="text-muted-foreground">
                        Payback period: <span className="text-foreground font-semibold">{paybackMonths} months</span>
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-background/50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-500">
                          {formatCurrency(totalAnnualSavings)}
                        </div>
                        <div className="text-xs text-muted-foreground">Annual Savings</div>
                      </div>
                      <div className="bg-background/50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-primary">
                          {formatNumber(annualTimeSavings)}
                        </div>
                        <div className="text-xs text-muted-foreground">Hours Saved/Year</div>
                      </div>
                    </div>
                  </Card>

                  {/* Breakdown */}
                  <Card className="p-6 bg-card border border-border/40">
                    <h3 className="font-semibold text-foreground mb-4">Savings Breakdown</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-muted-foreground">Labor Cost Savings</span>
                        </div>
                        <span className="font-semibold text-foreground">{formatCurrency(annualCostSavings)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-muted-foreground">Error Reduction Savings</span>
                        </div>
                        <span className="font-semibold text-foreground">{formatCurrency(annualErrorSavings)}</span>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t border-border">
                        <span className="font-semibold text-foreground">Total Annual Savings</span>
                        <span className="font-bold text-green-500 text-lg">{formatCurrency(totalAnnualSavings)}</span>
                      </div>
                    </div>
                  </Card>

                  {/* CTA */}
                  <Card className="p-6 bg-card border border-border/40 text-center">
                    <h3 className="font-semibold text-foreground mb-2">Ready to See These Savings?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Let's discuss how we can achieve these results for your business.
                    </p>
                    <Link to="/contact">
                      <Button className="w-full bg-primary hover:bg-primary/90 gap-2">
                        Schedule a Consultation
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </Card>
                </>
              ) : (
                <Card className="p-8 bg-card border border-border/40 text-center h-full flex flex-col justify-center">
                  <Calculator className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Calculate Your Potential Savings
                  </h3>
                  <p className="text-muted-foreground">
                    Adjust the sliders on the left and click "Calculate ROI" to see your personalized results.
                  </p>
                </Card>
              )}
            </div>
          </div>

          {/* Assumptions Note */}
          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
              * Calculations are estimates based on industry averages: 70% task automation rate,
              85% error reduction, $500 average error cost. Actual results may vary based on
              your specific use case and implementation. Contact us for a detailed assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-light mb-4">
              Where AI Delivers the <span className="font-semibold">Biggest ROI</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Document Processing", savings: "85%", desc: "Automate invoice, contract, and form processing" },
              { title: "Customer Support", savings: "60%", desc: "AI chatbots handle routine inquiries" },
              { title: "Data Entry", savings: "90%", desc: "Eliminate manual data entry and validation" },
              { title: "Report Generation", savings: "75%", desc: "Auto-generate insights from your data" },
            ].map((item, idx) => (
              <Card key={idx} className="p-5 bg-card border border-border/40 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{item.savings}</div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ROICalculator;
