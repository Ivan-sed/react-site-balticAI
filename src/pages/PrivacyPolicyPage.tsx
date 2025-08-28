import React from "react";
import { useBookingPopup } from "../hooks";
import {
  Header,
  BreadcrumbsSection,
  PrivacyPolicySection,
  Footer,
  BookingPopup,
} from "../components";

const PrivacyPolicyPage: React.FC = () => {
  const { isOpen, openPopup, closePopup, handleFormSubmit } = useBookingPopup();
  
  // Данные для breadcrumbs
  const breadcrumbsData = [
    { text: "Main page", href: "/" },
    { text: "Privacy Policy", href: "/privacy-policy", isCurrent: true },
  ];

  return (
    <div className="page">
      <Header onGetStartedClick={openPopup} />
      <main>
        <BreadcrumbsSection breadcrumbs={breadcrumbsData} />
        <PrivacyPolicySection />
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

export default PrivacyPolicyPage;
