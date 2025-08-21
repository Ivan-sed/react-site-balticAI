import React from "react";
import {
  Header,
  Footer,
  IntroSection,
  OfferingsSection,
  AdvantagesSection,
} from "../components";

const AiSolutionsPage: React.FC = () => {
  const breadcrumbs = [
    { text: "Main page", href: "/" },
    { text: "Services", isCurrent: true },
    { text: "AI Automation Solutions", isCurrent: true },
  ];

  const stats = [
    {
      number: "01",
      title: "Rapid Cost Reduction",
      description:
        "Cut operational expenses by 30-40% through intelligent automation",
    },
    {
      number: "02",
      title: "Accelerated Productivity",
      description:
        "Boost team efficiency by 60%+ with AI-driven task optimization",
    },
  ];

  return (
    <div className="page">
      {/* Header */}
      <Header />

      {/* Intro Section */}
      <IntroSection
        title="Transform Your Business Operations with AI-Powered Automation Solutions"
        description="Streamline workflows, reduce operational costs by up to 40%, and boost productivity while your team focuses on strategic growth. Our intelligent automation platform delivers measurable results in just 10 days."
        breadcrumbs={breadcrumbs}
        stats={stats}
      />

      {/* Offerings Section */}
      <OfferingsSection
        title="AI solutions"
        description="Discover how our advanced AI automation tools can streamline your operations, reduce costs, and accelerate growth. Choose the perfect solution tailored to your business needs."
        offerings={[
          {
            id: "ai-solutions",
            title: "AI Сhatbots",
            description:
              "Offering ready-made AI employees and strategic guidance for integrating.",
            isFeatured: true,
            showBadge: true,
            badgeText: "Most popular",
            buttonText: "View more",
            className: "offerings__card--ai-solutions",
          },
          {
            id: "it-solutions",
            title: "AI Аutomation",
            description:
              "Automate and optimize your business processes with AI.",
            isFeatured: false,
            buttonText: "View more",
            className: "offerings__card--it-solutions",
          },
          {
            id: "ai-consultation",
            title: "MCP Systems",
            description:
              "Strategic guidance to plan, scope, and launch AI initiatives tailored to your business.",
            isFeatured: false,
            buttonText: "View more",
            className: "offerings__card--consultation",
          },
        ]}
      />

      {/* Advantages Section */}
      <AdvantagesSection
        title="The Hidden Costs Dragging Your Business Down"
        headerButtonText="Get started today"
        cards={[
          {
            id: "automation",
            type: "automation",
            description: `Every manual process introduces the risk of costly mistakes.

Manual data entry has an average error rate of 4.8%, meaning 1 in every 20 entries contains an error.

These errors don't just require time to fix—they create ripple effects throughout your business, from incorrect orders and shipping delays to dissatisfied customers and damaged reputation.`,
            className: "advantages__card--automation",
          },
          {
            id: "time",
            type: "time",
            description: `Your team loses valuable time to manual, repetitive tasks like data entry and order processing.

These distractions limit focus on growth-driving work. Studies show employees waste at least 30 minutes a day — with the least efficient losing over 3 hours.`,
            statsLabel: "Employees waste time daily",
            className: "advantages__card--time",
          },
          {
            id: "testimonial",
            type: "testimonial",
            description:
              "Delayed approvals hurt business. Deals are 25% less likely to close if decisions take over 48 hours, and slowdowns can cut revenue by up to 20%.",
            testimonialText:
              "Delayed approvals hurt business. Deals are 25% less likely to close if decisions take over 48 hours, and slowdowns can cut revenue by up to 20%.",
            className: "advantages__card--testimonial",
          },
        ]}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AiSolutionsPage;
