import React from "react";
import { useNavigate } from "react-router-dom";
import { useBookingPopup } from "../hooks";
import {
  Header,
  BreadcrumbsSection,
  SolutionsSection,
  ProjectsSection,
  TestimonialsSection,
  Footer,
  BookingPopup,
} from "../components";

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const { isOpen, openPopup, closePopup, handleFormSubmit } = useBookingPopup();
  
  // Данные для breadcrumbs
  const breadcrumbsData = [
    { text: "Main page", href: "/" },
    { text: "Services", href: "/services", isCurrent: true },
  ];

  // Данные для решений
  const solutionsData = [
    {
      id: "1",
      type: "featured" as const,
      title: "AI Solutions for Business Growth",
      description:
        "Want to learn more about how artificial intelligence can drive growth and innovation in your company? Visit our detailed page to explore real-world examples, benefits, and practical steps for implementing AI-first strategies.",
      buttonText: "View more",
      onButtonClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/ai-solutions");
        setTimeout(() => window.scrollTo(0, 0), 100);
      },
    },
    {
      id: "2",
      type: "it-solutions" as const,
      title: "IT Solutions for Digital Excellence",
      description:
        "Find out how digital solutions can streamline your processes and open up new opportunities. Head to our in-depth page for insights, case studies, and a step-by-step guide to digital transformation.",
      buttonText: "View more",
      onButtonClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/it-solutions");
        setTimeout(() => window.scrollTo(0, 0), 100);
      },
    },
    {
      id: "3",
      type: "consultation" as const,
      title: "Consulting Services for Lasting Impact",
      description:
        "Curious about simplifying your IT and reducing routine work? Visit our dedicated page to discover strategies, tools, and real results that help teams focus on what matters most.",
      buttonText: "View more",
      onButtonClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/consulting");
        setTimeout(() => window.scrollTo(0, 0), 100);
      },
    },
  ];

  return (
    <div className="page">
      <Header onGetStartedClick={openPopup} />
      <main>
        <BreadcrumbsSection breadcrumbs={breadcrumbsData} />
        <SolutionsSection solutions={solutionsData} />
        <ProjectsSection />
        <TestimonialsSection />
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

export default ServicesPage;
