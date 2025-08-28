import React from "react";
import { useBookingPopup } from "../hooks";
import {
  Header,
  BreadcrumbsSection,
  TermsOfUseSection,
  Footer,
  BookingPopup,
} from "../components";

const TermsOfUsePage: React.FC = () => {
  const { isOpen, openPopup, closePopup, handleFormSubmit } = useBookingPopup();
  
  // Данные для breadcrumbs
  const breadcrumbsData = [
    { text: "Main page", href: "/" },
    { text: "Terms of Use", href: "/terms-of-use", isCurrent: true },
  ];

  return (
    <div className="page">
      <Header onGetStartedClick={openPopup} />
      <main>
        <BreadcrumbsSection breadcrumbs={breadcrumbsData} />
        <TermsOfUseSection />
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

export default TermsOfUsePage;
