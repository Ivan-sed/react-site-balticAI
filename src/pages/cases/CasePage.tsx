import React from "react";
import { useParams } from "react-router-dom";
import { useBookingPopup } from "../../hooks";
import {
  Header,
  BreadcrumbsSection,
  CaseDetailsSection,
  ConsultationSection,
  Footer,
  BookingPopup,
} from "../../components";

// Импорты изображений
import casesLogoPlaceholder from "../../assets/images/cases-logo-placeholder.png";
import casesImgFirst from "../../assets/images/cases-img-first.png";
import casesImgSecond from "../../assets/images/cases-img-second.png";
import casesImgThird from "../../assets/images/cases-img-third.png";

const CasePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isOpen, openPopup, closePopup, handleFormSubmit } = useBookingPopup();

  // Данные для breadcrumbs
  const breadcrumbsData = [
    { text: "Main page", href: "/" },
    { text: "Cases", href: "/cases" },
    { text: "AutoScout24 AI", href: `/cases/${id}`, isCurrent: true },
  ];

  // Данные кейса
  const caseData = {
    title: "AutoScout24 AI",
    description:
      "Custom-made calculator that takes data from AutoScout24.com and calculates transport costs by using AI to determine if the car is an SUV, sports car, etc., and also can generate PDFs.",
    metrics: [
      { title: "Service", value: "Digital Transformation" },
      { title: "Industries", value: "E-Commerce" },
      { title: "Time saved", value: "34%" },
    ],
    logoUrl: casesLogoPlaceholder,
    companyDescription: {
      title: "What is company doing ?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imageUrl: casesImgFirst,
    },
    solution: {
      title: "The Solution",
      text: "• Manual warehouse processes limiting fulfillment speed and accuracy\n• Lack of centralized data and analytics for business decision-making\n• Time-consuming supply chain coordination",
      imageUrl: casesImgSecond,
    },
    benefits: {
      title: "The Benefits",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      metrics: [
        { number: "34%", title: "Time saved" },
        { number: "34%", title: "Time saved" },
        { number: "34%", title: "Time saved" },
      ],
    },
    finalImageUrl: casesImgThird,
  };

  return (
    <div className="page">
      <Header onGetStartedClick={openPopup} />
      <main>
        <BreadcrumbsSection breadcrumbs={breadcrumbsData} />
        <CaseDetailsSection {...caseData} />
        <ConsultationSection onButtonClick={openPopup} />
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

export default CasePage;
