import React from "react";
import {
  Header,
  BreadcrumbsSection,
  CasesSection,
  Footer,
} from "../components";
import projectLogo from "../assets/images/project-logo.png";

const CasesPage: React.FC = () => {
  // Данные для breadcrumbs
  const breadcrumbsData = [
    { text: "Main page", href: "/" },
    { text: "Cases", href: "/cases", isCurrent: true },
  ];

  // Данные для кейсов
  const casesData = [
    {
      id: "1",
      category: "Name Category",
      title: "Project 1",
      imageUrl: projectLogo,
      linkHref: "#",
    },
    {
      id: "2",
      category: "Name Category",
      title: "Project 1",
      imageUrl: projectLogo,
      linkHref: "#",
    },
    {
      id: "3",
      category: "Name Category",
      title: "Project 1",
      imageUrl: projectLogo,
      linkHref: "#",
    },
    {
      id: "4",
      category: "Name Category",
      title: "Project 1",
      imageUrl: projectLogo,
      linkHref: "#",
    },
    {
      id: "5",
      category: "Name Category",
      title: "Project 1",
      imageUrl: projectLogo,
      linkHref: "#",
    },
    {
      id: "6",
      category: "Name Category",
      title: "Project 1",
      imageUrl: projectLogo,
      linkHref: "#",
    },
  ];

  return (
    <div className="page">
      <Header />
      <main>
        <BreadcrumbsSection breadcrumbs={breadcrumbsData} />
        <CasesSection cases={casesData} />
      </main>
      <Footer />
    </div>
  );
};

export default CasesPage;
