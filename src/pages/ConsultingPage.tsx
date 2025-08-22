import React from "react";
import { useBookingPopup } from "../hooks";
import {
  Header,
  Footer,
  ConsultingIntroSection,
  ConsultingMethodologySection,
  ConsultingBenefitsSection,
  ConsultingBookingSection,
  CompanySection,
  BookingPopup,
} from "../components";

const ConsultingPage: React.FC = () => {
  const { isOpen, openPopup, closePopup, handleFormSubmit } = useBookingPopup();
  
  const consultingData = {
    intro: {
      title: "AI Consulting That Drives Real Business Results",
      description:
        "Unlock strategic growth and operational excellence with expert AI consulting tailored to your unique business needs. Our consultants help you navigate the complexities of artificial intelligence, from strategy and data readiness to implementation and optimization, so you achieve measurable impact faster.",
      breadcrumbs: [
        { text: "Home", href: "/" },
        { text: "Services", href: "#services" },
        { text: "Consulting", isCurrent: true },
      ],
      stats: [
        {
          number: "01",
          title: "Tailored Strategy Development",
          description:
            "Align every AI initiative with your long-term business goals. Our approach ensures your investment delivers clear value—for both today’s needs and future opportunities.",
        },
        {
          number: "02",
          title: "Accelerated Deployment & ROI",
          description:
            "Accelerate adoption with proven frameworks, rapid prototyping, and hands-on guidance. Most organizations see ROI within the first 3 months,",
        },
      ],
    },
    methodology: {
      title:
        "Transform Challenges into Opportunities with Expert AI Consulting",
      description:
        "In a rapidly evolving business landscape, knowing how and where to apply AI is just as critical as the technology itself. Our proven consulting framework helps you identify hidden value, implement effective strategies, and build a culture of continuous improvement powered by artificial intelligence.\n\nWith our end-to-end guidance, you'll move from uncertainty to clear, measurable results—faster and with less risk.",
      steps: [
        {
          id: "diagnose",
          number: "01",
          title: "Diagnose and Advise",
          description:
            "We thoroughly assess your business processes and technology stack, revealing inefficiencies, risks, and innovation gaps.",
        },
        {
          id: "design",
          number: "02",
          title: "Design and Enable",
          description:
            "Our team crafts a customized AI roadmap, develops pilot solutions, and provides hands-on mentoring. We train your staff and equip you with the tools and knowledge needed for confident adoption at scale.",
        },
        {
          id: "deliver",
          number: "03",
          title: "Deliver Sustainable Impact",
          description:
            "Enjoy ongoing support, optimization, and strategic reviews to ensure your AI investments keep delivering measurable value. With lifetime updates and proactive consulting, your capabilities evolve ahead of the market.",
        },
      ],
    },
    benefits: {
      title: "Consulting Blind Spots: The Hidden Costs You Can't Ignore",
      cards: [
        {
          id: "time-savings",
          type: "time" as const,
          description:
            "Your business loses resources when decisions rely on intuition, not data. Without expert guidance, teams waste hours debating priorities or duplicating effort—often missing out on the biggest growth opportunities.<br /><br />Studies show that, on average, management spends over 1 hour per day on unclear decision-making, while the least efficient teams can lose up to 4 hours daily.",
          statsLabel: "Executives lose time daily",
        },
        {
          id: "automation-risk",
          type: "automation" as const,
          description:
            "Each unaligned project introduces risk—costly overruns, missed deadlines, and fragmented outcomes.<br /><br />Research shows that 36% of AI and digital investments fail to deliver intended value due to poor planning and unclear ROI.<br /><br />Every weak spot in strategy or process leads to ripple effects: wasted budgets, stalled innovation, and loss of internal credibility.",
        },
        {
          id: "market-shift",
          type: "testimonial" as const,
          description:
            "Companies without external expertise are 2x more likely to miss critical market shifts, and 29% report losing deals due to delayed project pivots or approvals. In fast-moving industries, inefficiency isn't just expensive—it's a strategic risk.",
        },
      ],
    },
    booking: {
      title: "Start Your AI Consulting Journey",
      description:
        "Unlock new opportunities with professional AI consulting designed for your unique challenges. Schedule your session to discover actionable strategies, tailored recommendations, and a clear next step for accelerating your business results.\n\nIn your consultation, our specialists will map out a strategic AI adoption plan, answer your toughest questions, and show proven examples relevant to your industry. You'll leave with clarity, confidence, and a concrete roadmap to move forward—backed by ongoing expert support.",
    },
  };

  const handleConsultingFormSubmit = (data: any) => {
    console.log("Form submitted:", data);
    // Here you would handle the form submission
    alert("Thank you for your request! We'll get back to you soon.");
  };

  return (
    <div className="page">
      {/* Header */}
      <Header onGetStartedClick={openPopup} />

      <main>
        <ConsultingIntroSection
          title={consultingData.intro.title}
          description={consultingData.intro.description}
          breadcrumbs={consultingData.intro.breadcrumbs}
          stats={consultingData.intro.stats}
          primaryButtonText="Book Consultation"
          linkText="See client stories"
          linkHref="#client-stories"
          onPrimaryButtonClick={openPopup}
          onLinkClick={openPopup}
        />

        <ConsultingMethodologySection
          title={consultingData.methodology.title}
          description={consultingData.methodology.description}
          steps={consultingData.methodology.steps}
          primaryButtonText="Start Your Consultation"
          linkText="Talk to an Expert"
          linkHref="#expert-consultation"
          onPrimaryButtonClick={openPopup}
          onLinkClick={openPopup}
        />

        <ConsultingBenefitsSection
          title={consultingData.benefits.title}
          cards={consultingData.benefits.cards}
          headerButtonText="Get started today"
          onHeaderButtonClick={openPopup}
        />

        <ConsultingBookingSection
          title={consultingData.booking.title}
          description={consultingData.booking.description}
          buttonText="Book My Strategy Session"
          formTitle="Book Your Consultation"
          formSubtitle="No fluff. Just a solution for your business automation."
          submitButtonText="Send request"
          onButtonClick={openPopup}
          onFormSubmit={handleConsultingFormSubmit}
        />

        {/* Company Section (FAQ) */}
        <CompanySection
          title="Frequently Asked Questions"
          subtitle="Find quick answers to common questions about our AI consulting services, methodology, and support process."
          linkText="Book free consultation"
          linkHref="#consulting-booking"
          aboutText="About us"
          onLinkClick={openPopup}
          faqItems={[
            {
              id: "consulting-duration",
              question: "How long does the consulting ?",
              answer:
                "Our consulting engagements typically range from 2-12 weeks depending on your project scope and complexity. We start with a comprehensive assessment phase (1-2 weeks), followed by strategy development and implementation planning. Most clients see initial recommendations within the first week.",
            },
            {
              id: "consulting-approach",
              question: "What makes your consulting?",
              answer:
                "We combine deep technical AI expertise with practical business acumen. Our consultants don't just provide theoretical advice—we deliver actionable roadmaps, hands-on implementation guidance, and ongoing support to ensure your AI initiatives deliver measurable business value.",
            },
            {
              id: "industry-experience",
              question: "Do you have experience ?",
              answer:
                "Yes! Our consulting team has worked across diverse industries including healthcare, finance, manufacturing, retail, and professional services. We adapt our proven methodologies to your specific industry challenges and regulatory requirements.",
            },
            {
              id: "roi-expectations",
              question: "What ROI can I expect ?",
              answer:
                "Most of our clients see positive ROI within 3-6 months of implementation. Typical benefits include 30-50% reduction in manual processes, 20-40% improvement in decision-making speed, and 15-25% increase in operational efficiency. We help you set realistic expectations and measure progress throughout the engagement.",
            },
          ]}
        />
      </main>

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

export default ConsultingPage;
