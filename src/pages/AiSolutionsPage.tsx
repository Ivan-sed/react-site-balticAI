import React from "react";
import { useBookingPopup } from "../hooks";
import {
  Header,
  Footer,
  IntroSection,
  OfferingsSection,
  AdvantagesSection,
  ProcessSection,
  TransformationSection,
  VisualizationSection,
  ConsultationSection,
  ProcessFeaturesSection,
  ProjectsSection,
  BookingPopup,
} from "../components";

const AiSolutionsPage: React.FC = () => {
  const { isOpen, openPopup, closePopup, handleFormSubmit } = useBookingPopup();
  
  const breadcrumbs = [
    { text: "Main page", href: "/" },
    { text: "Services", href: "/services" },
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
      <Header onGetStartedClick={openPopup} />

      {/* Intro Section */}
      <IntroSection
        title="Transform Your Business Operations with AI-Powered Automation Solutions"
        description="Streamline workflows, reduce operational costs by up to 40%, and boost productivity while your team focuses on strategic growth. Our intelligent automation platform delivers measurable results in just 10 days."
        breadcrumbs={breadcrumbs}
        stats={stats}
        onGetStartedClick={openPopup}
        onConsultationClick={openPopup}
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
        onHeaderButtonClick={openPopup}
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
         onPrimaryButtonClick={openPopup}
         onLinkClick={openPopup}
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
         onButtonClick={openPopup}
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
            onButtonClick: openPopup,
          },
          {
            id: "intuitive-dashboards",
            title: "Intuitive Dashboards",
            description:
              "Monitor performance in real time with user-friendly dashboards that highlight critical metrics at a glance.",
            buttonText: "Book now",
            buttonClassName: "visualization__dashboards-btn",
            onButtonClick: openPopup,
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
            onButtonClick: openPopup,
          },
          {
            id: "continuous-improvement",
            title: "Continuous Improvement",
            description:
              "Benefit from automatic updates and A/B testing that refine your AI workflows for sustained performance.",
            buttonText: "Get started",
            buttonClassName: "visualization__second-get-started-btn",
            isLarge: true,
            onButtonClick: openPopup,
          },
        ]}
      />

      {/* Consultation Section */}
      <ConsultationSection
        title="Ready to Transform Your Business with AI?"
        description={`Discover how our AI-driven automation can streamline your operations, reduce costs, and empower your team to focus on strategic growth. Book a personalized consultation to see exactly how our solutions will fit your unique workflows and deliver measurable results.

During the session, our experts will walk you through a tailored AI roadmap, demonstrate real-world case studies, and answer any questions about implementation timelines, ROI expectations, and ongoing support. You'll leave with clear next steps and confidence in your business's digital future.`}
        buttonText="Let's Set Your Appointment"
        formTitle="Book Your Consultation"
        formSubtitle="No fluff. Just a solution for your business automation."
        submitButtonText="Send request"
        onButtonClick={openPopup}
        onFormSubmit={(data) => {
          console.log("Form submitted:", data);
          // Здесь можно добавить обработку отправки формы
        }}
      />

      {/* Process Features Section */}
      <ProcessFeaturesSection
        title="Explore the Details. Start Your AI Journey."
        description="Get a transparent look at the modules powering your transformation. Each block addresses real business needs—security, integration, customization, and performance—so you know exactly what drives your results."
        buttonText="Get Started"
         onButtonClick={openPopup}
        mainCards={[
          {
            id: "features-integrations",
            title: "Features & Integrations",
            description:
              "Seamlessly connect with your current systems using our flexible APIs and modular features. New capabilities can be added without disruption.",
          },
          {
            id: "use-case-stories",
            title: "Use-Case Stories",
            description:
              "See real-world examples from healthcare, travel, and e-commerce. Each story highlights challenges solved and measurable results.",
          },
        ]}
        securityCards={[
          {
            id: "security-compliance",
            title: "Security & Compliance",
            description:
              "Our solutions meet strict GDPR and ISO standards, with regular audits to protect your data and ensure compliance.",
          },
          {
            id: "tech-stack-performance",
            title: "Tech Stack & Performance",
            description:
              "Built on leading frameworks for speed and reliability, our AI delivers 99.9% uptime and instant response—even at scale.",
          },
        ]}
      />

      {/* Portfolio Section (Projects) */}
      <ProjectsSection showViewAllButton={true} className="portfolio" />

      {/* Company Section (FAQ) */}
      {/* <CompanySection
         title="Frequently Asked Questions"
         subtitle="Find quick answers to common questions about our AI solutions, implementation process, and ongoing support."
         linkText="Book free consultation"
         linkHref="#consultation"
         aboutText="About us"
         onLinkClick={openPopup}
        faqItems={[
          {
            id: "setup-speed",
            question: "How fast is setup?",
            answer:
              "Most of our AI solutions are fully implemented and operational within just 10 days. The process includes initial assessment, customization to your business needs, seamless integration with your existing systems, and thorough testing to ensure everything works smoothly from day one.",
          },
          {
            id: "data-security",
            question: "Is my data secure?",
            answer:
              "Our diverse team of experts includes AI specialists, developers, consultants, and industry veterans who bring their unique perspectives and skills to every project.",
          },
          {
            id: "customization",
            question: "Can I customize features?",
            answer:
              "Absolutely! We understand that every business has unique needs. Our AI solutions are designed to be flexible and customizable, allowing you to tailor features and functionalities to align perfectly with your specific requirements.",
          },
          {
            id: "ongoing-support",
            question: "Do you offer ongoing support?",
            answer:
              "Absolutely! We provide comprehensive ongoing support to ensure your AI solutions continue to meet your evolving business needs. Our team is always available to assist you with any questions or challenges you may encounter.",
          },
        ]}
      /> */}

      {/* Footer */}
      <Footer />
      
      {/* Booking Popup */}
      <BookingPopup 
        isOpen={isOpen} 
        onClose={closePopup} 
        onSubmit={handleFormSubmit} 
      />
    </div>
  );
};

export default AiSolutionsPage;
