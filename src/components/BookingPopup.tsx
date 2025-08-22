import React, { useState, useEffect } from "react";
import "./BookingPopup.css";

interface BookingPopupFormData {
  name: string;
  email: string;
  message: string;
}

interface BookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: BookingPopupFormData) => void;
  title?: string;
  subtitle?: string;
  submitButtonText?: string;
}

const BookingPopup: React.FC<BookingPopupProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title = "Book Your Consultation",
  subtitle = "No fluff. Just a solution for your business automation.",
  submitButtonText = "Send request",
}) => {
  const [formData, setFormData] = useState<BookingPopupFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="booking-popup__overlay" onClick={handleOverlayClick}>
      <div className="booking-popup__container">
        <button
          className="booking-popup__close"
          onClick={onClose}
          aria-label="Close popup"
        >
          ×
        </button>
        
        <div className="booking-popup__content">
          <div className="booking-popup__header">
            <h3 className="booking-popup__title">{title}</h3>
            <p className="booking-popup__subtitle">{subtitle}</p>
          </div>
          
          <form className="booking-popup__form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="booking-popup__input"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="booking-popup__input"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="booking-popup__textarea"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <button
              type="submit"
              className="booking-popup__submit"
            >
              {submitButtonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPopup;
