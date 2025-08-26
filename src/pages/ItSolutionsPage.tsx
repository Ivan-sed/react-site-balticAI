import React from "react";
import { useBookingPopup } from "../hooks";
import {
  Header,
  Footer,
  IntroSection,
  VisualizationSection,
  ProcessFeaturesSection,
  TransformationSection,
  ProcessSection,
  ConsultationSection,
  ProjectsSection,
  CompanySection,
  BookingPopup,
} from "../components";

const ItSolutionsPage: React.FC = () => {
  const { isOpen, openPopup, closePopup, handleFormSubmit } = useBookingPopup();
  
  const itSolutionsData = {
    intro: {
      title: "Boost Efficiency with Modern IT Solutions",
      description:
        "Repetitive IT tasks and outdated systems waste your team's valuable hours—holding back innovation and growth. Our proven IT solutions help you automate routine operations, secure your data, and support every department as you scale",
      breadcrumbs: [
        { text: "Main page", href: "/" },
        { text: "Services", href: "/services" },
        { text: "AI Automation Solutions", isCurrent: true },
      ],
      stats: [
        {
          number: "01",
          title: "Cut Wasted Time",
          description:
            "IT teams spend up to 35% of their week on manual troubleshooting and upkeep. By automating routine maintenance and monitoring, we free your staff to drive strategic IT projects.",
        },
        {
          number: "02",
          title: "Eliminate System Errors",
          description:
            "Legacy software and patchwork integrations lead to a 5% average error rate in business processes. Our end-to-end modernization delivers seamless, error-free performance—so work just flows.",
        },
      ],
    },
    visualization: {
      title: "Visualize Your AI Transformation in Action",
      topRowCards: [
        {
          id: "rapid-deployment",
          title: "Rapid Deployment",
          description:
            "See how our AI solutions go live in just 10 days, minimizing downtime and accelerating ROI.",
          buttonText: "Book now",
          buttonClassName:
            "it-visualization__rapid-deployment-btn visualization__rapid-deployment-btn",
          onButtonClick: openPopup,
        },
        {
          id: "intuitive-dashboards",
          title: "Intuitive Dashboards",
          description:
            "Monitor performance in real time with user-friendly dashboards that highlight critical metrics at a glance.",
          buttonText: "Book now",
          buttonClassName:
            "it-visualization__dashboards-btn visualization__dashboards-btn",
          onButtonClick: openPopup,
        },
        {
          id: "seamless-integration",
          title: "Seamless Integration",
          description:
            "Experience a plug-and-play setup that connects effortlessly to your existing systems and data sources.",
        },
      ],
      bottomRowCards: [
        {
          id: "scalable-architecture",
          title: "Scalable Architecture",
          description:
            "Our cloud-based design grows with you, handling increasing workloads without additional infrastructure.",
          buttonText: "Get started",
          buttonClassName:
            "it-visualization__scalable-architecture-btn visualization__scalable-architecture-btn",
          onButtonClick: openPopup,
          isLarge: true,
        },
        {
          id: "continuous-improvement",
          title: "Continuous Improvement",
          description:
            "Benefit from automatic updates and A/B testing that refine your AI workflows for sustained performance.",
          buttonText: "Get started",
          buttonClassName:
            "it-visualization__second-get-started-btn visualization__second-get-started-btn",
          onButtonClick: openPopup,
          isLarge: true,
        },
      ],
    },
    processFeatures: {
      title: "Explore the Details. Start Your AI Journey.",
      description:
        "Get a transparent look at the modules powering your transformation. Each block addresses real business needs—security, integration, customization, and performance—so you know exactly what drives your results.",
      mainCards: [
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
      ],
      securityCards: [
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
      ],
    },
    transformation: {
      title: "Start Upgrading Your IT—No Hassle Required",
      description:
        "From initial assessment to ongoing optimization, we ensure your IT transformation is streamlined and result-driven—clear, fast, and focused on your goals.",
      steps: [
        {
          id: "assess-plan",
          title: "Assess & Plan",
          description:
            "We carefully review your IT systems, spot inefficiencies, and develop a no-nonsense improvement roadmap. You get clear, actionable recommendations matched to your business needs.",
        },
        {
          id: "design-prepare",
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
          id: "optimize-support",
          title: "Optimize & Support",
          description:
            "Once live, we track performance, deliver ongoing updates, and provide 24/7 support. Your IT evolves with your business, always efficient and protected.",
        },
      ],
    },
    process: {
      title: "Let's Make IT Work for Your Business",
      description:
        "Тired of constant maintenance and unpredictable downtime? Upgrade to solutions that just work—secure, scalable, and always reliable. With our approach, you streamline every part of your IT, free your team from manual fixes.",
      steps: [
        {
          id: "support-tickets",
          number: "",
          title: "80% fewer support tickets",
          description:
            "Automate routine issues and cut IT headaches. Most clients report a dramatic drop in daily interruptions.",
        },
        {
          id: "faster-response",
          number: "",
          title: "2x faster response",
          description:
            "Critical problems are handled instantly—not in hours or days.",
        },
        {
          id: "seamless-scaling",
          number: "",
          title: "Seamless scaling",
          description:
            "With continuous optimization and lifetime updates, your business achieves 24/7 efficiency and outpaces competitors.",
        },
      ],
    },
    consultation: {
      title: "Ready to Transform Your Business with AI?",
      description:
        "Discover how our AI-driven automation can streamline your operations, reduce costs, and empower your team to focus on strategic growth. Book a personalized consultation to see exactly how our solutions will fit your unique workflows and deliver measurable results.\n\nDuring the session, our experts will walk you through a tailored AI roadmap, demonstrate real-world case studies, and answer any questions about implementation timelines, ROI expectations, and ongoing support. You'll leave with clear next steps and confidence in your business's digital future.",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle:
        "Find quick answers to common questions about our IT solutions, implementation process, and ongoing support.",
      items: [
        {
          id: "implementation-time",
          question: "How long does IT solution ?",
          answer:
            "Most IT infrastructure modernization projects are completed within 2-8 weeks, depending on complexity. We start with critical systems first to minimize business disruption and deliver immediate value while building the complete solution.",
        },
        {
          id: "system-compatibility",
          question: "Will your solutions work ?",
          answer:
            "Yes! Our IT solutions are designed for seamless integration with existing infrastructure. We conduct thorough compatibility assessments and use industry-standard protocols to ensure smooth interoperability with your current systems.",
        },
        {
          id: "security-measures",
          question: "How do you ensure our data ?",
          answer:
            "Security is built into every layer of our IT solutions. We implement enterprise-grade encryption, multi-factor authentication, regular security audits, and compliance with industry standards like SOC 2 and ISO 27001.",
        },
        {
          id: "ongoing-maintenance",
          question: "What ongoing support ?",
          answer:
            "We provide 24/7 monitoring, proactive maintenance, regular system updates, and dedicated technical support. Our managed services ensure your IT infrastructure remains optimized and secure with minimal effort from your team.",
        },
      ],
    },
  };



  const handleConsultationFormSubmit = (data: any) => {
    console.log("Form submitted:", data);
    alert("Thank you for your request! We'll get back to you soon.");
  };

  return (
    <div className="page">
      <Header onGetStartedClick={openPopup} />

      <main>
        <IntroSection
          title={itSolutionsData.intro.title}
          description={itSolutionsData.intro.description}
          breadcrumbs={itSolutionsData.intro.breadcrumbs}
          stats={itSolutionsData.intro.stats}
          onGetStartedClick={openPopup}
          onConsultationClick={openPopup}
        />

        <VisualizationSection
          title={itSolutionsData.visualization.title}
          topRowCards={itSolutionsData.visualization.topRowCards}
          bottomRowCards={itSolutionsData.visualization.bottomRowCards}
          className="it-visualization"
        />

        <ProcessFeaturesSection
          title={itSolutionsData.processFeatures.title}
          description={itSolutionsData.processFeatures.description}
          mainCards={itSolutionsData.processFeatures.mainCards}
          securityCards={itSolutionsData.processFeatures.securityCards}
          className="it-process-features"
          onButtonClick={openPopup}
        />

        <TransformationSection
          title={itSolutionsData.transformation.title}
          description={itSolutionsData.transformation.description}
          steps={itSolutionsData.transformation.steps}
          className="it-transformation"
          onButtonClick={openPopup}
        />

        <ProcessSection
          title={itSolutionsData.process.title}
          description={itSolutionsData.process.description}
          steps={itSolutionsData.process.steps}
          primaryButtonText="Book consultation"
          linkText="Book a demo"
          linkHref="#consultation"
          className="it-process"
          onPrimaryButtonClick={openPopup}
          onLinkClick={openPopup}
        />

        <ConsultationSection
          title={itSolutionsData.consultation.title}
          description={itSolutionsData.consultation.description}
          buttonText="Let's Set Your Appointment"
          formTitle="Book Your Consultation"
          formSubtitle="No fluff. Just a solution for your business automation."
          submitButtonText="Send request"
          className="it-consultation"
          onButtonClick={openPopup}
          onFormSubmit={handleConsultationFormSubmit}
        />

        <ProjectsSection showViewAllButton={true} className="it-portfolio" />

        {/* <CompanySection
          title={itSolutionsData.faq.title}
          subtitle={itSolutionsData.faq.subtitle}
          linkText="Book free consultation"
          linkHref="#consultation"
          aboutText="About us"
          faqItems={itSolutionsData.faq.items}
          className="it-company"
          onLinkClick={openPopup}
        /> */}
      </main>

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

export default ItSolutionsPage;
