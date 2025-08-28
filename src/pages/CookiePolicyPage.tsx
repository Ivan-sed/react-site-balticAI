import React from "react";
import { useBookingPopup } from "../hooks";
import {
  Header,
  BreadcrumbsSection,
  CookiePolicySection,
  Footer,
  BookingPopup,
} from "../components";

const CookiePolicyPage: React.FC = () => {
  const { isOpen, openPopup, closePopup, handleFormSubmit } = useBookingPopup();
  
  // Данные для breadcrumbs
  const breadcrumbsData = [
    { text: "Main page", href: "/" },
    { text: "Cookie Policy", href: "/cookie-policy", isCurrent: true },
  ];

  return (
    <div className="page">
      <Header onGetStartedClick={openPopup} />
      <main>
        <BreadcrumbsSection breadcrumbs={breadcrumbsData} />
        <CookiePolicySection />
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

export default CookiePolicyPage;
