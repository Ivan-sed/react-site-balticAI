import { useState, useCallback } from "react";

interface BookingPopupFormData {
  name: string;
  email: string;
  message: string;
}

export const useBookingPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleFormSubmit = useCallback((data: BookingPopupFormData) => {
    // Here you can add logic to handle form submission
    // For example, send data to an API
    console.log("Booking form submitted:", data);
    
    // You can add your API call here
    // Example:
    // try {
    //   await submitBookingForm(data);
    //   // Show success message
    // } catch (error) {
    //   // Handle error
    //   console.error("Failed to submit booking form:", error);
    // }
  }, []);

  return {
    isOpen,
    openPopup,
    closePopup,
    handleFormSubmit,
  };
};
