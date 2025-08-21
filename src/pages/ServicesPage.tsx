import React from "react";
import {
  Header,
  BreadcrumbsSection,
  SolutionsSection,
  ProjectsSection,
  TestimonialsSection,
  Footer,
} from "../components";

const ServicesPage: React.FC = () => {
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
      buttonText: "Book now",
    },
    {
      id: "2",
      type: "it-solutions" as const,
      title: "IT Solutions for Digital Excellence",
      description:
        "Find out how digital solutions can streamline your processes and open up new opportunities. Head to our in-depth page for insights, case studies, and a step-by-step guide to digital transformation.",
      buttonText: "Book now",
    },
    {
      id: "3",
      type: "consultation" as const,
      title: "Consulting Services for Lasting Impact",
      description:
        "Curious about simplifying your IT and reducing routine work? Visit our dedicated page to discover strategies, tools, and real results that help teams focus on what matters most.",
      buttonText: "Book now",
    },
  ];

  return (
    <div className="page">
      <Header />
      <main>
        <BreadcrumbsSection breadcrumbs={breadcrumbsData} />
        <SolutionsSection solutions={solutionsData} />
        <ProjectsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
