import React from "react";
import {
  Header,
  Footer,
  IntroSection,
  OfferingsSection,
  AdvantagesSection,
  ProcessSection,
  TransformationSection,
  VisualizationSection,
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

      {/* Process Section */}
      <ProcessSection
        title="Overcome Operational Challenges with AI"
        description={`In today's fast-paced business environment, manual processes and repetitive tasks not only eat up valuable time but also hinder innovation and growth.

Our three-step, AI-first methodology pinpoints these inefficiencies, implements intelligent automation to resolve them swiftly, and continuously refines your workflows to ensure sustainable, long-term performance gains.`}
        primaryButtonText="Get AI MVP"
        linkText="Book demo"
        linkHref="#"
        steps={[
          {
            id: "identify",
            number: "01",
            title: "Identify the Bottleneck",
            description:
              "Your team wastes countless hours on repetitive, manual tasks that drain productivity and morale",
          },
          {
            id: "automate",
            number: "02",
            title: "Automate and Resolve",
            description:
              "We implement intelligent automation and AI-driven workflows to eliminate these bottlenecks in just 10 days.",
          },
          {
            id: "scale",
            number: "03",
            title: "Scale for Lasting Impact",
            description:
              "With continuous optimization and lifetime updates, your business achieves 24/7 efficiency and outpaces competitors.",
          },
        ]}
      />

      {/* Transformation Section */}
      <TransformationSection
        title="Start Upgrading Your IT—No Hassle Required"
        description="From initial assessment to ongoing optimization, we ensure your IT transformation is streamlined and result-driven—clear, fast, and focused on your goals."
        buttonText="Book consultation"
        steps={[
          {
            id: "assess",
            title: "Assess & Plan",
            description:
              "We carefully review your IT systems, spot inefficiencies, and develop a no-nonsense improvement roadmap. You get clear, actionable recommendations matched to your business needs.",
          },
          {
            id: "design",
            title: "Design & Prepare",
            description:
              "Our team creates tailored IT solutions, considering security, compatibility, and your unique workflows. Every system is planned for smooth integration—no technical guesswork, just practical design.",
          },
          {
            id: "implement",
            title: "Implement",
            description:
              "We deploy upgrades and new tools with zero disruption. All integration is managed by our experts, so you experience instant benefits—greater speed, security, and stability—right away.",
          },
          {
            id: "optimize",
            title: "Optimize & Support",
            description:
              "Once live, we track performance, deliver ongoing updates, and provide 24/7 support. Your IT evolves with your business, always efficient and protected.",
          },
        ]}
      />

      {/* Visualization Section */}
      <VisualizationSection
        title="Visualize Your AI Transformation in Action"
        topRowCards={[
          {
            id: "rapid-deployment",
            title: "Rapid Deployment",
            description:
              "See how our AI solutions go live in just 10 days, minimizing downtime and accelerating ROI.",
            buttonText: "Book now",
            buttonClassName: "visualization__rapid-deployment-btn",
          },
          {
            id: "intuitive-dashboards",
            title: "Intuitive Dashboards",
            description:
              "Monitor performance in real time with user-friendly dashboards that highlight critical metrics at a glance.",
            buttonText: "Book now",
            buttonClassName: "visualization__dashboards-btn",
          },
          {
            id: "seamless-integration",
            title: "Seamless Integration",
            description:
              "Experience a plug-and-play setup that connects effortlessly to your existing systems and data sources.",
          },
        ]}
        bottomRowCards={[
          {
            id: "scalable-architecture",
            title: "Scalable Architecture",
            description:
              "Our cloud-based design grows with you, handling increasing workloads without additional infrastructure.",
            buttonText: "Get started",
            buttonClassName: "visualization__scalable-architecture-btn",
            isLarge: true,
          },
          {
            id: "continuous-improvement",
            title: "Continuous Improvement",
            description:
              "Benefit from automatic updates and A/B testing that refine your AI workflows for sustained performance.",
            buttonText: "Get started",
            buttonClassName: "visualization__second-get-started-btn",
            isLarge: true,
          },
        ]}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AiSolutionsPage;
