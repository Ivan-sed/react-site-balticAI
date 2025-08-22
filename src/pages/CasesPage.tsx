import React from "react";
import { useBookingPopup } from "../hooks";
import {
  Header,
  BreadcrumbsSection,
  CasesSection,
  Footer,
  BookingPopup,
} from "../components";
import projectLogo from "../assets/images/project-logo.png";

const CasesPage: React.FC = () => {
  const { isOpen, openPopup, closePopup, handleFormSubmit } = useBookingPopup();
  
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
      linkHref: "/cases/1",
    },
    {
      id: "2",
      category: "Name Category",
      title: "Project 1",
      imageUrl: projectLogo,
      linkHref: "/cases/2",
    },
    {
      id: "3",
      category: "Name Category",
      title: "Project 1",
      imageUrl: projectLogo,
      linkHref: "/cases/3",
    },
    {
      id: "4",
      category: "Name Category",
      title: "Project 1",
      imageUrl: projectLogo,
      linkHref: "/cases/4",
    },
    {
      id: "5",
      category: "Name Category",
      title: "Project 1",
      imageUrl: projectLogo,
      linkHref: "/cases/5",
    },
    {
      id: "6",
      category: "Name Category",
      title: "Project 1",
      imageUrl: projectLogo,
      linkHref: "/cases/6",
    },
  ];

  return (
    <div className="page">
      <Header onGetStartedClick={openPopup} />
      <main>
        <BreadcrumbsSection breadcrumbs={breadcrumbsData} />
        <CasesSection cases={casesData} />
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

export default CasesPage;
