import React from "react";
import { Header, Footer, IntroSection, OfferingsSection } from "../components";

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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AiSolutionsPage;
