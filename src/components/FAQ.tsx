import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Export FAQ data for SEO schema usage
export const faqData = [
  {
    question: "What is a Proof of Concept (PoC) and why do you offer it for free?",
    answer: "A PoC is a small-scale project that demonstrates AI can solve your specific problem. We offer it free because we believe in proving value before asking for commitment. It typically takes 4-6 weeks and gives you a working prototype you can evaluate.",
  },
  {
    question: "How long does a typical AI implementation take?",
    answer: "It depends on complexity. A focused automation project takes 4-8 weeks. A comprehensive AI agent system might take 3-6 months. We always start with a PoC so you can see results quickly and decide if you want to proceed.",
  },
  {
    question: "What industries do you work with?",
    answer: "We work across industries including finance, healthcare, e-commerce, legal, HR, marketing, and more. Our AI solutions are adaptable to any industry with repetitive processes, data analysis needs, or customer interaction workflows.",
  },
  {
    question: "Do I need technical expertise to work with you?",
    answer: "No. We handle all the technical complexity. You just need to understand your business processes and be available for feedback sessions. We translate your business needs into technical solutions.",
  },
  {
    question: "How do you ensure data security and privacy?",
    answer: "We follow enterprise-grade security practices: encrypted data transfer, secure cloud infrastructure, access controls, and compliance with GDPR/CCPA. Your data stays yours - we never use client data to train models for other clients.",
  },
  {
    question: "What's your pricing model?",
    answer: "We offer flexible pricing: project-based for specific implementations, retainer for ongoing support, and outcome-based where we tie fees to measurable results. The PoC is always free. Full pricing details are on our pricing page.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer: "Yes. We specialize in integrating AI solutions with existing tech stacks including Salesforce, SAP, Oracle, custom ERPs, and legacy systems. We use APIs, webhooks, and custom connectors to ensure seamless integration.",
  },
  {
    question: "What happens if the AI solution doesn't work as expected?",
    answer: "That's why we start with a free PoC. If results don't meet expectations, you haven't lost anything. For full implementations, we offer warranties and support periods. We succeed when you succeed.",
  },
  {
    question: "How is your approach different from other AI agencies?",
    answer: "Three things: 1) We prove value with a free PoC before you commit. 2) We focus on practical ROI, not flashy demos. 3) We're transparent about what AI can and can't do - no overpromising. We also don't fabricate case studies.",
  },
  {
    question: "What ongoing support do you provide after implementation?",
    answer: "We offer tiered support: monitoring & maintenance, performance optimization, model retraining, and 24/7 critical issue support. Most clients opt for a monthly retainer that includes a set number of support hours and updates.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-secondary/30" id="faq" itemScope itemType="https://schema.org/FAQPage">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 border border-primary/20 rounded-full bg-primary/5 mb-6">
            <span className="text-xs sm:text-sm font-medium text-primary tracking-wider uppercase">
              Common Questions
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
            Frequently Asked <span className="font-semibold">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about working with us. Can't find what you're looking for? Reach out to our team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/40 rounded-lg px-6 data-[state=open]:border-primary/30"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger
                  className="text-left font-medium hover:text-primary py-4"
                  itemProp="name"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="text-muted-foreground pb-4 leading-relaxed"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <span itemProp="text">{faq.answer}</span>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
